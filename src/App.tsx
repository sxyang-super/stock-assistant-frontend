import { LanguageProvider } from './contexts/LanguageContext'
import { TradingModeLayout } from './components/TradingModeLayout'

function App() {
  return (
    <LanguageProvider>
      <TradingModeLayout />
    </LanguageProvider>
  )
}

export default App
