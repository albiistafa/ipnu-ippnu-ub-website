import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoIpnu from '../assets/logoIpnu.svg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Sesuaikan dengan tinggi navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false) // Tutup mobile menu setelah klik
  }

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoIpnu} alt="IPNU IPPNU UB" className="h-10 w-auto" />
            <span className="text-emerald-600 font-semibold text-lg">IPNU IPPNU UB</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('beranda')}
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('profil')}
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Profil
            </button>
            <button 
              onClick={() => scrollToSection('kegiatan')}
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Kegiatan
            </button>
            <Link to="/makesta" className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
              Makesta
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white py-4">
            <div className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => scrollToSection('beranda')}
                className="text-gray-600 hover:text-emerald-600 transition-colors text-left"
              >
                Beranda
              </button>
              <button 
                onClick={() => scrollToSection('profil')}
                className="text-gray-600 hover:text-emerald-600 transition-colors text-left"
              >
                Profil
              </button>
              <button 
                onClick={() => scrollToSection('kegiatan')}
                className="text-gray-600 hover:text-emerald-600 transition-colors text-left"
              >
                Kegiatan
              </button>
              <a href="#beranda" className="text-gray-600 hover:text-emerald-600 transition-colors">Beranda</a>
              <a href="#profil" className="text-gray-600 hover:text-emerald-600 transition-colors">Profil</a>
              <a href="#kegiatan" className="text-gray-600 hover:text-emerald-600 transition-colors">Kegiatan</a>
              <Link to="/makesta" className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors text-center">
                Makesta
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 