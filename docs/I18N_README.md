# 多语言支持 / Internationalization (i18n)

本项目支持中文和英文两种语言环境，默认语言为中文。

## 功能特性

- 🌍 支持中文 (zh-CN) 和英文 (en-US)
- 🔄 实时语言切换，无需刷新页面
- 💾 自动保存用户语言偏好到本地存储
- ⚙️ 环境特定配置支持

## 使用方法

### 语言切换

在应用右上角点击语言切换按钮：
- 中文环境显示 "中文"
- 英文环境显示 "English"

### 环境配置

#### 开发环境 (.env.development)
```
VITE_API_BASE_URL=http://localhost:8080
VITE_DEFAULT_LANGUAGE=zh-CN
```

#### 生产环境 (.env.production)
```
VITE_API_BASE_URL=https://api.example.com
VITE_DEFAULT_LANGUAGE=zh-CN
```

#### 自定义环境
创建 `.env.local` 文件来覆盖默认设置：
```
VITE_DEFAULT_LANGUAGE=en-US
```

## 文件结构

```
src/
├── i18n/
│   ├── index.ts          # i18n 核心功能
│   └── translations.ts    # 翻译文件
├── contexts/
│   └── LanguageContext.tsx # 语言上下文
├── components/
│   └── LanguageSwitcher.tsx # 语言切换组件
└── config/
    └── index.ts          # 应用配置
```

## 添加新语言

1. 在 `src/i18n/translations.ts` 中添加新的翻译：
```typescript
export const jaJP: TranslationKeys = {
  // 添加日语翻译
}
```

2. 更新 `src/i18n/index.ts`：
```typescript
export const translations = {
  'zh-CN': zhCN,
  'en-US': enUS,
  'ja-JP': jaJP  // 添加新语言
} as const

export type Language = 'zh-CN' | 'en-US' | 'ja-JP'
```

3. 在 `LanguageSwitcher.tsx` 中添加语言切换逻辑

## 在组件中使用

```tsx
import { useLanguage } from '../contexts/LanguageContext'

function MyComponent() {
  const { t, language, setLanguage } = useLanguage()
  
  return (
    <div>
      <h1>{t('appTitle')}</h1>
      <p>Current language: {language}</p>
    </div>
  )
}
```

## 默认语言设置

应用的默认语言在以下位置设置：
1. `src/config/index.ts` 中的 `defaultLanguage`
2. 环境变量 `VITE_DEFAULT_LANGUAGE`
3. 用户本地存储中的偏好设置

优先级：本地存储 > 环境变量 > 配置文件默认值

## 注意事项

- 所有用户界面文本都已国际化
- 翻译键名使用驼峰命名法
- 保持翻译键的一致性和可读性
- 新增功能时请同时添加对应的翻译