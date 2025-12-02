# 🚀 Usage Guide

## 📋 Project Overview

This is a React + TypeScript based trading mode management system for displaying and managing different trading strategies and analysis status.

## 🛠️ Quick Start

### Start Frontend Development Server

```bash
npm run dev
```

## 🌐 Access URLs

- **Frontend Application**: http://localhost:5173
- **Backend API**: http://localhost:8080

## 📊 API Endpoints

### 1. Get Paginated List
```
GET http://localhost:8080/lfaqt-analyse-status/list-by-page?page=1&pageSize=10
```

**Response Example:**
```json
{
  "records": [
    {
      "stock": {
        "type": "HS_ETF",
        "code": "511580"
      },
      "dayKDate": "2025-11-28",
      "change": -0.9901,
      "maxChange": 0.1168,
      "minChange": -0.9901,
      "tierPercent": 1
    }
  ],
  "total": 1288,
  "size": 10,
  "current": 1,
  "pages": 129
}
```

### 2. Get Details
```
GET http://localhost:8080/lfaqt-analyse-status/HS_ETF/511580
```

**Response Example:**
```json
{
  "stock": {
    "type": "HS_ETF",
    "code": "511580"
  },
  "dayKDate": "2025-11-28",
  "change": -0.9901,
  "maxChange": 0.1168,
  "minChange": -0.9901,
  "tierPercent": 1,
  "increaseAggregations": [
    {
      "tier": 0.2,
      "count": 8,
      "percent": 0.7273
    }
  ],
  "decreaseAggregations": [
    {
      "tier": -0.2,
      "count": 3,
      "percent": 0.2727
    }
  ]
}
```

## 🎯 Features

### 1. Trading Mode System
- ✅ Multiple trading strategies support
- ✅ Mode selection sidebar
- ✅ Dynamic content rendering based on selected mode
- ✅ Mode-specific configurations

### 2. Data Table
- ✅ Paginated data display
- ✅ Status label color differentiation
- ✅ Responsive design
- ✅ Loading state indicator

### 3. Detail Panel
- ✅ Right slide-in animation
- ✅ Overlay click to close
- ✅ Detailed information display
- ✅ JSON format raw data

## 🎨 Interface Preview

### Main Interface
- Top navigation bar with language switcher
- Left sidebar for trading mode selection
- Main content area displaying selected mode's interface
- Responsive layout for different screen sizes

### Trading Mode: Low-Frequency Active Quant
- Data table showing analysis status list
- Pagination controls at the bottom
- Detail panel for individual stock information

## 🔧 Development Notes

### Trading Mode Configuration

Trading modes are configured in `src/config/tradingModes.ts`:

```typescript
export const tradingModes: TradingMode[] = [
  {
    id: 'low-frequency-active-quant',
    name: '低频主动量化交易',
    nameKey: 'tradingModes.lowFrequencyActiveQuant.name',
    description: '基于低频分析的主动量化交易策略',
    descriptionKey: 'tradingModes.lowFrequencyActiveQuant.description',
    icon: 'TrendingUp',
    path: '/trading/low-frequency-active-quant',
    enabled: true
  }
]
```

### Environment Configuration

To connect to different API addresses, modify the environment variables:

#### Development Environment (.env.development)
```
VITE_API_BASE_URL=http://localhost:8080
VITE_DEFAULT_LANGUAGE=zh-CN
```

#### Production Environment (.env.production)
```
VITE_API_BASE_URL=https://api.example.com
VITE_DEFAULT_LANGUAGE=zh-CN
```

## 🐛 Common Issues

### 1. Port Conflicts
If ports are occupied, you can modify:
- Frontend port: Vite will automatically select available ports
- Backend API port: Modify `baseURL` in `src/services/api.ts`

### 2. API Connection Failures
- Ensure backend API server is running
- Check if `baseURL` configuration is correct
- View browser console error messages

### 3. Build Failures
- Check TypeScript type errors
- Run `npm run lint` to check code standards
- Ensure all dependencies are correctly installed

## 📞 Technical Support

If you encounter issues, please:
1. Check browser console error messages
2. Verify backend API server is running normally
3. Confirm network connection is working
4. Submit an Issue to the project repository