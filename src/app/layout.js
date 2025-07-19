// src/app/layout.js or src/app/layout.jsx
import './styles/globals.css'
import { LanguageProvider } from '../context/LanguageContext'
import { ThemeProvider } from '..//context/ThemeContext'
import Header from './components/Header/Header' // ✅ Adjust path if needed
import Footer from './components/Footer/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <ThemeProvider>
            <Header /> {/* ✅ Show header on all pages */}
            {children}
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
