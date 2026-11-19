---
name: simopzz.com
description: A hand-made engineering zine page, in black marker on graph paper with three flat highlighters.
colors:
  paper: "#fdfdfc"
  ink: "#1d1d1f"
  ink-soft: "#4c4c52"
  grid: "#e4ecf6"
  yellow: "#ffe45c"
  pink: "#ff9ecb"
  pink-ink: "#c4206f"
  teal: "#7fe0d0"
typography:
  display:
    fontFamily: "Caveat Brush, Shantell Sans, cursive"
    fontSize: "clamp(3rem, 9vw, 6rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Caveat Brush, Shantell Sans, cursive"
    fontSize: "clamp(2.8rem, 7vw, 5rem)"
    fontWeight: 400
    lineHeight: 1.05
  headline-section:
    fontFamily: "Caveat Brush, Shantell Sans, cursive"
    fontSize: "clamp(2.2rem, 5vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1.05
  title:
    fontFamily: "Caveat Brush, Shantell Sans, cursive"
    fontSize: "clamp(1.15rem, 2vw, 1.5rem)"
    fontWeight: 600
  body:
    fontFamily: "Shantell Sans, Comic Neue, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.6
  body-lead:
    fontFamily: "Shantell Sans, Comic Neue, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Caveat Brush, Shantell Sans, cursive"
    fontSize: "1rem"
    fontWeight: 400
  caption:
    fontFamily: "Caveat Brush, Shantell Sans, cursive"
    fontSize: "0.95rem"
    fontWeight: 400
  action:
    fontFamily: "Shantell Sans, Comic Neue, sans-serif"
    fontSize: "clamp(1.2rem, 2.2vw, 1.65rem)"
    fontWeight: 700
  meta:
    fontFamily: "Shantell Sans, Comic Neue, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
  kanji:
    fontFamily: "M PLUS 1p Kanji, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 400
    letterSpacing: "0.12em"
rounded:
  hand-pill: "255px 15px 225px 15px / 15px 225px 15px 255px"
  hand-panel: "6px 14px 8px 18px"
spacing:
  page-gutter: "clamp(18px, 4vw, 64px)"
  section: "clamp(56px, 8vw, 110px)"
  section-close: "clamp(72px, 10vw, 150px)"
  grid-cell: "26px"
components:
  button-copy:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.hand-pill}"
    padding: "0.3em 0.9em"
    width: "5.2em"
  button-copy-done:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
  mailbox:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    padding: "1rem 1.4rem"
  panel:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.hand-panel}"
    padding: "clamp(14px, 2vw, 26px)"
  link:
    textColor: "{colors.ink}"
---

# Design System: simopzz.com

## Overview

**Creative North Star: "The Marker Zine"**

One engineer explaining their systems the way they would sketch them for a colleague: white paper with a faint blue graph grid, black marker ink, and three flat highlighters. Everything that carries a voice (headings, asides, captions, drawing labels, the copy button) is hand-lettered in Caveat Brush; everything meant to be read at length is set in Shantell Sans, a handwriting face that stays legible in paragraphs. Linework is drawn as SVG and roughened by a displacement filter, so boxes, arrows, ticks and diagrams all wobble the same way.

The page is left-aligned and unhurried. There are no cards, no shadows, no gradients other than highlighter strokes, and no colour fills apart from the three highlighters and the paper. Depth comes from ink sitting on paper and nothing else. Headings tilt slightly, as if written by hand, and highlighter swipes sit behind them.

The system refuses the polished hero-plus-cards portfolio and the costume of a technical artifact (title blocks, zone grids, sheet numbering, a dark terminal). It is a hand-drawn page, not a mock blueprint.

**Key Characteristics:**
- Graph-paper ground: a 26px blue grid on near-white paper, across the whole page.
- Two hand faces: Caveat Brush for lettering, Shantell Sans for reading.
- Three flat highlighters (yellow, pink, teal), each with one job.
- Hand-wobbled SVG linework through two shared displacement filters.
- Slight rotations on headings, asides and hovered buttons; never on reading text.
- Motion is a one-time reveal (highlighters swipe in, sketches draw themselves) and is skipped entirely under reduced motion.

## Colors

Black marker on white graph paper, with three flat highlighter colours that never mix with each other on one mark.

