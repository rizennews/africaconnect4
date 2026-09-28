# AfricaConnect4

AfricaConnect4 is a major initiative co-funded by the European Union and implemented across West and Central Africa by **WACREN** ([wacren.net](https://wacren.net)) in partnership with UbuntuNet Alliance, ASREN, and GÉANT. The project builds high-capacity internet networks and digital services for research and education communities across Sub-Saharan Africa.

---

## Key Pillars & Focus Areas

- **Connectivity Expansion**: Expanding high-speed research and education network interconnects across national boundaries.
- **Climate Data Infrastructure**: Environmental monitoring using LoRaWAN, regional federated HPC resources for climate modelling, and EUMETCast terrestrial services.
- **Cybersecurity & Threat Intelligence**: Coordinating TrustBroker Africa (TBA), CSIRT incident response, and cybersecurity training.
- **Open Science & LIBSENSE**: Advancing diamond open access, institutional repositories, and responsible research governance.
- **Capacity Building & Women-in-STEM**: Mentorship labs, NREN academies, and engineering training programs.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Language**: TypeScript
- **Styling**: Vanilla CSS Modules
- **Media**: Next/Image optimization

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rizennews/africaconnect4.git
   cd africaconnect4
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

To create an optimized production build:

```bash
npm run build
npm start
```

---

## Project Structure

```
africaconnect4/
├── public/                 # Static assets, logos, and event images
│   ├── activities/         # Event posters and featured images
│   └── blog/               # Article media and publications
├── src/
│   ├── app/                # Next.js App Router pages and routes
│   │   ├── activities/     # Project activities and events
│   │   ├── news/           # News, articles, and press releases
│   │   └── ...
│   ├── components/         # Reusable UI components
│   ├── data/               # Articles, activities, and project data
│   └── utils/              # Helper utilities
└── README.md
```

---

## Attribution & Initiative

- **Initiative**: AfricaConnect4 is a [WACREN](https://wacren.net) initiative, co-funded by the European Union.
- **Engineered by**: Padmore Aning ([padmoreaning.com](https://padmoreaning.com/))