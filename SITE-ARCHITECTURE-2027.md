# Beyond the Sun — Site Architecture 2027

Decision: **layered architecture, built situation-first.**

Population pages establish the entity and win local search. Situation pages meet
people in the words of the moment they are actually in, and they carry the
highest intent and the least competition. Both exist; situation pages ship first.

Every page ends in exactly one action: the free 15-minute call.

**Authorship boundary.** Slugs, title tags, meta descriptions, keyword targets,
and internal-link maps below are SEO scaffolding and are proposals. **Body copy
and H1 wording are Katy's to author.** Where a page already has approved copy,
it is noted. Where it does not, the H1 is marked `[proposed]` and body copy is
left to her.

---

## Tier 0 — Home

| | |
|---|---|
| Slug | `/` |
| H1 | Adoption-Attuned Therapy, Coaching & Creative Care in Carmel, Indiana |
| Display line above H1 | Adoption is a lifelong unfolding. |
| Title tag | Beyond the Sun \| Adoption-Attuned Therapy & Coaching in Carmel, IN |
| Copy status | Approved — Content Guide, Page 1 |

Resolves the headline conflict between the two documents as a stack rather than
a choice: the brand thesis is display type, the searchable phrase is the `<h1>`.

Links down to all five population hubs and the top three situation pages.

---

## Tier 1 — Who We Serve (population hubs)

These carry entity and local SEO. Broad, evergreen, competitive-but-winnable.

| Slug | H1 | Copy status |
|---|---|---|
| `/for-adoptees` | For Adoptees | Approved — Content Guide, Page 2 |
| `/for-birth-parents` | For Birth & First Parents | Approved — Content Guide, Page 3 |
| `/for-adoptive-parents` | For Adoptive Parents | Approved — Content Guide, Page 4 |
| `/beyond-home` | Beyond Home | Approved — Content Guide, Page 6 |
| `/for-professionals` | For Professionals *[proposed]* | Needs authoring |

**`/biological-roots` is retired.** It targets origin, identity, kinship, and
reunion — the same terms as `/for-adoptees`, `/for-birth-parents`, and
`/search-reunion`. Four pages competing for one keyword set means Google picks
one and buries the rest. Its approved copy (Content Guide, Page 5) redistributes:

- Adoptee origin and identity material → `/for-adoptees`
- Birth and first parent material → `/for-birth-parents`
- Sibling, partner, extended family material → `/beyond-home`
- Reunion and contact material → `/search-reunion`

`/for-professionals` is new, from the Executive Summary's consultation and
training section. It is a referral driver more than a search play.

---

## Tier 2 — What's Happening Now (situation pages)

**Build these first.** Highest intent, least competition, and they match the
words people use in the moment they go looking.

| Slug | H1 | Copy status |
|---|---|---|
| `/records` | Open File Care *[proposed]* | Needs authoring |
| `/search-reunion` | Search, Contact & Reunion *[proposed]* | Needs authoring |
| `/grief-loss` | Grief & Loss | Approved — Content Guide, Page 8 |
| `/after-teen-placement` | Recovery, Motherhood + Connection After Teen Placement | Approved — see CLAUDE.md |
| `/dna-discovery` | When What You Knew Changes *[proposed]* | Needs authoring |
| `/adoption-and-neurodivergence` | Adoption & Neurodivergence *[proposed]* | Needs authoring |

Each links up to its population hub and across to one or two siblings:

- `/records` → `/for-adoptees`, `/search-reunion`
- `/search-reunion` → `/for-adoptees`, `/for-birth-parents`, `/grief-loss`
- `/grief-loss` → `/for-birth-parents`, `/for-adoptive-parents`
- `/after-teen-placement` → `/for-birth-parents`, `/grief-loss`
- `/dna-discovery` → `/for-adoptees`, `/search-reunion`
- `/adoption-and-neurodivergence` → `/for-adoptive-parents`, `/all-abilities`

### Indiana records law

`/records` should carry a dedicated, maintained section on Indiana original
birth certificate access. It is evergreen, explicitly local, legally specific
enough that national sites answer it badly, and searched by people ready to act.
It is the strongest topical authority play available.

