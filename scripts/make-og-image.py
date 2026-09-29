"""Generate the social share image at public/assets/selsu-og.png.

Uses the same six colours as public/assets/selsu-logo.svg.
Run from the project root:  python scripts/make-og-image.py
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "assets" / "selsu-og.png"

W, H = 1200, 630
INK = (15, 28, 48)
MUTED = (102, 122, 148)
BLUE = (37, 99, 235)
SQUARES = [
    (37, 99, 235),
    (30, 58, 95),
    (20, 184, 166),
    (134, 168, 115),
    (245, 197, 66),
    (240, 122, 110),
]

FONT_DIR = Path("C:/Windows/Fonts")


def font(names: list[str], size: int) -> ImageFont.FreeTypeFont:
    for name in names:
        path = FONT_DIR / name
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


BOLD = ["seguisb.ttf", "arialbd.ttf", "segoeuib.ttf"]
BLACK = ["seguibl.ttf", "ariblk.ttf", "arialbd.ttf"]
BOOK = ["segoeui.ttf", "arial.ttf"]


def wrap(draw, text, fnt, max_width):
    lines, line = [], []
    for word in text.split():
        trial = " ".join(line + [word])
        if draw.textlength(trial, font=fnt) <= max_width or not line:
            line.append(word)
        else:
            lines.append(" ".join(line))
            line = [word]
    if line:
        lines.append(" ".join(line))
    return lines


def main() -> None:
    img = Image.new("RGB", (W, H), (255, 255, 255))
    d = ImageDraw.Draw(img)

    # Soft brand wash in the top-right corner.
    wash = Image.new("RGB", (W, H), (255, 255, 255))
    ImageDraw.Draw(wash).ellipse((W - 520, -320, W + 220, 400), fill=(238, 244, 255))
    img = Image.blend(img, wash, 0.85)
    d = ImageDraw.Draw(img)

    x0, y0 = 88, 74
    # The six-square mark, scaled up from the logo geometry.
    sw, sh, gap_x, gap_y, radius = 40, 31, 8, 9, 10
    for i, colour in enumerate(SQUARES):
        col, row = i % 2, i // 2
        x = x0 + col * (sw + gap_x)
        y = y0 + row * (sh + gap_y)
        d.rounded_rectangle((x, y, x + sw, y + sh), radius=radius, fill=colour)

    d.text((x0 + 2 * (sw + gap_x) + 22, y0 + 24), "SELSU", font=font(BOLD, 72), fill=BLUE)

    headline = "Software for your business, campus and everything in between."
    f_head = font(BLACK, 58)
    y = 268
    for line in wrap(d, headline, f_head, W - 176):
        d.text((88, y), line, font=f_head, fill=INK)
        y += 70

    f_sub = font(BOOK, 30)
    d.text(
        (88, y + 18),
        "Custom Software · College · Placement · Services",
        font=f_sub,
        fill=MUTED,
    )

    # Contact strip along the bottom.
    d.rectangle((0, H - 78, W, H), fill=(247, 249, 252))
    d.line((0, H - 78, W, H - 78), fill=(227, 233, 241), width=2)
    d.text((88, H - 56), "selsu.com", font=font(BOLD, 30), fill=BLUE)
    d.text((260, H - 55), "+91 86672 38643  ·  hello@selsu.com", font=font(BOOK, 28), fill=MUTED)

    img.save(OUT, "PNG", optimize=True)
    print(f"wrote {OUT.relative_to(ROOT)} ({OUT.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
