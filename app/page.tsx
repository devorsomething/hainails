"use client";

import Head from "next/head";
import Image from "next/image";
import WhatsAppButton from '@/components/WhatsAppButton';

const SERVICES = [
  {
    name: "Maniküre",
    price: "€25",
    description: "Klassisch, inkl. Nagellack",
    icon: "✦",
  },
  {
    name: "Gel-Nägel",
    price: "€35",
    description: "Full Set, verschiedene Styles",
    icon: "✦",
  },
  {
    name: "Acryl-Nägel",
    price: "€38",
    description: "Dauerhaft, natural oder farbig",
    icon: "✦",
  },
  {
    name: "Nagelreparatur",
    price: "€10",
    description: "Pro Nagel",
    icon: "✦",
  },
  {
    name: "Pediküre",
    price: "€30",
    description: "Fußpflege + Lack",
    icon: "✦",
  },
  {
    name: "Wimpern Extensions",
    price: "€45",
    description: "Volumen, natürlich",
    icon: "✦",
  },
  {
    name: "Augenbrauen",
    price: "€12",
    description: "Formgebung & Zupfen",
    icon: "✦",
  },
  {
    name: "Nail Art",
    price: "ab €5",
    description: "Aufpreis je nach Design",
    icon: "✦",
  },
];

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    alt: "Schöne Gel-Nägel mit modernem Design",
  },
  {
    src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&q=80",
    alt: "Elegante Maniküre in Rose Gold",
  },
  {
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80",
    alt: "Professionelle Nagelpflege",
  },
  {
    src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&q=80",
    alt: "Kreative Nail Art Designs",
  },
];