---

## Tier 3 — How We Work (modality)

| Slug | H1 | Copy status |
|---|---|---|
| `/art-therapy` | Art Therapy & Creative Approaches | Approved — Content Guide, Page 7 |
| `/all-abilities` | All Abilities *[proposed]* | Needs authoring |

No Indiana adoption practice foregrounds art therapy as a primary clinical
pathway. This is differentiation, not decoration.

---

## Tier 4 — Trust

| Slug | H1 | Copy status |
|---|---|---|
| `/about` | About Beyond the Sun | Approved — Content Guide, Page 9 |
| `/katy-wagner` | *[proposed]* | Draft exists in Executive Summary |
| `/amanda-[surname]` | *[proposed]* | Draft exists in Executive Summary |
| `/consultation` | Schedule a Consultation *[proposed]* | Needs authoring |

Therapy is a YMYL category — Google demands demonstrated expertise, and it is
assessed at the level of named people with credentials, not the practice.
An adoptee art psychotherapist and a founder who is a records steward with
lived experience are strong signals currently buried on a shared About page.
Each gets a page with `Person` schema and stated credentials.

---

## Tier 5 — Resources

`/resources` — topical clusters, each post linking back to the hub it serves.
Roughly two posts a month. Target the keyword list the Content Guide already
identified as unowned in Indiana.

---

## Technical

**Schema.** `MedicalBusiness` or `LocalBusiness` on home and contact.
`Person` with credentials on each practitioner page. `FAQPage` on every
situation page. `Service` on modality pages.

**Answer engines.** A large share of these questions now resolve inside AI
summaries rather than clicks. That rewards what neither source document
currently produces:

- A short, extractable definition near the top of every page
- Real FAQ blocks, question-shaped, with schema
- Explicit scoping in the text — "in Indiana," "for adults," "independent of
  any agency" — so an answer engine can tell who the page is for

**Local.** Google Business Profile, consistent NAP, Carmel and Indianapolis
named in title tags where natural.

**One CTA.** The free 15-minute call, on every page, once. No secondary
actions competing with it. Cards and panels carry no links — the pattern
already set on `/after-teen-placement`.

---

## Build order

**Q1 — Foundation**
Home, four population hubs, `/about`, two practitioner pages, `/consultation`,
schema, Google Business Profile.
*Copy for all but the practitioner pages is already approved.*

**Q2 — Highest intent**
`/records`, `/search-reunion`, `/grief-loss`, `/after-teen-placement`.
*Two need authoring; two are approved.*

**Q3 — Differentiation**
`/dna-discovery`, `/adoption-and-neurodivergence`, `/art-therapy`,
`/all-abilities`, `/for-professionals`.

**Q4 — Content engine**
`/resources` live, two posts a month against the uncontested keyword list.

---

## Deprioritized

**Career and life skills coaching.** The Executive Summary notes it found no
precedent for this. Absent search demand, that usually indicates no market
rather than an open lane. Test as blog posts first; promote to a page only if
they draw traffic.

**Client Portal.** Present in the nav of `beyond_the_sun_exact_hero/index.html`.
Should not appear in navigation until it exists.

---

## Open items for Katy

1. Body copy and H1 wording for the eight pages marked *[proposed]*.
2. Confirm retiring `/biological-roots` and redistributing its approved copy.
3. Amanda's surname for the practitioner page slug.
4. Whether `/after-teen-placement` is the final slug for the page recorded in
   CLAUDE.md.

---

## Sources

- `# Beyond the Sun — Complete Website Content Guide` (Drive) — approved copy
  for 9 pages, SEO targets, voice rules
- `Executive Summary for bts services website language.docx` (Drive) — gap
  analysis, service matrix, proposed architecture, language do's and don'ts
- `CLAUDE.md` (this repo) — approved copy for the teen-placement page
- `beyond_the_sun_exact_hero/index.html` (Drive) — a third nav structure,
  superseded by this document

Keyword volumes have not been independently validated. Build order is
directional and should be checked against live data before budget is committed.
