# Small-business websites & operating tools

**Two preview implementations · Client identities omitted**

[← Project index](README.md)

Small businesses need tools that reflect how work actually happens: changing menus, clear service requests, reliable records, and an owner who can see what needs attention. These two projects translated that need into functioning local interfaces.

## My contribution

I directed discovery, product design, AI-assisted implementation, and verification. I kept the business workflow and the customer journey connected, and documented the dependencies needed before cutover.

## Food-business website and owner workspace

The responsive website combines menu information, ingredient dialogs, pickup guidance, catering inquiry intake, and explicit email consent. Its protected owner workspace stores menu settings, inquiries, preferences, source-order references, and preparation/payment states in D1.

The implementation includes timezone-aware preorder boundaries, four menu states, unique order references, stable retry identifiers, server-captured prices, and kitchen summaries based on recorded payment verification. Cancelled and unpaid orders are excluded from collection totals.

Retained checks cover persistence, date validation, retry behavior, access denial, consent, and the link between a saved inquiry and the owner view. Browser review at narrow and desktop widths found loaded imagery and no horizontal overflow. Workflow verification used disclosed synthetic local records.

## Dual-service website and request planner

The second project uses plain HTML, CSS, and JavaScript. A visitor can select either service or both, complete conditional fields, and prepare an editable request summary. Copy and text-download controls were exercised; the downloaded file was read back.

Editing invalidates an old summary, hidden fields are disabled, required descriptions are validated, and the same planning logic is exposed through a local WebMCP planning action. The planner keeps its data in the document and clearly identifies its local preparation behavior.

## Evidence and status

Both projects have implementation and local browser/workflow evidence. They remain previews in this portfolio. The first needs authorized owner setup, order-system reconciliation, email delivery, and cutover work. The second needs final business details, inquiry delivery, and client acceptance before an operational booking claim.

Client correspondence, imagery, contact information, and customer records are excluded from this repository. No sales, booking volumes, or measured business benefit are claimed.

**Skills demonstrated:** workflow discovery, responsive interfaces, persistent data, server-side validation, authentication boundaries, idempotency, privacy-conscious forms, browser verification.

[Evidence guide](../evidence/README.md)
