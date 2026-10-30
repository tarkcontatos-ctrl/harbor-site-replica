<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Reference recreation
- Keep the trusted original DetailPro markup in its feature module and render it at the index route; preserving the supplied structure avoids visual drift.
- Retain original reference photos as asset pointers; import enhanced 4K WebP derivatives directly and keep the reference palette in global semantic OKLCH tokens to preserve fidelity and efficient delivery.
- Scope the reference stylesheet to `.detailpro` so its element selectors cannot override other pages' navigation and spacing.
- Render the shared company-location section outside the scoped reference markup, before the home footer and on Contact; derive Maps queries and social links from one company contact module to avoid inconsistent details.
- Reuse the supplied logo through a shared image component and the reference markup asset mapping; derive the favicon from the same image so brand surfaces stay consistent.
- Contact messages use a schema-validated, encoded mailto action rather than simulated delivery; no messaging service is connected.
- Use one shared service catalog for detail pages, login selection and booking prices; validate service IDs from URLs and never accept a price from query parameters.
- Generic booking links open the service catalog; individual service links use `/servico/$service` and pass only the selected ID through login to the calendar.
- Resolve login destinations from authenticated role RPCs before rendering booking; finance takes precedence over employee access, and every staff handler independently authorizes the caller.
- Walk-in appointments use an atomic staff-authorized database RPC and customer snapshot fields without fake auth accounts; the staff owner is attribution, not the walk-in customer identity.
- Aggregate financial charts from the complete immutable ledger by competence date, filling missing periods with zero and subtracting refunds.
- Track new Google registration in an auth lifecycle trigger, gate app rendering in the root, and allow first-password writes only for the authenticated pending owner; existing identities and password changes must never enter this privileged onboarding path.
- Build on-site booking receipts from persisted booking readback, using Brasília time and saved totals; keep downloads browser-local so confirmation needs no email or messaging service.
- Create customer bookings through an authenticated atomic database RPC; keep service prices database-owned and record payment transitions through the caller-scoped client for ledger attribution.
- Share the sign-in implementation between customer and team entry points; only protected database roles authorize team access, never the selected login page or signup metadata.
