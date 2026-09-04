# Jabazi Store — Pure Artisan Attar Perfume Oils

A complete, production-ready, ultra-premium minimalist e-commerce web application for **Jabazi Store**, an artisan attar house. Inspired by quiet luxury aesthetics (Aesop / Byredo style), featuring soft neutral color palettes, refined typography, Framer Motion scroll animations, comprehensive scent filtering, interactive cart & checkout state with LocalStorage persistence, and order tracking.

---

## ✨ Features

- **Quiet Luxury Aesthetic**: Curated color palette (off-white `#FAF8F5`, warm beige `#F5F2EC`, soft charcoal `#1C1A17`, and muted gold `#C5A880`).
- **Typography System**: Google Fonts pairing with Cormorant Garamond for elegant serif headlines and Inter for clean body copy.
- **7 Complete Pages & Views**:
  - **Home**: Hero section with soft fade-in animation, craftsmanship spotlight, featured attars, category preview, and master distiller quote.
  - **Shop**: Category filter pills, search bar by scent notes (Oud, Rose, Saffron, Sandalwood), sorting by price & rating, and skeleton loading simulation state.
  - **Product Detail**: High-res image gallery with thumbnails, Scent Pyramid notes breakdown (Top, Heart, Base), bottle size picker (`3ml`, `6ml`, `12ml Tola`), quantity selector, and application guide.
  - **Categories**: Olfactory family cards (Floral, Woody, Oriental, Fresh, Musk) with note profiles.
  - **Cart Drawer & Page**: Slide-over drawer and full `/cart` page with quantity controls, free express shipping progress indicator, and privilege code (`JABAZI10`).
  - **Checkout**: Streamlined 2-step shipping & payment form with instant order placement.
  - **Order History**: Persistent list of past orders with status badges ("Delivered", "Processing") and quick "Buy Again" re-ordering.
- **State Persistence**: Cart, Wishlist, and Order History persist across reloads via React Context & `localStorage`.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Language**: TypeScript

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation & Local Setup

```bash
# Clone repository
git clone https://github.com/IsacSmile/jabazi-store.git
cd jabazi-store

# Install dependencies
npm install

# Start local dev server
npm run dev
```

The application will be available locally at `http://localhost:3000/`.

### Production Build

```bash
npm run build
```

---

## 📄 License

Created for **Jabazi Store**. All rights reserved.
