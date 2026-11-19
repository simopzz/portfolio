---
name: simopzz.com
description: An issued drawing set: graphite lettering on white bond, one redline for state and action.
colors:
  paper: "#f4f5f2"
  ink: "#1d1f22"
  ink-2: "#4b5057"
  ink-3: "#9aa0a7"
  red: "#c22a16"
typography:
  display:
    fontFamily: "Osifont, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 7.4vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Osifont, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 3.4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.02em"
  title:
    fontFamily: "Osifont, Arial Narrow, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.06em"
  body:
    fontFamily: "Osifont, Arial Narrow, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.015em"
    fontFeature: "tnum"
  label:
    fontFamily: "Osifont, Arial Narrow, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.14em"
  label-sm:
    fontFamily: "Osifont, Arial Narrow, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.14em"
  kanji:
    fontFamily: "M PLUS 1p Kanji, Osifont, sans-serif"
    fontSize: "0.5em"
    fontWeight: 400
    letterSpacing: "0.1em"
rounded:
  none: "0px"
spacing:
  trim: "clamp(10px, 2vw, 28px)"
  band: "clamp(14px, 1.3vw, 18px)"
  pad: "clamp(18px, 2.6vw, 40px)"
  gap: "clamp(16px, 1.8vw, 28px)"
  tab: "30px"
components:
  title-block-cell:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "8px 12px 9px"
  copy-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "4px 12px"
    height: "32px"
  copy-button-hover:
    textColor: "{colors.red}"
  mail-link:
    textColor: "{colors.red}"
  mail-link-hover:
    textColor: "{colors.ink}"
  drawing-list-row:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    height: "46px"
  drawing-list-row-hover:
    textColor: "{colors.red}"
  sheet-index-tab:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    padding: "0 8px"
    height: "{spacing.tab}"
    width: "40px"
  sheet-index-tab-active:
    textColor: "{colors.red}"
  legend:
    backgroundColor: "{colors.paper}"
    padding: "14px 16px 6px"
  revision-row:
    textColor: "{colors.ink}"
    padding: "7px 10px"
  revision-row-pending:
    textColor: "{colors.red}"
---

# Design System: simopzz.com

## Overview

**Creative North Star: "The Issued Drawing Set"**

The site is a set of engineering sheets, not a web page with sections. Every screen is a sheet: a hairline frame with a lettered and numbered zone grid, a heavy pen border drawn inside it, a ruled title block at the bottom right, and a sheet number out of the set total. Work is shown as architecture drawings in a fixed linework grammar, and each project carries an honest revision table. Content sits in the conventions of the drawing office, and the conventions do the persuading.

The material is white bond paper and graphite. Everything is ink at three line weights; depth, hierarchy and grouping come from stroke weight and rules, never from fills, tints or shadows. Red is a redline in the drafting sense: it marks revision state (clouds, delta triangles, pending rows) and the one action (the email). Type is ISO 3098 technical lettering throughout, mostly uppercase and tracked, with tabular figures.

Density is that of a real sheet: generous empty field around a drawing, tight ruled tables in the blocks. Motion is a plotter: the border is pen-drawn, the title is lettered in, linework plots once, and with reduced motion everything is already drawn.

**Key Characteristics:**
- Every screen is a framed, zoned, numbered sheet with a title block.
- One typeface (Osifont), uppercase and tracked for anything that is a label.
- Three line weights carry all hierarchy; zero radius, zero fills, zero shadows.
- Red only for revision state and the email action.
- Drawings are inline SVG in a small fixed symbol vocabulary, explained by a legend.

## Colors

A monochrome graphite-on-bond palette with a single redline.

### Primary
- **Redline** (`red`): revision clouds, delta triangles, the pending revision row, the private-link strike and its note, the active sheet-index tab, the email link, hover state on every link and the copy button, focus outlines, text selection. 5.3:1 on paper, so it may set text.

### Neutral
- **Bond Paper** (`paper`): the only surface. Page, sheet-index strip, port fills, title block. Cool white, never cream.
- **Graphite** (`ink`): all primary lettering and every structural stroke: frame, pen border, title block rules, drawing linework, arrowheads. 15.1:1.
- **Soft Graphite** (`ink-2`): secondary lettering: field labels, zone numerals, sheet numbers in lists, dates, sub-labels inside drawings, thin drawing strokes. 7.4:1.
- **Construction Line** (`ink-3`): hairline row separators in the notes list, legend and reference list, and the scrollbar thumb. 2.4:1: lines only, never text.

### Named Rules
**The Redline Rule.** Red marks what changed, what is pending, or what to press. It never decorates, never fills an area, and never colours a heading.

**The Construction Line Rule.** `ink-3` is for strokes alone. Any lettering, however minor, is `ink-2` or darker.

## Typography

**Display Font:** Osifont (with Arial Narrow, sans-serif)
**Body Font:** Osifont
**Label/Mono Font:** Osifont, tabular figures on throughout (`font-variant-numeric: tabular-nums`)
**Japanese:** M PLUS 1p Regular, a three-glyph subset (段取り), only beside the dandori sheet title.

