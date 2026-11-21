// All portfolio text lives here. Edit this file to update the site.

export const profile = {
  name: "Dimas Pangestu Restu Putra",
  handle: "dimas.pangestu",
  roles: ["Software Engineer", "Python Backend", "Payments", "Integration", "Technical Support"],
  pitch: {
    strong: "Python APIs and full-stack systems that handle real money and real users",
    rest: ": payment integrations for DANA merchants, automated financial reconciliation, and production platforms used across a university.",
  },
  facts: [
    { b: "5+ yrs", t: "production experience" },
    { b: "Fully remote", t: "since 2022" },
    { pre: "Based in", b: "Indonesia", t: ", open to relocation" },
  ],
  email: "dimspangestup@gmail.com",
  phone: "+62 813-9399-0117",
  linkedin: "https://www.linkedin.com/in/dimas-pangestu-76b378182",
  github: "https://github.com/dimspangestu",
};

export const responseCard = {
  request: "GET /api/v1/engineers/dimas",
  body: {
    role: "Software Engineer (Full-Stack)",
    core: ["Python", "FastAPI", "Flask"],
    frontend: ["Next.js", "React"],
    domains: ["payment gateways", "financial reconciliation", "face verification"],
    ships_with: ["Docker", "GitLab CI/CD", "GCP"],
    work_mode: "remote | relocation",
  },
};

