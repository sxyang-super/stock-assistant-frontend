# 🚀 Usage Guide

## 📋 Project Overview

This is a React + TypeScript based analysis status management system for displaying and managing data analysis task status.

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

### 1. Data Table
- ✅ Paginated data display
- ✅ Status label color differentiation
- ✅ Responsive design
- ✅ Loading state indicator

### 2. Pagination
- ✅ Page number navigation
- ✅ Previous/Next page
- ✅ Jump to first/last page
- ✅ Display total record count

### 3. Detail Panel
- ✅ Right slide-in animation
- ✅ Overlay click to close
- ✅ Detailed information display
- ✅ JSON format raw data

## 🎨 Interface Preview

### Main Interface
- Top navigation bar showing system name
- Data table displaying analysis status list
- Bottom pagination controls

### Detail Panel
- Click "View Details" button
- Right slide-out detail panel
- Display basic information, price change information, and raw data

## 🔧 Development Notes

### Project Structure
```
src/
├── components/          # Reusable components
│   ├── DataTable.tsx   # Data table component
│   └── DetailPanel.tsx # Detail panel component
├── services/           # API services
│   └── api.ts         # Interface definitions
├── types/             # Type definitions
│   └── api.ts        # API types
├── App.tsx            # Main application component
└── main.tsx           # Application entry point
```

### State Management
- Use React Hooks for state management
- Include loading states and error handling
- Support pagination and detail viewing

### Styling
- Use Tailwind CSS
- Responsive layout
- Modern UI design

## 🚀 Deployment

### Build Production Version
```bash
npm run build
```

### Deploy to Static Server
Deploy the `dist` directory to any static file server.

### Environment Configuration
To connect to other API addresses, modify the `baseURL` in `src/services/api.ts`:
```typescript
const api = axios.create({
  baseURL: 'http://localhost:8080', // Modify to actual API address
  timeout: 10000,
})
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