**Character:** One drafting hand for everything, as on a real sheet. Hierarchy comes from size, case and tracking, never from weight: every role is weight 400 and `font-synthesis` is off.

### Hierarchy
- **Display** (400, clamp 3rem to 6rem; 2.75rem to 4.5rem below 1200px; 0.92): the name, once, as the cover's drawing title, uppercase, under a 4px double rule.
- **Headline** (400, clamp 2rem to 3rem, 1): sheet titles (General Notes, project names), uppercase, under a 2px double rule.
- **Title** (400, 1.125rem, 0.06–0.08em, uppercase): drawing-list titles, view names, the role line (scaled up to 1.5rem on the cover).
- **Body** (400, 1.0625rem, 1.5, 0.015em): notes and project prose, 46–62ch.
- **Label** (400, 0.75rem, 0.14em, uppercase, `ink-2`): block headings (Drawing list, Key plan, Legend), scale notes, the copy button, captions.
- **Label small** (400, 0.6875rem, 0.14em, uppercase, `ink-2`): title-block field keys, table column heads, zone numerals.
- **Drawing lettering** (SVG): label 15px, row 12.5px, sub 12px, note 11px, tag 13px (red), each multiplied by the layout's `--fs` scale.

### Named Rules
**The One Hand Rule.** Osifont sets every glyph on the page. No second Latin face, no bold, no italic.

**The Lettered Label Rule.** Anything that names a field, column, block or scale is uppercase and tracked 0.08–0.14em. Prose is sentence case.

## Layout

Each sheet is at least one viewport tall (`min-height: 100svh`). From outside in: a **trim** of paper (top trim is never less than **tab**, the 30px height of the fixed sheet-index strip), the hairline **frame**, a **band** carrying the zone grid, the 2px pen border, then the **field** with **pad** inside it.

The zone grid letters the band like a drawing sheet: numerals 1–8 across top and bottom, letters A–F down both sides on wide screens (A–H when the sheet goes portrait), divided by thin ticks.

On wide screens (1200px and up) the field is a 12-column grid with **gap** gutters. Cover: title in columns 1–8, drawing list 9–12, key plan 1–7 and title block 8–12 along the bottom. Notes: list 1–7, legend 9–12, title block 8–12. Project: drawing 1–8 spanning the sheet, spec column 9–12 with a thin left rule, title block 9–12 at the bottom.

Below 1200px the sheet turns portrait: the field becomes a single column with 32px gaps, `pad` drops to 18px, the zone grid becomes 4 across and 8 down, the key plan is dropped, the spec column moves above its drawing, and the title block spans the full width at the foot of the sheet. On the cover the title block's role row is hidden so the email stays in the first screen. Below 600px each drawing swaps to its tall layout (a separately composed portrait arrangement with larger lettering), never a shrunk wide one.

The title block always bleeds to the pen border: its negative margin cancels the field `pad` so it closes against the bottom and right edges.

## Elevation & Depth

The system is flat. There are no shadows, no tints and no layering; depth is read from stroke weight alone. Three weights: **thick** 2px (pen border, title-block top and left, primary shapes, heading rules), **mid** 1.25px (dashed externals, links, the legend and revision table boxes, the copy button), **thin** 0.75px (frame, zone ticks, table rows, thin drawing strokes in `ink-2`). The key plan thumbnails scale these up (3.5 / 2.5 / 1.5px) so the reduced drawing keeps its weights.

The only `box-shadow` in the build is a drafting device, not depth: a 1px line offset below a heading's bottom border (`0 4px 0 -3px` on sheet titles, `0 6px 0 -5px` on the cover title, `0 3px 0 -2px` on view names) that draws a double underline rule.

### Named Rules
**The Line Weight Rule.** Hierarchy is stroke weight. If something needs to stand forward, give it a heavier line, not a fill or shadow.

## Shapes

Every corner is square (0px radius), including the button and the focus outline. Forms are the drafting vocabulary: rectangles, ruled rows, a hexagon, a cylinder, small square ports, triangles. The only curves are the cylinder's elliptical caps and the redline cloud's scallops. Linework joins and caps are round, except dashes, which are butt.

## Components

### Sheet
- **Frame:** hairline `ink` rectangle with the zone band inside it; field bounded by four 2px pen strokes.
- **Zone grid:** label-small numerals and letters in `ink-2`, centred in band cells split by thin `ink` ticks.

### Title Block
The sheet's identity and the page's call to action.
- **Structure:** a 2fr/1fr grid (3fr/2fr portrait) with a thick top and left edge and thin internal rules; each cell is a label-small key over a body value.
- **Fields:** Drawn by, Sheet `NN / NN`, Title (Role on the cover), Contact, Elsewhere (cover only), Rev with delta and date, Scale `NTS` (project sheets).
- **Contact:** the email as a red link (clamp 1.125rem to 1.375rem, mid-weight underline, turns `ink` on hover) followed by the Copy button.

