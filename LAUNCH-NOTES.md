# Current update — 15 October 2026

The current source targets Melbourne generally, anchored to 384 Keilor Road, Niddrie VIC 3042. It contains 23 complete pages. Production build and page/SEO checks pass; all 13 automated tests pass.

Email test mode is off by default. With no verified sending credentials available, forms now prepare a clearly labelled draft in the visitor’s email app. The visitor must send it there. Automatic server delivery remains configurable but has not been connected or inbox-tested.

Optimised photos and local font subsets reduce source photo bytes by 46% and font bytes by 81%. Responsive images, high-priority hero preloads, versioned resources, Brotli/gzip, ETags and production cache headers are implemented. These are verified implementation/file-size changes; live Core Web Vitals and browser visual QA are not measured.

The ChatGPT publication remains public but is built as a duplicate preview with indexing disabled. The default production build for Hostinger enables indexing and uses the real `icgservices.com.au` canonical domain. The main domain, DNS, Search Console and Google Business Profile have not been modified.

Node.js 22 is specified for Hostinger. Tests ran on Node.js 24; Node.js 22 was not installed in the available runtime or offline package cache. Actual Hostinger execution remains to be verified.

The historical review notes below describe earlier versions and do not supersede this current status.

---

# Review and launch notes

Prepared 14 October 2026 for I Care Group Services.

## Completed and checked

- Generated 22 complete pages and a 404 page.
- Automated checks passed for internal links, section anchors, local asset references, unique titles, page descriptions, one H1 per page, image alternative text/dimensions, JSON-LD syntax and review noindex settings.
- Nine automated tests passed: valid enquiries/referrals/anonymous feedback; consent and contact validation; the three-field referral form; review-mode non-delivery; unconfigured delivery; provider acceptance/failure handling; origin/method/payload protection; repeat-request limits; all page routes and legacy redirects.
- Original logo files retained byte-for-byte. Both variants are displayed at sensible sizes; no imitation logo or registration badge has been generated.
- Poppins is hosted locally under its bundled SIL Open Font License.
- Photographs use existing website files, locally optimised as WebP. They illustrate support settings; no image is labelled as a named participant or employee.
- No real contact data was used in tests, no business email was sent, and no enquiry information was persisted.
- Preview form interactions run locally and clearly state “Test complete. Nothing was sent.”

## What is not yet verified

Browser controls were not available in this environment, so desktop/mobile visual inspection, actual keyboard journeys, screen reader testing, zoom/reflow, browser compatibility and measured Core Web Vitals have not been completed. Responsive styles and accessibility behaviours are implemented, but WCAG conformance and production performance are not certified.

Form delivery has been tested using a mocked email provider. A real sender, credentials, business approval of the collection notice and dummy-message inbox receipt are still required. Rate limiting is basic per process; a production reverse proxy should provide appropriate trusted-client rate controls.

The review uses the existing I Care project at https://i-care-group-services.walkersaint402.chatgpt.site. Version 1 is retained in saved Site history with its original commit and deployment archive. Versions 1 and 2 remain available in saved Site history. The owner changed the Site audience to public on 14 October 2026. The current public I Care domain, DNS and third-party repositories are unaffected.

Version 2 includes:

- A consistent logo-compatible blue, green and teal theme on all pages, keeping the homepage layout.
- Human photographs on all 11 service-directory cards, inner-page headers, referral introduction and service contact panels.
- Referral in the regular menu; Contact Us as the highlighted button; FAQs linked in the header, footer and homepage.
- A dedicated FAQ page with 20 user-approved questions and answers from https://carebeyondexp.com.au/faqs/, eight topic categories plus All questions, and accessible native expandable answers. The reference was successfully fetched on 14 October 2026 after the initial search lookup failed.
- Existing service browsing, simple referral fields and form test mode preserved.

The build, route and asset checks and nine existing tests passed. Desktop/mobile visual inspection remains pending because browser controls are unavailable in this environment.

## Business confirmation before launch

1. Confirm current NDIS registration and permission to use any NDIS marks. The Version 3 design reuses the NDIS wordmark already displayed on the original I Care website and its published registered-provider description. No registration number or certification detail from the reference provider has been copied.
2. Confirm the availability and scope of all 11 service categories, supported locations, intake steps, funding arrangements and support hours. Office visiting hours are separate from support availability.
3. Confirm the current business contact details: 384 Keilor Road, Niddrie VIC 3042; 0435 825 566; admin@icgservices.com.au; ABN 61 642 653 683.
4. Approve the rewritten promises/principles and current visitor, hygiene and safety guidance. Dated COVID temperature-check, universal mask and distancing rules have not been copied forward.
5. Approve privacy and complaint-handling information, the minimum data collected and the delivery provider. Replace draft review wording on the privacy page before public launch.
6. Confirm licences/permissions for the existing photographs and provide higher-resolution original brand files if available. Existing imagery was reused for this private design review; third-party image licensing was not independently verified.
7. Confirm the existing hosting environment before moving from its previous PHP form handlers. This deliverable is static-first with an optional Node server.
8. Test actual phone/email/directions links, all forms with dummy data and inbox receipt; complete responsive, keyboard and assistive-technology checks.
9. Check sitemap/canonical/indexing configuration and full existing URL inventory; implement redirects before changing the live domain.

## URL migration map

