# Hainails – Nail Salon Website

> Premium nail salon & beauty spa website for **Hainails (Smile Nails)** in Bregenz, Austria.

---

## 📊 Lead Research Summary

| Field | Data |
|---|---|
| **Business** | Hainails (Smile Nails) |
| **Location** | Bregenz, Vorarlberg, Austria |
| **Phone** | +43 664 99412410 |
| **Website** | hainails.at — ❌ **503 ERROR — WEBSITE IS DOWN** |
| **Price Level** | €€ |
| **Services** | Nageldesign, Gel-Nägel, Acryl, Maniküre, Pediküre, Wimpern, Augenbrauen, Wellness |
| **Lead Score** | **81/100 — TIER 1 HOT** |

---

## 🔥 Why This is a HOT Lead

### The Problem
- **hainails.at is DOWN** — returns a 503 Service Unavailable error
- Every new customer searching online finds **nothing**
- They click the website → see an error → go to a competitor
- The salon has a good Google Maps listing with solid reviews, but the website is dead

### The Opportunity
- **Instant value**: A working website + online booking = immediate new customers
- **Low effort, high impact**: This is a fast rebuild — just deploy and go live
- **20-30% more appointments**: Online booking eliminates the friction of calling

### Outreach Angle
> *"Eure Website zeigt einen 503-Fehler — jeder neue Kunde geht zu einem anderen Salon. Wir haben bereits eine neue, moderne Website für euch gebaut, die ihr sofort nutzen könnt."*

---

## 🛠 Tech Stack

- **Next.js 15** (React 19, TypeScript)
- **Tailwind CSS v3** — custom colors: soft pink, rose gold, white marble
- **Google Fonts**: Playfair Display (headings) + DM Sans (body)
- **Unsplash** — high-quality nail art / spa photography
- **Responsive** — mobile-first design

---

## 🚀 Deployment (Coolify)

```bash
# 1. Clone / copy project to your Coolify server
cd /root/coolify/docker-registry/

# 2. Build command (already runs in Next.js)
npm install
npx tailwindcss -i ./app/globals.css -o ./public/output.css
npm run build

# 3. Start command
npm start
```

### Alternative: Docker
```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx tailwindcss -i ./app/globals.css -o ./public/output.css
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📁 Project Structure

```
hainails/
├── app/
│   ├── layout.tsx       # Root layout + metadata + fonts
│   ├── page.tsx         # Full page (Hero, Welcome, Services, Gallery, Why Us, Offer, Contact, Footer)
│   └── globals.css      # Tailwind + custom components + animations
├── public/
│   └── output.css       # Compiled Tailwind CSS
├── package.json
├── tailwind.config.ts   # Custom colors: softpink, rosegold, blusher, charcoal
├── tsconfig.json
└── README.md
```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `softpink` | `#FDF2F8` | Backgrounds, cards |
| `rosegold` | `#E8B4B8` | Primary accent, buttons |
| `blusher` | `#FFB6C1` | Hover states, gradients |
| `charcoal` | `#2D2D2D` | Text |
| `marble` | `#FAFAFA` | Subtle backgrounds |

**Fonts**: Playfair Display (serif, headings) · DM Sans (body)

---

## 📝 Sections

1. **Hero** — Full-screen with nail spa imagery, "Hainails" branding, CTAs
2. **Info Strip** — Phone, address, hours (gradient bar)
3. **Welcome** — Two-column with salon image + brand story
4. **Services / Preisliste** — 8 services with prices in a card grid
5. **Gallery** — 4-image grid with hover effects + Instagram CTA
6. **Why Hainails** — 3-column dark section (Hygiene, Quality, Experience)
7. **Special Offer** — Pink/gold gradient: 20% new customer discount
8. **Contact** — Form + info card + Google Maps embed
9. **Footer** — Name, services, contact, copyright

---

## ✅ To-Do (Post-Delivery)

- [ ] Verify actual address in Bregenz and update in page.tsx
- [ ] Replace Instagram placeholder link with real account
- [ ] Add online booking integration (Calendly, SimplyBook, or custom)
- [ ] Connect real WhatsApp / contact form to email
- [ ] Set up hainails.at domain to point to this deployment
- [ ] Add Google Analytics / Search Console
