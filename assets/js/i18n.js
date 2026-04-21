/* =====================================================================
   HARTMANN Easy Care Hub — i18n engine
   Supports EN / DE / FR, persisted in localStorage.
   Usage:
     <h1 data-i18n="hero.title"></h1>
     <p data-i18n="hero.sub"></p>
     <input data-i18n-attr="placeholder:faq.searchPlaceholder">
   ===================================================================== */

const I18N = {
  en: {
    meta: {
      lang: "English",
      dir: "ltr",
      siteTitle: "HARTMANN Easy Care Hub — Contactless vital-signs monitoring for care facilities",
      siteDescription: "A clinical visualisation platform for care homes. Continuous, contactless monitoring of heart rate, breathing rate and bed activity — powered by certified medical devices.",
    },
    nav: {
      home: "Home",
      manual: "User Manual",
      faq: "FAQ",
      releases: "Release Notes",
      contact: "Contact",
      login: "Sign in",
      requestDemo: "Request a demo"
    },
    lang: {
      switch: "Language",
      en: "English",
      de: "Deutsch",
      fr: "Français"
    },
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
    trust: {
      label: "Built with trusted medical partners",
    },
    features: {
      eyebrow: "Why Easy Care Hub",
      title: "One dashboard for every shift, every resident.",
      sub: "Designed with care teams for care teams — so nurses can spend less time checking screens and more time with residents.",
      f1title: "Contactless radar monitoring",
      f1body:  "Certified Sleepiz radar captures heart rate and breathing rate without touching the resident — through sheets, pyjamas or blankets.",
      f2title: "Unified resident view",
      f2body:  "Heart rate, breathing rate, bed presence and historical trends for every resident, organised by zone and room.",
      f3title: "Smart notifications",
      f3body:  "Threshold-based or baseline-learned alerts for HR, BrR and out-of-bed — tuneable globally or per resident.",
      f4title: "Role-based access",
      f4body:  "System Owner, Administrator and User roles with a granular CRUDS permission model, aligned with clinical workflows.",
      f5title: "Audit-ready reports",
      f5body:  "Every acknowledged notification lands in a resident's Audit Log. Reviewable, exportable, compliant.",
      f6title: "Ready for your facility",
      f6body:  "Multilingual interface, cloud-hosted in the EU, integrates with your existing nursing workflow."
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
      mockHR: "Heart rate",
      mockBR: "Breathing rate",
      mockBed: "Bed presence",
      mockLast: "Last night score",
      mockZone: "Zone",
      mockZoneVal: "North wing"
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
      primary: "Request a demo",
      secondary: "Read the manual"
    },
    footer: {
      tagline: "Clinical visualisation platform for care homes, by PAUL HARTMANN AG.",
      product: "Product",
      resources: "Resources",
      company: "Company",
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
    feedback: {
      button: "Feedback",
      buttonTitle: "Share your feedback"
    },
    /* ---------------- MANUAL ---------------- */
    manual: {
      breadcrumb: "Documentation",
      eyebrow: "User Manual · Rev. 1.4",
      title: "HARTMANN Easy Care Hub — User Manual",
      intro: "This manual describes how authorised staff use the HARTMANN Easy Care Hub platform to visualise and organise resident-related data generated by connected monitoring devices. It covers navigation, roles, notification configuration and administration.",
      tocTitle: "On this page",
      sections: {
        s1: "1. General",
        s11: "1.1 Scope & safety information",
        s12: "1.2 Roles and permissions",
        s13: "1.3 Abbreviations and glossary",
        s2: "2. Platform overview",
        s21: "2.1 Login",
        s22: "2.2 Menu",
        s23: "2.3 Navigation bar",
        s24: "2.4 Dashboard",
        s3: "3. Residents overview",
        s31: "3.1 Browsing residents",
        s32: "3.2 Creating a new resident",
        s4: "4. Resident detail page",
        s41: "4.1 Overview tab",
        s42: "4.2 Trends tab",
        s43: "4.3 Notifications tab",
        s44: "4.4 Audit log tab",
        s5: "5. Notifications",
        s51: "5.1 Overview",
        s52: "5.2 Medical settings",
        s53: "5.3 Bed activity",
        s6: "6. Devices",
        s7: "7. Administration",
        s71: "7.1 Zones",
        s72: "7.2 Locations",
        s73: "7.3 Users",
        s8: "8. My account",
        s9: "9. About & legal"
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
          tHead: ["Capability","System Owner","Administrator","User"],
          rows: [
            ["Vital signs","R","R","R"],
            ["Devices","RUS","RUS","—"],
            ["Locations","CRUS","RUS","R"],
            ["Residents","CRUS","CRUS","RS"],
            ["Users","CRUS","CRUS","—"],
            ["Individual thresholds","CRUS","CRUS","R"],
            ["Baseline thresholds","CRUS","CRUS","R"],
            ["Reports","R / Download","R / Download","R / Download"],
            ["Notifications","R / Mark reviewed","R / Mark reviewed","R / Mark reviewed"]
          ],
          key: "C = Create · R = Read · U = Update · D = Delete · S = Share · — = no access"
        },
        abbr: {
          title: "Abbreviations & glossary",
          rows: [
            ["HR","Heart Rate — number of heartbeats per minute."],
            ["BrR","Breathing Rate — number of breaths taken per minute."],
            ["Global settings","Notification configurations that apply system-wide to all residents."],
            ["Individual settings","Per-resident overrides for global settings, e.g. out-of-bed duration."],
            ["Baseline","A personalised threshold generated from the resident's recent data history."],
            ["MDR","Medical Device Regulation (EU) 2017/745."],
            ["Audit log","Per-resident archive of notifications already reviewed by a caregiver."]
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
        columns: ["Resident ID","Device ID","Zone","Location","Resident status (Active / Discharged)"],
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
          details: ["Status (Active / Discharged)","Resident ID","First & last name, date of birth","Gender","Location, Device, Zone"],
          indiv:   ["Time-out-of-bed rule — inherits the global rule by default, or can be overridden.","Bedtime period is editable only from the Administration section, not here.","Manual settings expose the same three options as during resident creation."]
        },
        trends: {
          title: "Trends tab",
          body: "Shows the resident's HR and BrR over time alongside the last night's sleep report. Filter by date or timeframe. Y-axis ranges: HR 40–120 bpm, BrR 5–40 brpm. Yellow and purple markers indicate the configured global thresholds and baseline values.",
          missing: "If no data appears, either last night's data has not yet been delivered (data arrives roughly 30 minutes after the facility's defined night period), or data quality was insufficient — for example, the resident was not in bed, or fewer than four hours of data were recorded. If the resident was in bed all night and data is still missing, contact customer service."
        },
        notif: {
          title: "Notifications tab",
          body: "Lists every notification for this resident with Type, Resident ID, Device ID, Time, Details and Actions.",
          presets: ["Custom — pick a calendar date range.","Last Night.","Last Week."],
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
        tabs: ["Overview","Medical settings","Bed activity"],
        overview: {
          title: "Overview tab",
          body: "All active notifications across all residents, listed chronologically with Type, Resident ID, Device ID, Time/Details and Actions. Mark as reviewed and advanced filtering are supported. Filter criteria: Type, Resident ID, Device ID, Period and Status (New / Reviewed)."
        },
        medical: {
          title: "Medical settings tab",
          body: "Global notification settings for clinical values. Configured rules apply to all residents and cannot be overridden at resident level. Two notification models are available:",
          types: [
            { n: "Threshold-based", d: "Alerts trigger when HR or BrR crosses configured static thresholds." },
            { n: "Baseline-based",  d: "Alerts trigger when values deviate significantly from the resident's own recent history." }
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
        cols: ["Device ID","Zone","Location","Resident ID","Device status (Active / Disconnected)"],
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
        items: [
          "First name (editable)","Last name (editable)","Email (editable)","Role","Language — English or Deutsch","Facility","Access Level","Terms & Conditions, Privacy Notice"
        ],
        save: "Click the edit icon to change editable fields. If you press Cancel with unsaved changes, a confirmation popup asks whether to discard them."
      },
      s9: {
        lead: "The About & Legal screen consolidates platform information into four sections:",
        items: [
          { t: "Software Version", d: "Platform version, build date and release type." },
          { t: "Distributor",       d: "PAUL HARTMANN AG, Paul-Hartmann-Straße 12, 89522 Heidenheim, Germany · info@hartmann.info · +49 7321 360." },
          { t: "Manufacturer — Sleepiz", d: "Sleepiz AG, Hornbachstrasse 23, 8008 Zurich, Switzerland. Responsible for the contactless radar hardware (accessory to a medical device under Article 2(2) EU MDR, class IIa) and the Sleepiz One+ Cloud analysing the signals (class IIa software)." },
          { t: "Manufacturer — ACTIMI", d: "ACTIMI GmbH, Albert-Schäffle Str. 119, 70186 Stuttgart, Germany. Responsible for the ACTIMI Dashboard (non-medical display software) and ACTIMI Signals v1.0 (backend notification engine, class IIa, UDI-DI 42700031203-API-XG)." }
        ],
        faqCta: "The About screen also contains a Need more help? button that redirects to the FAQ tab."
      }
    },
    /* ---------------- FAQ ---------------- */
    faq: {
      breadcrumb: "Support",
      eyebrow: "Frequently asked questions",
      title: "Everything your care team needs to know.",
      sub: "Quick answers for daily use, setup and clinical governance. Still stuck? Reach out to HARTMANN digital support.",
      searchPlaceholder: "Search the FAQ — e.g. 'out of bed'",
      categories: {
        all: "All",
        clinical: "Clinical use",
        setup: "Setup & devices",
        account: "Account & roles",
        security: "Security & compliance"
      },
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
      contactSub:  "Our digital support team helps with onboarding, permissions and day-to-day operations.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      hoursLabel: "Hours",
      hoursValue: "Mon–Fri · 08:00–18:00 CET"
    },
    /* ---------------- RELEASES ---------------- */
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
          ver: "1.4.0",
          date: "2026-04-02",
          tag: "new",
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
          ver: "1.3.1",
          date: "2026-02-14",
          tag: "security",
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
          ver: "1.3.0",
          date: "2025-12-09",
          tag: "improved",
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
          ver: "1.2.0",
          date: "2025-10-21",
          tag: "new",
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
          ver: "1.1.0",
          date: "2025-08-05",
          tag: "improved",
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
          ver: "1.0.0",
          date: "2025-05-02",
          tag: "new",
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
  },

  de: {
    meta: {
      lang: "Deutsch",
      dir: "ltr",
      siteTitle: "HARTMANN Easy Care Hub — Kontaktlose Vitalzeichen-Überwachung für Pflegeeinrichtungen",
      siteDescription: "Eine klinische Visualisierungsplattform für Pflegeheime. Kontinuierliche, kontaktlose Überwachung von Herzfrequenz, Atemfrequenz und Bettaktivität — mit zertifizierten Medizinprodukten."
    },
    nav: {
      home: "Startseite",
      manual: "Benutzerhandbuch",
      faq: "FAQ",
      releases: "Versionshinweise",
      contact: "Kontakt",
      login: "Anmelden",
      requestDemo: "Demo anfragen"
    },
    lang: { switch: "Sprache", en: "English", de: "Deutsch", fr: "Français" },
    hero: {
      eyebrow: "Klinische Intelligenz für Pflegeeinrichtungen",
      title1: "Leise, kontaktlose",
      title2: "Vitalzeichen-Pflege.",
      sub: "Der HARTMANN Easy Care Hub bringt Herzfrequenz, Atemfrequenz und Bettaktivität jedes Bewohners in ein klinisches Dashboard — ohne Wearables, ohne Kabel.",
      ctaPrimary: "Demo anfragen",
      ctaSecondary: "Handbuch entdecken",
      meta1: "CE-gekennzeichnete Medizinprodukt-Komponenten",
      meta2: "DSGVO- & ISO 27001-konform",
      meta3: "Im Einsatz in EU-Pflegeheimen",
      dashTitle: "Live-Dashboard",
      dashSubtitle: "Zone A · Zimmer 204",
      hrLabel: "Herzfrequenz",
      brLabel: "Atemfrequenz",
      bedLabel: "Bettstatus",
      statusOk: "Im Bett · schlafend",
      statusWarn: "Außer Bett · 12 Min."
    },
    trust: { label: "Mit vertrauenswürdigen Medizinpartnern entwickelt" },
    features: {
      eyebrow: "Warum Easy Care Hub",
      title: "Ein Dashboard für jede Schicht, jeden Bewohner.",
      sub: "Mit Pflegeteams für Pflegeteams entwickelt — damit Pflegekräfte weniger Zeit vor Bildschirmen verbringen und mehr Zeit bei den Bewohnern.",
      f1title: "Kontaktlose Radar-Überwachung",
      f1body:  "Zertifiziertes Sleepiz-Radar erfasst Herz- und Atemfrequenz ohne Körperkontakt — durch Laken, Pyjama oder Decke.",
      f2title: "Einheitliche Bewohneransicht",
      f2body:  "Herzfrequenz, Atemfrequenz, Bettstatus und historische Trends jedes Bewohners, nach Zone und Zimmer geordnet.",
      f3title: "Intelligente Benachrichtigungen",
      f3body:  "Schwellenwert- oder baseline-basierte Alarme für HR, BrR und Außer-Bett — global oder pro Bewohner einstellbar.",
      f4title: "Rollenbasierter Zugriff",
      f4body:  "System-Owner, Administrator und Nutzer mit granularer CRUDS-Berechtigung, ausgerichtet an klinischen Abläufen.",
      f5title: "Auditfähige Berichte",
      f5body:  "Jede bestätigte Benachrichtigung landet im Audit-Log des Bewohners. Prüfbar, exportierbar, konform.",
      f6title: "Bereit für Ihre Einrichtung",
      f6body:  "Mehrsprachige Oberfläche, Cloud-Hosting in der EU, integriert in bestehende Pflegeprozesse."
    },
    how: {
      eyebrow: "So funktioniert es",
      title: "Vom Radar zur abgerundeten Pflege in vier Schritten.",
      sub: "Easy Care Hub verbindet den zertifizierten Sleepiz-Sensor und die ACTIMI-Benachrichtigungs-Engine in einer pflegefreundlichen Ansicht.",
      s1t: "Sensor erfasst Vitalzeichen",
      s1b: "Ein kontaktloses Radar neben dem Bett misst Atmung und Herzschlag während der Bewohner schläft.",
      s2t: "Daten erreichen die Cloud",
      s2b: "Die Sleepiz One+ Cloud analysiert die Signale und liefert validierte Messwerte über eine sichere API.",
      s3t: "Der Hub macht sie klinisch",
      s3b: "Easy Care Hub ordnet Bewohner nach Zonen, verfolgt Trends und löst Benachrichtigungen aus, wenn Werte abweichen.",
      s4t: "Das Pflegeteam handelt",
      s4b: "Pflegekräfte markieren Benachrichtigungen als überprüft — jede Bestätigung wird für Qualität und Audit erfasst.",
      mockTitle: "Bewohner · Zimmer 112",
      mockHR: "Herzfrequenz",
      mockBR: "Atemfrequenz",
      mockBed: "Bettstatus",
      mockLast: "Nachtbewertung",
      mockZone: "Zone",
      mockZoneVal: "Nordflügel"
    },
    stats: {
      eyebrow: "Skalierbar konzipiert",
      title: "Pflegeteams, leise unterstützt.",
      sub: "Eine Plattform, die im Hintergrund bleibt — bis es darauf ankommt.",
      s1n: "24/7", s1l: "Kontinuierliche Überwachung ohne Wearables",
      s2n: "3", s2l: "Rollenstufen mit granularen Berechtigungen",
      s3n: "2", s3l: "Benachrichtigungsmodelle: Schwelle + Baseline",
      s4n: "EU", s4l: "Datenresidenz & regulatorische Konformität"
    },
    cta: {
      title: "Erleben Sie Easy Care Hub in Ihrer Einrichtung.",
      sub: "Buchen Sie eine 30-minütige Demo — wir zeigen Dashboard, Einrichtung und die klinische Governance dahinter.",
      primary: "Demo anfragen",
      secondary: "Handbuch lesen"
    },
    footer: {
      tagline: "Klinische Visualisierungsplattform für Pflegeheime, von PAUL HARTMANN AG.",
      product: "Produkt",
      resources: "Ressourcen",
      company: "Unternehmen",
      productLinks: ["Überblick", "Funktionen", "Sicherheit", "Für IT-Teams"],
      resourcesLinks: ["Benutzerhandbuch", "Versionshinweise", "FAQ", "Support"],
      companyLinks: ["Über HARTMANN", "Presse", "Karriere", "Kontakt"],
      copyright: "© 2026 PAUL HARTMANN AG. Die Easy Care Hub-Plattform ist kein Medizinprodukt gemäß EU MDR 2017/745.",
      legal: ["Impressum", "Datenschutz", "AGB"]
    },
    download: {
      pdf: "Handbuch herunterladen",
      pdfSub: "Ein gesetztes PDF des vollständigen Benutzerhandbuchs — druckfertig und offline verfügbar.",
      pdfMeta: "PDF · A4 · Revision 1.4 · EN",
      pdfCta: "PDF herunterladen"
    },
    feedback: {
      button: "Feedback",
      buttonTitle: "Feedback senden"
    },
    manual: {
      breadcrumb: "Dokumentation",
      eyebrow: "Benutzerhandbuch · Rev. 1.4",
      title: "HARTMANN Easy Care Hub — Benutzerhandbuch",
      intro: "Dieses Handbuch beschreibt, wie autorisiertes Personal die HARTMANN Easy Care Hub-Plattform nutzt, um bewohnerbezogene Daten angeschlossener Überwachungsgeräte zu visualisieren und zu organisieren. Es behandelt Navigation, Rollen, Benachrichtigungskonfiguration und Administration.",
      tocTitle: "Auf dieser Seite",
      sections: {
        s1:"1. Allgemein", s11:"1.1 Anwendungsbereich & Sicherheitshinweise", s12:"1.2 Rollen und Berechtigungen", s13:"1.3 Abkürzungen und Glossar",
        s2:"2. Plattformübersicht", s21:"2.1 Anmeldung", s22:"2.2 Menü", s23:"2.3 Navigationsleiste", s24:"2.4 Dashboard",
        s3:"3. Bewohnerübersicht", s31:"3.1 Bewohner suchen", s32:"3.2 Neuen Bewohner anlegen",
        s4:"4. Bewohnerdetailseite", s41:"4.1 Überblick", s42:"4.2 Trends", s43:"4.3 Benachrichtigungen", s44:"4.4 Audit-Log",
        s5:"5. Benachrichtigungen", s51:"5.1 Überblick", s52:"5.2 Medizinische Einstellungen", s53:"5.3 Bettaktivität",
        s6:"6. Geräte", s7:"7. Administration", s71:"7.1 Zonen", s72:"7.2 Standorte", s73:"7.3 Nutzer",
        s8:"8. Mein Konto", s9:"9. Über & rechtliche Hinweise"
      },
      s1: {
        lead: "Dieses Benutzerhandbuch beschreibt die Funktionsweise der HARTMANN Easy Care Hub-Plattform und enthält Hinweise zur Anwendung. Die Plattform richtet sich an autorisiertes Personal in Pflegeeinrichtungen zur Visualisierung und Organisation bewohnerbezogener Daten aus angeschlossenen Geräten.",
        scope: {
          title: "Anwendungsbereich und Zielgruppe",
          body: "Easy Care Hub ist für autorisiertes Personal in Pflegeeinrichtungen bestimmt — System-Owner, Administratoren, Wohnbereichsleitungen und Pflegekräfte — zur Visualisierung von Herzfrequenz, Atemfrequenz und Bettpräsenz sowie konfigurierter Benachrichtigungen. Nicht für lebenskritische Alarmierung bestimmt."
        },
        safety: {
          title: "Wichtige Sicherheits- und Nutzungshinweise",
          points: [
            "Die Easy Care Hub-Plattform selbst ist kein Medizinprodukt gemäß EU MDR 2017/745. Sie dient ausschließlich der Visualisierung und Darstellung von Daten, die von angeschlossenen Geräten erzeugt werden.",
            "Angezeigte Werte dienen ausschließlich Informationszwecken. Sie sind nicht für diagnostische oder therapeutische Zwecke bestimmt und dürfen nicht als alleinige Grundlage medizinischer Entscheidungen verwendet werden.",
            "Klinische Entscheidungen verbleiben in der alleinigen Verantwortung qualifizierter medizinischer Fachkräfte auf Basis einer umfassenden Einschätzung.",
            "Genauigkeit und Verfügbarkeit der angezeigten Daten hängen von der korrekten Funktion, Konfiguration und Konnektivität der zugrundeliegenden Medizinprodukte ab.",
            "Die Plattform garantiert keine Echtzeitüberwachung. Werte können Verarbeitungs- oder Übertragungsverzögerungen unterliegen.",
            "Kritische Informationen immer mit geeigneten klinischen Methoden überprüfen. Verlassen Sie sich nicht ausschließlich auf die Plattform.",
            "Angeschlossene Geräte bleiben regulierte Medizinprodukte und unterliegen ihrer jeweiligen Gebrauchsanweisung."
          ],
          warn: "Der Easy Care Hub ist nicht als Alarmsystem für lebensbedrohliche Situationen vorgesehen. Bei akuten, lebensbedrohlichen Symptomen kontaktieren Sie sofort den Rettungsdienst."
        },
        roles: {
          title: "Rollen und Berechtigungen",
          lead: "Es werden drei Rollen unterstützt: System-Owner, Administrator und Nutzer. Das Berechtigungsmodell verwendet CRUDS — Create, Read, Update, Delete, Share.",
          tHead: ["Berechtigung","System-Owner","Administrator","Nutzer"],
          rows: [
            ["Vitalzeichen","R","R","R"],
            ["Geräte","RUS","RUS","—"],
            ["Standorte","CRUS","RUS","R"],
            ["Bewohner","CRUS","CRUS","RS"],
            ["Nutzer","CRUS","CRUS","—"],
            ["Individuelle Schwellen","CRUS","CRUS","R"],
            ["Baseline-Schwellen","CRUS","CRUS","R"],
            ["Berichte","R / Download","R / Download","R / Download"],
            ["Benachrichtigungen","R / Überprüft","R / Überprüft","R / Überprüft"]
          ],
          key: "C = Erstellen · R = Lesen · U = Ändern · D = Löschen · S = Teilen · — = kein Zugriff"
        },
        abbr: {
          title: "Abkürzungen & Glossar",
          rows: [
            ["HR","Herzfrequenz — Anzahl der Herzschläge pro Minute."],
            ["BrR","Atemfrequenz — Anzahl der Atemzüge pro Minute."],
            ["Globale Einstellungen","Benachrichtigungseinstellungen, die systemweit für alle Bewohner gelten."],
            ["Individuelle Einstellungen","Pro-Bewohner-Überschreibungen globaler Einstellungen, z. B. Zeit außerhalb des Bettes."],
            ["Baseline","Ein personalisierter Schwellenwert, der aus der jüngsten Datenhistorie des Bewohners generiert wird."],
            ["MDR","Medizinprodukte-Verordnung (EU) 2017/745."],
            ["Audit-Log","Pro Bewohner geführtes Archiv bereits überprüfter Benachrichtigungen."]
          ]
        }
      },
      s2: {
        login: {
          title: "Anmeldung",
          body: "Nur autorisierte Nutzer können auf Easy Care Hub zugreifen. Nach Einrichtung Ihres Kontos und Passworts melden Sie sich mit Ihrer registrierten E-Mail-Adresse und Ihrem Passwort an.",
          steps: [
            "E-Mail-Adresse eingeben.",
            "Passwort eingeben.",
            "Auf Anmelden klicken. Die Plattform authentifiziert Ihre Zugangsdaten und zeigt das Dashboard mit den Bewohner-Kacheln an.",
            "Wenn Sie Angemeldet bleiben aktivieren, wird Ihre E-Mail auf diesem Gerät gespeichert.",
            "Nutzen Sie Passwort vergessen?, um einen Reset-Link anzufordern. Eine Bestätigung und ein Zurück-zur-Startseite-Button werden angezeigt."
          ]
        },
        menu: {
          title: "Menü",
          body: "Nach der Anmeldung öffnet sich standardmäßig das Vitals-Dashboard. Das linke Menü kann über den Pfeil am unteren Rand ein- oder ausgeblendet werden. Folgende Bereiche sind je nach Rolle sichtbar:",
          items: ["Vitals","Bewohner","Benachrichtigungen","Geräte","Administration"]
        },
        navbar: {
          title: "Navigationsleiste",
          body: "Die obere Navigationsleiste ist immer sichtbar und enthält von links nach rechts:",
          items: [
            "Das HARTMANN / Easy Care Hub-Logo — führt zurück zum Dashboard.",
            "Das Support-Symbol — öffnet die Reiter Rechtliches/Über und FAQ.",
            "Das Nutzersymbol — öffnet Mein Konto, Über uns und Abmelden."
          ]
        },
        dash: {
          title: "Dashboard",
          lead: "Das Dashboard ist die Standardansicht nach der Anmeldung. Es zeigt alle Geräte Ihrer Einrichtung, nach Zonen gruppiert.",
          zones: "Alle Zonen ist standardmäßig ausgewählt. Klicken Sie einen anderen Zonen-Reiter, um die Anzeige auf dieser Zone zugewiesene Geräte zu beschränken.",
          views: "Mit dem Umschalter oben rechts wechseln Sie zwischen Kachel- und Tabellenansicht.",
          filter: "Der visuelle Statusfilter grenzt das Dashboard nach Bewohnerstatus ein: Alle, Schlafend, Abwesend, Im Bett oder Getrennt.",
          search: "Mit dem Suchfeld finden Sie eine bestimmte Gerätenummer oder einen Bewohner.",
          color: "Jede Bewohner-Kachel ist entsprechend dem aktuellen Status eingefärbt. Klicken Sie eine Kachel, um die Bewohnerdetailseite auf dem Trends-Reiter zu öffnen.",
          sideTitle: "Benachrichtigungs-Sidebar",
          sideBody: "Die Sidebar listet aktive Benachrichtigungen für HR, BrR und Außer-Bett in Auslösereihenfolge. Klicken Sie das Häkchen-Symbol, um eine Benachrichtigung als überprüft zu markieren — sie wird aus der Sidebar entfernt und im Audit-Log archiviert. Klicken Sie Alle anzeigen, um die vollständige Benachrichtigungsseite zu öffnen. Das Glockensymbol klappt die Sidebar ein oder aus."
        }
      },
      s3: {
        lead: "Über Bewohner im linken Menü öffnen Sie die Bewohnerübersicht — eine Tabelle aller Bewohner mit zugeordnetem Gerät und Standort.",
        columns: ["Bewohner-ID","Geräte-ID","Zone","Standort","Status (Aktiv / Entlassen)"],
        searchTitle: "Bewohner finden",
        searchBody: "Nutzen Sie das Suchfeld, um nach Bewohner-ID, Gerät oder Standort zu filtern.",
        createTitle: "Neuen Bewohner anlegen",
        createBody: "Klicken Sie oben rechts auf + Bewohner anlegen. Eine Sidebar öffnet sich mit folgenden Feldern:",
        createFields: [
          "Bewohner-ID (Pflichtfeld).",
          "Vorname, Nachname, Geburtsdatum (optional).",
          "Geschlecht (optional).",
          "Standort (Dropdown). Nach der Auswahl werden Gerät und Zone aktiv; die Zone wird automatisch anhand des Standorts ausgefüllt.",
          "Zeit-außer-Bett-Benachrichtigung — standardmäßig die globale Einstellung. Wählen Sie Manuelle Einstellungen, um zu überschreiben."
        ],
        createConflict: "Ist der gewählte Standort bereits einem anderen Bewohner zugewiesen, erscheint ein Bestätigungs-Popup. Klicken Sie Ja, um neu zuzuweisen, oder Nein, um das Feld leer zu lassen.",
        createManual: "Manuelle Einstellungen bieten drei Optionen: benachrichtigen, wenn der Bewohner länger als N Minuten außerhalb des Bettes ist; benachrichtigen, wenn der Bewohner N % länger außer Bett ist als gewöhnlich; deaktivieren.",
        createSave: "Sobald alle Pflichtfelder ausgefüllt sind, wird die Schaltfläche Anlegen aktiv. Ein Klick schließt die Sidebar, eine Bestätigungsmeldung erscheint."
      },
      s4: {
        lead: "Die Bewohnerdetailseite ist über mehrere Wege erreichbar: aus der Bewohnerliste (Überblick), über eine Kachel im Dashboard (Trends) oder über eine Benachrichtigung (Benachrichtigungen). Im Kopf sind stets Bewohner-ID, HR (bpm), BrR (brpm) und Bettstatus sichtbar.",
        overview: {
          title: "Überblick",
          body: "Zeigt allgemeine Informationen zum Bewohner, aufgeteilt in Details und individuelle Benachrichtigungen:",
          details: ["Status (Aktiv / Entlassen)","Bewohner-ID","Vor- & Nachname, Geburtsdatum","Geschlecht","Standort, Gerät, Zone"],
          indiv:   ["Zeit-außer-Bett — übernimmt standardmäßig die globale Regel, kann aber überschrieben werden.","Die globale Bettzeit ist nur in der Administration editierbar, nicht hier.","Manuelle Einstellungen bieten dieselben drei Optionen wie beim Anlegen."]
        },
        trends: {
          title: "Trends",
          body: "Zeigt HR und BrR im Zeitverlauf zusammen mit dem Nachtbericht. Filter nach Datum oder Zeitraum. Y-Achse: HR 40–120 bpm, BrR 5–40 brpm. Gelbe und violette Marker zeigen konfigurierte globale Schwellen und Baseline-Werte.",
          missing: "Wenn keine Daten erscheinen, wurden entweder die Daten der letzten Nacht noch nicht ausgeliefert (Daten kommen ca. 30 Min. nach dem definierten Nachtzeitraum), oder die Datenqualität war unzureichend — z. B. wenn der Bewohner nicht im Bett war oder weniger als vier Stunden Daten erfasst wurden. Bei wiederholtem Problem bitte den Kundendienst kontaktieren."
        },
        notif: {
          title: "Benachrichtigungen",
          body: "Listet jede Benachrichtigung für diesen Bewohner mit Typ, Bewohner-ID, Geräte-ID, Zeit, Details und Aktionen.",
          presets: ["Benutzerdefiniert — Kalenderzeitraum wählen.","Letzte Nacht.","Letzte Woche."],
          review: "Markieren Sie eine Benachrichtigung über das Häkchen in der Spalte Aktionen als überprüft. Die Benachrichtigung wird entfernt und ins Audit-Log verschoben.",
          filter: "Klicken Sie Filter, um nach Typ (HR, BrR, Außer Bett) einzuschränken. Aktive Filter erscheinen als Chips über der Tabelle; entfernen Sie sie über das x."
        },
        audit: {
          title: "Audit-Log",
          body: "Ein chronologisches Archiv aller überprüften Benachrichtigungen. Spalten: Typ, Geräte-ID, Zeit, Details, Aktionen. Da die Einträge bereits überprüft wurden, ist das Häkchen nicht mehr interaktiv."
        }
      },
      s5: {
        lead: "Die Benachrichtigungsseite bündelt Warnungen der gesamten Einrichtung. Erreichbar über das linke Menü oder Alle anzeigen in der Sidebar. Drei Reiter stehen zur Verfügung:",
        tabs: ["Überblick","Medizinische Einstellungen","Bettaktivität"],
        overview: {
          title: "Überblick",
          body: "Alle aktiven Benachrichtigungen aller Bewohner, chronologisch mit Typ, Bewohner-ID, Geräte-ID, Zeit/Details und Aktionen. Als überprüft markieren und erweiterte Filter werden unterstützt: Typ, Bewohner-ID, Geräte-ID, Zeitraum, Status (Neu / Überprüft)."
        },
        medical: {
          title: "Medizinische Einstellungen",
          body: "Globale Benachrichtigungsregeln für klinische Werte. Sie gelten für alle Bewohner und können nicht pro Bewohner überschrieben werden. Zwei Benachrichtigungsmodelle:",
          types: [
            { n: "Schwellenwert-basiert", d: "Auslösung bei Über-/Unterschreitung fester Schwellen für HR oder BrR." },
            { n: "Baseline-basiert",  d: "Auslösung bei signifikanter Abweichung von der persönlichen jüngsten Historie des Bewohners." }
          ],
          defaults: "Die Plattform füllt diese Werte standardmäßig aus medizinischen Studien und klinischen Leitlinien vor. Klicken Sie rechts auf das Bearbeitungs-Symbol; andere Reiter werden inaktiv, unten erscheinen Abbrechen und Speichern."
        },
        bed: {
          title: "Bettaktivität",
          body: "Konfiguriert die standardmäßige Außer-Bett-Regel für alle Bewohner. Pro Bewohner in der Bewohnerdetailseite überschreibbar. Drei Regeln:",
          rules: [
            "Benachrichtigen, wenn der Bewohner länger als N Minuten außer Bett war.",
            "Benachrichtigen, wenn der Bewohner N % länger außer Bett ist als gewöhnlich.",
            "Deaktivieren."
          ],
          bedtime: "Die Bettzeit über die Zeitfelder festlegen. Die Regel gilt während dieser Stunden — wenn Bewohner schlafen sollten."
        }
      },
      s6: {
        lead: "Nur für System-Owner und Administrator sichtbar. Die Geräteseite listet alle Geräte der Einrichtung:",
        cols: ["Geräte-ID","Zone","Standort","Bewohner-ID","Gerätestatus (Aktiv / Getrennt)"],
        detail: "Ein Klick auf ein Gerät öffnet dessen Detailseite. Zone, Standort und zugeordneter Bewohner können dort bearbeitet werden; über + Neuen Standort anlegen kann ein neuer Standort direkt erstellt werden. Abbrechen löst bei ungespeicherten Änderungen ein Bestätigungs-Popup aus; Speichern zeigt eine Bestätigung."
      },
      s7: {
        lead: "Nur für System-Owner und Administrator sichtbar. Die Administration bündelt Zonen, Standorte und Nutzer. Anlegen-Schaltflächen und ein Zurück-Link sind oben stets sichtbar.",
        zones: {
          title: "Zonen",
          body: "Tabelle aller Zonen mit Name, Beschreibung, Gesamt-/Aktiv-/Getrennt-Zählern und Aktionen (Löschen — nur System-Owner). Neue Zone über + Zone anlegen; Name Pflichtfeld, Beschreibung optional."
        },
        locations: {
          title: "Standorte",
          body: "Tabelle aller Standorte mit Name, Zone, Geräte-ID, Bewohner-ID und Aktionen. Neuer Standort über + Standort anlegen; Etage, Zimmer und Bett füllen eine Live-Vorschau. Sobald mindestens ein Feld befüllt ist, wird die Schaltfläche aktiv."
        },
        users: {
          title: "Nutzer",
          body: "Listet jeden Nutzer mit Name, Berechtigungsstufe, E-Mail, Status und zuletzt aktualisiert. Neu anlegen über + Nutzer anlegen mit Vorname, Nachname, E-Mail, Rolle und Berechtigungsstufe — die Fähigkeiten der Stufe werden unter dem Feld eingeblendet."
        }
      },
      s8: {
        lead: "Klicken Sie Ihr Nutzersymbol oben rechts und wählen Sie Mein Konto, um Ihr Profil zu sehen und zu bearbeiten:",
        items: [
          "Vorname (bearbeitbar)","Nachname (bearbeitbar)","E-Mail (bearbeitbar)","Rolle","Sprache — English oder Deutsch","Einrichtung","Berechtigungsstufe","AGB, Datenschutzhinweis"
        ],
        save: "Klicken Sie auf das Bearbeiten-Symbol, um bearbeitbare Felder zu ändern. Wird Abbrechen mit ungespeicherten Änderungen geklickt, fragt ein Popup, ob die Änderungen verworfen werden sollen."
      },
      s9: {
        lead: "Der Bereich Über & Rechtliches fasst Plattforminformationen in vier Abschnitten zusammen:",
        items: [
          { t: "Softwareversion", d: "Plattformversion, Build-Datum und Release-Typ." },
          { t: "Vertrieb", d: "PAUL HARTMANN AG, Paul-Hartmann-Straße 12, 89522 Heidenheim, Deutschland · info@hartmann.info · +49 7321 360." },
          { t: "Hersteller — Sleepiz", d: "Sleepiz AG, Hornbachstrasse 23, 8008 Zürich, Schweiz. Verantwortlich für die kontaktlose Radar-Hardware (Zubehör eines Medizinprodukts nach Art. 2(2) EU MDR, Klasse IIa) und die Sleepiz One+ Cloud (Software Klasse IIa)." },
          { t: "Hersteller — ACTIMI", d: "ACTIMI GmbH, Albert-Schäffle Str. 119, 70186 Stuttgart, Deutschland. Verantwortlich für das ACTIMI Dashboard (nicht-medizinische Anzeigesoftware) und ACTIMI Signals v1.0 (Backend-Benachrichtigungsmodul, Klasse IIa, UDI-DI 42700031203-API-XG)." }
        ],
        faqCta: "Auf der Über-Seite befindet sich zudem eine Mehr Hilfe?-Schaltfläche, die zum FAQ-Reiter führt."
      }
    },
    faq: {
      breadcrumb: "Support",
      eyebrow: "Häufige Fragen",
      title: "Alles, was Ihr Pflegeteam wissen muss.",
      sub: "Schnelle Antworten zu Alltag, Einrichtung und klinischer Governance. Noch offen? Wenden Sie sich an den HARTMANN Digital Support.",
      searchPlaceholder: "FAQ durchsuchen — z. B. 'außer Bett'",
      categories: { all: "Alle", clinical: "Klinische Nutzung", setup: "Einrichtung & Geräte", account: "Konto & Rollen", security: "Sicherheit & Compliance" },
      items: [
        { c:"clinical", q:"Ist der Easy Care Hub ein Medizinprodukt?", a:"Die Easy Care Hub-Plattform selbst ist kein Medizinprodukt gemäß EU MDR 2017/745. Sie dient ausschließlich der Visualisierung und Darstellung von Daten aus angeschlossenen Geräten. Die angeschlossene Sleepiz-Radar-Hardware und das ACTIMI Signals Benachrichtigungsmodul sind regulierte Medizinprodukte mit eigener Gebrauchsanweisung." },
        { c:"clinical", q:"Kann ich Easy Care Hub als Notfallalarm nutzen?", a:"Nein. Die Plattform ist nicht als Alarmsystem für lebensbedrohliche Situationen bestimmt, in denen ein sofortiger medizinischer Eingriff notwendig ist. Echtzeit-Zustellung kann nicht garantiert werden. Bei akuten Symptomen den Rettungsdienst rufen." },
        { c:"clinical", q:"Warum erscheinen für einen Bewohner keine Vitaldaten oder Schlafdaten?", a:"Nachtbericht-Daten werden ca. 30 Minuten nach dem definierten Nachtzeitraum Ihrer Einrichtung geliefert. Fehlen Werte weiterhin, war die Datenqualität ggf. unzureichend — z. B. Bewohner nicht im Bett oder weniger als vier Stunden Daten. Bei wiederholtem Auftreten bei Anwesenheit: Kundendienst kontaktieren." },
        { c:"clinical", q:"Was ist der Unterschied zwischen Schwellenwert- und Baseline-Benachrichtigungen?", a:"Schwellenwert-Benachrichtigungen lösen bei Überschreiten fester, einrichtungsweiter Grenzen aus. Baseline-Benachrichtigungen nutzen die jüngste Historie des Bewohners, um individuelle Abweichungen zu erkennen — nützlich für Bewohner außerhalb typischer Standardbereiche." },
        { c:"clinical", q:"Wie funktioniert die Außer-Bett-Regel?", a:"Drei Regeln stehen zur Wahl, global oder pro Bewohner: Benachrichtigen, wenn länger als N Minuten außer Bett; Benachrichtigen, wenn N % länger als üblich außer Bett; Deaktivieren. Die Bettzeit legt fest, wann die Regel aktiv ist." },
        { c:"setup", q:"Welche Geräte unterstützt Easy Care Hub?", a:"Easy Care Hub zeigt Daten des kontaktlosen Sleepiz-Radars (Hardware), verarbeitet durch die Sleepiz One+ Cloud (Klasse IIa). Das Backend ACTIMI Signals (v1.0, Klasse IIa) liefert die Benachrichtigungen." },
        { c:"setup", q:"Wie füge ich einem Bett einen neuen Bewohner hinzu?", a:"Gehen Sie zu Bewohner → + Bewohner anlegen. Geben Sie die Bewohner-ID ein, wählen Sie den Standort — Gerät und Zone werden automatisch gefüllt. Ist der Standort bereits belegt, werden Sie gefragt, ob Sie neu zuweisen möchten." },
        { c:"setup", q:"Kann ich globale Benachrichtigungsregeln für einen Bewohner überschreiben?", a:"Ja. In der Bewohnerdetailseite → Überblick erlaubt der Bereich Individuelle Benachrichtigungen das Überschreiben der globalen Außer-Bett-Regel. Die globale Bettzeit selbst wird in der Administration bearbeitet." },
        { c:"setup", q:"Wie lege ich eine neue Zone oder einen neuen Standort an?", a:"In Administration → Zonen oder Standorte über + Zone anlegen / + Standort anlegen. Nur System-Owner und Administrator können verwalten. Nur System-Owner können löschen." },
        { c:"account", q:"Welche Rollen gibt es und wer darf was?", a:"Easy Care Hub hat drei Rollen: System-Owner (volle Kontrolle), Administrator (Einrichtungsverwaltung) und Nutzer (lesender klinischer Betrieb mit Überprüfung von Benachrichtigungen). Genaue Berechtigungen folgen dem CRUDS-Modell — siehe Handbuch." },
        { c:"account", q:"Wie ändere ich mein Passwort?", a:"Über Passwort vergessen? auf der Anmeldeseite E-Mail eingeben und abschicken. Sie erhalten einen Reset-Link. Eingeloggt können Sprache und Profil unter Mein Konto angepasst werden." },
        { c:"account", q:"Kann ich die Oberflächensprache ändern?", a:"Ja. Mein Konto → Sprache. In der Anwendung sind Englisch und Deutsch verfügbar; die öffentliche Website bietet zusätzlich Französisch." },
        { c:"security", q:"Wo werden meine Bewohnerdaten gespeichert?", a:"Alle Bewohnerdaten werden in EU-Rechenzentren unserer zertifizierten Partner gehostet. Die Plattform ist an DSGVO und ISO 27001 ausgerichtet; Zugriff wird über Rollenberechtigungen und Audit-Logs gesteuert." },
        { c:"security", q:"Wie lange werden Benachrichtigungen aufbewahrt?", a:"Wenn eine Pflegekraft eine Benachrichtigung als überprüft markiert, wird sie ins Audit-Log des Bewohners verschoben und gemäß Ihrer Aufbewahrungsrichtlinie und lokalen Vorschriften aufbewahrt." },
        { c:"security", q:"Wie melde ich ein Sicherheitsproblem?", a:"Kontaktieren Sie umgehend den HARTMANN Digital Support mit den Kontaktdaten auf dieser Seite. Für Belange der Medizinprodukte wenden Sie sich an Sleepiz AG oder ACTIMI GmbH gemäß deren Gebrauchsanweisung." }
      ],
      contactTitle: "HARTMANN Support kontaktieren",
      contactSub:  "Unser Digital-Support-Team hilft bei Onboarding, Berechtigungen und täglichem Betrieb.",
      emailLabel: "E-Mail",
      phoneLabel: "Telefon",
      hoursLabel: "Zeiten",
      hoursValue: "Mo–Fr · 08:00–18:00 MEZ"
    },
    releases: {
      breadcrumb: "Produkt",
      eyebrow: "Versionshinweise",
      title: "Neuerungen im Easy Care Hub.",
      sub: "Jede Aktualisierung, Änderung und jeder Fix der Plattform. RSS-Feed für Benachrichtigungen verfügbar.",
      filters: { all: "Alle", new: "Neu", improved: "Verbessert", fixed: "Behoben", security: "Sicherheit" },
      subscribe: "Abonnieren",
      sideTitle: "Frühere Versionen",
      sideSub: "Vorherige Meilensteine durchsuchen.",
      items: [
        { ver:"1.4.0", date:"2026-04-02", tag:"new",
          title:"Baseline-Benachrichtigungen, französische Oberfläche und neue Sidebar",
          summary:"Unser größtes Release des Jahres. Baseline-Alarmierung ist allgemein verfügbar, die Benachrichtigungs-Sidebar wurde neu gebaut, und eine französische Oberfläche für Schweiz und Belgien kommt hinzu.",
          groups:[
            { h:"Neu", items:[
              "Baseline-basierte HR- und BrR-Benachrichtigungen sind allgemein verfügbar. Werte werden aus der jüngsten Historie des Bewohners gelernt und täglich aktualisiert.",
              "Französisch ist nun eine unterstützte Sprache auf der öffentlichen Website. In der Anwendung bleiben English und Deutsch die offiziellen klinischen Sprachen.",
              "Ein neuer Audit-Log-Export (CSV, PDF) auf der Bewohnerdetailseite, gefiltert nach aktuell gewähltem Zeitraum."
            ]},
            { h:"Verbessert", items:[
              "Die Benachrichtigungs-Sidebar gruppiert Warnungen nun nach Bewohner und zeigt die Anzahl am Namen — lesbarer bei Schichtübergaben.",
              "Trend-Charts für Bewohner mit mehr als einem Jahr Historie laden bis zu 3× schneller.",
              "Klarere Leerzustands-Meldungen im Dashboard, wenn einer Zone keine Geräte zugewiesen sind."
            ]},
            { h:"Behoben", items:[
              "Problem behoben, bei dem das Glockensymbol nach Seitennavigation gelegentlich geöffnet blieb.",
              "Seltener Fall behoben, bei dem der Überblick-Reiter nach andernorts gespeicherter Statusänderung einen veralteten Status zeigte."
            ]}
          ]
        },
        { ver:"1.3.1", date:"2026-02-14", tag:"security",
          title:"Session-Härtung und MFA für System-Owner",
          summary:"Ein fokussiertes Sicherheits-Release. MFA ist nun verpflichtend für System-Owner; die Session-Handhabung wurde plattformweit verschärft.",
          groups:[
            { h:"Sicherheit", items:[
              "Mehrfaktor-Authentifizierung ist für System-Owner bei jeder neuen Anmeldung Pflicht.",
              "Session-Tokens rotieren nun bei Rechteänderung (z. B. Hochstufung vom Nutzer zum Administrator).",
              "Verfeinerte Content-Security-Policy-Header; ungenutzte Ursprünge aus der Allow-Liste entfernt."
            ]},
            { h:"Behoben", items:[
              "Randfall gelöst, bei dem Angemeldet bleiben über Browserprofile desselben Geräts übertragen wurde."
            ]}
          ]
        },
        { ver:"1.3.0", date:"2025-12-09", tag:"improved",
          title:"Multi-Zonen-Dashboard, schnellere Suche und klarere Statusfarben",
          summary:"Das Dashboard wird erwachsen. Zonen-Reiter unterstützen Tastatursteuerung, die Suche findet Bewohner und Geräte in einer Abfrage, und die vier Statusfarben wurden an WCAG AA angepasst.",
          groups:[
            { h:"Verbessert", items:[
              "Tastenkürzel: 1–9 wechselt zwischen den ersten neun Zonen; / fokussiert die Suche.",
              "Kombinierte Suche trifft nun Bewohner-ID, Geräte-ID und Standort in einer Abfrage, sortiert nach Aktualität.",
              "Statusfarben für Schlafend, Im Bett, Abwesend und Getrennt wurden an WCAG AA angepasst."
            ]},
            { h:"Neu", items:[
              "Massen-Überprüfung auf der Benachrichtigungsseite — mehrere Zeilen wählen und in einer Aktion quittieren.",
              "Kachelansicht zeigt nun eine dezente HR-Sparkline der letzten 60 Minuten."
            ]}
          ]
        },
        { ver:"1.2.0", date:"2025-10-21", tag:"new",
          title:"Nachtberichte, überarbeitete Administration und Geräte-Deeplinks",
          summary:"Nachtberichte landen im Trends-Reiter. Die Administration erhält einen klareren Zonen/Standorte/Nutzer-Split. Geräte lassen sich per Deeplink teilen.",
          groups:[
            { h:"Neu", items:[
              "Nächtliche Schlafberichte auf der Bewohnerdetailseite — ca. 30 Min. nach Ende des definierten Nachtzeitraums.",
              "Deeplink-URLs für Geräte (z. B. /devices/SN-12345) — Gerät in einem Klick teilen.",
              "Administration ist nun eine Drei-Reiter-Ansicht: Zonen, Standorte, Nutzer."
            ]},
            { h:"Behoben", items:[
              "Gelegentliches Zurücksetzen des Zooms im Trend-Chart nach Reiterwechsel behoben.",
              "Falsche Abkürzungs-Tooltip auf BrR-Diagrammen korrigiert."
            ]}
          ]
        },
        { ver:"1.1.0", date:"2025-08-05", tag:"improved",
          title:"Rollen-Feinschliff und Schwellen-Editor",
          summary:"Berechtigungsmatrix an reale Pflegeabläufe angepasst. Der medizinische Schwellen-Editor bekommt Inline-Validierung und visuelles Feedback.",
          groups:[
            { h:"Verbessert", items:[
              "Der Schwellen-Editor validiert HR- und BrR-Bereiche gegen klinische Vorgaben und hebt ungewöhnliche Werte inline hervor.",
              "Nutzer können deaktiviert werden, ohne ihre Audit-Historie zu verlieren.",
              "Die Nutzer-Tabelle erhält Spalten Status und Zuletzt aktualisiert."
            ]}
          ]
        },
        { ver:"1.0.0", date:"2025-05-02", tag:"new",
          title:"Easy Care Hub — allgemeine Verfügbarkeit",
          summary:"Das erste Produktiv-Release. Vitals-Dashboard, Bewohnerdetailseiten, globale und individuelle Benachrichtigungen sowie das grundlegende Rollenmodell.",
          groups:[
            { h:"Neu", items:[
              "Live-Dashboard mit Kachel- und Tabellenansicht, nach Zonen gruppiert.",
              "Bewohnerdetailseiten mit Überblick, Trends, Benachrichtigungen und Audit-Log.",
              "Schwellenwert-Benachrichtigungen für HR, BrR und Außer-Bett.",
              "Rollenmodell: System-Owner, Administrator und Nutzer (CRUDS)."
            ]}
          ]
        }
      ]
    }
  },

  fr: {
    meta: {
      lang: "Français",
      dir: "ltr",
      siteTitle: "HARTMANN Easy Care Hub — Surveillance des signes vitaux sans contact pour les établissements de soins",
      siteDescription: "Une plateforme de visualisation clinique pour les établissements de soins. Surveillance continue et sans contact du rythme cardiaque, de la fréquence respiratoire et de l'activité au lit — avec des dispositifs médicaux certifiés."
    },
    nav: {
      home: "Accueil", manual: "Manuel", faq: "FAQ",
      releases: "Notes de version", contact: "Contact",
      login: "Connexion", requestDemo: "Demander une démo"
    },
    lang: { switch: "Langue", en: "English", de: "Deutsch", fr: "Français" },
    hero: {
      eyebrow: "Intelligence clinique pour les établissements de soins",
      title1: "Un suivi vital",
      title2: "silencieux et sans contact.",
      sub: "HARTMANN Easy Care Hub réunit rythme cardiaque, fréquence respiratoire et activité au lit de chaque résident dans un tableau de bord clinique unique — sans wearable, sans fil.",
      ctaPrimary: "Demander une démo",
      ctaSecondary: "Explorer le manuel",
      meta1: "Composants dispositifs médicaux marqués CE",
      meta2: "Conforme RGPD & ISO 27001",
      meta3: "Déployé dans des EHPAD européens",
      dashTitle: "Tableau de bord en direct",
      dashSubtitle: "Zone A · Chambre 204",
      hrLabel: "Fréq. cardiaque",
      brLabel: "Fréq. respiratoire",
      bedLabel: "Présence au lit",
      statusOk: "Au lit · endormi",
      statusWarn: "Hors du lit · 12 min"
    },
    trust: { label: "Conçu avec des partenaires médicaux de confiance" },
    features: {
      eyebrow: "Pourquoi Easy Care Hub",
      title: "Un tableau de bord pour chaque équipe, chaque résident.",
      sub: "Pensé avec les équipes de soins, pour les équipes de soins — pour passer moins de temps devant les écrans et plus de temps auprès des résidents.",
      f1title: "Surveillance radar sans contact",
      f1body: "Le radar Sleepiz certifié capte le rythme cardiaque et la fréquence respiratoire sans contact — à travers draps, pyjama ou couverture.",
      f2title: "Vue résident unifiée",
      f2body: "Rythme cardiaque, respiration, présence au lit et tendances historiques pour chaque résident, organisés par zone et par chambre.",
      f3title: "Notifications intelligentes",
      f3body: "Alertes par seuils ou par référence individuelle pour HR, BrR et hors-lit — réglables globalement ou par résident.",
      f4title: "Accès par rôles",
      f4body: "Propriétaire système, administrateur et utilisateur avec permissions CRUDS granulaires, alignées sur vos flux cliniques.",
      f5title: "Rapports auditables",
      f5body: "Chaque notification accusée est archivée dans le journal d'audit du résident. Contrôlable, exportable, conforme.",
      f6title: "Prêt pour votre établissement",
      f6body: "Interface multilingue, hébergement cloud en UE, intégration dans vos processus de soins existants."
    },
    how: {
      eyebrow: "Comment ça fonctionne",
      title: "Du radar au soin, en quatre étapes.",
      sub: "Easy Care Hub relie le capteur Sleepiz certifié et le moteur de notifications ACTIMI dans une vue pensée pour les soignants.",
      s1t: "Le capteur mesure les signes vitaux",
      s1b: "Un radar sans contact placé près du lit mesure respiration et rythme cardiaque pendant le sommeil.",
      s2t: "Les données rejoignent le cloud",
      s2b: "Le cloud Sleepiz One+ analyse les signaux et publie des mesures validées via une API sécurisée.",
      s3t: "Le Hub rend cela clinique",
      s3b: "Easy Care Hub organise les résidents par zone, suit les tendances et déclenche des notifications si besoin.",
      s4t: "L'équipe agit",
      s4b: "Les soignants marquent les notifications comme revues — chaque accusé est enregistré pour qualité et audit.",
      mockTitle: "Résident · Chambre 112",
      mockHR: "Fréq. cardiaque",
      mockBR: "Fréq. respiratoire",
      mockBed: "Présence au lit",
      mockLast: "Score de la nuit",
      mockZone: "Zone",
      mockZoneVal: "Aile nord"
    },
    stats: {
      eyebrow: "Pensé pour passer à l'échelle",
      title: "Des équipes, soutenues en silence.",
      sub: "Une plateforme qui se fait oublier — jusqu'à ce que cela compte.",
      s1n:"24/7", s1l:"Surveillance continue sans wearable",
      s2n:"3",    s2l:"Niveaux de rôle avec permissions granulaires",
      s3n:"2",    s3l:"Modèles de notification : seuil + référence",
      s4n:"UE",   s4l:"Résidence des données & conformité"
    },
    cta: {
      title: "Découvrez Easy Care Hub dans votre établissement.",
      sub: "Réservez une démo de 30 minutes — nous parcourons le tableau de bord, l'installation et la gouvernance clinique.",
      primary: "Demander une démo",
      secondary: "Lire le manuel"
    },
    footer: {
      tagline: "Plateforme de visualisation clinique pour établissements de soins, par PAUL HARTMANN AG.",
      product: "Produit",
      resources: "Ressources",
      company: "Entreprise",
      productLinks: ["Aperçu","Fonctionnalités","Sécurité","Pour les équipes IT"],
      resourcesLinks: ["Manuel","Notes de version","FAQ","Support"],
      companyLinks: ["À propos d'HARTMANN","Presse","Carrières","Contact"],
      copyright: "© 2026 PAUL HARTMANN AG. La plateforme Easy Care Hub n'est pas un dispositif médical au sens du règlement UE 2017/745.",
      legal: ["Mentions légales","Confidentialité","Conditions"]
    },
    download: {
      pdf: "Télécharger le manuel",
      pdfSub: "Un PDF typographié du manuel complet — prêt pour l'impression et la consultation hors ligne.",
      pdfMeta: "PDF · A4 · Révision 1.4 · EN",
      pdfCta: "Télécharger le PDF"
    },
    feedback: {
      button: "Commentaires",
      buttonTitle: "Partager vos commentaires"
    },
    manual: {
      breadcrumb: "Documentation",
      eyebrow: "Manuel utilisateur · Rév. 1.4",
      title: "HARTMANN Easy Care Hub — Manuel utilisateur",
      intro: "Ce manuel décrit l'utilisation de la plateforme HARTMANN Easy Care Hub par le personnel autorisé pour visualiser et organiser les données des résidents produites par les dispositifs connectés. Il couvre navigation, rôles, configuration des notifications et administration.",
      tocTitle: "Sur cette page",
      sections: {
        s1:"1. Généralités", s11:"1.1 Portée & sécurité", s12:"1.2 Rôles et permissions", s13:"1.3 Abréviations et glossaire",
        s2:"2. Aperçu de la plateforme", s21:"2.1 Connexion", s22:"2.2 Menu", s23:"2.3 Barre de navigation", s24:"2.4 Tableau de bord",
        s3:"3. Aperçu des résidents", s31:"3.1 Rechercher un résident", s32:"3.2 Créer un résident",
        s4:"4. Fiche résident", s41:"4.1 Aperçu", s42:"4.2 Tendances", s43:"4.3 Notifications", s44:"4.4 Journal d'audit",
        s5:"5. Notifications", s51:"5.1 Aperçu", s52:"5.2 Paramètres médicaux", s53:"5.3 Activité au lit",
        s6:"6. Dispositifs", s7:"7. Administration", s71:"7.1 Zones", s72:"7.2 Emplacements", s73:"7.3 Utilisateurs",
        s8:"8. Mon compte", s9:"9. À propos & mentions"
      },
      s1: {
        lead: "Ce manuel décrit le fonctionnement de la plateforme HARTMANN Easy Care Hub et fournit des recommandations d'usage. La plateforme s'adresse au personnel autorisé des établissements de soins pour visualiser et organiser les données des résidents générées par les dispositifs connectés.",
        scope: {
          title: "Portée et public visé",
          body: "Easy Care Hub est destiné au personnel autorisé des établissements — propriétaires système, administrateurs, infirmier·ère·s référent·e·s et soignants — pour visualiser HR, BrR et présence au lit ainsi que les notifications configurées. Il n'est pas destiné à l'alarme vitale."
        },
        safety: {
          title: "Informations importantes de sécurité et d'utilisation",
          points: [
            "La plateforme Easy Care Hub n'est pas un dispositif médical au sens du règlement UE 2017/745. Elle sert uniquement à la visualisation et à la présentation de données issues des dispositifs connectés.",
            "Les valeurs affichées sont à titre informatif. Elles ne sont pas destinées au diagnostic ou à la thérapie et ne doivent pas constituer la seule base des décisions médicales.",
            "Les décisions cliniques relèvent de la responsabilité des professionnels de santé qualifiés, sur la base d'une évaluation complète.",
            "La précision et la disponibilité des données dépendent du bon fonctionnement, de la configuration et de la connectivité des dispositifs médicaux sous-jacents.",
            "La plateforme ne garantit pas un monitoring temps réel. Les valeurs peuvent subir des délais de traitement ou de transmission.",
            "Vérifiez toujours les informations critiques par des méthodes cliniques appropriées. Ne vous reposez pas exclusivement sur la plateforme.",
            "Les dispositifs connectés restent des dispositifs médicaux régulés, soumis à leur propre notice d'utilisation."
          ],
          warn: "Easy Care Hub n'est pas destiné à servir d'alarme pour des situations potentiellement mortelles. En cas de symptôme aigu, appelez immédiatement les services d'urgence."
        },
        roles: {
          title: "Rôles et permissions",
          lead: "Trois rôles sont pris en charge : propriétaire système, administrateur et utilisateur. Le modèle de permissions utilise CRUDS — Create, Read, Update, Delete, Share.",
          tHead: ["Capacité","Propriétaire","Administrateur","Utilisateur"],
          rows: [
            ["Signes vitaux","R","R","R"],
            ["Dispositifs","RUS","RUS","—"],
            ["Emplacements","CRUS","RUS","R"],
            ["Résidents","CRUS","CRUS","RS"],
            ["Utilisateurs","CRUS","CRUS","—"],
            ["Seuils individuels","CRUS","CRUS","R"],
            ["Seuils de référence","CRUS","CRUS","R"],
            ["Rapports","R / Télécharger","R / Télécharger","R / Télécharger"],
            ["Notifications","R / Revu","R / Revu","R / Revu"]
          ],
          key: "C = Créer · R = Lire · U = Modifier · D = Supprimer · S = Partager · — = pas d'accès"
        },
        abbr: {
          title: "Abréviations & glossaire",
          rows: [
            ["HR","Fréquence cardiaque — battements par minute."],
            ["BrR","Fréquence respiratoire — respirations par minute."],
            ["Paramètres globaux","Règles de notification appliquées à l'ensemble des résidents."],
            ["Paramètres individuels","Substitutions des règles globales par résident."],
            ["Référence (baseline)","Seuil personnalisé calculé à partir de l'historique récent du résident."],
            ["MDR","Règlement (UE) 2017/745 sur les dispositifs médicaux."],
            ["Journal d'audit","Archive par résident des notifications déjà revues par un soignant."]
          ]
        }
      },
      s2: {
        login: {
          title: "Connexion",
          body: "Seuls les utilisateurs autorisés accèdent à Easy Care Hub. Après la création de votre compte et la définition d'un mot de passe, connectez-vous avec votre e-mail et mot de passe.",
          steps: [
            "Saisissez votre e-mail.",
            "Saisissez votre mot de passe.",
            "Cliquez sur Connexion. La plateforme authentifie vos identifiants et affiche le tableau de bord.",
            "Cochez Se souvenir de moi pour mémoriser l'e-mail sur l'appareil.",
            "Utilisez Mot de passe oublié ? pour obtenir un lien de réinitialisation."
          ]
        },
        menu: {
          title: "Menu",
          body: "Après connexion, le tableau de bord Vitals s'ouvre par défaut. Le menu latéral peut être replié ou déplié via la flèche du bas. Les sections visibles dépendent du rôle :",
          items: ["Vitals","Résidents","Notifications","Dispositifs","Administration"]
        },
        navbar: {
          title: "Barre de navigation",
          body: "La barre supérieure est toujours visible et contient, de gauche à droite :",
          items: [
            "Le logo HARTMANN / Easy Care Hub — retour au tableau de bord.",
            "L'icône Support — ouvre les onglets Mentions/À propos et FAQ.",
            "L'icône Utilisateur — ouvre Mon compte, À propos et Déconnexion."
          ]
        },
        dash: {
          title: "Tableau de bord",
          lead: "Le tableau de bord est la vue par défaut après connexion. Il affiche tous les dispositifs de votre établissement, regroupés par zone.",
          zones: "Toutes les zones est sélectionné par défaut. Cliquez sur un autre onglet pour filtrer les dispositifs de cette zone.",
          views: "Basculez entre vue tuiles et vue tableau avec le commutateur en haut à droite.",
          filter: "Le filtre visuel limite par statut : Tous, Endormi, Absent, Au lit ou Déconnecté.",
          search: "La recherche retrouve un numéro de dispositif ou un résident précis.",
          color: "Chaque tuile résident est colorée selon son statut. Cliquer ouvre la fiche résident sur l'onglet Tendances.",
          sideTitle: "Panneau de notifications",
          sideBody: "Le panneau liste les notifications actives HR, BrR et hors-lit par ordre de déclenchement. Cliquez sur la coche pour marquer une notification revue — elle est retirée et archivée dans le journal d'audit. Voir tout ouvre la page complète. La cloche replie/déplie le panneau."
        }
      },
      s3: {
        lead: "Résidents dans le menu ouvre l'aperçu des résidents — un tableau listant chaque résident avec dispositif et emplacement associés.",
        columns: ["ID résident","ID dispositif","Zone","Emplacement","Statut (Actif / Sorti)"],
        searchTitle: "Retrouver un résident",
        searchBody: "Utilisez la recherche pour filtrer par ID résident, dispositif ou emplacement.",
        createTitle: "Créer un nouveau résident",
        createBody: "Cliquez sur + Créer un résident en haut à droite. Un panneau s'ouvre avec les champs suivants :",
        createFields: [
          "ID résident (obligatoire).",
          "Prénom, nom, date de naissance (optionnels).",
          "Genre (optionnel).",
          "Emplacement (menu déroulant). Une fois choisi, Dispositif et Zone deviennent actifs ; la Zone se remplit automatiquement.",
          "Notification hors-lit — règle globale par défaut. Choisissez Paramètres manuels pour substituer."
        ],
        createConflict: "Si l'emplacement est déjà attribué, un popup de confirmation apparaît. Cliquez Oui pour réassigner, Non pour laisser le champ vide.",
        createManual: "Paramètres manuels offrent trois options : notifier au-delà de N minutes hors-lit ; notifier si hors-lit N % plus longtemps que d'habitude ; désactiver.",
        createSave: "Dès que les champs obligatoires sont remplis, Créer devient actif. Un clic enregistre le résident et affiche un message de confirmation."
      },
      s4: {
        lead: "La fiche résident est accessible de plusieurs manières : depuis la liste des résidents (Aperçu), depuis une tuile du tableau de bord (Tendances), ou depuis une notification (Notifications). L'en-tête affiche toujours ID résident, HR (bpm), BrR (brpm) et présence au lit.",
        overview: {
          title: "Aperçu",
          body: "Affiche les informations générales du résident, réparties en Détails et Notifications individuelles :",
          details: ["Statut (Actif / Sorti)","ID résident","Prénom & nom, date de naissance","Genre","Emplacement, Dispositif, Zone"],
          indiv: ["Règle Hors-lit — hérite de la règle globale par défaut, peut être substituée.","La Période de nuit se modifie dans Administration, pas ici.","Les paramètres manuels offrent les trois mêmes options qu'à la création."]
        },
        trends: {
          title: "Tendances",
          body: "Affiche HR et BrR dans le temps avec le rapport de la dernière nuit. Filtre par date ou période. Y : HR 40–120 bpm, BrR 5–40 brpm. Les marqueurs jaunes et violets indiquent seuils globaux et valeurs de référence.",
          missing: "Si aucune donnée n'apparaît, soit les données de la nuit ne sont pas encore livrées (≈ 30 min après la période de nuit définie), soit la qualité était insuffisante — par ex. résident hors du lit, ou moins de quatre heures de données. En cas de récurrence, contactez le support."
        },
        notif: {
          title: "Notifications",
          body: "Liste chaque notification pour ce résident avec Type, ID résident, ID dispositif, Heure, Détails et Actions.",
          presets: ["Personnalisé — plage calendrier.","Nuit dernière.","Semaine dernière."],
          review: "Marquez une notification comme revue via la coche. Elle est retirée et déplacée dans le journal d'audit.",
          filter: "Filtre par type (HR, BrR, hors-lit). Les filtres actifs apparaissent en puces ; retirez-les via la croix."
        },
        audit: {
          title: "Journal d'audit",
          body: "Archive chronologique des notifications revues. Colonnes : Type, ID dispositif, Heure, Détails, Actions. La coche n'est plus interactive."
        }
      },
      s5: {
        lead: "La page Notifications regroupe les alertes de tout l'établissement. Accès via le menu ou Voir tout depuis le panneau. Trois onglets sont disponibles :",
        tabs: ["Aperçu","Paramètres médicaux","Activité au lit"],
        overview: {
          title: "Aperçu",
          body: "Toutes les notifications actives, chronologiques, avec Type, ID résident, ID dispositif, Heure/Détails et Actions. Filtres : Type, ID résident, ID dispositif, Période, Statut (Nouveau / Revu)."
        },
        medical: {
          title: "Paramètres médicaux",
          body: "Règles globales pour les valeurs cliniques. Elles s'appliquent à tous les résidents et ne peuvent être substituées par résident. Deux modèles :",
          types: [
            { n:"Par seuil", d:"Alerte au franchissement de seuils statiques HR/BrR." },
            { n:"Par référence",  d:"Alerte en cas d'écart significatif par rapport à l'historique personnel récent du résident." }
          ],
          defaults: "Les valeurs sont pré-remplies à partir d'études médicales et de recommandations cliniques. Cliquez sur l'icône édition à droite ; les autres onglets deviennent indisponibles et une barre Annuler / Enregistrer apparaît."
        },
        bed: {
          title: "Activité au lit",
          body: "Règle globale hors-lit, substituable par résident dans la fiche. Trois règles :",
          rules: [
            "Notifier au-delà de N minutes hors-lit.",
            "Notifier si hors-lit N % plus longtemps que d'habitude.",
            "Désactiver."
          ],
          bedtime: "Définissez la période de nuit via les champs horaires. La règle est active pendant ces heures."
        }
      },
      s6: {
        lead: "Visible uniquement pour propriétaire système et administrateur. La page Dispositifs liste chaque dispositif :",
        cols: ["ID dispositif","Zone","Emplacement","ID résident","Statut (Actif / Déconnecté)"],
        detail: "Un clic ouvre la fiche dispositif. Zone, Emplacement et résident assigné sont éditables ; + Créer un emplacement permet d'en créer un en ligne. Annuler affiche un popup si des changements ne sont pas enregistrés ; Enregistrer affiche une confirmation."
      },
      s7: {
        lead: "Visible uniquement pour propriétaire système et administrateur. L'Administration regroupe Zones, Emplacements et Utilisateurs. Les boutons de création et le lien Retour sont toujours visibles en haut.",
        zones: {
          title: "Zones",
          body: "Tableau des zones avec Nom, Description, compteurs Total/Actifs/Déconnectés et Actions (Supprimer — propriétaire uniquement). Créez via + Créer une zone ; Nom obligatoire, Description optionnelle."
        },
        locations: {
          title: "Emplacements",
          body: "Tableau des emplacements avec Nom, Zone, ID dispositif, ID résident et Actions. Créez via + Créer un emplacement ; Étage, Chambre et Lit alimentent un aperçu en direct."
        },
        users: {
          title: "Utilisateurs",
          body: "Liste chaque utilisateur avec Nom, Niveau d'accès, E-mail, Statut et Dernière mise à jour. Création via + Créer un utilisateur avec Prénom, Nom, E-mail, Rôle et Niveau d'accès — les capacités du niveau s'affichent sous le champ."
        }
      },
      s8: {
        lead: "Cliquez votre avatar en haut à droite et choisissez Mon compte pour voir et modifier votre profil :",
        items: [
          "Prénom (modifiable)","Nom (modifiable)","E-mail (modifiable)","Rôle","Langue — English ou Deutsch","Établissement","Niveau d'accès","Conditions, Politique de confidentialité"
        ],
        save: "Cliquez l'icône édition pour modifier. Annuler avec des changements non enregistrés déclenche un popup de confirmation."
      },
      s9: {
        lead: "L'écran À propos & mentions regroupe les informations plateforme en quatre sections :",
        items: [
          { t:"Version logicielle", d:"Version plateforme, date de build et type de release." },
          { t:"Distributeur",       d:"PAUL HARTMANN AG, Paul-Hartmann-Straße 12, 89522 Heidenheim, Allemagne · info@hartmann.info · +49 7321 360." },
          { t:"Fabricant — Sleepiz", d:"Sleepiz AG, Hornbachstrasse 23, 8008 Zurich, Suisse. Responsable du radar sans contact (accessoire d'un dispositif médical au sens de l'article 2(2) UE MDR, classe IIa) et du cloud Sleepiz One+ (logiciel classe IIa)." },
          { t:"Fabricant — ACTIMI",  d:"ACTIMI GmbH, Albert-Schäffle Str. 119, 70186 Stuttgart, Allemagne. Responsable du tableau de bord ACTIMI (affichage non médical) et d'ACTIMI Signals v1.0 (moteur de notifications, classe IIa, UDI-DI 42700031203-API-XG)." }
        ],
        faqCta: "L'écran À propos contient aussi un bouton Besoin d'aide ? qui renvoie à l'onglet FAQ."
      }
    },
    faq: {
      breadcrumb: "Support",
      eyebrow: "Questions fréquentes",
      title: "Tout ce que votre équipe doit savoir.",
      sub: "Des réponses rapides pour l'utilisation quotidienne, l'installation et la gouvernance clinique. Toujours bloqué ? Contactez le support numérique HARTMANN.",
      searchPlaceholder: "Rechercher dans la FAQ — ex. 'hors lit'",
      categories: { all:"Tous", clinical:"Usage clinique", setup:"Installation & dispositifs", account:"Compte & rôles", security:"Sécurité & conformité" },
      items: [
        { c:"clinical", q:"Easy Care Hub est-il un dispositif médical ?", a:"La plateforme Easy Care Hub elle-même n'est pas un dispositif médical au sens du règlement UE 2017/745. Elle sert uniquement à la visualisation et à la présentation de données issues de dispositifs connectés. Le radar Sleepiz et le moteur ACTIMI Signals sont des dispositifs médicaux régulés soumis à leur notice." },
        { c:"clinical", q:"Puis-je me fier à Easy Care Hub comme alarme d'urgence ?", a:"Non. La plateforme n'est pas conçue comme alarme pour des situations potentiellement mortelles nécessitant une intervention immédiate. La transmission temps réel n'est pas garantie. En cas de symptôme aigu, appelez les secours." },
        { c:"clinical", q:"Pourquoi aucune donnée n'apparaît-elle pour un résident ?", a:"Les rapports de nuit arrivent environ 30 min après la période de nuit définie. Si les valeurs manquent, la qualité des données peut être insuffisante — résident non couché ou moins de quatre heures de données. Si cela persiste, contactez le support." },
        { c:"clinical", q:"Quelle différence entre seuils et référence ?", a:"Les notifications par seuils se déclenchent au franchissement de limites fixes à l'échelle de l'établissement. Les notifications par référence s'appuient sur l'historique récent du résident pour détecter un écart significatif de sa norme personnelle." },
        { c:"clinical", q:"Comment fonctionne la règle Hors-lit ?", a:"Trois règles, globales ou par résident : notifier au-delà de N minutes hors-lit ; notifier si hors-lit N % plus longtemps que d'habitude ; désactiver. La Période de nuit définit quand la règle est active." },
        { c:"setup", q:"Quels dispositifs sont pris en charge ?", a:"Easy Care Hub affiche les données du radar Sleepiz sans contact (matériel) traitées par le Sleepiz One+ Cloud (classe IIa). Le backend ACTIMI Signals (v1.0, classe IIa) alimente les notifications." },
        { c:"setup", q:"Comment ajouter un résident à un lit ?", a:"Résidents → + Créer un résident. Saisissez l'ID résident, choisissez l'emplacement — Dispositif et Zone se remplissent. Si l'emplacement est déjà attribué, on vous demande s'il faut réassigner." },
        { c:"setup", q:"Puis-je substituer les règles globales pour un résident ?", a:"Oui. Fiche résident → Aperçu, la section Notifications individuelles permet de substituer la règle globale hors-lit. La Période de nuit se modifie dans Administration." },
        { c:"setup", q:"Comment créer une zone ou un emplacement ?", a:"Administration → Zones ou Emplacements, via + Créer une zone / + Créer un emplacement. Seuls propriétaires et administrateurs gèrent ces éléments ; seul le propriétaire peut supprimer." },
        { c:"account", q:"Quels rôles existent et qui peut faire quoi ?", a:"Trois rôles : propriétaire système (contrôle complet), administrateur (gestion de l'établissement) et utilisateur (lecture clinique avec revue des notifications). Les permissions suivent le modèle CRUDS — voir manuel." },
        { c:"account", q:"Comment changer mon mot de passe ?", a:"Sur la page de connexion, Mot de passe oublié ?, saisissez votre e-mail et soumettez. Vous recevez un lien de réinitialisation. Une fois connecté, langue et profil se règlent dans Mon compte." },
        { c:"account", q:"Puis-je changer la langue de l'interface ?", a:"Oui. Mon compte → Langue. English et Deutsch sont disponibles dans l'application ; le site public propose aussi Français." },
        { c:"security", q:"Où sont stockées les données des résidents ?", a:"Toutes les données sont hébergées en UE par des partenaires certifiés. La plateforme est alignée avec RGPD et ISO 27001 ; l'accès est régulé par rôles et journaux d'audit." },
        { c:"security", q:"Combien de temps les notifications sont-elles conservées ?", a:"Une notification revue par un soignant est archivée dans le journal d'audit du résident et conservée selon la politique de votre établissement et la réglementation locale." },
        { c:"security", q:"Comment signaler un incident de sécurité ?", a:"Contactez sans délai le support numérique HARTMANN via les coordonnées de cette page. Pour les dispositifs médicaux sous-jacents, contactez Sleepiz AG ou ACTIMI GmbH via leur notice." }
      ],
      contactTitle: "Contacter le support HARTMANN",
      contactSub: "Notre équipe support accompagne l'onboarding, les droits et l'exploitation quotidienne.",
      emailLabel: "E-mail",
      phoneLabel: "Téléphone",
      hoursLabel: "Horaires",
      hoursValue: "Lun–Ven · 08:00–18:00 CET"
    },
    releases: {
      breadcrumb: "Produit",
      eyebrow: "Notes de version",
      title: "Nouveautés d'Easy Care Hub.",
      sub: "Chaque mise à jour, changement et correctif livré. Abonnez-vous au flux RSS.",
      filters: { all:"Tous", new:"Nouveau", improved:"Amélioré", fixed:"Corrigé", security:"Sécurité" },
      subscribe: "S'abonner",
      sideTitle: "Versions précédentes",
      sideSub: "Parcourir les jalons antérieurs.",
      items: [
        { ver:"1.4.0", date:"2026-04-02", tag:"new",
          title:"Notifications par référence, UI française et panneau remanié",
          summary:"Notre plus grande release de l'année. Les alertes par référence passent en GA, le panneau de notifications est reconstruit, et une interface française est livrée.",
          groups:[
            { h:"Nouveau", items:[
              "Les notifications par référence HR et BrR sont disponibles en général. Les valeurs sont apprises de l'historique récent du résident, mises à jour quotidiennement.",
              "Le français est désormais pris en charge sur le site public. Dans l'application, English et Deutsch restent les langues cliniques officielles.",
              "Export du journal d'audit (CSV, PDF) depuis la fiche résident, filtré par période sélectionnée."
            ]},
            { h:"Amélioré", items:[
              "Le panneau de notifications regroupe par résident, avec le compteur à côté du nom — pratique pour les relèves.",
              "Les graphes Tendances sont jusqu'à 3× plus rapides pour les résidents avec plus d'un an d'historique.",
              "Messages d'état vide plus clairs quand une zone n'a pas de dispositifs."
            ]},
            { h:"Corrigé", items:[
              "Correction d'un cas où l'icône cloche restait ouverte après navigation.",
              "Correction d'un rare affichage de Statut résident obsolète dans l'onglet Aperçu."
            ]}
          ]
        },
        { ver:"1.3.1", date:"2026-02-14", tag:"security",
          title:"Renforcement des sessions et MFA pour les propriétaires",
          summary:"Release de sécurité ciblée. MFA obligatoire pour les propriétaires système, gestion des sessions resserrée.",
          groups:[
            { h:"Sécurité", items:[
              "MFA obligatoire pour le rôle propriétaire système à chaque connexion.",
              "Rotation des sessions à chaque changement de privilège (ex. promotion utilisateur → administrateur).",
              "Politique CSP affinée ; origines inutilisées retirées."
            ]},
            { h:"Corrigé", items:[
              "Cas limite où Se souvenir de moi se propageait entre profils du même appareil, résolu."
            ]}
          ]
        },
        { ver:"1.3.0", date:"2025-12-09", tag:"improved",
          title:"Tableau de bord multi-zones, recherche plus rapide, couleurs plus claires",
          summary:"Le tableau de bord grandit. Les onglets de zones prennent le clavier, la recherche unifie résidents et dispositifs, les quatre couleurs de statut respectent WCAG AA.",
          groups:[
            { h:"Amélioré", items:[
              "Raccourcis clavier : 1–9 basculent entre les neuf premières zones ; / focalise la recherche.",
              "La recherche combinée cible ID résident, ID dispositif et Emplacement, classée par récence.",
              "Les couleurs Endormi, Au lit, Absent et Déconnecté sont mises à jour pour WCAG AA."
            ]},
            { h:"Nouveau", items:[
              "Marquage en masse comme revu sur la page Notifications — plusieurs lignes, une action.",
              "La vue tuiles affiche une mini-courbe HR des 60 dernières minutes."
            ]}
          ]
        },
        { ver:"1.2.0", date:"2025-10-21", tag:"new",
          title:"Rapports de nuit, Administration revue et liens profonds",
          summary:"Les rapports de nuit arrivent dans Tendances. L'Administration a un partage Zones/Emplacements/Utilisateurs plus clair. Les dispositifs se partagent en un lien.",
          groups:[
            { h:"Nouveau", items:[
              "Rapports nocturnes dans la fiche résident — environ 30 min après la fin de la période de nuit définie.",
              "URLs profondes pour les dispositifs (ex. /devices/SN-12345) — partage en un clic.",
              "L'Administration est désormais en trois onglets : Zones, Emplacements, Utilisateurs."
            ]},
            { h:"Corrigé", items:[
              "Réinitialisation du zoom des tendances au changement d'onglet, corrigée.",
              "Tooltip d'abréviation BrR incorrect, corrigé."
            ]}
          ]
        },
        { ver:"1.1.0", date:"2025-08-05", tag:"improved",
          title:"Ajustements des rôles et éditeur de seuils",
          summary:"Matrice de permissions alignée sur les pratiques réelles. L'éditeur de seuils médicaux gagne en validation inline et feedback visuel.",
          groups:[
            { h:"Amélioré", items:[
              "L'éditeur de seuils valide les plages HR et BrR vs. défauts cliniques et signale les valeurs atypiques en ligne.",
              "Désactivation d'utilisateurs sans perdre l'historique d'audit.",
              "Le tableau Utilisateurs gagne les colonnes Statut et Dernière mise à jour."
            ]}
          ]
        },
        { ver:"1.0.0", date:"2025-05-02", tag:"new",
          title:"Easy Care Hub — disponibilité générale",
          summary:"Première release en production. Tableau de bord vitals, fiches résidents, notifications globales et individuelles, modèle de rôles fondateur.",
          groups:[
            { h:"Nouveau", items:[
              "Tableau de bord en direct en tuiles ou tableau, groupé par zones.",
              "Fiches résidents avec Aperçu, Tendances, Notifications et Journal d'audit.",
              "Notifications par seuils HR, BrR et hors-lit.",
              "Modèle de rôles : propriétaire, administrateur, utilisateur (CRUDS)."
            ]}
          ]
        }
      ]
    }
  }
};

/* =====================================================================
   Runtime: apply translations and wire up the language switcher
   ===================================================================== */

function getStoredLang() {
  try {
    const saved = localStorage.getItem("ech.lang");
    if (saved && I18N[saved]) return saved;
  } catch (_) {}
  const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  return I18N[nav] ? nav : "en";
}

function resolveKey(obj, path) {
  return path.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
}

function translatePage(lang) {
  const dict = I18N[lang];
  if (!dict) return;
  document.documentElement.lang = lang;
  document.documentElement.dir = dict.meta?.dir || "ltr";
  if (dict.meta?.siteTitle) document.title = dict.meta.siteTitle;
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta && dict.meta?.siteDescription) descMeta.setAttribute("content", dict.meta.siteDescription);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const val = resolveKey(dict, el.getAttribute("data-i18n"));
    if (typeof val === "string") el.innerHTML = val;
  });

  // Array → <li> list (fills the element's children with <li> items)
  document.querySelectorAll("[data-i18n-list]").forEach(el => {
    const val = resolveKey(dict, el.getAttribute("data-i18n-list"));
    if (Array.isArray(val)) {
      el.innerHTML = val.map(s => `<li>${s}</li>`).join("");
    }
  });

  // Array of {h,items} → grouped list (used inside manual / releases)
  document.querySelectorAll("[data-i18n-groups]").forEach(el => {
    const val = resolveKey(dict, el.getAttribute("data-i18n-groups"));
    if (Array.isArray(val)) {
      el.innerHTML = val.map(g => {
        if (typeof g === "string") return `<li>${g}</li>`;
        if (g.h && g.items) {
          return `<h4>${g.h}</h4><ul>${g.items.map(i => `<li>${i}</li>`).join("")}</ul>`;
        }
        if (g.t && g.d) return `<li><strong>${g.t}</strong> — ${g.d}</li>`;
        if (g.n && g.d) return `<li><strong>${g.n}</strong> — ${g.d}</li>`;
        return "";
      }).join("");
    }
  });

  // 2D array → table rows (<tbody>)
  document.querySelectorAll("[data-i18n-rows]").forEach(el => {
    const val = resolveKey(dict, el.getAttribute("data-i18n-rows"));
    if (Array.isArray(val)) {
      el.innerHTML = val.map(row => {
        if (Array.isArray(row)) {
          return `<tr>${row.map((c, i) => `<td${i===0?'':' class="center"'}>${c}</td>`).join("")}</tr>`;
        }
        return "";
      }).join("");
    }
  });

  // Array → fill <thead><tr><th>...
  document.querySelectorAll("[data-i18n-heads]").forEach(el => {
    const val = resolveKey(dict, el.getAttribute("data-i18n-heads"));
    if (Array.isArray(val)) {
      el.innerHTML = `<tr>${val.map((c, i) => `<th${i===0?'':' class="center"'}>${c}</th>`).join("")}</tr>`;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const spec = el.getAttribute("data-i18n-attr");
    spec.split(",").forEach(pair => {
      const [attr, key] = pair.split(":").map(s => s.trim());
      const val = resolveKey(dict, key);
      if (typeof val === "string") el.setAttribute(attr, val);
    });
  });

  // Active language button
  document.querySelectorAll(".lang-switch [data-lang]").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
  const currentLabel = document.querySelector(".lang-switch .current-lang");
  if (currentLabel) currentLabel.textContent = lang.toUpperCase();

  // Give pages a chance to rebuild dynamic content
  document.dispatchEvent(new CustomEvent("i18n:changed", { detail: { lang, dict } }));
}

function setLang(lang) {
  try { localStorage.setItem("ech.lang", lang); } catch (_) {}
  translatePage(lang);
}

// Make the translation dictionary available to other scripts (main.js)
window.I18N = I18N;
window.ECH_i18n = { setLang, translatePage };

document.addEventListener("DOMContentLoaded", () => {
  translatePage(getStoredLang());

  // Wire lang switcher dropdown
  const sw = document.querySelector(".lang-switch");
  if (sw) {
    const btn = sw.querySelector(".lang-trigger");
    btn?.addEventListener("click", (e) => {
      e.stopPropagation();
      sw.classList.toggle("open");
    });
    document.addEventListener("click", () => sw.classList.remove("open"));
    sw.querySelectorAll("[data-lang]").forEach(b => {
      b.addEventListener("click", () => {
        setLang(b.getAttribute("data-lang"));
        sw.classList.remove("open");
      });
    });
  }

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const links  = document.querySelector(".nav-links");
  toggle?.addEventListener("click", () => links?.classList.toggle("open"));
});
