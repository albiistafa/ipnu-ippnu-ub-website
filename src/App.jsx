import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Halaman Utama
function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="beranda" className="pt-24 pb-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
                IPNU IPPNU Universitas Brawijaya
              </h1>
              <p className="text-xl text-emerald-600 mb-6">
                "Membentuk Generasi Muda NU yang Berakhlak, Berwawasan, dan Berdaya Saing"
              </p>
              <a href="#profil" className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors">
                Kenali Kami
              </a>
            </div>
            <div className="md:w-1/2">
              <img src="/hero-image.jpg" alt="IPNU IPPNU UB" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Profil Section */}
      <section id="profil" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-800 text-center mb-12">Profil Organisasi</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">Visi</h3>
              <p className="text-gray-600">
                Menjadi organisasi pelajar NU yang unggul dalam pengembangan generasi muda yang berakhlak, 
                berwawasan kebangsaan, dan berdaya saing global.
              </p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">Misi</h3>
              <ul className="text-gray-600 list-disc list-inside space-y-2">
                <li>Mengembangkan pendidikan dan pengkaderan yang berorientasi pada nilai-nilai Islam Ahlussunnah Wal Jamaah</li>
                <li>Membina dan mengembangkan potensi pelajar dalam berbagai bidang</li>
                <li>Menguatkan jaringan dan sinergi dengan berbagai pihak</li>
              </ul>
            </div>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4">Struktur Organisasi</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <h4 className="font-semibold text-emerald-700">Ketua Ipnu</h4>
                  <p className="text-gray-600">Gus Iqdam Penceng</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <h4 className="font-semibold text-emerald-700">Ketua Ippnu</h4>
                  <p className="text-gray-600">Ning Dian</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <h4 className="font-semibold text-emerald-700">Programmer</h4>
                  <p className="text-gray-600">Albi Jago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kegiatan Section */}
      <section id="kegiatan" className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-800 text-center mb-12">Kegiatan Terbaru</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Kegiatan 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="/kegiatan1.jpg" alt="Kegiatan 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Diskusi Keislaman</h3>
                <p className="text-gray-600 mb-4">Diskusi rutin membahas isu-isu keislaman kontemporer</p>
                <span className="text-sm text-emerald-500">Setiap Sabtu, 09:00 WIB</span>
              </div>
            </div>

            {/* Kegiatan 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="/kegiatan2.jpg" alt="Kegiatan 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Kajian Kitab</h3>
                <p className="text-gray-600 mb-4">Kajian kitab kuning untuk penguatan pemahaman keislaman</p>
                <span className="text-sm text-emerald-500">Setiap Ahad, 08:00 WIB</span>
              </div>
            </div>

            {/* Kegiatan 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src="/kegiatan3.jpg" alt="Kegiatan 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Pelatihan Kepemimpinan</h3>
                <p className="text-gray-600 mb-4">Program pengembangan soft skills dan kepemimpinan</p>
                <span className="text-sm text-emerald-500">Setiap Bulan</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Halaman Makesta
function Makesta() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-emerald-800 text-center mb-12">Makesta IPNU IPPNU UB</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Tentang Makesta</h2>
            <p className="text-gray-600 mb-6">
              Makesta (Masa Kesetiaan Anggota) adalah program pengkaderan dasar bagi anggota baru IPNU IPPNU.
              Program ini dirancang untuk memberikan pemahaman mendalam tentang organisasi dan nilai-nilai keislaman.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-emerald-700 mb-2">Waktu Pelaksanaan</h3>
                <p className="text-gray-600">TBA</p>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-700 mb-2">Lokasi</h3>
                <p className="text-gray-600">Universitas Brawijaya</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Timeline</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-emerald-700">Pendaftaran</h3>
                  <p className="text-gray-600">TBA</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-emerald-700">Seleksi</h3>
                  <p className="text-gray-600">TBA</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-emerald-700">Pelaksanaan</h3>
                  <p className="text-gray-600">TBA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Pendaftaran</h2>
            <p className="text-gray-600 mb-6">
              Untuk mendaftar Makesta, silakan isi formulir pendaftaran di bawah ini:
            </p>
            <a href="#" className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors">
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/makesta" element={<Makesta />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
