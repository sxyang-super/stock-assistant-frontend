# 📈 Stock Assistant Frontend

> A modern, responsive stock information display application that provides real-time market data and intuitive chart analysis for investors.

## 📋 Project Overview

Stock Assistant is a single-page application built with React 18 + TypeScript, designed to provide users with a clean and efficient stock information viewing experience. Whether you're a professional investor or a stock market novice, you can quickly get the market information you need through this application.

### 🎯 Design Philosophy

- **Simplicity First**: Clear interface design with well-organized information hierarchy
- **Responsive Layout**: Perfect adaptation for desktop, tablet, and mobile
- **Real-time Updates**: Simulated real-time stock data updates
- **User-Friendly**: Intuitive interaction design to lower the barrier to use

## 🛠️ Tech Stack

### Core Framework
- **React 18** - Using the latest concurrent features and Hooks
- **TypeScript** - Type-safe JavaScript superset
- **Vite** - Ultra-fast frontend build tool

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Responsive Design** - Mobile-first design philosophy

### Data Visualization
- **Recharts** - Powerful React charting library
- **Custom Chart Components** - Charts optimized for stock data

### Utility Libraries
- **Axios** - HTTP request client
- **date-fns** - Modern date manipulation library

## ✨ Features

### 📊 Core Features
- **Real-time Stock Quotes** - Display key information such as stock prices and changes
- **Smart Search** - Support stock code and company name search
- **Market Overview** - Today's gain/loss statistics and volume analysis
- **Detailed Charts** - Visual display of stock price trends

### 🎨 User Experience
- **Dual View Mode** - Free switching between card view and list view
- **Interactive Charts** - Support zoom, hover to view details
- **Status Indicators** - Clear gain/loss color identification
- **Smooth Animations** - Delicate transition effects to enhance experience

### 📱 Responsive Design
- **Desktop** - Full use of large screen space to display more information
- **Tablet** - Touch-optimized layout
- **Mobile** - Compact yet functional mobile experience

## 🚀 Quick Start

### 📋 Prerequisites

Ensure your development environment meets the following requirements:

- **Node.js** >= 18.0.0 (LTS version recommended)
- **npm** >= 8.0.0 or **yarn** >= 1.22.0
- **Git** (for version control)

### 🔧 Installation Steps

1. **Clone Project**
   ```bash
   git clone <repository-url>
   cd stock-assistant-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or use yarn
   yarn install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   # or use yarn
   yarn dev
   ```

4. **Access Application**
   
   Open browser and visit http://localhost:5173

### 🛠️ Development Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build production version
npm run build

# Preview production build
npm run preview

# Code linting
npm run lint

# Type checking
npx tsc --noEmit
```

### 📦 Build and Deploy

```bash
# Build production version
npm run build

# Local preview of build results
npm run preview

# Preview using built-in server
npx serve dist
```

## 📁 Project Structure

```
stock-assistant-frontend/
├── public/                 # Static assets
│   └── vite.svg           # Vite icon
├── src/                   # Source code directory
│   ├── components/        # Reusable components
│   │   ├── DataTable.tsx  # Data table component
│   │   └── DetailPanel.tsx # Detail panel component
│   ├── services/          # API services
│   │   └── api.ts         # API interface definitions
│   ├── types/            # Type definitions
│   │   └── api.ts        # API types
│   ├── App.tsx           # Main application component
│   ├── index.css         # Global styles (Tailwind)
│   └── main.tsx          # Application entry file
├── dist/                 # Build output directory
├── package.json          # Project configuration and dependencies
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite build configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── eslint.config.js      # ESLint configuration
├── vercel.json          # Vercel deployment configuration
├── netlify.toml         # Netlify deployment configuration
├── deploy.sh            # Linux/Mac deployment script
├── deploy.bat           # Windows deployment script
└── README.md            # Project documentation
```

### 📂 Core File Descriptions

- **`src/App.tsx`** - Main application component containing all business logic
- **`src/components/`** - Reusable UI components
- **`src/services/`** - API service layer
- **`src/types/`** - TypeScript type definitions
- **`src/index.css`** - Global styles and Tailwind CSS configuration
- **`package.json`** - Project dependencies and script configuration
- **`vite.config.ts`** - Vite build tool configuration

## 💻 Development Guide

### 🎨 Component Development

#### Creating New Components

```tsx
// src/components/NewComponent.tsx
import React from 'react'

interface NewComponentProps {
  title: string
  onAction?: () => void
}

export function NewComponent({ title, onAction }: NewComponentProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold">{title}</h2>
      {/* Component content */}
    </div>
  )
}
```

#### Styling Guidelines
- Prioritize Tailwind CSS class names
- Maintain consistent spacing and color schemes
- Use responsive prefixes (`sm:`, `md:`, `lg:`)
- Follow component-based thinking, avoid excessive nesting

### 🔌 API Integration

#### Creating API Services

```typescript
// src/services/newApi.ts
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
})

export const newApi = {
  getData: () => api.get('/endpoint'),
  postData: (data: any) => api.post('/endpoint', data),
}
```

### 📊 State Management

For complex state management, the following solutions are recommended:

#### Zustand (Lightweight)
```typescript
// src/store/useStore.ts
import { create } from 'zustand'

interface AppState {
  count: number
  increment: () => void
  decrement: () => void
}

export const useStore = create<AppState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))
```

#### Redux Toolkit (Complex Applications)
- Suitable for large applications and complex state logic
- Provides developer tools and time-travel debugging
- Better type inference

### 🧪 Testing

#### Unit Testing

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom

# Run tests
npm test
```

#### Component Testing Example

```tsx
// src/components/__tests__/Component.test.tsx
import { render, screen } from '@testing-library/react'
import { Component } from '../Component'

test('renders component correctly', () => {
  render(<Component title="Test" />)
  expect(screen.getByText('Test')).toBeInTheDocument()
})
```

## 🚀 Deployment Guide

### 🌐 Cloud Platform Deployment

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod

# Deploy to preview environment
vercel
```

#### Netlify
1. Visit [netlify.com](https://netlify.com)
2. Connect GitHub repository or drag `dist` folder
3. Automatic deployment complete

#### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add deployment script
npm run deploy
```

### 🖥️ Server Deployment

#### Nginx Configuration

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 📱 Mobile Optimization
- Use PWA technology to enhance mobile experience
- Add Service Worker for offline access
- Optimize touch interactions and gestures

## 🔧 Configuration

### Environment Variables

Create `.env.local` file:

```env
VITE_API_BASE_URL=http://localhost:8080
VITE_APP_TITLE=Stock Assistant
```

### Custom Configuration

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
```

## 🤝 Contributing

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Recharts](https://recharts.org/) - Chart library

---

Made with ❤️ by [Your Name]