import type { Translations } from "./types";

export const fr: Translations = {
  meta: {
    lang: "Français",
    dir: "ltr",
    siteTitle: "HARTMANN Easy Care Hub — Surveillance des signes vitaux sans contact",
    siteDescription: "Une plateforme de visualisation clinique pour les établissements de soins. Surveillance continue et sans contact du rythme cardiaque, de la fréquence respiratoire et de l'activité au lit."
  },
  nav: { home: "Accueil", manual: "Manuel", faq: "FAQ", releases: "Notes de version", contact: "Contact", login: "Connexion", requestDemo: "Demander une démo" },
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
    mockHR: "Fréq. cardiaque", mockBR: "Fréq. respiratoire", mockBed: "Présence au lit",
    mockLast: "Score de la nuit", mockZone: "Zone", mockZoneVal: "Aile nord"
  },
  stats: {
    eyebrow: "Pensé pour passer à l'échelle",
    title: "Des équipes, soutenues en silence.",
    sub: "Une plateforme qui se fait oublier — jusqu'à ce que cela compte.",
    s1n: "24/7", s1l: "Surveillance continue sans wearable",
    s2n: "3", s2l: "Niveaux de rôle avec permissions granulaires",
    s3n: "2", s3l: "Modèles de notification : seuil + référence",
    s4n: "UE", s4l: "Résidence des données & conformité"
  },
  cta: {
    title: "Découvrez Easy Care Hub dans votre établissement.",
    sub: "Réservez une démo de 30 minutes — nous parcourons le tableau de bord, l'installation et la gouvernance clinique.",
    primary: "Demander une démo", secondary: "Lire le manuel"
  },
  footer: {
    tagline: "Plateforme de visualisation clinique pour établissements de soins, par PAUL HARTMANN AG.",
    product: "Produit", resources: "Ressources", company: "Entreprise",
    productLinks: ["Aperçu", "Fonctionnalités", "Sécurité", "Pour les équipes IT"],
    resourcesLinks: ["Manuel", "Notes de version", "FAQ", "Support"],
    companyLinks: ["À propos d'HARTMANN", "Presse", "Carrières", "Contact"],
    copyright: "© 2026 PAUL HARTMANN AG. La plateforme Easy Care Hub n'est pas un dispositif médical au sens du règlement UE 2017/745.",
    legal: ["Mentions légales", "Confidentialité", "Conditions"]
  },
  download: {
    pdf: "Télécharger le manuel",
    pdfSub: "Un PDF typographié du manuel complet — prêt pour l'impression et la consultation hors ligne.",
    pdfMeta: "PDF · A4 · Révision 1.4 · EN",
    pdfCta: "Télécharger le PDF"
  },
  manual: {
    breadcrumb: "Documentation",
    eyebrow: "Manuel utilisateur · Rév. 1.4",
    title: "HARTMANN Easy Care Hub — Manuel utilisateur",
    intro: "Ce manuel décrit l'utilisation de la plateforme HARTMANN Easy Care Hub par le personnel autorisé pour visualiser et organiser les données des résidents produites par les dispositifs connectés.",
    tocTitle: "Sur cette page",
    sections: {
      s1: "1. Généralités", s11: "1.1 Portée & sécurité", s12: "1.2 Rôles et permissions", s13: "1.3 Abréviations et glossaire",
      s2: "2. Aperçu de la plateforme", s21: "2.1 Connexion", s22: "2.2 Menu", s23: "2.3 Barre de navigation", s24: "2.4 Tableau de bord",
      s3: "3. Aperçu des résidents", s31: "3.1 Rechercher un résident", s32: "3.2 Créer un résident",
      s4: "4. Fiche résident", s41: "4.1 Aperçu", s42: "4.2 Tendances", s43: "4.3 Notifications", s44: "4.4 Journal d'audit",
      s5: "5. Notifications", s51: "5.1 Aperçu", s52: "5.2 Paramètres médicaux", s53: "5.3 Activité au lit",
      s6: "6. Dispositifs", s7: "7. Administration", s71: "7.1 Zones", s72: "7.2 Emplacements", s73: "7.3 Utilisateurs",
      s8: "8. Mon compte", s9: "9. À propos & mentions"
    },
    s1: {
      lead: "Ce manuel décrit le fonctionnement de la plateforme HARTMANN Easy Care Hub et fournit des recommandations d'usage. La plateforme s'adresse au personnel autorisé des établissements de soins.",
      scope: {
        title: "Portée et public visé",
        body: "Easy Care Hub est destiné au personnel autorisé des établissements — propriétaires système, administrateurs, infirmier·ère·s référent·e·s et soignants — pour visualiser HR, BrR et présence au lit ainsi que les notifications configurées."
      },
      safety: {
        title: "Informations importantes de sécurité et d'utilisation",
        points: [
          "La plateforme Easy Care Hub n'est pas un dispositif médical au sens du règlement UE 2017/745.",
          "Les valeurs affichées sont à titre informatif. Elles ne sont pas destinées au diagnostic ou à la thérapie.",
          "Les décisions cliniques relèvent de la responsabilité des professionnels de santé qualifiés.",
          "La précision des données dépend du bon fonctionnement des dispositifs médicaux sous-jacents.",
          "La plateforme ne garantit pas un monitoring temps réel.",
          "Vérifiez toujours les informations critiques par des méthodes cliniques appropriées.",
          "Les dispositifs connectés restent des dispositifs médicaux régulés."
        ],
        warn: "Easy Care Hub n'est pas destiné à servir d'alarme pour des situations potentiellement mortelles. En cas de symptôme aigu, appelez immédiatement les services d'urgence."
      },
      roles: {
        title: "Rôles et permissions",
        lead: "Trois rôles sont pris en charge : propriétaire système, administrateur et utilisateur. Le modèle utilise CRUDS — Create, Read, Update, Delete, Share.",
        tHead: ["Capacité", "Propriétaire", "Administrateur", "Utilisateur"],
        rows: [
          ["Signes vitaux", "R", "R", "R"],
          ["Dispositifs", "RUS", "RUS", "—"],
          ["Emplacements", "CRUS", "RUS", "R"],
          ["Résidents", "CRUS", "CRUS", "RS"],
          ["Utilisateurs", "CRUS", "CRUS", "—"],
          ["Seuils individuels", "CRUS", "CRUS", "R"],
          ["Seuils de référence", "CRUS", "CRUS", "R"],
          ["Rapports", "R / Télécharger", "R / Télécharger", "R / Télécharger"],
          ["Notifications", "R / Revu", "R / Revu", "R / Revu"]
        ],
        key: "C = Créer · R = Lire · U = Modifier · D = Supprimer · S = Partager · — = pas d'accès"
      },
      abbr: {
        title: "Abréviations & glossaire",
        rows: [
          ["HR", "Fréquence cardiaque — battements par minute."],
          ["BrR", "Fréquence respiratoire — respirations par minute."],
          ["Paramètres globaux", "Règles de notification appliquées à l'ensemble des résidents."],
          ["Paramètres individuels", "Substitutions des règles globales par résident."],
          ["Référence (baseline)", "Seuil personnalisé calculé à partir de l'historique récent du résident."],
          ["MDR", "Règlement (UE) 2017/745 sur les dispositifs médicaux."],
          ["Journal d'audit", "Archive par résident des notifications déjà revues."]
        ]
      }
    },
    s2: {
      login: {
        title: "Connexion",
        body: "Seuls les utilisateurs autorisés accèdent à Easy Care Hub.",
        steps: [
          "Saisissez votre e-mail.",
          "Saisissez votre mot de passe.",
          "Cliquez sur Connexion.",
          "Cochez Se souvenir de moi pour mémoriser l'e-mail sur l'appareil.",
          "Utilisez Mot de passe oublié ? pour obtenir un lien de réinitialisation."
        ]
      },
      menu: {
        title: "Menu",
        body: "Après connexion, le tableau de bord Vitals s'ouvre par défaut. Les sections visibles dépendent du rôle :",
        items: ["Vitals", "Résidents", "Notifications", "Dispositifs", "Administration"]
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
        lead: "Le tableau de bord est la vue par défaut après connexion. Il affiche tous les dispositifs, regroupés par zone.",
        zones: "Toutes les zones est sélectionné par défaut.",
        views: "Basculez entre vue tuiles et vue tableau avec le commutateur en haut à droite.",
        filter: "Le filtre visuel limite par statut : Tous, Endormi, Absent, Au lit ou Déconnecté.",
        search: "La recherche retrouve un numéro de dispositif ou un résident précis.",
        color: "Chaque tuile résident est colorée selon son statut.",
        sideTitle: "Panneau de notifications",
        sideBody: "Le panneau liste les notifications actives HR, BrR et hors-lit par ordre de déclenchement."
      }
    },
    s3: {
      lead: "Résidents dans le menu ouvre l'aperçu des résidents — un tableau listant chaque résident avec dispositif et emplacement.",
      columns: ["ID résident", "ID dispositif", "Zone", "Emplacement", "Statut (Actif / Sorti)"],
      searchTitle: "Retrouver un résident",
      searchBody: "Utilisez la recherche pour filtrer par ID résident, dispositif ou emplacement.",
      createTitle: "Créer un nouveau résident",
      createBody: "Cliquez sur + Créer un résident en haut à droite. Un panneau s'ouvre avec les champs suivants :",
      createFields: [
        "ID résident (obligatoire).",
        "Prénom, nom, date de naissance (optionnels).",
        "Genre (optionnel).",
        "Emplacement (menu déroulant). Dispositif et Zone se remplissent automatiquement.",
        "Notification hors-lit — règle globale par défaut. Choisissez Paramètres manuels pour substituer."
      ],
      createConflict: "Si l'emplacement est déjà attribué, un popup de confirmation apparaît.",
      createManual: "Paramètres manuels offrent trois options : notifier au-delà de N minutes hors-lit ; hors-lit N % plus longtemps que d'habitude ; désactiver.",
      createSave: "Dès que les champs obligatoires sont remplis, Créer devient actif."
    },
    s4: {
      lead: "La fiche résident est accessible depuis la liste (Aperçu), une tuile du tableau de bord (Tendances), ou une notification.",
      overview: {
        title: "Aperçu",
        body: "Affiche les informations générales du résident, réparties en Détails et Notifications individuelles :",
        details: ["Statut (Actif / Sorti)", "ID résident", "Prénom & nom, date de naissance", "Genre", "Emplacement, Dispositif, Zone"],
        indiv: [
          "Règle Hors-lit — hérite de la règle globale par défaut, peut être substituée.",
          "La Période de nuit se modifie dans Administration, pas ici.",
          "Les paramètres manuels offrent les trois mêmes options qu'à la création."
        ]
      },
      trends: {
        title: "Tendances",
        body: "Affiche HR et BrR dans le temps avec le rapport de la dernière nuit. Y : HR 40–120 bpm, BrR 5–40 brpm.",
        missing: "Si aucune donnée n'apparaît, soit les données de la nuit ne sont pas encore livrées (≈ 30 min après la période de nuit), soit la qualité était insuffisante."
      },
      notif: {
        title: "Notifications",
        body: "Liste chaque notification pour ce résident avec Type, ID résident, ID dispositif, Heure, Détails et Actions.",
        presets: ["Personnalisé — plage calendrier.", "Nuit dernière.", "Semaine dernière."],
        review: "Marquez une notification comme revue via la coche.",
        filter: "Filtre par type (HR, BrR, hors-lit)."
      },
      audit: {
        title: "Journal d'audit",
        body: "Archive chronologique des notifications revues."
      }
    },
    s5: {
      lead: "La page Notifications regroupe les alertes de tout l'établissement. Trois onglets :",
      tabs: ["Aperçu", "Paramètres médicaux", "Activité au lit"],
      overview: {
        title: "Aperçu",
        body: "Toutes les notifications actives, chronologiques, avec Type, ID résident, ID dispositif, Heure/Détails et Actions."
      },
      medical: {
        title: "Paramètres médicaux",
        body: "Règles globales pour les valeurs cliniques. Deux modèles :",
        types: [
          { n: "Par seuil", d: "Alerte au franchissement de seuils statiques HR/BrR." },
          { n: "Par référence", d: "Alerte en cas d'écart significatif par rapport à l'historique personnel récent." }
        ],
        defaults: "Les valeurs sont pré-remplies à partir d'études médicales et de recommandations cliniques."
      },
      bed: {
        title: "Activité au lit",
        body: "Règle globale hors-lit, substituable par résident. Trois règles :",
        rules: [
          "Notifier au-delà de N minutes hors-lit.",
          "Notifier si hors-lit N % plus longtemps que d'habitude.",
          "Désactiver."
        ],
        bedtime: "Définissez la période de nuit via les champs horaires."
      }
    },
    s6: {
      lead: "Visible uniquement pour propriétaire et administrateur. La page Dispositifs liste chaque dispositif :",
      cols: ["ID dispositif", "Zone", "Emplacement", "ID résident", "Statut (Actif / Déconnecté)"],
      detail: "Un clic ouvre la fiche dispositif. Zone, Emplacement et résident assigné sont éditables."
    },
    s7: {
      lead: "Visible uniquement pour propriétaire et administrateur. L'Administration regroupe Zones, Emplacements et Utilisateurs.",
      zones: { title: "Zones", body: "Tableau des zones avec Nom, Description, compteurs et Actions (Supprimer — propriétaire uniquement)." },
      locations: { title: "Emplacements", body: "Tableau des emplacements avec Nom, Zone, ID dispositif, ID résident et Actions." },
      users: { title: "Utilisateurs", body: "Liste chaque utilisateur avec Nom, Niveau d'accès, E-mail, Statut et Dernière mise à jour." }
    },
    s8: {
      lead: "Cliquez votre avatar en haut à droite et choisissez Mon compte pour voir et modifier votre profil :",
      items: ["Prénom (modifiable)", "Nom (modifiable)", "E-mail (modifiable)", "Rôle", "Langue — English ou Deutsch", "Établissement", "Niveau d'accès", "Conditions, Politique de confidentialité"],
      save: "Cliquez l'icône édition pour modifier."
    },
    s9: {
      lead: "L'écran À propos & mentions regroupe les informations plateforme en quatre sections :",
      items: [
        { t: "Version logicielle", d: "Version plateforme, date de build et type de release." },
        { t: "Distributeur", d: "PAUL HARTMANN AG, Paul-Hartmann-Straße 12, 89522 Heidenheim, Allemagne · info@hartmann.info · +49 7321 360." },
        { t: "Fabricant — Sleepiz", d: "Sleepiz AG, Hornbachstrasse 23, 8008 Zurich, Suisse. Responsable du radar sans contact (classe IIa) et du cloud Sleepiz One+ (logiciel classe IIa)." },
        { t: "Fabricant — ACTIMI", d: "ACTIMI GmbH, Stuttgart, Allemagne. Responsable du tableau de bord ACTIMI et d'ACTIMI Signals v1.0 (classe IIa, UDI-DI 42700031203-API-XG)." }
      ],
      faqCta: "L'écran À propos contient aussi un bouton Besoin d'aide ? qui renvoie à l'onglet FAQ."
    }
  },
  faq: {
    breadcrumb: "Support",
    eyebrow: "Questions fréquentes",
    title: "Tout ce que votre équipe doit savoir.",
    sub: "Des réponses rapides pour l'utilisation quotidienne, l'installation et la gouvernance clinique.",
    searchPlaceholder: "Rechercher dans la FAQ — ex. 'hors lit'",
    categories: { all: "Tous", clinical: "Usage clinique", setup: "Installation & dispositifs", account: "Compte & rôles", security: "Sécurité & conformité" },
    items: [
      { c: "clinical", q: "Easy Care Hub est-il un dispositif médical ?", a: "La plateforme Easy Care Hub elle-même n'est pas un dispositif médical au sens du règlement UE 2017/745. Elle sert uniquement à la visualisation et à la présentation de données issues de dispositifs connectés." },
      { c: "clinical", q: "Puis-je me fier à Easy Care Hub comme alarme d'urgence ?", a: "Non. La plateforme n'est pas conçue comme alarme pour des situations potentiellement mortelles. En cas de symptôme aigu, appelez les secours." },
      { c: "clinical", q: "Pourquoi aucune donnée n'apparaît-elle pour un résident ?", a: "Les rapports de nuit arrivent environ 30 min après la période de nuit définie. Si les valeurs manquent, la qualité des données peut être insuffisante." },
      { c: "clinical", q: "Quelle différence entre seuils et référence ?", a: "Les notifications par seuils se déclenchent au franchissement de limites fixes. Les notifications par référence s'appuient sur l'historique récent du résident." },
      { c: "clinical", q: "Comment fonctionne la règle Hors-lit ?", a: "Trois règles, globales ou par résident : notifier au-delà de N minutes hors-lit ; notifier si hors-lit N % plus longtemps ; désactiver." },
      { c: "setup", q: "Quels dispositifs sont pris en charge ?", a: "Easy Care Hub affiche les données du radar Sleepiz sans contact traitées par le Sleepiz One+ Cloud (classe IIa). Le backend ACTIMI Signals (v1.0, classe IIa) alimente les notifications." },
      { c: "setup", q: "Comment ajouter un résident à un lit ?", a: "Résidents → + Créer un résident. Saisissez l'ID résident, choisissez l'emplacement." },
      { c: "setup", q: "Puis-je substituer les règles globales pour un résident ?", a: "Oui. Fiche résident → Aperçu, la section Notifications individuelles permet de substituer la règle globale hors-lit." },
      { c: "setup", q: "Comment créer une zone ou un emplacement ?", a: "Administration → Zones ou Emplacements. Seuls propriétaires et administrateurs gèrent ces éléments." },
      { c: "account", q: "Quels rôles existent ?", a: "Trois rôles : propriétaire système, administrateur et utilisateur. Les permissions suivent le modèle CRUDS." },
      { c: "account", q: "Comment changer mon mot de passe ?", a: "Sur la page de connexion, Mot de passe oublié ?, saisissez votre e-mail." },
      { c: "account", q: "Puis-je changer la langue de l'interface ?", a: "Oui. Mon compte → Langue. English et Deutsch sont disponibles dans l'application ; le site public propose aussi Français." },
      { c: "security", q: "Où sont stockées les données des résidents ?", a: "Toutes les données sont hébergées en UE par des partenaires certifiés. La plateforme est alignée avec RGPD et ISO 27001." },
      { c: "security", q: "Combien de temps les notifications sont-elles conservées ?", a: "Une notification revue est archivée dans le journal d'audit et conservée selon la politique de votre établissement." },
      { c: "security", q: "Comment signaler un incident de sécurité ?", a: "Contactez sans délai le support numérique HARTMANN via les coordonnées de cette page." }
    ],
    contactTitle: "Contacter le support HARTMANN",
    contactSub: "Notre équipe support accompagne l'onboarding, les droits et l'exploitation quotidienne.",
    emailLabel: "E-mail", phoneLabel: "Téléphone", hoursLabel: "Horaires",
    hoursValue: "Lun–Ven · 08:00–18:00 CET"
  },
  releases: {
    breadcrumb: "Produit",
    eyebrow: "Notes de version",
    title: "Nouveautés d'Easy Care Hub.",
    sub: "Chaque mise à jour, changement et correctif livré.",
    filters: { all: "Tous", new: "Nouveau", improved: "Amélioré", fixed: "Corrigé", security: "Sécurité" },
    subscribe: "S'abonner",
    sideTitle: "Versions précédentes",
    sideSub: "Parcourir les jalons antérieurs.",
    items: [
      { ver: "1.4.0", date: "2026-04-02", tag: "new",
        title: "Notifications par référence, UI française et panneau remanié",
        summary: "Notre plus grande release de l'année. Les alertes par référence passent en GA, le panneau de notifications est reconstruit, et une interface française est livrée.",
        groups: [
          { h: "Nouveau", items: [
            "Les notifications par référence HR et BrR sont disponibles.",
            "Le français est désormais pris en charge sur le site public.",
            "Export du journal d'audit (CSV, PDF) depuis la fiche résident."
          ]},
          { h: "Amélioré", items: [
            "Le panneau de notifications regroupe par résident.",
            "Les graphes Tendances sont jusqu'à 3× plus rapides.",
            "Messages d'état vide plus clairs quand une zone n'a pas de dispositifs."
          ]},
          { h: "Corrigé", items: [
            "Correction d'un cas où l'icône cloche restait ouverte après navigation.",
            "Correction d'un rare affichage de Statut résident obsolète."
          ]}
        ]
      },
      { ver: "1.3.1", date: "2026-02-14", tag: "security",
        title: "Renforcement des sessions et MFA pour les propriétaires",
        summary: "Release de sécurité ciblée. MFA obligatoire pour les propriétaires système.",
        groups: [
          { h: "Sécurité", items: [
            "MFA obligatoire pour le rôle propriétaire système.",
            "Rotation des sessions à chaque changement de privilège.",
            "Politique CSP affinée."
          ]},
          { h: "Corrigé", items: [
            "Cas limite où Se souvenir de moi se propageait entre profils du même appareil, résolu."
          ]}
        ]
      },
      { ver: "1.3.0", date: "2025-12-09", tag: "improved",
        title: "Tableau de bord multi-zones, recherche plus rapide",
        summary: "Le tableau de bord grandit. Les onglets de zones prennent le clavier.",
        groups: [
          { h: "Amélioré", items: [
            "Raccourcis clavier : 1–9 basculent entre les neuf premières zones.",
            "La recherche combinée cible ID résident, ID dispositif et Emplacement.",
            "Les couleurs respectent WCAG AA."
          ]},
          { h: "Nouveau", items: [
            "Marquage en masse comme revu sur la page Notifications.",
            "La vue tuiles affiche une mini-courbe HR."
          ]}
        ]
      },
      { ver: "1.2.0", date: "2025-10-21", tag: "new",
        title: "Rapports de nuit, Administration revue et liens profonds",
        summary: "Les rapports de nuit arrivent dans Tendances.",
        groups: [
          { h: "Nouveau", items: [
            "Rapports nocturnes dans la fiche résident.",
            "URLs profondes pour les dispositifs.",
            "L'Administration en trois onglets."
          ]},
          { h: "Corrigé", items: [
            "Réinitialisation du zoom des tendances au changement d'onglet, corrigée.",
            "Tooltip d'abréviation BrR incorrect, corrigé."
          ]}
        ]
      },
      { ver: "1.1.0", date: "2025-08-05", tag: "improved",
        title: "Ajustements des rôles et éditeur de seuils",
        summary: "Matrice de permissions alignée sur les pratiques réelles.",
        groups: [
          { h: "Amélioré", items: [
            "L'éditeur de seuils valide les plages HR et BrR.",
            "Désactivation d'utilisateurs sans perdre l'historique d'audit.",
            "Le tableau Utilisateurs gagne les colonnes Statut et Dernière mise à jour."
          ]}
        ]
      },
      { ver: "1.0.0", date: "2025-05-02", tag: "new",
        title: "Easy Care Hub — disponibilité générale",
        summary: "Première release en production.",
        groups: [
          { h: "Nouveau", items: [
            "Tableau de bord en direct en tuiles ou tableau, groupé par zones.",
            "Fiches résidents avec Aperçu, Tendances, Notifications et Journal d'audit.",
            "Notifications par seuils HR, BrR et hors-lit.",
            "Modèle de rôles : propriétaire, administrateur, utilisateur (CRUDS)."
          ]}
        ]
      }
    ]
  }
};