// tags drive the filter chips: payments, ai, platform, integration
export const projects = [
  {
    id: "face",
    method: "POST",
    endpoint: "/face/verify",
    org: "UIII",
    title: "Face verification for staff attendance",
    summary:
      "Staff check in with a selfie and the system confirms who they are. Real phone photos are messy, so the service had to be reliable with poor lighting, odd angles and very large images.",
    bullets: [
      [
        "FastAPI service with ArcFace embeddings, RetinaFace detection and automatic MTCNN fallback.",
        "Image-quality checks that tell users exactly why a photo was rejected.",
      ],
      [
        "Vector similarity search: best-match cosine similarity across several face-embedding vectors per person, stored in SQL Server.",
        "Async batch pipeline (asyncio, aiohttp) that builds embeddings from MinIO with controlled concurrency and retries.",
      ],
    ],
    chips: ["FastAPI", "DeepFace", "Vector embeddings", "OpenCV", "asyncio", "SQL Server", "MinIO", "Docker"],
    tags: ["ai"],
    wide: true,
  },
  {
    id: "ledgerowl",
    method: "POST",
    endpoint: "/reconcile/monthly",
    org: "Ledgerowl",
    title: "Automated financial reconciliation",
    summary:
      "A commercial accounting API that pulls a business's money movements from every source and matches them each month.",
    bullets: [
      "Integrations with Xero (OAuth 2.0), bank connections, POS systems and Shopee.",
      "Pipelines pulling and consolidating data from PostgreSQL, Firebase and AWS sources.",
      "Parsing and normalising transaction history into one schema.",
      "Monthly matching of incoming and outgoing transactions, plus tax reporting.",
    ],
    chips: ["Flask", "FastAPI", "GCP Cloud Run", "PostgreSQL", "Firebase", "AWS", "Xero API"],
    tags: ["payments", "integration"],
  },
  {
    id: "dana",
    method: "POST",
    endpoint: "/payments/qris",
    org: "DANA",
    title: "Merchant payment integrations",
    summary: "Helping merchants go live with DANA payment products, from sandbox to production.",
    bullets: [
      "QRIS (MPM), Payment Gateway and Disbursement flows with the DANA Python SDK.",
      "Request signing, payment initiation, callback handling and webhook verification.",
      "Diagnosing API issues so merchant transactions stay reliable.",
    ],
    chips: ["Python SDK", "QRIS", "Webhooks", "Signatures"],
    links: [
      { label: "DANA Python SDK", href: "https://github.com/dana-id/dana-python" },
      { label: "github.com/dana-id", href: "https://github.com/dana-id" },
    ],
    tags: ["payments", "integration"],
  },
  {
    id: "dana-qris-console",
    method: "POST",
    endpoint: "/v1.0/debit/notify",
    org: "Personal",
    title: "DANA QRIS Console: payment integration testing dashboard",
    summary:
      "A Next.js dashboard for testing DANA QRIS acquiring end to end against the sandbox: generate and pay QR codes, query, cancel and refund, and watch webhooks arrive in real time.",
    bullets: [
      [
        "MPM (generate QR with live status polling) and CPM (scan the customer's QR with the phone camera via BarcodeDetector).",
        "Query, cancel and refund flows with DANA SNAP status-code mapping.",
        "Every request signed server-side with SHA256withRSA and SNAP headers; the private key never reaches the browser.",
      ],
      [
        "Finish Notify webhook with signature verification, ported from the DANA Python SDK's parser to handle body escaping variants.",
        "Invalid signatures return 401 and never update a transaction; storage failures return 500 so DANA retries.",
        "Webhook log in Upstash Redis for serverless reliability on Vercel, and Basic Auth on the dashboard with constant-time comparison.",
      ],
    ],
    chips: ["Next.js 16", "TypeScript", "DANA SNAP API", "QRIS", "SHA256withRSA", "Upstash Redis", "Vercel"],
    links: [{ label: "GitHub repo", href: "https://github.com/dimspangestu/payment-integration" }],
    tags: ["payments", "integration"],
    wide: true,
    feature: true,
  },
  {
    id: "fondofund",
    method: "POST",
    endpoint: "/fundings/{id}/checkout",
    org: "Fondofund",
    title: "Fondofund: project financing platform with payments and disbursement",
    summary:
      "A full-stack platform where investors fund projects submitted by fund recipients, with verified identities, signed agreements and money tracked from checkout to payout.",
    bullets: [
      [
        "Midtrans Snap checkout with SHA-512 webhook signature verification and transaction status sync.",
        "Funding reservations that expire automatically, so unpaid commitments release the project's quota.",
        "Ledger entries, escrow wallet, disbursement to recipients, repayment schedules and investor payouts.",
      ],
      [
        "KYC for investors and recipients with document upload and admin verification.",
        "Funding agreements generated as PDFs, with an e-signature flow and signed-document storage.",
        "Next.js dashboards for investors, recipients and admins, with JWT auth and SAML login.",
      ],
    ],
    chips: ["FastAPI", "SQLAlchemy", "SQL Server", "Midtrans", "ReportLab", "Next.js", "Tailwind CSS"],
    links: [
      { label: "Backend repo", href: "https://github.com/dimspangestu/be-verfication" },
      { label: "Frontend repo", href: "https://github.com/dimspangestu/fe-verification" },
    ],
    tags: ["payments", "platform"],
    wide: true,
    feature: true,
  },
  {
    id: "conference",
    method: "POST",
    endpoint: "/submissions",
    org: "UIII",
    title: "Conference management platform",
    summary:
      "End-to-end platform for academic conferences: participant registration, paper submission and reviewer scoring.",
    bullets: [
      "Next.js frontend with a FastAPI and SQL Server backend.",
      "SAML single sign-on with role-based access for organisers and reviewers.",
    ],
    chips: ["Next.js", "FastAPI", "SQL Server", "SAML SSO"],
    tags: ["platform"],
  },
  {
    id: "chatbot",
    method: "GET",
    endpoint: "/chat/answer",
    org: "UIII",
    title: "Live chat and FAQ chatbot",
    summary:
      "A chat platform for prospective students (Admissions) and staff (IT Service Desk), live on the university's site.",
    bullets: [
      "Python NLP service answering from a curated Q&A dataset (TF-IDF, cosine similarity).",
      "Low-confidence answers hand off to human admins in real time.",
      "Two departments on shared infrastructure with strict data separation.",
    ],
    chips: ["FastAPI", "scikit-learn", "React", "SQL Server"],
    links: [{ label: "Try the IT Service Desk chatbot", href: "https://chatbot-ai.uiii.ac.id/it" }],
    tags: ["ai", "platform"],
  },
  {
    id: "booking",
    method: "POST",
    endpoint: "/bookings",
    org: "UIII",
    title: "Room and facility booking",
    summary: "Booking system with real-time availability across university rooms.",
    bullets: [
      "Google Calendar API for real-time availability and scheduling.",
      "Request attachments uploaded automatically to Google Drive.",
    ],
    chips: ["Next.js", "Google Calendar API", "Google Drive API"],
    tags: ["platform", "integration"],
  },
  {
    id: "wis",
    method: "POST",
    endpoint: "/invoices",
    org: "UIII",
    title: "Warehouse Information System",
    summary: "An internal marketplace for the university, similar to an e-commerce store.",
    bullets: ["Product listings, ordering and invoicing.", "Invoices with QR codes, PDF documents stored in MinIO."],
    chips: ["Next.js", "MinIO", "QR codes", "PDF"],
    tags: ["platform"],
  },
];