### Copy Button
- **Shape:** square, mid-weight `ink` outline, transparent fill, 32px min height, label typography.
- **Hover / Done:** text and border go red; the label reads "Copied" for 2.2s, announced through a live region. Active nudges down 1px.
- **Focus:** 2px red outline, 3px offset (the global focus treatment for every control).

### Links
Inherit the lettering colour with a thin underline offset 0.24em; hover turns red over 160ms. Reference rows (live app, repository, decision records) pair an uppercase label with an `ink-2` URL.

### Navigation: Drawing List and Sheet Index
- **Drawing list (cover):** a ruled schedule with Sheet / Title / Rev columns; thick top rule, mid rule under the head, thin row rules, 46px rows (44px portrait). Hover turns title and number red.
- **Sheet index:** a fixed paper strip along the top edge, flush right, of 30px binder tabs carrying sheet numbers in `ink-2`, divided by thin rules. The tab of the sheet at mid-viewport turns red with a 2px red bar beneath its number.

### Revision Table
A mid-weight boxed table (Rev / Date / Description) with thin rules. The Rev cell holds a delta marker. A pending row, when the project has one, sits last: cloud chip, "NEXT" in red label type, description in red.

### Delta Marker
A 22×20 SVG triangle stroked red at mid weight, round joins, the revision letter centred in 11px red lettering. Used in the title block and revision tables.

### Revision Cloud
The redline mark for pending work, in two builds that share the scallop:
- **SVG (in drawings):** a clockwise path of outward arcs (about 18px step) around the pending part, mid weight red, with a red tag letter.
- **CSS:** four rows of radial-gradient arcs, one per edge. As a 36×22 chip in the legend and pending rows; as a `::before` ring around a list row (the private repository link, whose URL is struck through in red at thick weight with a red "private until refactor" note).

### Drawing Grammar
Inline SVG, every symbol listed in the sheet-02 legend:
- **Box** (service or process): thick rectangle, uppercase label plus `ink-2` sub-label; may carry ruled rows (mid rule under the head, thin between rows).
- **Dashed box** (external service): mid weight, dash 7/5.
- **Cylinder** (data store): thick body, mid front cap.
- **Hexagon** (domain core): thick outline with a thin inner hexagon.
- **Port:** 12px mid-weight square filled with paper, sitting on a boundary.
- **Arrow** (call or data flow): mid line with a solid `ink` arrowhead; flow labels in note lettering.
- **Boundary:** thin dashed `ink-2` rectangle with note-lettering captions.
- **NTS:** every view is captioned "Scale NTS"; no dimensions are ever drawn.

Each drawing exists twice: a wide layout and a tall layout for phones.

### Legend and General Notes
- **Legend:** a mid-weight box with a Label heading; 40px rows split by construction lines, 56×30 symbol on the left, uppercase 0.875rem description.
- **General notes:** a numbered list (counter in `ink-2`, 2.5em gutter), rows ruled with construction lines, up to 62ch.

### Key Plan
Cover-only, wide screens: each project drawing as bare linework (no lettering) in a thin-bordered tile with a label caption; hover turns frame and linework red.

### Motion: The Plotter
- **Pen border:** on the cover, the four pen strokes scale in clockwise (top 520ms, right 420ms, bottom, left; `cubic-bezier(0.65, 0, 0.35, 1)`), zone numerals fade in.
- **Lettering wipe:** each line of the cover title is revealed left to right by `clip-path` (900ms, `cubic-bezier(0.16, 1, 0.3, 1)`, staggered 270ms), then the double rule draws in.
- **Linework plot:** solid strokes plot in via `stroke-dashoffset` over 1600ms: key plan on load, project drawings once on first scroll into view (20% visible); dashed lines, arrowheads and lettering fade in after.
- **Reduced motion:** none of this runs; every sheet is already drawn. Drawings already on screen at load are never hidden.

## Do's and Don'ts

### Do:
- **Do** put every new screen on a sheet: frame, zone grid, pen border, title block with sheet `NN / NN` and a revision.
- **Do** express hierarchy with the three line weights (2px, 1.25px, 0.75px) and with case and tracking, at weight 400.
- **Do** reserve red for revision state (clouds, deltas, pending rows) and the email action.
- **Do** draw new systems with the legend's symbols only, and give each drawing a tall layout for under 600px.
- **Do** keep `ink-3` (2.4:1) for lines; set the smallest lettering in `ink-2`.
- **Do** caption views "Scale NTS" and leave the drawing undimensioned.
- **Do** keep every animation optional: under reduced motion the sheet is already drawn.

### Don't:
- **Don't** use a blue cyanotype ground, cream paper, or a dark theme: the world is graphite on white bond.
- **Don't** introduce a second colour, a tint, a filled area of red, or a gradient other than the cloud scallops.
- **Don't** round corners or add drop shadows; the offset 1px rule under headings is the only shadow, and it draws a line.
- **Don't** add a second typeface, bold, or italic.
- **Don't** invent dimensions, metrics, skill bars or logo walls in the drawings or blocks.
- **Don't** replace the title block or drawing list with cards, a hero, or a top nav bar.
