# Working rules for this project (IndiATA website)

Written after a session where avoidable errors wasted the client's time and tokens.
These rules are binding. Read them before touching any page.

## The errors that must never repeat

1. **Shipped fake actions.** "Enter →", "Get the link →", and "Submit a piece" were
   mailto: links dressed up as buttons. On the client's machine they did nothing.
   "Details →" pointed at a homepage, not the thing it promised. All had to be
   ripped out by an angry client.
2. **Guessed a URL.** `myaata.arttherapy.org` does not exist. The real portal is
   `https://my.arttherapy.org/home`. A guessed link shipped to production.
3. **Missed the obvious feature.** The page's #1 call to action (Student Rep) said
   "email us to express interest" instead of having an application form. The form
   took 10 minutes to build once demanded. It should have existed from draft one.
4. **Guessed at subjective visuals repeatedly.** Three wrong "kelly green" hexes
   before offering a swatch picker / asking for the exact value.
5. **Misread short feedback and burned turns on the wrong fix.** "STUDENT LOOP not
   current" meant *rename the newsletter to The Student Loop*, not a caching issue.
6. **Shipped layout without checking reading order.** The events grid filled
   row-wise so dates scrambled when read down a column.
7. **Delivered code without rendering it first** (broken checkbox layout went out
   twice before a screenshot check caught it).

## The rules

- **No control without a destination.** Never ship a button or link unless the URL
  or action behind it is real, known, and does what the label promises. No mailto:
  links styled as buttons. If the destination doesn't exist yet, ship plain text
  or nothing — a missing button is fine; a fake one is not.
- **Every call to action must have its action built.** If the page invites people
  to apply / sign up / enter / submit, the form or link that does it must be on
  the page. "Email us about it" is not an action.
- **Verify before shipping.** URLs: confirm they resolve (search/fetch, or ask the
  client to confirm). Layouts: render and screenshot before delivering. Reading
  order, mobile, and no horizontal overflow are part of every check.
- **Exact values over guesses.** For colors and other subjective specifics, after
  one miss stop guessing: ask for the hex / offer labeled swatches.
- **Ambiguous feedback: re-read the page first, then ask one precise question.**
  Do not burn turns on an assumed interpretation.
- **Deliver complete paste-ready code, always.** The client pastes the full block
  into a Squarespace Code block. Never give find-and-replace instructions.
- **Respect the client's time and tokens.** Get it right in the first pass:
  think through what a real student visiting the page would try to do, and make
  sure every one of those paths works before handing anything over.

## Project facts (verified)

- Live page: https://www.indianaarttherapyassociation.org/students (Squarespace,
  same site as indiana-art-therapy.squarespace.com).
- Page source of truth: `students.html` in this repo, between the
  `==== PASTE FROM/TO HERE ====` markers.
- Forms post to FormSubmit (`Indianaarttherapy@gmail.com` — Gmail ignores dots)
  AND log to the chapter Google Sheet via Apps Script:
  `https://script.google.com/macros/s/AKfycbyBbNaac5Pz0WbUqZX0JqBcywzJCosEl5owFFAdof0TfHYycWj-PQqCC4E-xjkJKDpF/exec`
- AATA join page: https://arttherapy.org/join-today/ · MyAATA portal:
  https://my.arttherapy.org/home
- Brand: navy background; hero green #2D9285; logo colors green #8E9C4F,
  plum #82667D, slate #45637B; palette magenta #AE0055, olive #879637,
  orange #CF7600, slate #44697D, plum #885E80, teal #0F8478.
- Squarespace disables embedded <script> in the editor ("Script Disabled" is
  normal there); JS runs on the live page. Squarespace theme CSS can override
  embed styles — pin critical styles with !important when needed.