export const filters = [
  { id: "all", label: "All" },
  { id: "payments", label: "Payments" },
  { id: "integration", label: "Integrations" },
  { id: "ai", label: "AI / ML" },
  { id: "platform", label: "Platforms" },
];

export const moreSystems = [
  { t: "CCTV monitoring", d: "Hikvision RTSP streams to HLS with FastAPI and ffmpeg, viewed in Next.js." },
  { t: "LDAP ↔ Google Workspace sync", d: "Flask service keeping university accounts in sync." },
  { t: "Storage backup service", d: "Python service backing up MinIO object storage to Google Drive." },
  { t: "RADIUS usage dashboard", d: "Next.js reports on network sessions from the FreeRADIUS database." },
  { t: "JDIH legal document portal", d: "Next.js frontend with a Laravel and SQL Server backend." },
  { t: "Alumni portal & 360° campus tour", d: "Next.js apps with role-based access and SAML login." },
];

export const experience = [
  {
    when: "Nov 2022 – Present",
    sub: "4 yrs 1 mo",
    org: "Universitas Islam Internasional Indonesia",
    role: "Software Engineer (Full-Stack)",
    desc: "University platforms, integrations and infrastructure: conference, booking, face verification, chatbot, internal marketplace and public websites. Docker and GitLab CI/CD for every service.",
  },
  {
    when: "2024 – Present",
    sub: "Contract · project-based",
    org: "DANA Payment Gateway",
    remote: true,
    role: "Technical Support & Integration Engineer",
    desc: "QRIS, Payment Gateway and Disbursement integrations for merchants using the DANA Python SDK.",
  },
  {
    when: "Jan 2022 – Nov 2024",
    sub: "Contract · 2 yrs 11 mos",
    org: "Ledgerowl",
    remote: true,
    role: "Backend Developer",
    desc: "Financial automation API on GCP Cloud Run with Xero, bank, POS and Shopee integrations, data from PostgreSQL, Firebase and AWS, and automated monthly reconciliation.",
  },
  {
    when: "2021",
    sub: "Project-based · 5 mos",
    org: "Freelance / Contract Projects",
    role: "Backend Developer",
    desc: "REST API for Badr (Node.js, Express, MySQL) and PadiUMKM (Python Flask).",
  },
  {
    when: "Nov 2021 – Mar 2022",
    sub: "5 mos",
    org: "SPURR",
    role: "Frontend Developer",
    desc: "Customer-facing apps with React.js, including online food ordering.",
  },
  {
    when: "Jan 2020 – Nov 2021",
    sub: "1 yr 11 mos",
    org: "PT Mulia Inti Pangan",
    role: "Frontend & Backend Developer",
    desc: "Financial performance dashboard with a Python REST API.",
  },
  {
    when: "May 2018 – Dec 2019",
    sub: "2 internships",
    org: "Telkom Indonesia",
    role: "Research & Developer Intern, Developer Intern",
    desc: "Node.js information infrastructure with Nginx CDN, and a Cordova queue app for Plaza Telkom.",
  },
  {
    when: "2015 – 2019",
    sub: "Education",
    org: "Telkom University",
    role: "Bachelor of Informatics Engineering",
  },
];

export const skills = [
  { h: "Backend", p: "Python (FastAPI, Flask, asyncio), Node.js (Express), PHP (Laravel), REST API design" },
  { h: "Frontend", p: "Next.js, React (JSX), Tailwind CSS, WordPress with custom Elementor, on-page SEO" },
  { h: "Payments & finance", p: "DANA (QRIS, Payment Gateway, Disbursement), Midtrans, Xero, bank and POS integrations, reconciliation" },
  { h: "Auth & integrations", p: "OAuth 2.0, SAML SSO, LDAP, Google Workspace, Calendar and Drive APIs, Microsoft Graph" },
  { h: "Data & AI", p: "SQL Server, MySQL, PostgreSQL, Firebase, AWS, MinIO, vector embeddings & similarity search, DeepFace, OpenCV, scikit-learn, text-to-speech (TTS)" },
  { h: "DevOps", p: "Docker, GitLab CI/CD, Linux, Nginx, GCP (Cloud Run), AWS" },
];