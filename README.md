# 📈 Stock Assistant Frontend

> A modern React application for trading mode management and stock analysis status monitoring.

## 📋 Project Overview

Stock Assistant Frontend is a single-page application built with React 18 + TypeScript, designed to provide users with a clean and efficient trading mode management interface. The application supports multiple trading modes, with a focus on the low-frequency active quantitative trading system.

### 🎯 Key Features

- **Trading Mode System** - Support for multiple trading strategies
- **Analysis Status Management** - Real-time monitoring of data analysis tasks
- **Multi-language Support** - Chinese and English language support
- **Responsive Design** - Perfect adaptation for desktop, tablet, and mobile

## 🛠️ Tech Stack

### Core Framework
- **React 18** - Using the latest concurrent features and Hooks
- **TypeScript** - Type-safe JavaScript superset
- **Vite** - Ultra-fast frontend build tool

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Responsive Design** - Mobile-first design philosophy

### Data & State
- **Axios** - HTTP request client
- **React Context API** - State management
- **React Hooks** - Component state and effects

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0 or **yarn** >= 1.22.0

### Installation Steps

1. **Clone Project**
   ```bash
   git clone <repository-url>
   cd stock-assistant-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Access Application**
   
   Open browser and visit http://localhost:5173

### Development Commands

```bash
# Start development server
npm run dev

# Build production version
npm run build

# Preview production build
npm run preview

# Code linting
npm run lint
```

## 📁 Project Structure

```
stock-assistant-frontend/
├── public/                 # Static assets
├── src/                   # Source code directory
│   ├── components/        # Reusable components
│   │   ├── DataTable.tsx
│   │   ├── DetailPanel.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── TradingModeLayout.tsx
│   │   ├── TradingModeSidebar.tsx
│   │   ├── TradingModeContent.tsx
│   │   └── trading/
│   │       └── LowFrequencyActiveQuant.tsx
│   ├── contexts/          # React contexts
│   │   └── LanguageContext.tsx
│   ├── services/          # API services
│   │   └── api.ts
│   ├── types/             # Type definitions
│   │   ├── api.ts
│   │   └── trading.ts
│   ├── i18n/             # Internationalization
│   │   ├── index.ts
│   │   └── translations.ts
│   ├── config/            # Configuration files
│   │   └── tradingModes.ts
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry file
├── docs/                  # Documentation files
└── package.json          # Project configuration and dependencies
```

## 🌐 Multi-language Support

The application supports Chinese (zh-CN) and English (en-US) with real-time language switching. For detailed information about i18n implementation, see [docs/I18N_README.md](docs/I18N_README.md).

## 📊 API Documentation

For detailed API endpoints and usage examples, see [docs/USAGE.md](docs/USAGE.md).

## 🎨 Component Architecture

The application follows a modular component architecture:

- **Layout Components** - Main application layout and navigation
- **Trading Mode Components** - Components specific to trading strategies
- **UI Components** - Reusable UI elements and widgets

## 🚀 Deployment

### Build Production Version

```bash
npm run build
```

### Deploy to Static Server

Deploy the `dist` directory to any static file server like Vercel, Netlify, or AWS S3.

### Environment Configuration

Create `.env.local` file for environment-specific settings:

```env
VITE_API_BASE_URL=http://localhost:8080
VITE_DEFAULT_LANGUAGE=zh-CN
```

## 🤝 Contributing

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ by the Development Team