import type { Translations } from "./types";

export const en: Translations = {
  meta: {
    lang: "English",
    dir: "ltr",
    siteTitle: "HARTMANN Easy Care Hub — Contactless vital-signs monitoring for care facilities",
    siteDescription: "A clinical visualisation platform for care homes. Continuous, contactless monitoring of heart rate, breathing rate and bed activity — powered by certified medical devices."
  },
  nav: { home: "Home", manual: "User Manual", faq: "FAQ", releases: "Release Notes", contact: "Contact", login: "Sign in", requestDemo: "Request a demo" },
  lang: { switch: "Language", en: "English", de: "Deutsch", fr: "Français" },
  hero: {
    eyebrow: "Clinical intelligence for care facilities",
    title1: "Quiet, contactless",
    title2: "vital-signs care.",
    sub: "HARTMANN Easy Care Hub brings heart rate, breathing rate and bed-activity insights from every resident into one clinical dashboard — without wearables, without wires.",
    ctaPrimary: "Request a demo",
    ctaSecondary: "Explore the manual",
    meta1: "CE-marked medical device components",
    meta2: "GDPR & ISO 27001 aligned",
    meta3: "Deployed across EU care homes",
    dashTitle: "Live dashboard",
    dashSubtitle: "Zone A · Room 204",
    hrLabel: "Heart rate",
    brLabel: "Breathing rate",
    bedLabel: "Bed presence",
    statusOk: "In bed · asleep",
    statusWarn: "Out of bed · 12 min"
  },
  trust: { label: "Built with trusted medical partners" },
  features: {
    eyebrow: "Why Easy Care Hub",
    title: "One dashboard for every shift, every resident.",
    sub: "Designed with care teams for care teams — so nurses can spend less time checking screens and more time with residents.",
    f1title: "Contactless radar monitoring",
    f1body: "Certified Sleepiz radar captures heart rate and breathing rate without touching the resident — through sheets, pyjamas or blankets.",
    f2title: "Unified resident view",
    f2body: "Heart rate, breathing rate, bed presence and historical trends for every resident, organised by zone and room.",
    f3title: "Smart notifications",
    f3body: "Threshold-based or baseline-learned alerts for HR, BrR and out-of-bed — tuneable globally or per resident.",
    f4title: "Role-based access",
    f4body: "System Owner, Administrator and User roles with a granular CRUDS permission model, aligned with clinical workflows.",
    f5title: "Audit-ready reports",
    f5body: "Every acknowledged notification lands in a resident's Audit Log. Reviewable, exportable, compliant.",
    f6title: "Ready for your facility",
    f6body: "Multilingual interface, cloud-hosted in the EU, integrates with your existing nursing workflow."
  },
  how: {
    eyebrow: "How it works",
    title: "From radar to rounded care in four steps.",
    sub: "Easy Care Hub connects the certified Sleepiz sensor and the ACTIMI notification engine into a single, nurse-friendly view.",
    s1t: "Sensor captures vitals",
    s1b: "A contactless radar placed by each bed measures breathing and heartbeat while the resident sleeps.",
    s2t: "Data reaches the cloud",
    s2b: "The Sleepiz One+ cloud analyses signals and shares validated measurements via secure API.",
    s3t: "Hub makes it clinical",
    s3b: "Easy Care Hub organises residents by zone, tracks trends and raises notifications when values drift.",
    s4t: "Care team acts",
    s4b: "Nurses mark notifications as reviewed — each acknowledgement is logged for quality review and audit.",
    mockTitle: "Resident · Room 112",
    mockHR: "Heart rate", mockBR: "Breathing rate", mockBed: "Bed presence",
    mockLast: "Last night score", mockZone: "Zone", mockZoneVal: "North wing"
  },
  stats: {
    eyebrow: "Designed for scale",
    title: "Care teams, quietly supported.",
    sub: "A platform meant to fade into the background — until it matters.",
    s1n: "24/7", s1l: "Continuous monitoring without wearables",
    s2n: "3", s2l: "Role levels with granular permissions",
    s3n: "2", s3l: "Notification models: threshold + baseline",
    s4n: "EU", s4l: "Data residency & regulatory alignment"
  },
  cta: {
    title: "See Easy Care Hub in your facility.",
    sub: "Book a 30-minute demo — we'll walk through the dashboard, setup and the clinical governance behind it.",
    primary: "Request a demo", secondary: "Read the manual"
  },
  footer: {
    tagline: "Clinical visualisation platform for care homes, by PAUL HARTMANN AG.",
    product: "Product", resources: "Resources", company: "Company",
    productLinks: ["Overview", "Features", "Security", "For IT teams"],
    resourcesLinks: ["User manual", "Release notes", "FAQ", "Support"],
    companyLinks: ["About HARTMANN", "Press", "Careers", "Contact"],
    copyright: "© 2026 PAUL HARTMANN AG. The Easy Care Hub platform is not a medical device under EU MDR 2017/745.",
    legal: ["Imprint", "Privacy", "Terms"]
  },
  download: {
    pdf: "Download the manual",
    pdfSub: "A typeset PDF of the full user manual — ready for print and offline reference.",
    pdfMeta: "PDF · A4 · Revision 1.4 · EN",
    pdfCta: "Download PDF"
  },
  manual: {
    breadcrumb: "Documentation",
    eyebrow: "User Manual · Rev. 1.4",
    title: "HARTMANN Easy Care Hub — User Manual",
    intro: "This manual describes how authorised staff use the HARTMANN Easy Care Hub platform to visualise and organise resident-related data generated by connected monitoring devices. It covers navigation, roles, notification configuration and administration.",
    tocTitle: "On this page",
    sections: {
      s1: "1. General", s11: "1.1 Scope & safety information", s12: "1.2 Roles and permissions", s13: "1.3 Abbreviations and glossary",
      s2: "2. Platform overview", s21: "2.1 Login", s22: "2.2 Menu", s23: "2.3 Navigation bar", s24: "2.4 Dashboard",
      s3: "3. Residents overview", s31: "3.1 Browsing residents", s32: "3.2 Creating a new resident",
      s4: "4. Resident detail page", s41: "4.1 Overview tab", s42: "4.2 Trends tab", s43: "4.3 Notifications tab", s44: "4.4 Audit log tab",
      s5: "5. Notifications", s51: "5.1 Overview", s52: "5.2 Medical settings", s53: "5.3 Bed activity",
      s6: "6. Devices", s7: "7. Administration", s71: "7.1 Zones", s72: "7.2 Locations", s73: "7.3 Users",
      s8: "8. My account", s9: "9. About & legal"
    },
    s1: {
      lead: "This User Manual describes the functionality of the HARTMANN Easy Care Hub platform and provides guidance on its use. The platform is intended for authorised staff in care facilities to visualise and organise resident data produced by connected devices.",
      scope: {
        title: "Scope and intended audience",
        body: "Easy Care Hub is intended for authorised care-facility personnel — System Owners, Administrators, Head Nurses and Nurses — to visualise heart rate, breathing rate and bed-presence data alongside configured notifications. It is not intended for life-critical alarming."
      },
      safety: {
        title: "Important safety and usage information",
        points: [
          "The Easy Care Hub platform itself is not a medical device under EU MDR 2017/745. It is intended solely for visualisation and presentation of data generated by connected devices.",
          "Values shown are for informational purposes only. They are not intended for diagnostic or therapeutic use and must not be used as the sole basis for medical decisions.",
          "Clinical decisions remain the sole responsibility of qualified healthcare professionals based on a comprehensive assessment.",
          "The accuracy and availability of displayed data depend on correct functioning, configuration and connectivity of the underlying medical devices.",
          "The platform does not guarantee real-time monitoring. Values may be subject to processing or transmission delays.",
          "Always verify critical information using appropriate clinical methods. Do not rely exclusively on the platform.",
          "Connected devices remain regulated medical devices subject to their own Instructions for Use."
        ],
        warn: "The Easy Care Hub is not intended to be used as an alarm system for life-threatening situations. In case of acute, life-threatening symptoms, contact emergency services immediately."
      },
      roles: {
        title: "Roles and permissions",
        lead: "Three roles are supported: System Owner, Administrator and User. The permission model uses CRUDS — Create, Read, Update, Delete, Share.",
        tHead: ["Capability", "System Owner", "Administrator", "User"],
        rows: [
          ["Vital signs", "R", "R", "R"],
          ["Devices", "RUS", "RUS", "—"],
          ["Locations", "CRUS", "RUS", "R"],
          ["Residents", "CRUS", "CRUS", "RS"],
          ["Users", "CRUS", "CRUS", "—"],
          ["Individual thresholds", "CRUS", "CRUS", "R"],
          ["Baseline thresholds", "CRUS", "CRUS", "R"],
          ["Reports", "R / Download", "R / Download", "R / Download"],
          ["Notifications", "R / Mark reviewed", "R / Mark reviewed", "R / Mark reviewed"]
        ],
        key: "C = Create · R = Read · U = Update · D = Delete · S = Share · — = no access"
      },
      abbr: {
        title: "Abbreviations & glossary",
        rows: [
          ["HR", "Heart Rate — number of heartbeats per minute."],
          ["BrR", "Breathing Rate — number of breaths taken per minute."],
          ["Global settings", "Notification configurations that apply system-wide to all residents."],
          ["Individual settings", "Per-resident overrides for global settings, e.g. out-of-bed duration."],
          ["Baseline", "A personalised threshold generated from the resident's recent data history."],
          ["MDR", "Medical Device Regulation (EU) 2017/745."],
          ["Audit log", "Per-resident archive of notifications already reviewed by a caregiver."]
        ]
      }
    },
    s2: {
      login: {
        title: "Login",
        body: "Only authorised users can access Easy Care Hub. After your account is created and a password set, sign in with your registered email and password.",
        steps: [
          "Enter your user email.",
          "Enter your password.",
          "Click Login. The platform authenticates your credentials and displays the Dashboard with resident tiles.",
          "If you tick Remember me, your email will be remembered on the device.",
          "Use Forgot password? to request a reset link. A confirmation message and a Return home button are shown."
        ]
      },
      menu: {
        title: "Menu",
        body: "On login, the Vitals Dashboard opens by default. The left-hand menu can be expanded or collapsed via the arrow at the bottom. The following sections are visible according to your role:",
        items: ["Vitals", "Residents", "Notifications", "Devices", "Administration"]
      },
      navbar: {
        title: "Navigation bar",
        body: "The top navigation bar is always visible. From left to right it contains:",
        items: [
          "The HARTMANN / Easy Care Hub logo — returns to the Dashboard.",
          "The Support icon — opens the Legal/About and FAQ tabs.",
          "The user icon — opens My Account, About Us and Log out."
        ]
      },
      dash: {
        title: "Dashboard",
        lead: "The Dashboard is the default landing view after login. It displays all devices assigned to the facility, grouped by zone.",
        zones: "All Zones is selected by default. Click another zone tab to filter the view to devices assigned to that zone.",
        views: "Switch between tile view and table view using the toggle at the top right.",
        filter: "Use the visual status filter to narrow the dashboard by resident status: All, Asleep, Away, In Bed or Disconnected.",
        search: "Use the search field to find a specific device number or resident.",
        color: "Each resident tile is coloured by current status — Asleep, Away, In Bed or Disconnected. Clicking a tile opens the Resident Detail Page on the Trends tab.",
        sideTitle: "Notification sidebar",
        sideBody: "The sidebar lists active notifications for HR, BrR and Out of Bed in order of triggering. Click the check icon to mark a notification as reviewed — it is removed from the sidebar and archived to the resident's Audit Log. Click See all to open the full Notifications page. The bell icon at the top right collapses or expands the sidebar."
      }
    },
    s3: {
      lead: "Selecting Residents in the left menu opens the Residents overview — a single table of every resident in the facility with their linked device and location.",
      columns: ["Resident ID", "Device ID", "Zone", "Location", "Resident status (Active / Discharged)"],
      searchTitle: "Finding a resident",
      searchBody: "Use the search field at the top of the table to filter by Resident ID, device or location.",
      createTitle: "Creating a new resident",
      createBody: "Click + Create Resident in the top-right corner. A sidebar opens on the right with the following fields:",
      createFields: [
        "Resident ID (required).",
        "First name, last name, date of birth (optional).",
        "Gender (optional).",
        "Location (dropdown). Once selected, Device and Zone fields become active; Zone is filled automatically based on location.",
        "Time-out-of-bed notification — defaults to the global setting. Choose Manual settings to override."
      ],
      createConflict: "If the chosen location is already assigned to another resident, a confirmation popup appears. Click Yes to reassign the location, or No to leave the field blank.",
      createManual: "Manual settings offer three options: notify if the resident has been out of bed more than N minutes; notify if the resident is out of bed N% longer than usual; disable.",
      createSave: "When all mandatory fields are filled, the Create button becomes active. Click Create to save the resident; the sidebar closes and a confirmation message appears."
    },
    s4: {
      lead: "The Resident Detail Page can be reached in several ways: from the Residents list (Overview tab), from a Dashboard tile (Trends tab), or from a notification (Notifications tab). The header always shows Resident ID, HR (bpm), BrR (brpm) and bed presence.",
      overview: {
        title: "Overview tab",
        body: "Displays general information about the resident, split into Details and Individual Notifications:",
        details: ["Status (Active / Discharged)", "Resident ID", "First & last name, date of birth", "Gender", "Location, Device, Zone"],
        indiv: [
          "Time-out-of-bed rule — inherits the global rule by default, or can be overridden.",
          "Bedtime period is editable only from the Administration section, not here.",
          "Manual settings expose the same three options as during resident creation."
        ]
      },
      trends: {
        title: "Trends tab",
        body: "Shows the resident's HR and BrR over time alongside the last night's sleep report. Filter by date or timeframe. Y-axis ranges: HR 40–120 bpm, BrR 5–40 brpm. Yellow and purple markers indicate the configured global thresholds and baseline values.",
        missing: "If no data appears, either last night's data has not yet been delivered (data arrives roughly 30 minutes after the facility's defined night period), or data quality was insufficient — for example, the resident was not in bed, or fewer than four hours of data were recorded. If the resident was in bed all night and data is still missing, contact customer service."
      },
      notif: {
        title: "Notifications tab",
        body: "Lists every notification for this resident with Type, Resident ID, Device ID, Time, Details and Actions.",
        presets: ["Custom — pick a calendar date range.", "Last Night.", "Last Week."],
        review: "Mark a notification as reviewed using the check icon in the Actions column. Once reviewed, it is removed from this tab and moved to the Audit Log.",
        filter: "Click Filter to narrow by type (HR, BrR, Out of Bed). Active filters show as chips above the table; remove them with the x."
      },
      audit: {
        title: "Audit Log tab",
        body: "A chronological archive of every reviewed notification. Columns: Type, Device ID, Time, Details, Actions. Since these entries have been reviewed, the check icon is not interactive."
      }
    },
    s5: {
      lead: "The Notifications page aggregates alerts across the entire facility. You can reach it from the left menu or via See all in the Dashboard sidebar. Three tabs are available:",
      tabs: ["Overview", "Medical settings", "Bed activity"],
      overview: {
        title: "Overview tab",
        body: "All active notifications across all residents, listed chronologically with Type, Resident ID, Device ID, Time/Details and Actions. Mark as reviewed and advanced filtering are supported. Filter criteria: Type, Resident ID, Device ID, Period and Status (New / Reviewed)."
      },
      medical: {
        title: "Medical settings tab",
        body: "Global notification settings for clinical values. Configured rules apply to all residents and cannot be overridden at resident level. Two notification models are available:",
        types: [
          { n: "Threshold-based", d: "Alerts trigger when HR or BrR crosses configured static thresholds." },
          { n: "Baseline-based", d: "Alerts trigger when values deviate significantly from the resident's own recent history." }
        ],
        defaults: "By default the platform pre-fills these values using ranges derived from medical studies and established clinical guidelines. Click the edit icon on the right to modify; the other tabs become unavailable while a bottom bar with Cancel and Save is shown."
      },
      bed: {
        title: "Bed activity tab",
        body: "Configures the Out-of-Bed notification applied to all residents by default. Override per resident from the Resident Detail page. Three rules can be applied:",
        rules: [
          "Notify if the resident has been out of bed more than N minutes.",
          "Notify if the resident is out of bed N% longer than usual.",
          "Disable."
        ],
        bedtime: "Set the Bedtime Period by clicking the time fields. Notifications remain enabled during these hours — when residents are expected to be sleeping."
      }
    },
    s6: {
      lead: "Visible only to System Owner and Administrator roles. The Devices page lists every device in the facility:",
      cols: ["Device ID", "Zone", "Location", "Resident ID", "Device status (Active / Disconnected)"],
      detail: "Clicking a device opens its detail page. Zone, Location and assigned Resident can be edited from there; you may also create a new Location inline via + Create new location. Cancel prompts a confirmation popup if unsaved changes exist; Save persists the change and shows a confirmation toast."
    },
    s7: {
      lead: "Visible only to System Owner and Administrator roles. Administration gathers Zones, Locations and Users. Create-action buttons and a Back link are always visible at the top.",
      zones: {
        title: "Zones tab",
        body: "Table of every zone with Name, Description, Total / Active / Disconnected device counts and Actions (Delete — System Owner only). Create a zone via + Create Zone; Name is required, Description optional."
      },
      locations: {
        title: "Locations tab",
        body: "Table of every location with Name, Zone, Device ID, Resident ID and Actions. Create a location via + Create Location; Floor, Room and Bed populate a live Preview. Saving enables the Create button once at least one field is filled."
      },
      users: {
        title: "Users tab",
        body: "Lists every user with Name, Access Level, Email, Status and Last Updated. Create new users via + Create User with First Name, Last Name, Email, Role and Access Level — the level's capabilities are shown below the field for clarity."
      }
    },
    s8: {
      lead: "Click the user avatar in the upper-right corner and select My Account to view and edit your profile:",
      items: ["First name (editable)", "Last name (editable)", "Email (editable)", "Role", "Language — English or Deutsch", "Facility", "Access Level", "Terms & Conditions, Privacy Notice"],
      save: "Click the edit icon to change editable fields. If you press Cancel with unsaved changes, a confirmation popup asks whether to discard them."
    },
    s9: {
      lead: "The About & Legal screen consolidates platform information into four sections:",
      items: [
        { t: "Software Version", d: "Platform version, build date and release type." },
        { t: "Distributor", d: "PAUL HARTMANN AG, Paul-Hartmann-Straße 12, 89522 Heidenheim, Germany · info@hartmann.info · +49 7321 360." },
        { t: "Manufacturer — Sleepiz", d: "Sleepiz AG, Hornbachstrasse 23, 8008 Zurich, Switzerland. Responsible for the contactless radar hardware (accessory to a medical device under Article 2(2) EU MDR, class IIa) and the Sleepiz One+ Cloud analysing the signals (class IIa software)." },
        { t: "Manufacturer — ACTIMI", d: "ACTIMI GmbH, Albert-Schäffle Str. 119, 70186 Stuttgart, Germany. Responsible for the ACTIMI Dashboard (non-medical display software) and ACTIMI Signals v1.0 (backend notification engine, class IIa, UDI-DI 42700031203-API-XG)." }
      ],
      faqCta: "The About screen also contains a Need more help? button that redirects to the FAQ tab."
    }
  },
  faq: {
    breadcrumb: "Support",
    eyebrow: "Frequently asked questions",
    title: "Everything your care team needs to know.",
    sub: "Quick answers for daily use, setup and clinical governance. Still stuck? Reach out to HARTMANN digital support.",
    searchPlaceholder: "Search the FAQ — e.g. 'out of bed'",
    categories: { all: "All", clinical: "Clinical use", setup: "Setup & devices", account: "Account & roles", security: "Security & compliance" },
    items: [
      { c: "clinical", q: "Is the Easy Care Hub a medical device?", a: "The Easy Care Hub platform itself is not a medical device under EU MDR 2017/745. It is intended solely for the visualisation and presentation of data generated by connected devices. The connected Sleepiz radar hardware and the ACTIMI Signals notification engine are regulated medical devices subject to their own Instructions for Use." },
      { c: "clinical", q: "Can I rely on Easy Care Hub as an emergency alarm?", a: "No. The platform is not intended to be used as an alarm system for potentially life-threatening situations in which immediate medical intervention is required. Real-time delivery of alerts cannot be guaranteed. In case of acute symptoms, contact emergency services." },
      { c: "clinical", q: "Why do no vitals or sleep data appear for a resident?", a: "Night-report data are typically delivered about 30 minutes after your facility's defined night period. If values are still missing, data quality may have been insufficient — for example, the resident was not in bed, or fewer than four hours of data were recorded. If this occurs repeatedly while the resident was in bed, contact customer service." },
      { c: "clinical", q: "What is the difference between threshold-based and baseline-based notifications?", a: "Threshold-based notifications trigger when HR or BrR cross static, facility-wide limits. Baseline-based notifications use the resident's own recent measurements to detect meaningful deviation from their personal norm — useful for residents who consistently sit outside standard ranges." },
      { c: "clinical", q: "How does the Out-of-Bed rule work?", a: "You can choose one of three rules, applied globally or per resident: notify when the resident has been out of bed more than N minutes; notify when they are out of bed N% longer than usual; or disable. The Bedtime Period defines the hours during which the rule is active." },
      { c: "setup", q: "Which devices does Easy Care Hub support?", a: "Easy Care Hub displays data from the Sleepiz contactless radar (hardware) processed by the Sleepiz One+ Cloud Software (class IIa medical device). The ACTIMI Signals backend (v1.0, class IIa) powers the notification engine." },
      { c: "setup", q: "How do I add a new resident to a bed?", a: "Go to Residents → + Create Resident. Enter the Resident ID (required), then pick the Location — the Device and Zone auto-populate. If the location is already assigned, you'll be asked whether to reassign it." },
      { c: "setup", q: "Can I override global notification rules for one resident?", a: "Yes. From the Resident Detail Page → Overview tab, the Individual Notifications section lets you override the global Time-out-of-Bed rule with manual settings. The global Bedtime Period itself is edited from Administration." },
      { c: "setup", q: "How do I create a new Zone or Location?", a: "From Administration → Zones or Locations, click + Create Zone / + Create Location. Only System Owners and Administrators can manage these. Only System Owners can delete a zone or location." },
      { c: "account", q: "Which roles exist and who can do what?", a: "Easy Care Hub supports three roles: System Owner (full control), Administrator (facility management and configuration) and User (read-only clinical operation with notification review). Exact permissions follow a CRUDS model — see the user manual for the full matrix." },
      { c: "account", q: "How do I change my password?", a: "From the login screen click Forgot password?, enter your email and submit. You will receive a reset link. Once logged in, language and profile details can be updated from My Account." },
      { c: "account", q: "Can I change the interface language?", a: "Yes. Go to My Account → Language. English and Deutsch are available inside the application; the public website also offers Français." },
      { c: "security", q: "Where is my resident data stored?", a: "All resident data is hosted in EU data centres by our certified partners. The platform is aligned with GDPR and ISO 27001 practices, and access is governed by role-based permissions and audit logs." },
      { c: "security", q: "How long are notifications retained?", a: "Once a caregiver marks a notification as reviewed, it is archived to the resident's Audit Log and retained according to your facility's retention policy and applicable local regulation." },
      { c: "security", q: "How do I report a security concern or suspected incident?", a: "Please contact HARTMANN digital support immediately using the contact information on this page. For matters regarding the underlying medical devices, contact Sleepiz AG or ACTIMI GmbH per their Instructions for Use." }
    ],
    contactTitle: "Talk to HARTMANN support",
    contactSub: "Our digital support team helps with onboarding, permissions and day-to-day operations.",
    emailLabel: "Email", phoneLabel: "Phone", hoursLabel: "Hours",
    hoursValue: "Mon–Fri · 08:00–18:00 CET"
  },
  releases: {
    breadcrumb: "Product",
    eyebrow: "Release notes",
    title: "What's new in Easy Care Hub.",
    sub: "Every update, change and fix shipped to the platform. Subscribe to the RSS feed for notifications.",
    filters: { all: "All", new: "New", improved: "Improved", fixed: "Fixed", security: "Security" },
    subscribe: "Subscribe",
    sideTitle: "Earlier versions",
    sideSub: "Browse previous milestones.",
    items: [
      {
        ver: "1.4.0", date: "2026-04-02", tag: "new",
        title: "Baseline-based notifications, French UI and redesigned sidebar",
        summary: "Our biggest release of the year. Baseline alerting goes GA, the notification sidebar gets a rebuild, and we ship a French interface for our Swiss and Belgian customers.",
        groups: [
          { h: "New", items: [
            "Baseline-based notifications for HR and BrR are generally available. Values are learned from each resident's recent data history and update daily.",
            "French is now a supported interface language on the public website. Inside the platform, English and Deutsch remain the official clinical languages.",
            "A new Audit Log export (CSV, PDF) is available from the Resident Detail Page, filtered by the currently selected date range."
          ]},
          { h: "Improved", items: [
            "The Notifications sidebar now groups alerts by resident, showing the count next to the resident name to keep long shift-handovers readable.",
            "Trends charts now render up to 3× faster for residents with more than a year of history.",
            "Clearer empty-state messages on the Dashboard when a zone has no assigned devices."
          ]},
          { h: "Fixed", items: [
            "Fixed an issue where the bell icon occasionally stayed in the expanded state after a page navigation.",
            "Fixed a rare case where the Overview tab would show a stale Resident Status after a status change was saved elsewhere."
          ]}
        ]
      },
      {
        ver: "1.3.1", date: "2026-02-14", tag: "security",
        title: "Session hardening and MFA for System Owners",
        summary: "A focused security release. Multi-factor authentication is now mandatory for System Owner accounts, and session token handling has been tightened across the platform.",
        groups: [
          { h: "Security", items: [
            "Multi-factor authentication is now required for the System Owner role on every new sign-in.",
            "Session tokens now rotate on privilege change (for example when a user is promoted from User to Administrator).",
            "Refined Content-Security-Policy headers and removed unused origins from the allow-list."
          ]},
          { h: "Fixed", items: [
            "Resolved an edge case where the Remember me checkbox could carry over across browser profiles on the same device."
          ]}
        ]
      },
      {
        ver: "1.3.0", date: "2025-12-09", tag: "improved",
        title: "Multi-zone dashboard, faster search and clearer status colours",
        summary: "The Dashboard grows up. Zone tabs now accept keyboard navigation, search finds residents and devices in a single query, and the four status colours have been rebalanced for WCAG AA contrast.",
        groups: [
          { h: "Improved", items: [
            "Keyboard shortcuts: 1–9 switches between the first nine zones, and / focuses the search field.",
            "Combined Search now matches Resident ID, Device ID and Location in one query, ranked by recency.",
            "Status colours for Asleep, In Bed, Away and Disconnected were updated to meet WCAG AA contrast on both the tile and table views."
          ]},
          { h: "New", items: [
            "Bulk mark-as-reviewed on the Notifications page — select multiple rows and acknowledge them in one action.",
            "Tile view now shows a subtle trend sparkline for HR over the last 60 minutes."
          ]}
        ]
      },
      {
        ver: "1.2.0", date: "2025-10-21", tag: "new",
        title: "Night reports, Administration revamp and device deep-links",
        summary: "Night reports land on the Trends tab. Administration gets a cleaner Zones / Locations / Users split. Devices can now be shared as deep links between team members.",
        groups: [
          { h: "New", items: [
            "Nightly sleep reports appear on the Resident Detail Page roughly 30 minutes after the facility's defined night period ends.",
            "Deep-link URLs for Devices (e.g. /devices/SN-12345) — share a device with a colleague in one click.",
            "Administration is now a three-tab view: Zones, Locations, Users."
          ]},
          { h: "Fixed", items: [
            "Fixed an intermittent issue where the Trends chart would reset zoom after tab-switch.",
            "Fixed an incorrect abbreviation tooltip on BrR graphs."
          ]}
        ]
      },
      {
        ver: "1.1.0", date: "2025-08-05", tag: "improved",
        title: "Role refinements and threshold editor",
        summary: "Permission matrix cleaned up to match how real care facilities operate. The medical-threshold editor gets inline validation and visual feedback.",
        groups: [
          { h: "Improved", items: [
            "Threshold editor now validates HR and BrR ranges against clinical defaults and highlights unusual values in-line.",
            "Users can now be deactivated without losing their audit history.",
            "The Administration → Users table gained Status and Last Updated columns."
          ]}
        ]
      },
      {
        ver: "1.0.0", date: "2025-05-02", tag: "new",
        title: "Easy Care Hub — general availability",
        summary: "The first production release. Vitals dashboard, per-resident detail pages, global and individual notifications and a foundational role model.",
        groups: [
          { h: "New", items: [
            "Live Dashboard with tile and table views, grouped by zone.",
            "Resident Detail Pages with Overview, Trends, Notifications and Audit Log tabs.",
            "Threshold-based notifications for HR, BrR and Out-of-Bed.",
            "Role model: System Owner, Administrator and User (CRUDS)."
          ]}
        ]
      }
    ]
  }
};