### Primary
- **Highlighter Yellow** (#ffe45c): the link colour. It is the underline stroke under every link, which fills the whole word on hover; it is the swipe behind the name; it is the text selection; and it is the copy button's confirmed ("copied!") state.

### Secondary
- **Highlighter Teal** (#7fe0d0): the action colour. It fills the copy button at rest, fills service ports in the diagrams, and is one of the heading swipes.

### Tertiary
- **Highlighter Pink** (#ff9ecb): a heading swipe only (a project title, the 404 heading). Never text, never a fill on an interactive element.
- **Pink Ink** (#c4206f): the pen colour for marks that need to read as written-on: the tick in each checklist box and the straight strike through a private repo URL.

### Neutral
- **Marker Black** (#1d1d1f): all text, all main linework, box outlines, focus outline, scrollbar thumb.
- **Soft Ink** (#4c4c52): secondary text (asides, captions, stack lines, link hostnames, notes) and the thin dashed boundary lines in diagrams.
- **Paper** (#fdfdfc): the page ground, and the fill inside hand-drawn boxes and panels so the grid does not show through them. Also the theme colour.
- **Graph Grid** (#e4ecf6): the 1px rules of the graph paper. Nothing else.

### Named Rules
**The Yellow Means Link Rule.** A yellow underline stroke marks a link and only a link. The email is the action, and it is boxed, never yellow-underlined: anything wrapped in the hand-drawn box with a copy button is the thing to do; anything underlined in yellow is somewhere to go.

**The Flat Highlighter Rule.** Highlighters are flat, single-colour strokes with soft feathered ends. No gradients between hues, no transparency stacks, no glow.

## Typography

**Display Font:** Caveat Brush (with Shantell Sans, cursive)
**Body Font:** Shantell Sans (with Comic Neue, sans-serif)
**Label Font:** Caveat Brush, as display
**Script support:** M PLUS 1p Kanji, a three-glyph subset (段取り) for the dandori project mark only.

**Character:** Caveat Brush is a brush-marker hand, condensed and loud, used for anything that speaks. Shantell Sans is a rounded, even handwriting sans that keeps paragraphs readable. All Caveat Brush text carries `font-size-adjust: 0.5` so the two faces sit at matching x-heights. All fonts are self-hosted as woff2.

### Hierarchy
- **Display** (400, clamp(3rem, 9vw, 6rem), line-height 1, -0.02em, rotated -1.5deg): the name in the first viewport, on a yellow swipe.
- **Headline** (400, clamp(2.8rem, 7vw, 5rem), 1.05, rotated -1deg): project titles, each on its own highlighter swipe.
- **Headline, section** (400, clamp(2.2rem, 5vw, 3.6rem), 1.05): section headings ("Things to know", "Write to Simone").
- **Title** (600, clamp(1.15rem, 2vw, 1.5rem)): the role line under the name.
- **Body** (400, 1.08rem, 1.6): all reading text; project prose capped at 46ch, the hook at 40ch.
- **Label / aside** (400, 1rem, Soft Ink, rotated -3deg): handwritten margin notes such as the arrow's aside.
- **Caption** (400, 0.95rem, Soft Ink): figure captions, written "fig. …" in lower case.
- **Action** (Shantell Sans 700, clamp(1.2rem, 2.2vw, 1.65rem)): the email address inside the box.
- **Drawing labels** (Caveat Brush; labels 700 at 15px, sub 12.5px, rows 12px, notes 11.5px, each scaled by the drawing's size factor).

### Named Rules
**The Heavy Brush Rule.** Caveat Brush ships one weight. The role line (600), the copy button (650) and drawing labels (700) are deliberately set heavier, so the browser synthesises the bold; this is the look Simone approved in the prototype. Keep it on those three, and do not add a second Caveat Brush file to "fix" it.

**The Two Hands Rule.** Caveat Brush speaks, Shantell Sans explains. A paragraph is never set in Caveat Brush, and a heading is never set in Shantell Sans.

## Layout

A single left-aligned column of sections on the graph paper, each padded by the page gutter (clamp(18px, 4vw, 64px)). The first viewport is a full-height (100svh) block, content vertically centred and capped at 60rem. Ordinary sections use clamp(56px, 8vw, 110px) vertical padding; the closing section breathes more at clamp(72px, 10vw, 150px).

The checklist is an auto-fill grid of columns at least 22rem wide (gap 0.4rem by 2.5rem, max 64rem). Each project is a two-column grid at 7fr / 5fr, sketch on the left and text on the right, with its heading row spanning both.

Breakpoints:
- **900px and below:** project grids collapse to one column; the arrow swings over the box (rotated 20deg, 90px wide) and the email block loses its left indent.
- **600px and below:** the email box tightens (padding 0.9rem 1rem, gap 0.6rem) and the copy button narrows (min-width 4.4em, inline padding 0.45em) so the address and button stay on one line; each diagram swaps from its wide layout to its tall layout.

## Elevation & Depth

Flat. There are no box-shadows anywhere. Depth is ink on paper: hand-drawn outlines in Marker Black, paper-filled so the grid stops at the box edge. Layering is limited to highlighter strokes sitting behind text.

### Named Rules
**The Ink-Only Depth Rule.** If something needs to stand out, outline it in marker or put a highlighter behind it. Never lift it with a shadow.

## Shapes

Every edge is drawn by hand. Boxes are SVG paths with slightly uneven corners (the email box's four corners are each a few units off square), stroked at 3px and passed through the small wobble filter. The project panel is a 3px outline with uneven radii (6px 14px 8px 18px) under the same filter. The copy button uses the classic hand-drawn pill radius (255px 15px 225px 15px / 15px 225px 15px 255px) with a 2.5px border.

Two wobble filters, defined once per page, carry all the roughness:
- **#rough** (turbulence base frequency 0.025, 2 octaves, displacement 4): diagram linework.
- **#rough-sm** (base frequency 0.05, 1 octave, displacement 2.2): boxes, panels, arrows, checklist ticks.

Line ends and joins are always round.

## Components

### Copy Button
Teal and tactile, lettered by hand.
- **Shape:** hand-drawn pill (see Shapes), 2.5px Marker Black border.
- **Default:** Highlighter Teal fill, Marker Black Caveat Brush text at 650, padding 0.3em 0.9em, min-width 5.2em so "copied!" fits without the box jumping (4.4em with 0.45em inline padding on phones).
- **Hover:** tilts -3deg and scales to 1.04 over 0.15s. **Active:** same tilt, scale 0.98.
- **Done:** fill swaps to Highlighter Yellow and the label reads "copied!" for 2.2s; a failure reads "copy failed". A visually hidden status region announces the result.

### Email Box (signature)
The page's one action, boxed.
- A wobbly hand-drawn rectangle (3px marker, paper fill) holding the mailto address in Shantell Sans 700 and the copy button, padding 1rem 1.4rem, gap 0.75rem by 1rem.
- The address has no yellow stroke. On hover it gains a plain 2px underline offset 0.2em.
- Appears twice: in the first viewport, pointed at by a hand-drawn arrow with a handwritten aside, and again at the close.

### Links
- No text decoration at rest; a yellow highlighter stroke (0.42em tall, near the baseline, feathered ends) sits under the words.
- **Hover:** the stroke grows to fill the whole word over 0.2s ease-out.
- Project links are 700, with the hostname in Soft Ink at 400, 0.9rem. A private link is not a link: its label is bold and its URL struck through with a straight 2px Pink Ink line.

### Highlighter Swipe
- A flat stroke behind a heading, 58% of the line tall, sitting slightly low, with feathered ends; it wraps cleanly across lines.
- Yellow behind the name, teal and pink alternating behind later headings.
- **Motion:** swipes in left to right over 0.7s (cubic-bezier(0.65, 0, 0.35, 1)) the first time it scrolls 30% into view.

### Sketch Panel
- A figure with a 3px hand-drawn outline (uneven radii, small wobble), paper fill, padding clamp(14px, 2vw, 26px), and a "fig. …" caption below in Caveat Brush.
- Diagram linework comes in three weights: thick 3.2, mid 2.2, thin 1.4 in Soft Ink; dashed lines are 9 7. Ports fill teal; arrowheads fill ink.
- **Motion:** solid lines draw on over 1.6s (same easing), then labels and dashed lines fade in over 0.6s after a 1.2s delay. Once only.

### Checklist
- Each item is preceded by a 1.5rem hand-drawn checkbox: a 2px Marker Black box and a 3px Pink Ink tick, both through the small wobble.

### Focus
- Every focusable element shows a 3px dashed Marker Black outline offset 4px.

## Do's and Don'ts

### Do:
- **Do** underline every link with the yellow highlighter stroke, and let nothing else mark a link.
- **Do** box the email with a copy button wherever it appears, and keep it out of the link style.
- **Do** run all hand-drawn linework through #rough (diagrams) or #rough-sm (boxes, arrows, ticks).
- **Do** use Caveat Brush for headings, asides, captions, buttons and drawing labels, and Shantell Sans for reading text.
- **Do** give every reveal a reduced-motion path where everything is already drawn and swiped.
- **Do** keep the 26px graph grid as the ground of every page, including the 404.

### Don't:
- **Don't** add box-shadows, raised cards or glass; depth is ink on paper.
- **Don't** use a yellow underline on the email or on anything that is not a link.
- **Don't** blend highlighters into gradients or put two on the same mark.
- **Don't** set reading text in Caveat Brush, or rotate paragraphs.
- **Don't** return to engineering-drawing props: title blocks, zone grids, sheet numbers, a dark terminal theme.
- **Don't** add mascots or illustrated characters; the drawings are system diagrams.
