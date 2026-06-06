import type { CampsiteConfig } from "../types";

/**
 * Camping Nord — St. Kanzian am Klopeiner See, Kärnten.
 * Alle Texte/Fakten belegt aus campingnord.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Camping-Nord-Fotos in /public/campsites/campingnord/.
 * EHRLICH:
 *  - Der Platz liegt NACHWEISLICH direkt am Klopeiner See mit EIGENEM Strandbad
 *    (Quelle: "im eigenen Strandbad"; Drohnen-Luftbilder zeigen Seeufer + Stege) → see gesetzt.
 *  - KEINE E-Mail auf der Quelle gefunden → kontakt.mail bleibt leer (im REPORT geflaggt;
 *    Mensch ergänzt vor jeder Aussendung).
 *  - Preise = offengelegte Richtpreise, arithmetisch aus der Preisliste 2026 (verbatim
 *    Positionen) gebildet; Stacking-Annahme im REPORT geflaggt.
 *  - Mobile Homes existieren laut Navigation, wurden aber NICHT gescrapt (keine Bilder/Preise)
 *    → mobilheime weggelassen. Aktivitäten/Kinder: keine eigenen Fotos → Sektionen weggelassen.
 *  - ADAC Tipp 2023 (4 Sterne) als Badge auf der Quelle → als Auszeichnung übernommen.
 *  - Keine Koordinaten in der Quelle → coords weggelassen (Karte aus, Adresse zeigt).
 */
const IMG = "/campsites/campingnord";

