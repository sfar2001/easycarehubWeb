import type { Translations } from "./types";

export const de: Translations = {
  meta: {
    lang: "Deutsch",
    dir: "ltr",
    siteTitle: "HARTMANN Easy Care Hub — Kontaktlose Vitalzeichen-Überwachung für Pflegeeinrichtungen",
    siteDescription: "Eine klinische Visualisierungsplattform für Pflegeheime. Kontinuierliche, kontaktlose Überwachung von Herzfrequenz, Atemfrequenz und Bettaktivität — mit zertifizierten Medizinprodukten."
  },
  nav: { home: "Startseite", manual: "Benutzerhandbuch", faq: "FAQ", releases: "Versionshinweise", contact: "Kontakt", login: "Anmelden", requestDemo: "Demo anfragen" },
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
    f1body: "Zertifiziertes Sleepiz-Radar erfasst Herz- und Atemfrequenz ohne Körperkontakt — durch Laken, Pyjama oder Decke.",
    f2title: "Einheitliche Bewohneransicht",
    f2body: "Herzfrequenz, Atemfrequenz, Bettstatus und historische Trends jedes Bewohners, nach Zone und Zimmer geordnet.",
    f3title: "Intelligente Benachrichtigungen",
    f3body: "Schwellenwert- oder baseline-basierte Alarme für HR, BrR und Außer-Bett — global oder pro Bewohner einstellbar.",
    f4title: "Rollenbasierter Zugriff",
    f4body: "System-Owner, Administrator und Nutzer mit granularer CRUDS-Berechtigung, ausgerichtet an klinischen Abläufen.",
    f5title: "Auditfähige Berichte",
    f5body: "Jede bestätigte Benachrichtigung landet im Audit-Log des Bewohners. Prüfbar, exportierbar, konform.",
    f6title: "Bereit für Ihre Einrichtung",
    f6body: "Mehrsprachige Oberfläche, Cloud-Hosting in der EU, integriert in bestehende Pflegeprozesse."
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
    mockHR: "Herzfrequenz", mockBR: "Atemfrequenz", mockBed: "Bettstatus",
    mockLast: "Nachtbewertung", mockZone: "Zone", mockZoneVal: "Nordflügel"
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
    primary: "Demo anfragen", secondary: "Handbuch lesen"
  },
  footer: {
    tagline: "Klinische Visualisierungsplattform für Pflegeheime, von PAUL HARTMANN AG.",
    product: "Produkt", resources: "Ressourcen", company: "Unternehmen",
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
  manual: {
    breadcrumb: "Dokumentation",
    eyebrow: "Benutzerhandbuch · Rev. 1.4",
    title: "HARTMANN Easy Care Hub — Benutzerhandbuch",
    intro: "Dieses Handbuch beschreibt, wie autorisiertes Personal die HARTMANN Easy Care Hub-Plattform nutzt, um bewohnerbezogene Daten angeschlossener Überwachungsgeräte zu visualisieren und zu organisieren.",
    tocTitle: "Auf dieser Seite",
    sections: {
      s1: "1. Allgemein", s11: "1.1 Anwendungsbereich & Sicherheitshinweise", s12: "1.2 Rollen und Berechtigungen", s13: "1.3 Abkürzungen und Glossar",
      s2: "2. Plattformübersicht", s21: "2.1 Anmeldung", s22: "2.2 Menü", s23: "2.3 Navigationsleiste", s24: "2.4 Dashboard",
      s3: "3. Bewohnerübersicht", s31: "3.1 Bewohner suchen", s32: "3.2 Neuen Bewohner anlegen",
      s4: "4. Bewohnerdetailseite", s41: "4.1 Überblick", s42: "4.2 Trends", s43: "4.3 Benachrichtigungen", s44: "4.4 Audit-Log",
      s5: "5. Benachrichtigungen", s51: "5.1 Überblick", s52: "5.2 Medizinische Einstellungen", s53: "5.3 Bettaktivität",
      s6: "6. Geräte", s7: "7. Administration", s71: "7.1 Zonen", s72: "7.2 Standorte", s73: "7.3 Nutzer",
      s8: "8. Mein Konto", s9: "9. Über & rechtliche Hinweise"
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
        tHead: ["Berechtigung", "System-Owner", "Administrator", "Nutzer"],
        rows: [
          ["Vitalzeichen", "R", "R", "R"],
          ["Geräte", "RUS", "RUS", "—"],
          ["Standorte", "CRUS", "RUS", "R"],
          ["Bewohner", "CRUS", "CRUS", "RS"],
          ["Nutzer", "CRUS", "CRUS", "—"],
          ["Individuelle Schwellen", "CRUS", "CRUS", "R"],
          ["Baseline-Schwellen", "CRUS", "CRUS", "R"],
          ["Berichte", "R / Download", "R / Download", "R / Download"],
          ["Benachrichtigungen", "R / Überprüft", "R / Überprüft", "R / Überprüft"]
        ],
        key: "C = Erstellen · R = Lesen · U = Ändern · D = Löschen · S = Teilen · — = kein Zugriff"
      },
      abbr: {
        title: "Abkürzungen & Glossar",
        rows: [
          ["HR", "Herzfrequenz — Anzahl der Herzschläge pro Minute."],
          ["BrR", "Atemfrequenz — Anzahl der Atemzüge pro Minute."],
          ["Globale Einstellungen", "Benachrichtigungseinstellungen, die systemweit für alle Bewohner gelten."],
          ["Individuelle Einstellungen", "Pro-Bewohner-Überschreibungen globaler Einstellungen, z. B. Zeit außerhalb des Bettes."],
          ["Baseline", "Ein personalisierter Schwellenwert, der aus der jüngsten Datenhistorie des Bewohners generiert wird."],
          ["MDR", "Medizinprodukte-Verordnung (EU) 2017/745."],
          ["Audit-Log", "Pro Bewohner geführtes Archiv bereits überprüfter Benachrichtigungen."]
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
          "Nutzen Sie Passwort vergessen?, um einen Reset-Link anzufordern."
        ]
      },
      menu: {
        title: "Menü",
        body: "Nach der Anmeldung öffnet sich standardmäßig das Vitals-Dashboard. Das linke Menü kann über den Pfeil am unteren Rand ein- oder ausgeblendet werden. Folgende Bereiche sind je nach Rolle sichtbar:",
        items: ["Vitals", "Bewohner", "Benachrichtigungen", "Geräte", "Administration"]
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
        sideBody: "Die Sidebar listet aktive Benachrichtigungen für HR, BrR und Außer-Bett in Auslösereihenfolge. Klicken Sie das Häkchen-Symbol, um eine Benachrichtigung als überprüft zu markieren — sie wird aus der Sidebar entfernt und im Audit-Log archiviert."
      }
    },
    s3: {
      lead: "Über Bewohner im linken Menü öffnen Sie die Bewohnerübersicht — eine Tabelle aller Bewohner mit zugeordnetem Gerät und Standort.",
      columns: ["Bewohner-ID", "Geräte-ID", "Zone", "Standort", "Status (Aktiv / Entlassen)"],
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
        details: ["Status (Aktiv / Entlassen)", "Bewohner-ID", "Vor- & Nachname, Geburtsdatum", "Geschlecht", "Standort, Gerät, Zone"],
        indiv: [
          "Zeit-außer-Bett — übernimmt standardmäßig die globale Regel, kann aber überschrieben werden.",
          "Die globale Bettzeit ist nur in der Administration editierbar, nicht hier.",
          "Manuelle Einstellungen bieten dieselben drei Optionen wie beim Anlegen."
        ]
      },
      trends: {
        title: "Trends",
        body: "Zeigt HR und BrR im Zeitverlauf zusammen mit dem Nachtbericht. Filter nach Datum oder Zeitraum. Y-Achse: HR 40–120 bpm, BrR 5–40 brpm. Gelbe und violette Marker zeigen konfigurierte globale Schwellen und Baseline-Werte.",
        missing: "Wenn keine Daten erscheinen, wurden entweder die Daten der letzten Nacht noch nicht ausgeliefert (ca. 30 Min. nach dem definierten Nachtzeitraum), oder die Datenqualität war unzureichend — z. B. wenn der Bewohner nicht im Bett war oder weniger als vier Stunden Daten erfasst wurden."
      },
      notif: {
        title: "Benachrichtigungen",
        body: "Listet jede Benachrichtigung für diesen Bewohner mit Typ, Bewohner-ID, Geräte-ID, Zeit, Details und Aktionen.",
        presets: ["Benutzerdefiniert — Kalenderzeitraum wählen.", "Letzte Nacht.", "Letzte Woche."],
        review: "Markieren Sie eine Benachrichtigung über das Häkchen in der Spalte Aktionen als überprüft.",
        filter: "Klicken Sie Filter, um nach Typ (HR, BrR, Außer Bett) einzuschränken. Aktive Filter erscheinen als Chips über der Tabelle."
      },
      audit: {
        title: "Audit-Log",
        body: "Ein chronologisches Archiv aller überprüften Benachrichtigungen. Spalten: Typ, Geräte-ID, Zeit, Details, Aktionen."
      }
    },
    s5: {
      lead: "Die Benachrichtigungsseite bündelt Warnungen der gesamten Einrichtung. Erreichbar über das linke Menü oder Alle anzeigen in der Sidebar. Drei Reiter stehen zur Verfügung:",
      tabs: ["Überblick", "Medizinische Einstellungen", "Bettaktivität"],
      overview: {
        title: "Überblick",
        body: "Alle aktiven Benachrichtigungen aller Bewohner, chronologisch mit Typ, Bewohner-ID, Geräte-ID, Zeit/Details und Aktionen."
      },
      medical: {
        title: "Medizinische Einstellungen",
        body: "Globale Benachrichtigungsregeln für klinische Werte. Sie gelten für alle Bewohner. Zwei Benachrichtigungsmodelle:",
        types: [
          { n: "Schwellenwert-basiert", d: "Auslösung bei Über-/Unterschreitung fester Schwellen für HR oder BrR." },
          { n: "Baseline-basiert", d: "Auslösung bei signifikanter Abweichung von der persönlichen jüngsten Historie des Bewohners." }
        ],
        defaults: "Die Plattform füllt diese Werte standardmäßig aus medizinischen Studien und klinischen Leitlinien vor."
      },
      bed: {
        title: "Bettaktivität",
        body: "Konfiguriert die standardmäßige Außer-Bett-Regel für alle Bewohner. Pro Bewohner in der Bewohnerdetailseite überschreibbar. Drei Regeln:",
        rules: [
          "Benachrichtigen, wenn der Bewohner länger als N Minuten außer Bett war.",
          "Benachrichtigen, wenn der Bewohner N % länger außer Bett ist als gewöhnlich.",
          "Deaktivieren."
        ],
        bedtime: "Die Bettzeit über die Zeitfelder festlegen. Die Regel gilt während dieser Stunden."
      }
    },
    s6: {
      lead: "Nur für System-Owner und Administrator sichtbar. Die Geräteseite listet alle Geräte der Einrichtung:",
      cols: ["Geräte-ID", "Zone", "Standort", "Bewohner-ID", "Gerätestatus (Aktiv / Getrennt)"],
      detail: "Ein Klick auf ein Gerät öffnet dessen Detailseite. Zone, Standort und zugeordneter Bewohner können dort bearbeitet werden."
    },
    s7: {
      lead: "Nur für System-Owner und Administrator sichtbar. Die Administration bündelt Zonen, Standorte und Nutzer.",
      zones: {
        title: "Zonen",
        body: "Tabelle aller Zonen mit Name, Beschreibung, Gesamt-/Aktiv-/Getrennt-Zählern und Aktionen (Löschen — nur System-Owner)."
      },
      locations: {
        title: "Standorte",
        body: "Tabelle aller Standorte mit Name, Zone, Geräte-ID, Bewohner-ID und Aktionen."
      },
      users: {
        title: "Nutzer",
        body: "Listet jeden Nutzer mit Name, Berechtigungsstufe, E-Mail, Status und zuletzt aktualisiert."
      }
    },
    s8: {
      lead: "Klicken Sie Ihr Nutzersymbol oben rechts und wählen Sie Mein Konto, um Ihr Profil zu sehen und zu bearbeiten:",
      items: ["Vorname (bearbeitbar)", "Nachname (bearbeitbar)", "E-Mail (bearbeitbar)", "Rolle", "Sprache — English oder Deutsch", "Einrichtung", "Berechtigungsstufe", "AGB, Datenschutzhinweis"],
      save: "Klicken Sie auf das Bearbeiten-Symbol, um bearbeitbare Felder zu ändern."
    },
    s9: {
      lead: "Der Bereich Über & Rechtliches fasst Plattforminformationen in vier Abschnitten zusammen:",
      items: [
        { t: "Softwareversion", d: "Plattformversion, Build-Datum und Release-Typ." },
        { t: "Vertrieb", d: "PAUL HARTMANN AG, Paul-Hartmann-Straße 12, 89522 Heidenheim, Deutschland · info@hartmann.info · +49 7321 360." },
        { t: "Hersteller — Sleepiz", d: "Sleepiz AG, Hornbachstrasse 23, 8008 Zürich, Schweiz. Verantwortlich für die kontaktlose Radar-Hardware (Zubehör eines Medizinprodukts nach Art. 2(2) EU MDR, Klasse IIa) und die Sleepiz One+ Cloud (Software Klasse IIa)." },
        { t: "Hersteller — ACTIMI", d: "ACTIMI GmbH, Albert-Schäffle Str. 119, 70186 Stuttgart, Deutschland. Verantwortlich für das ACTIMI Dashboard und ACTIMI Signals v1.0 (Backend-Benachrichtigungsmodul, Klasse IIa, UDI-DI 42700031203-API-XG)." }
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
      { c: "clinical", q: "Ist der Easy Care Hub ein Medizinprodukt?", a: "Die Easy Care Hub-Plattform selbst ist kein Medizinprodukt gemäß EU MDR 2017/745. Sie dient ausschließlich der Visualisierung und Darstellung von Daten aus angeschlossenen Geräten. Die angeschlossene Sleepiz-Radar-Hardware und das ACTIMI Signals Benachrichtigungsmodul sind regulierte Medizinprodukte mit eigener Gebrauchsanweisung." },
      { c: "clinical", q: "Kann ich Easy Care Hub als Notfallalarm nutzen?", a: "Nein. Die Plattform ist nicht als Alarmsystem für lebensbedrohliche Situationen bestimmt. Echtzeit-Zustellung kann nicht garantiert werden. Bei akuten Symptomen den Rettungsdienst rufen." },
      { c: "clinical", q: "Warum erscheinen für einen Bewohner keine Vitaldaten?", a: "Nachtbericht-Daten werden ca. 30 Minuten nach dem definierten Nachtzeitraum Ihrer Einrichtung geliefert. Fehlen Werte weiterhin, war die Datenqualität ggf. unzureichend." },
      { c: "clinical", q: "Was ist der Unterschied zwischen Schwellenwert- und Baseline-Benachrichtigungen?", a: "Schwellenwert-Benachrichtigungen lösen bei Überschreiten fester Grenzen aus. Baseline-Benachrichtigungen nutzen die jüngste Historie des Bewohners, um individuelle Abweichungen zu erkennen." },
      { c: "clinical", q: "Wie funktioniert die Außer-Bett-Regel?", a: "Drei Regeln stehen zur Wahl, global oder pro Bewohner: länger als N Minuten außer Bett, N % länger als üblich, oder deaktivieren. Die Bettzeit legt fest, wann die Regel aktiv ist." },
      { c: "setup", q: "Welche Geräte unterstützt Easy Care Hub?", a: "Easy Care Hub zeigt Daten des kontaktlosen Sleepiz-Radars, verarbeitet durch die Sleepiz One+ Cloud (Klasse IIa). Das Backend ACTIMI Signals (v1.0, Klasse IIa) liefert die Benachrichtigungen." },
      { c: "setup", q: "Wie füge ich einem Bett einen neuen Bewohner hinzu?", a: "Gehen Sie zu Bewohner → + Bewohner anlegen. Geben Sie die Bewohner-ID ein, wählen Sie den Standort — Gerät und Zone werden automatisch gefüllt." },
      { c: "setup", q: "Kann ich globale Benachrichtigungsregeln für einen Bewohner überschreiben?", a: "Ja. In der Bewohnerdetailseite → Überblick erlaubt der Bereich Individuelle Benachrichtigungen das Überschreiben." },
      { c: "setup", q: "Wie lege ich eine neue Zone oder einen neuen Standort an?", a: "In Administration → Zonen oder Standorte. Nur System-Owner und Administrator können verwalten. Nur System-Owner können löschen." },
      { c: "account", q: "Welche Rollen gibt es?", a: "Easy Care Hub hat drei Rollen: System-Owner (volle Kontrolle), Administrator (Einrichtungsverwaltung) und Nutzer (lesender klinischer Betrieb)." },
      { c: "account", q: "Wie ändere ich mein Passwort?", a: "Über Passwort vergessen? auf der Anmeldeseite E-Mail eingeben und abschicken. Sie erhalten einen Reset-Link." },
      { c: "account", q: "Kann ich die Oberflächensprache ändern?", a: "Ja. Mein Konto → Sprache. In der Anwendung sind Englisch und Deutsch verfügbar; die öffentliche Website bietet zusätzlich Französisch." },
      { c: "security", q: "Wo werden meine Bewohnerdaten gespeichert?", a: "Alle Bewohnerdaten werden in EU-Rechenzentren unserer zertifizierten Partner gehostet. Die Plattform ist an DSGVO und ISO 27001 ausgerichtet." },
      { c: "security", q: "Wie lange werden Benachrichtigungen aufbewahrt?", a: "Wenn eine Pflegekraft eine Benachrichtigung als überprüft markiert, wird sie ins Audit-Log des Bewohners verschoben und gemäß Ihrer Aufbewahrungsrichtlinie aufbewahrt." },
      { c: "security", q: "Wie melde ich ein Sicherheitsproblem?", a: "Kontaktieren Sie umgehend den HARTMANN Digital Support mit den Kontaktdaten auf dieser Seite." }
    ],
    contactTitle: "HARTMANN Support kontaktieren",
    contactSub: "Unser Digital-Support-Team hilft bei Onboarding, Berechtigungen und täglichem Betrieb.",
    emailLabel: "E-Mail", phoneLabel: "Telefon", hoursLabel: "Zeiten",
    hoursValue: "Mo–Fr · 08:00–18:00 MEZ"
  },
  releases: {
    breadcrumb: "Produkt",
    eyebrow: "Versionshinweise",
    title: "Neuerungen im Easy Care Hub.",
    sub: "Jede Aktualisierung, Änderung und jeder Fix der Plattform.",
    filters: { all: "Alle", new: "Neu", improved: "Verbessert", fixed: "Behoben", security: "Sicherheit" },
    subscribe: "Abonnieren",
    sideTitle: "Frühere Versionen",
    sideSub: "Vorherige Meilensteine durchsuchen.",
    items: [
      { ver: "1.4.0", date: "2026-04-02", tag: "new",
        title: "Baseline-Benachrichtigungen, französische Oberfläche und neue Sidebar",
        summary: "Unser größtes Release des Jahres. Baseline-Alarmierung ist allgemein verfügbar, die Benachrichtigungs-Sidebar wurde neu gebaut, und eine französische Oberfläche für Schweiz und Belgien kommt hinzu.",
        groups: [
          { h: "Neu", items: [
            "Baseline-basierte HR- und BrR-Benachrichtigungen sind allgemein verfügbar.",
            "Französisch ist nun eine unterstützte Sprache auf der öffentlichen Website.",
            "Ein neuer Audit-Log-Export (CSV, PDF) auf der Bewohnerdetailseite."
          ]},
          { h: "Verbessert", items: [
            "Die Benachrichtigungs-Sidebar gruppiert Warnungen nun nach Bewohner.",
            "Trend-Charts laden bis zu 3× schneller.",
            "Klarere Leerzustands-Meldungen im Dashboard."
          ]},
          { h: "Behoben", items: [
            "Problem behoben, bei dem das Glockensymbol nach Seitennavigation geöffnet blieb.",
            "Seltener Fall mit veraltetem Status im Überblick-Reiter behoben."
          ]}
        ]
      },
      { ver: "1.3.1", date: "2026-02-14", tag: "security",
        title: "Session-Härtung und MFA für System-Owner",
        summary: "Ein fokussiertes Sicherheits-Release. MFA ist nun verpflichtend für System-Owner; die Session-Handhabung wurde plattformweit verschärft.",
        groups: [
          { h: "Sicherheit", items: [
            "Mehrfaktor-Authentifizierung ist für System-Owner bei jeder neuen Anmeldung Pflicht.",
            "Session-Tokens rotieren nun bei Rechteänderung.",
            "Verfeinerte Content-Security-Policy-Header."
          ]},
          { h: "Behoben", items: [
            "Randfall gelöst, bei dem Angemeldet bleiben über Browserprofile desselben Geräts übertragen wurde."
          ]}
        ]
      },
      { ver: "1.3.0", date: "2025-12-09", tag: "improved",
        title: "Multi-Zonen-Dashboard, schnellere Suche und klarere Statusfarben",
        summary: "Das Dashboard wird erwachsen. Zonen-Reiter unterstützen Tastatursteuerung, die Suche findet Bewohner und Geräte in einer Abfrage.",
        groups: [
          { h: "Verbessert", items: [
            "Tastenkürzel: 1–9 wechselt zwischen den ersten neun Zonen.",
            "Kombinierte Suche trifft nun Bewohner-ID, Geräte-ID und Standort.",
            "Statusfarben wurden an WCAG AA angepasst."
          ]},
          { h: "Neu", items: [
            "Massen-Überprüfung auf der Benachrichtigungsseite.",
            "Kachelansicht zeigt eine dezente HR-Sparkline der letzten 60 Minuten."
          ]}
        ]
      },
      { ver: "1.2.0", date: "2025-10-21", tag: "new",
        title: "Nachtberichte, überarbeitete Administration und Geräte-Deeplinks",
        summary: "Nachtberichte landen im Trends-Reiter. Die Administration erhält einen klareren Zonen/Standorte/Nutzer-Split.",
        groups: [
          { h: "Neu", items: [
            "Nächtliche Schlafberichte auf der Bewohnerdetailseite.",
            "Deeplink-URLs für Geräte (z. B. /devices/SN-12345).",
            "Administration ist nun eine Drei-Reiter-Ansicht."
          ]},
          { h: "Behoben", items: [
            "Gelegentliches Zurücksetzen des Zooms im Trend-Chart nach Reiterwechsel behoben.",
            "Falsche Abkürzungs-Tooltip auf BrR-Diagrammen korrigiert."
          ]}
        ]
      },
      { ver: "1.1.0", date: "2025-08-05", tag: "improved",
        title: "Rollen-Feinschliff und Schwellen-Editor",
        summary: "Berechtigungsmatrix an reale Pflegeabläufe angepasst.",
        groups: [
          { h: "Verbessert", items: [
            "Der Schwellen-Editor validiert HR- und BrR-Bereiche gegen klinische Vorgaben.",
            "Nutzer können deaktiviert werden, ohne ihre Audit-Historie zu verlieren.",
            "Die Nutzer-Tabelle erhält Spalten Status und Zuletzt aktualisiert."
          ]}
        ]
      },
      { ver: "1.0.0", date: "2025-05-02", tag: "new",
        title: "Easy Care Hub — allgemeine Verfügbarkeit",
        summary: "Das erste Produktiv-Release. Vitals-Dashboard, Bewohnerdetailseiten, globale und individuelle Benachrichtigungen.",
        groups: [
          { h: "Neu", items: [
            "Live-Dashboard mit Kachel- und Tabellenansicht.",
            "Bewohnerdetailseiten mit Überblick, Trends, Benachrichtigungen und Audit-Log.",
            "Schwellenwert-Benachrichtigungen für HR, BrR und Außer-Bett.",
            "Rollenmodell: System-Owner, Administrator und Nutzer (CRUDS)."
          ]}
        ]
      }
    ]
  }
};
