"""
Derives the web-ready brand assets from the master artwork in `public/`.

The masters are large, mostly-empty transparent PNGs (a 2048px canvas with the
character sitting in the middle of it). Dropped straight into a layout they
render tiny and cost megabytes, so each one is trimmed to its alpha bounding
box, padded slightly so the ink outline and drop shadow never clip, and written
out at a size that covers 3x retina for the largest place it is used.

Re-run after replacing any master:  python scripts/build-brand-assets.py
"""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"

# Mascot name -> master file. The pairing follows the colour tokens in
# globals.css: roundy is coral, squarey is green, starry is sun, hexy is sky.
MASCOTS = {
    "rolly": "red face.png",
    "squary": "light green shape.png",
    "starry": "Star face.png",
    "hexy": "Blue face.png",
}

# Master -> (output path, longest edge in px)
LOGOS = {
    "Logo 2 png.png": ("images/brand/olo-logo.png", 1200),
    "Logo 1 png.png": ("images/brand/olo-globe.png", 900),
    "all face shapes.png": ("images/brand/olo-cast.png", 1200),
}

MASCOT_EDGE = 720
PAD_RATIO = 0.03

# The full banner is 1.9:1 with the cast taking the lower half, so at a 64px
# nav height the words shrink to nothing. The wordmark lockup is the signboard
# on its own — 2.7:1, with only the tops of the cast peeking in along the
# bottom edge, which keeps the characters present without costing legibility.
# Measured against `images/brand/olo-logo.png` at 1200x643.
WORDMARK_CROP = (88, 12, 1020, 352)


def trim_to_ink(im: Image.Image) -> Image.Image:
    """Crop to the visible artwork, keeping a small transparent margin."""
    im = im.convert("RGBA")
    box = im.getchannel("A").getbbox()
    if box is None:
        return im
    left, top, right, bottom = box
    pad = round(max(right - left, bottom - top) * PAD_RATIO)
    return im.crop(
        (
            max(left - pad, 0),
            max(top - pad, 0),
            min(right + pad, im.width),
            min(bottom + pad, im.height),
        )
    )


def fit(im: Image.Image, edge: int) -> Image.Image:
    """Scale down so the longest side is `edge`. Never scales up."""
    if max(im.size) <= edge:
        return im
    im = im.copy()
    im.thumbnail((edge, edge), Image.LANCZOS)
    return im


def emit(im: Image.Image, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, optimize=True)
    webp = dest.with_suffix(".webp")
    im.save(webp, format="WEBP", quality=92, method=6)
    print(f"  {dest.relative_to(PUBLIC)}  {im.size[0]}x{im.size[1]}"
          f"  png {dest.stat().st_size // 1024}KB / webp {webp.stat().st_size // 1024}KB")


def main() -> None:
    print("mascots")
    for name, src in MASCOTS.items():
        art = fit(trim_to_ink(Image.open(PUBLIC / src)), MASCOT_EDGE)
        emit(art, PUBLIC / "images" / "mascots" / f"{name}.png")

    print("brand")
    for src, (rel, edge) in LOGOS.items():
        art = fit(trim_to_ink(Image.open(PUBLIC / src)), edge)
        emit(art, PUBLIC / rel)

    banner = Image.open(PUBLIC / "images" / "brand" / "olo-logo.png").convert("RGBA")
    emit(banner.crop(WORDMARK_CROP), PUBLIC / "images" / "brand" / "olo-wordmark.png")

    # The nav and footer both point at /olo-logo.png, and the copy that ships
    # there today is a washed-out 942px raster. Refresh it in place from the
    # master so those call sites get the sharp artwork without a code change.
    logo = fit(trim_to_ink(Image.open(PUBLIC / "Logo 2 png.png")), 1200)
    logo.save(PUBLIC / "olo-logo.png", optimize=True)
    print(f"  olo-logo.png  {logo.size[0]}x{logo.size[1]}"
          f"  {(PUBLIC / 'olo-logo.png').stat().st_size // 1024}KB")


if __name__ == "__main__":
    main()
