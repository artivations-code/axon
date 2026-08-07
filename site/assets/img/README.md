# Image assets

No page references a file that does not exist. Every image slot currently
renders as a `<div class="ph">` — a quiet tonal block with an olive rule
beneath it. It reads as a deliberate design element, never as a broken image.

**To drop a photo in:** replace the `<div class="ph">` with an `<img>` and
write alt text. The HTML comment directly beneath each slot names the intended
file.

```html
<!-- before -->
<div class="ph" role="presentation"></div>
<!-- image slot: card-tea.jpg — ceramic bowl of tea ... -->

<!-- after -->
<img src="assets/img/card-tea.jpg" alt="A ceramic bowl of tea on a dark wood table.">
```

## Open slots

| Page | Slot | Design calls for |
|---|---|---|
| `after-teen-placement.html` | `card-daybed.jpg` | Daybed with cream linen throw and olive velvet pillow, sheer curtain light, olive branches in a bronze vase |
| `after-teen-placement.html` | `card-tea.jpg` | Ceramic bowl of tea on a dark wood table with a pencil, papers, and an olive sprig |
| `after-teen-placement.html` | `card-shoreline.jpg` | Olive branch over a pebbled shoreline and calm water |
| `index.html` | unassigned | First feature block |
| `about.html` | unassigned | Full-width band |

The three `card-*` images are specified in the approved design and recorded in
`CLAUDE.md`. They exist only as regions inside the composite
`motherhood_teen_placement.png` in the Drive folder "USE THESE - some need
double checked", so they need cropping or re-sourcing.

## Photos supplied 2026-07-30 — not yet placed

Five photographs came through chat as inline images rather than files, so they
are not in the repo. Earlier drafts assigned two of them to pages; those
assignments were guesses and have been removed. Nothing is placed until placement
is specified.

| Suggested filename | What it shows |
|---|---|
| `puzzle-floor.jpg` | Two people seated on the floor with a jigsaw puzzle and a child's drawing nearby |
| `records-file.jpg` | A person at a desk with an adoption file open, papers and photographs spread out |
| `repotting.jpg` | Two pairs of hands, one older and one younger, repotting a small tree |
| `sidewalk-cane.jpg` | Two people walking a sidewalk together, one using a cane |
| `sidewalk-talking.jpg` | Two people walking and talking on a tree-lined street |

Descriptions state what is visible only. They do not name a relationship
between the people shown.

## Format

JPEG for photographs. Roughly 1600px on the long edge covers the card and
feature slots at current layout widths.