const WHY_US = [
  {
    title: "Hygiene First",
    description:
      "Sterilisierte Werkzeuge, Einweg-Materialien und höchste Sauberkeitsstandards — für Ihre Sicherheit.",
    icon: "🛡",
  },
  {
    title: "Premium Qualität",
    description:
      "Nur hochwertigste Produkte von führenden Marken. Keine Kompromisse bei der Qualität.",
    icon: "✨",
  },
  {
    title: "Erfahrene Designerinnen",
    description:
      "Unser Team bringt jahrelange Erfahrung und Leidenschaft für perfekte Nägel mit.",
    icon: "💅",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Decorative top line */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-rosegold" />
            <span className="text-rosegold text-sm tracking-[0.3em] uppercase font-sans font-semibold">
              Bregenz · Vorarlberg
            </span>
            <span className="w-12 h-px bg-rosegold" />
          </div>

          <h1 className="font-serif text-7xl md:text-9xl font-bold text-white mb-4 leading-none tracking-tight">
            Hainails
          </h1>
          <p className="font-serif italic text-2xl md:text-3xl text-white/90 mb-2">
            Smile Nails
          </p>
          <p className="font-sans text-white/80 text-lg md:text-xl tracking-widest uppercase mb-10">
            Nagelstudio · Wellness · Schönheit
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+4366499412410"
              className="btn-primary text-lg px-10 py-5"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Anrufen
            </a>
            <a href="#kontakt" className="btn-secondary text-lg px-10 py-5 border-white/40 text-white hover:bg-white/10 hover:border-white">
              Termin buchen
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <section className="bg-gradient-to-r from-softpink via-rosegold/30 to-softpink py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm font-sans">
          <a
            href="tel:+4366499412410"
            className="flex items-center gap-2 text-charcoal hover:text-rosegold transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            +43 664 99412410
          </a>
          <div className="flex items-center gap-2 text-charcoal">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Bregenz, Vorarlberg
          </div>
          <div className="flex items-center gap-2 text-charcoal">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Mo–Sa: 9:00–19:00
          </div>
        </div>
      </section>

      {/* ── WELCOME ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                  alt="Modernes Nagelstudio bei Hainails"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-rosegold text-white rounded-2xl p-6 shadow-xl">
                <p className="font-serif text-3xl font-bold">8+</p>
                <p className="font-sans text-sm opacity-80">Jahre Erfahrung</p>
              </div>
              {/* Decorative border */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-softpink rounded-3xl -z-10" />
            </div>

            {/* Text */}
            <div>
              <p className="section-label mb-4">Willkommen</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
                Wo vietnamesische Kunstfertigkeit auf{" "}
                <span className="text-gradient">österreichische Präzision</span>{" "}
                trifft
              </h2>
              <div className="space-y-4 text-charcoal/70 font-sans text-lg leading-relaxed">
                <p>
                  Willkommen bei <strong className="text-charcoal">Hainails</strong> — Ihrem
                  Premium-Nagelstudio im Herzen von Bregenz. Wir verbinden die
                  jahrhundertealte vietnamesische Tradition der Nagelkunst mit
                  den höchsten österreichischen Standards in Hygiene und Qualität.
                </p>
                <p>
                  Unser erfahrenes Team verwöhnt Sie mit präziser Maniküre,
                  atemberaubendem Nageldesign und kreativer Nail Art — in
                  entspannter, Instagram-würdiger Atmosphäre.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-charcoal">
                  <span className="w-8 h-8 rounded-full bg-softpink flex items-center justify-center text-rosegold text-sm">
                    ✓
                  </span>
                  <span className="font-sans font-medium">Premium-Produkte</span>
                </div>
                <div className="flex items-center gap-2 text-charcoal">
                  <span className="w-8 h-8 rounded-full bg-softpink flex items-center justify-center text-rosegold text-sm">
                    ✓
                  </span>
                  <span className="font-sans font-medium">100% Sterilisation</span>
                </div>
                <div className="flex items-center gap-2 text-charcoal">
                  <span className="w-8 h-8 rounded-full bg-softpink flex items-center justify-center text-rosegold text-sm">
                    ✓
                  </span>
                  <span className="font-sans font-medium">Individualität</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="leistungen"
        className="py-24 md:py-32 bg-softpink bg-marble-pattern"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Unsere Leistungen</p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-charcoal">
              Preisliste
            </h2>
            <p className="mt-4 font-sans text-charcoal/60 text-lg max-w-2xl mx-auto">
              Hochwertige Behandlungen zu fairen Preisen. Jeder Nagel wird mit
              größter Sorgfalt und Leidenschaft behandelt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-white hover:border-rosegold/30"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-rosegold text-lg">{service.icon}</span>
                  <span className="font-serif text-3xl font-bold text-rosegold">
                    {service.price}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-1">
                  {service.name}
                </h3>
                <p className="font-sans text-charcoal/60 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 font-sans text-charcoal/50 text-sm">
            * Alle Preise in EUR inkl. MwSt. · Preise können je nach Aufwand variieren
          </p>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Inspiration</p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-charcoal">
              Unsere Arbeit
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden group card-hover"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 font-sans font-semibold text-rosegold hover:text-blusher transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Folgt uns auf Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 md:py-32 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-rosegold font-sans font-semibold text-sm tracking-widest uppercase mb-4">
              Warum Hainails
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white">
              Mehr als nur Nägel
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {WHY_US.map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-20 h-20 rounded-full bg-rosegold/20 flex items-center justify-center mx-auto mb-6 text-3xl group-hover:bg-rosegold/30 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="font-sans text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIAL OFFER ── */}
      <section className="py-20 bg-gradient-to-r from-rosegold via-blusher to-rosegold relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 text-8xl">✨</div>
          <div className="absolute bottom-10 right-10 text-8xl">💅</div>
          <div className="absolute top-1/2 left-1/4 text-6xl">🌸</div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="section-label text-white/80 mb-4">Angebot</p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            Willkommen, neue Gäste!
          </h2>
          <p className="font-sans text-white text-xl md:text-2xl font-light mb-8 leading-relaxed">
            Genießt <strong className="font-bold">20% Rabatt</strong> auf eure
            erste Behandlung bei Hainails.
          </p>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href="tel:+4366499412410"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-charcoal font-sans font-bold rounded-full hover:bg-softpink transition-colors"
            >
              Jetzt anrufen & Termin sichern
            </a>
          </div>
          <p className="mt-6 font-sans text-white/70 text-sm">
            * Gilt für Neukunden · Mindestbestellwert €25 · Nicht kombinierbar
          </p>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="kontakt" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <p className="section-label mb-4">Kontakt</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Schreibt uns
              </h2>
              <p className="font-sans text-charcoal/60 text-lg mb-8">
                Plant euren Besuch bei Hainails — wir freuen uns auf euch!
              </p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block font-sans font-medium text-charcoal mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Euer Name"
                    className="w-full px-5 py-3 rounded-xl border border-charcoal/20 font-sans text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-rosegold transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-sans font-medium text-charcoal mb-2 text-sm">
                    Telefon / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+43 6xx xxx xxxx"
                    className="w-full px-5 py-3 rounded-xl border border-charcoal/20 font-sans text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-rosegold transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-sans font-medium text-charcoal mb-2 text-sm">
                    Gewünschte Behandlung
                  </label>
                  <select className="w-full px-5 py-3 rounded-xl border border-charcoal/20 font-sans text-charcoal bg-white focus:outline-none focus:border-rosegold transition-colors">
                    <option>Bitte wählen...</option>
                    <option>Maniküre</option>
                    <option>Gel-Nägel</option>
                    <option>Acryl-Nägel</option>
                    <option>Pediküre</option>
                    <option>Wimpern Extensions</option>
                    <option>Augenbrauen</option>
                    <option>Nail Art</option>
                    <option>Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label className="block font-sans font-medium text-charcoal mb-2 text-sm">
                    Nachricht
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ihr wollt noch etwas wissen?"
                    className="w-full px-5 py-3 rounded-xl border border-charcoal/20 font-sans text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-rosegold transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full text-lg">
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Info + Map */}
            <div>
              <div className="bg-softpink rounded-3xl p-8 mb-8">
                <h3 className="font-serif text-2xl font-semibold text-charcoal mb-6">
                  So findet ihr uns
                </h3>
                <div className="space-y-4 font-sans text-charcoal">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-rosegold mt-1 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold">Adresse</p>
                      <p className="text-charcoal/70">Bregenz, Vorarlberg</p>
                      <p className="text-charcoal/70">Österreich</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-rosegold mt-1 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Telefon</p>
                      <a
                        href="tel:+4366499412410"
                        className="text-charcoal/70 hover:text-rosegold transition-colors"
                      >
                        +43 664 99412410
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-rosegold mt-1 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold">Öffnungszeiten</p>
                      <p className="text-charcoal/70">Mo – Fr: 9:00 – 19:00</p>
                      <p className="text-charcoal/70">Sa: 10:00 – 17:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps placeholder */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-charcoal/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10765.13298242!2d9.74!3d47.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b6d1a6e72c3e5%3A0x42223f1bc4a820!2sBregenz%2C%20Austria!5e0!3m2!1sen!2sat!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hainails Bregenz"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-4xl font-bold mb-2">Hainails</h3>
              <p className="font-serif italic text-rosegold text-lg">
                Smile Nails
              </p>
              <p className="mt-4 font-sans text-white/60 leading-relaxed">
                Nagelpflege mit Leidenschaft — im Herzen von Bregenz.
              </p>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-white/80 mb-4 uppercase text-sm tracking-wider">
                Leistungen
              </h4>
              <ul className="space-y-2 font-sans text-white/60 text-sm">
                <li>Maniküre & Pediküre</li>
                <li>Gel- & Acryl-Nägel</li>
                <li>Nagel Art & Design</li>
                <li>Wimpern Extensions</li>
                <li>Augenbrauen</li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-white/80 mb-4 uppercase text-sm tracking-wider">
                Kontakt
              </h4>
              <ul className="space-y-2 font-sans text-white/60 text-sm">
                <li>
                  <a href="tel:+4366499412410" className="hover:text-rosegold transition-colors">
                    +43 664 99412410
                  </a>
                </li>
                <li>Bregenz, Vorarlberg</li>
                <li>Mo–Fr: 9:00–19:00</li>
                <li>Sa: 10:00–17:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-white/40 text-sm">
              © 2026 Hainails Bregenz. Alle Rechte vorbehalten.
            </p>
            <p className="font-sans text-white/40 text-xs">
              Ein Projekt von{" "}
              <a href="#" className="hover:text-rosegold transition-colors">
                Hainails.at
              </a>
            </p>
          </div>
        </div>
      </footer>
      <WhatsAppButton phone="+43 664 345 6789" />
    </main>
  );
}