| Existing address | New destination |
| --- | --- |
| `/index.html` | `/` |
| `/about-i-care-group-services.html` | `/about-us/` |
| `/our-promises.html` | `/about-us/#our-promises` |
| `/our-guiding-principles.html` | `/about-us/#our-guiding-principles` |
| `/health-safety.html` | `/covid-19/#health-safety` |
| `/services.html` | `/services/` |
| `/contact.html` | `/contact/` |
| `/client-referral-form.html` | `/make-a-referral/` |
| `/feedback.html` | `/feedback/` |
| `/privacy-policy.html` | `/privacy-policies/` |

The latest user changes are implemented: a single About page for the three organisation sections; health and safety on the COVID-19 page; all 11 service detail pages with a horizontally scrolling service browser and next-service link; a referral form with only name, email, reason and submit; refreshed spacing and visual styles. Original brand assets are retained; the refreshed blue/green/teal theme is coordinated with the logo.

The Node server issues permanent redirects. Static-host equivalents are supplied in `dist/.htaccess` and `dist/_redirects`; choose the one applicable to the confirmed host. They do not replace a complete production URL crawl. About I Care Group Services, Our Promises and Our Guiding Principles are combined under `/about-us/`. Health and safety is part of `/covid-19/`, with its own section anchor and a permanent redirect from the original health and safety URL.

## Source references

The supplied redesign brief and current website were used together. References checked on 14 October 2026:

- https://icgservices.com.au/index.html
- https://icgservices.com.au/about-i-care-group-services.html
- https://icgservices.com.au/our-promises.html
- https://icgservices.com.au/our-guiding-principles.html
- https://icgservices.com.au/health-safety.html
- https://icgservices.com.au/services.html
- https://icgservices.com.au/client-referral-form.html
- https://icgservices.com.au/contact.html
- https://icgservices.com.au/feedback.html
- https://icgservices.com.au/privacy-policy.html
- https://www.ndis.gov.au/
- https://www.ndis.gov.au/applying/application-process/how-apply
- https://www.ndis.gov.au/participants
- https://www.ndis.gov.au/contact
- https://www.ndiscommission.gov.au/complaints/report
- https://resend.com/docs/api-reference/emails/send-email

The existing privacy page was the only linked policy page found; no policy PDFs were found. Source references verify published information, not the provider’s present registration, actual operations or photo licences.

The full existing-image provenance is recorded in `ASSET-SOURCES.json`. Header `logo.png` is the original 318×292 raster; `footer-logo.png` is the original transparent 120×112 white logo. The hero uses the existing `guiding-principles.jpg` photo. Original service images were reused at their available resolution and are not presented as new business photography.

## COVID resource links

Checked on 14 October 2026:

- https://www.betterhealth.vic.gov.au/coronavirus-covid-19-victoria
- https://www.health.gov.au/health-alerts/covid-19

The old homepage COVID link led to a missing `/$` page. The new COVID page links directly to official resources and contains the health and safety section. It does not assert that old pandemic-era rules remain current.


## Version 3 — homepage reference changes

The owner requested inspiration from the supplied Wyndham Elite homepage screenshot and https://www.wyndhamelitesupportservices.com.au/, within I Care’s own branding.

- Reworked the homepage with a blue and teal hero, participant/family/referral/FAQ entry cards, six photographic service cards, a quality and safeguards section, a simple three-step introduction, and FAQs.
- The homepage has its own layout; the existing inner-page layouts and service browser are retained.
- Added an NDIS information card in the quality section and footer. The NDIS wordmark and provider description come from the original I Care website; no Wyndham Elite registration number, statistics, testimonials, clinical services or contact details are reused.
- Added the Australian Aboriginal and Torres Strait Islander flags from the original I Care website beside the site-wide Acknowledgement of Country. Original image bytes and proportions are retained.
- Versions 1 and 2 remain archived with their saved source commits and deployment archives. This update is Version 3, using the existing public Site and URL.
- All 22 page checks and the nine existing form/routing tests passed. Contact and referral forms continue to validate in test mode without sending or storing messages.
- Browser control is unavailable, so desktop/mobile visual inspection and interactive browser journeys remain unverified. Responsive styles, asset dimensions, navigation targets, anchors and syntax were checked.


## Version 4 — photographic variety

- Added six previously unused photographs from I Care’s original assets, with source URLs recorded in ASSET-SOURCES.json.
- Reassigned the homepage entry cards so its eleven photographic placements show eleven different scenes. The social/community and travel service cards now use distinct outdoor photographs.
- Gave life transitions its own image so it no longer shares the housing/tenancy photograph in the service directory and scrolling service browser.
- Changed the About, Services, Referral, Accessibility and FAQ introductions, and the About body image, to reduce repeated photographs between unrelated sections.
- Removed the duplicate hero photograph from all eleven service contact side panels, retaining their contact and referral actions.
- Updated image alternative text to describe the replacement photographs.
- Build and existing checks passed across all 22 pages. An additional audit compared the image-file bytes for every photographic placement on every page: no page shows the same photograph twice, including aliases with different filenames.
- The service directory has eleven distinct service photographs plus a separate header photograph. Reusing a service photograph on its matching detail page and in the other-service browser remains intentional.
- Previous saved versions remain available. Forms still run in test mode. Browser visual review remains unavailable in this environment.