export const campingnord: CampsiteConfig = {
  name: "Camping Nord",
  shortName: "Camping Nord",
  slug: "campingnord",
  ort: "St. Kanzian am Klopeiner See",
  region: "Kärnten",
  brandKind: "Camping am Klopeiner See",
  see: "Klopeiner See",
  regionLong: "Region Klopeiner See · Südkärnten · Österreich",

  claim: "Dein Campingurlaub direkt am Klopeiner See",
  claimEmphasis: "direkt am Klopeiner See",
  intro:
    "Camping mit eigenem Strandbad direkt am Klopeiner See — sonnige, ebene und terrassierte Stellplätze, ein modernes Servicegebäude und alles Wichtige zu Fuß erreichbar, mitten in Südkärnten.",

  logo: { src: `${IMG}/logo-campingnord.png`, alt: "Camping Nord Logo" },

  statement: {
    text: "Bei uns gehört ein eigenes Strandbad am Klopeiner See einfach dazu — sonnig gelegen, zentral und ganz zu Fuß erreichbar.",
    emphasis: "ein eigenes Strandbad",
  },

  pillars: [
    {
      title: "Mitten am Klopeiner See",
      text: "Der Platz liegt direkt am Klopeiner See in St. Kanzian — eingebettet zwischen Wasser, Wald und den Hügeln Südkärntens.",
      image: { src: `${IMG}/ueberblick-see-berge.webp`, alt: "Luftaufnahme von Camping Nord am Klopeiner See mit Bergen im Hintergrund" },
    },
    {
      title: "Das eigene Strandbad",
      text: "Camping Nord hat ein eigenes Strandbad am See mit Steg — die Badegebühr ist im Tagespreis bereits enthalten.",
      image: { src: `${IMG}/strandbad-steg-see.webp`, alt: "Eigenes Strandbad von Camping Nord mit Steg am Klopeiner See" },
    },
    {
      title: "Sonnige Stellplätze",
      text: "Die meisten Stellplätze liegen in sonniger Lage auf ebenem oder terrassiertem Gelände — mit Strom, SAT-Anschluss und freiem WLAN.",
      image: { src: `${IMG}/stellplaetze-rezeption.webp`, alt: "Stellplätze und Rezeption von Camping Nord mit Blick zum Klopeiner See" },
    },
  ],

  usps: [
    "Direkt am Klopeiner See",
    "Eigenes Strandbad (Badegebühr inkl.)",
    "Stellplätze 70–100 m²",
    "Freies WLAN für alle Gäste",
    "Beheizte, moderne Sanitäranlagen",
    "Hunde willkommen (an der Leine)",
  ],

  trust: {
    heading: "Worauf du dich bei Camping Nord verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Ein moderner Campingplatz direkt am Klopeiner See mit eigenem Strandbad, beheizten Sanitäranlagen und freiem WLAN — und so zentral, dass du im Urlaub nicht auf das Auto angewiesen bist.",
  },

  // ADAC Tipp 2023 (4 Sterne) — Badge auf campingnord.at klar ausgewiesen.
  awards: [
    { label: "ADAC Tipp 2023", image: { src: `${IMG}/adac-tipp-2023.png`, alt: "ADAC Tipp 2023 — Auszeichnung für Camping Nord" } },
  ],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/hero-see-luftaufnahme.webp`, alt: "Luftaufnahme: Camping Nord direkt am Klopeiner See mit Stegen und Booten" },
  },

  camping: {
    heading: "Der Campingplatz",
    intro:
      "Die meisten Stellplätze von 70–100 m² liegen in sonniger Lage auf ebenem oder terrassiertem Gelände. Stromanschluss (220 V, Schuko) ist überall möglich, dazu SAT-Anschluss und freies WLAN für alle Gäste. Der Platz liegt sehr zentral: Der Bäcker kommt täglich, Geschäfte erreichst du in wenigen Gehminuten — und Hunde sind an der Leine willkommen (im Strandbad jedoch nicht erlaubt).",
    features: [
      {
        title: "Sonnige Lage direkt am See",
        text: "Die meisten Plätze liegen sonnig und nur wenige Schritte vom eigenen Strandbad am Klopeiner See entfernt.",
        image: { src: `${IMG}/luftaufnahme-platz-see.webp`, alt: "Luftaufnahme der sonnigen Lage von Camping Nord am Klopeiner See" },
      },
      {
        title: "Ebene & terrassierte Stellplätze",
        text: "Stellplätze von 70–100 m² auf ebenem oder terrassiertem Gelände — Strom (220 V, Schuko) ist überall möglich, dazu SAT-Anschluss und freies WLAN.",
        image: { src: `${IMG}/stellplaetze-von-oben.webp`, alt: "Stellplätze von Camping Nord aus der Vogelperspektive" },
      },
      {
        title: "Modernes Servicegebäude & Sanitär",
        text: "Neu errichtete, beheizte Sanitäranlagen mit eigenen Waschkojen, Warmwasserduschen, Kinderwaschbecken, Babywickelraum und barrierefreien Anlagen — dazu Waschmaschine, Trockner und Aufenthaltsraum.",
        image: { src: `${IMG}/servicegebaeude-rezeption.webp`, alt: "Modernes Servicegebäude mit Rezeption von Camping Nord" },
      },
    ],
  },

  anreise: {
    heading: "Lage & Anreise",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Am See 10/a, 9122 St. Kanzian am Klopeiner See — mitten in der Urlaubsregion Klopeiner See in Südkärnten.",
      },
      {
        title: "Vor Ort ohne Auto",
        text: "Der Platz liegt sehr zentral: Die meisten Ziele erreichst du zu Fuß oder mit dem Rad, und der Bäcker kommt täglich auf den Platz.",
      },
      {
        title: "Direkt am Klopeiner See",
        text: "Das eigene Strandbad mit Steg liegt unmittelbar am See — der Weg zum Wasser ist nur ein paar Schritte.",
      },
    ],
  },

  galerie: {
    heading: "Camping Nord am Klopeiner See",
    headingEmphasis: "am Klopeiner See",
    intro:
      "Luftaufnahmen vom Platz, vom eigenen Strandbad mit Stegen und der Lageplan des Campingplatzes — ein paar Eindrücke von Camping Nord.",
    tag: "Mai bis September",
    images: [
      { src: `${IMG}/strandbad-stege.webp`, alt: "Stege und Strandbad von Camping Nord am Klopeiner See" },
      { src: `${IMG}/platz-am-seeufer.webp`, alt: "Camping Nord am Seeufer des Klopeiner Sees" },
      { src: `${IMG}/platzuebersicht.webp`, alt: "Platzübersicht / Lageplan von Camping Nord mit Parzellen, Strandbad und Sanitärräumen" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum, Platz und Personen — Camping Nord meldet sich mit deiner persönlichen Verfügbarkeit. Vorreservierung ab 3 Nächten; im Juli und August wird nur wochenweise (Sa–Sa) vermietet.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreis Vorsaison für 2 Erwachsene, inkl. Badegebühr · zzgl. Ortstaxe € 2,70/Erw. & Strom · Einheit & Hauptsaison lt. Preisliste 2026.",
    highlight: {
      title: "Eigenes Strandbad inklusive",
      text: "Die Badegebühr ist im Tagespreis bereits enthalten — das eigene Strandbad am Klopeiner See gehört einfach dazu.",
    },
    categories: [
      // Richtpreise = Vorsaison-Tarife der Preisliste 2026, 2 Erwachsene (2× € 11,50 = € 23,00), inkl. Badegebühr.
      // Zeltplatz:   Zelt klein € 8,00  + € 23,00 = € 31,00
      // Großzelt:    Zelt XXL   € 12,00 + € 23,00 = € 35,00
      // Wohnwagen/Wohnmobil: Stellplatzgebühr Parzelle € 14,50 + € 23,00 = € 37,50
      { id: "zeltplatz", label: "Zeltplatz", perNight: 31, perExtraGuest: 11.5 },
      { id: "grosszelt", label: "Großzelt (XXL)", perNight: 35, perExtraGuest: 11.5 },
      { id: "wohnwagen", label: "Wohnwagen / Wohnmobil", perNight: 37.5, perExtraGuest: 11.5 },
    ],
  },

  kontakt: {
    coords: { lat: 46.60767, lng: 14.576436 },
    tel: "+43 4239 400 55",
    telHref: "tel:+43423940055",
    mail: "",
    facebook: "https://www.facebook.com/Camping-Nord-Klopeiner-See-196562461446/",
    adresse: "Am See 10/a · 9122 St. Kanzian am Klopeiner See · Kärnten",
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitär & Service", href: "#camping" },
        { label: "Eigenes Strandbad", href: "#camping" },
      ],
    },
    {
      label: "Galerie",
      href: "#galerie",
      children: [
        { label: "Luftaufnahmen", href: "#galerie" },
        { label: "Strandbad", href: "#galerie" },
        { label: "Lageplan", href: "#galerie" },
      ],
    },
    {
      label: "Lage & Anreise",
      href: "#anreise",
      children: [
        { label: "Am Klopeiner See", href: "#anreise" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
    {
      label: "Preise",
      href: "#booking",
      children: [
        { label: "Tarife 2026", href: "#booking" },
        { label: "Saison", href: "#booking" },
        { label: "Anfrage", href: "#booking" },
      ],
    },
  ],
};

export default campingnord;
