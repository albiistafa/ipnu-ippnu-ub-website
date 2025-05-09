import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logoIpnu from '../assets/logoIpnu.svg'

const NAV_ITEMS = [
  { label: 'Beranda', section: 'beranda' },
  { label: 'Profil', section: 'profil' },
  { label: 'Kegiatan', section: 'kegiatan' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const offset = 100
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        }
      }, 300)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-xl rounded-2xl' : 'bg-white/70 backdrop-blur-sm shadow-lg rounded-2xl'
    }`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logoIpnu} alt="IPNU IPPNU UB" className="h-12 w-auto" />
            <span className="text-xl font-bold text-emerald-800">IPNU IPPNU UB</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="px-2 py-1 font-medium text-emerald-800 hover:text-emerald-600 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <Link to="/makesta" className="text-emerald-800 hover:text-emerald-600 transition-colors font-medium">
              Makesta
            </Link>
            <a
              href="#daftar"
              className="bg-emerald-500 text-white px-6 py-2.5 rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 ml-2"
            >
              Daftar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-emerald-800 hover:text-emerald-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="block w-full text-left font-medium px-2 py-1 text-emerald-800 hover:text-emerald-600 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/makesta"
              className="block text-emerald-800 hover:text-emerald-600 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Makesta
            </Link>
            <a
              href="#daftar"
              className="inline-block bg-emerald-500 text-white px-6 py-2.5 rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Daftar
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 