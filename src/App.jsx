import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import talenta from './assets/talenta.svg'
import organisasi from './assets/organisasi.svg'
import media from './assets/media.svg'
import Eksternal from './assets/eksternal.svg'
import Amaliah from './assets/amaliyah.svg'
import heroImage from './assets/DSC04938.jpg'
import './App.css'

// Halaman Utama
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    })
  }, [])

  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Section */}
      <section id="beranda" className="pt-24 md:pt-32 pb-10 md:pb-16 relative overflow-hidden min-h-[340px] md:min-h-[480px] flex items-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-start md:justify-start w-full">
            <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 mb-8 md:mb-0" data-aos="fade-right" data-aos-delay="100">
              <div className="text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-800 mb-4">
                  IPNU IPPNU Universitas Brawijaya
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-emerald-600 mb-6" data-aos="fade-right" data-aos-delay="200">
                  "Membentuk Generasi Muda NU yang Berakhlak, Berwawasan, dan Berdaya Saing"
                </p>
                <a 
                  href="#profil" 
                  className="inline-block bg-emerald-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-emerald-600 transition-colors text-base sm:text-lg"
                  data-aos="fade-up" 
                  data-aos-delay="300"
                >
                  Kenali Kami
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Hero image as background */}
        <img src={heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
        {/* Overlay gradient dari putih ke transparan */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-0" />
      </section>

      {/* Profil Section */}
      <section id="profil" className="py-10 md:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 text-center mb-8 md:mb-12" data-aos="fade-up">
            Profil Organisasi
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-emerald-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-lg md:text-xl font-semibold text-emerald-700 mb-4">Visi</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Menjadi organisasi pelajar NU yang unggul dalam pengembangan generasi muda yang berakhlak, 
                berwawasan kebangsaan, dan berdaya saing global.
              </p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-lg md:text-xl font-semibold text-emerald-700 mb-4">Misi</h3>
              <ul className="text-gray-600 text-sm md:text-base list-disc list-inside space-y-2">
                <li>Mengembangkan pendidikan dan pengkaderan yang berorientasi pada nilai-nilai Islam Ahlussunnah Wal Jamaah</li>
                <li>Membina dan mengembangkan potensi pelajar dalam berbagai bidang</li>
                <li>Menguatkan jaringan dan sinergi dengan berbagai pihak</li>
              </ul>
            </div>
          </div>

          {/* Departemen Grid */}
          <div className="mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl font-semibold text-emerald-700 text-center mb-4 md:mb-6" data-aos="fade-up">Departemen</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 justify-items-center">
              <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col items-center">
                <img src={talenta} alt="Departemen Talenta" className="dept-card w-16 h-16 sm:w-20 sm:h-20 object-contain mb-1" />
                <p className="text-center text-emerald-700 text-xs sm:text-sm font-medium mt-1">Talenta</p>
              </div>
              <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col items-center">
                <img src={organisasi} alt="Departemen Organisasi" className="dept-card w-16 h-16 sm:w-20 sm:h-20 object-contain mb-1" />
                <p className="text-center text-emerald-700 text-xs sm:text-sm font-medium mt-1">Organisasi</p>
              </div>
              <div data-aos="zoom-in" data-aos-delay="300" className="flex flex-col items-center">
                <img src={media} alt="Departemen Media" className="dept-card w-16 h-16 sm:w-20 sm:h-20 object-contain mb-1" />
                <p className="text-center text-emerald-700 text-xs sm:text-sm font-medium mt-1">Media</p>
              </div>
              <div data-aos="zoom-in" data-aos-delay="400" className="flex flex-col items-center">
                <img src={Eksternal} alt="Departemen Eksternal" className="dept-card w-16 h-16 sm:w-20 sm:h-20 object-contain mb-1" />
                <p className="text-center text-emerald-700 text-xs sm:text-sm font-medium mt-1">Eksternal</p>
              </div>
              <div data-aos="zoom-in" data-aos-delay="500" className="flex flex-col items-center">
                <img src={Amaliah} alt="Departemen Amaliah" className="dept-card w-16 h-16 sm:w-20 sm:h-20 object-contain mb-1" />
                <p className="text-center text-emerald-700 text-xs sm:text-sm font-medium mt-1">Amaliah</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-lg md:text-xl font-semibold text-emerald-700 mb-4 text-center">Struktur Organisasi</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center" data-aos="zoom-in" data-aos-delay="400">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <h4 className="font-semibold text-emerald-700">Ketua Ipnu</h4>
                  <p className="text-gray-600 text-xs md:text-base">Gus Iqdam Penceng</p>
                </div>
              </div>
              <div className="text-center" data-aos="zoom-in" data-aos-delay="500">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <h4 className="font-semibold text-emerald-700">Ketua Ippnu</h4>
                  <p className="text-gray-600 text-xs md:text-base">Ning Dian</p>
                </div>
              </div>
              <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <h4 className="font-semibold text-emerald-700">Programmer</h4>
                  <p className="text-gray-600 text-xs md:text-base">Albi Jago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kegiatan Section */}
      <section id="kegiatan" className="py-10 md:py-16 bg-emerald-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 text-center mb-8 md:mb-12" data-aos="fade-up">
            Kegiatan Terbaru
          </h2>
          
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-8 md:pb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Kegiatan 1 */}
            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col min-h-[340px] md:min-h-[400px]">
                <img src="/kegiatan1.jpg" alt="Kegiatan 1" className="w-full h-40 md:h-48 object-cover" />
                <div className="p-4 md:p-6 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-emerald-700 mb-2">Diskusi Keislaman</h3>
                  <p className="text-gray-600 mb-4 flex-1 text-xs md:text-base">Diskusi rutin membahas isu-isu keislaman kontemporer</p>
                  <span className="text-xs md:text-sm text-emerald-500 mt-auto">Setiap Sabtu, 09:00 WIB</span>
                </div>
              </div>
            </SwiperSlide>

            {/* Kegiatan 2 */}
            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col min-h-[340px] md:min-h-[400px]">
                <img src="/kegiatan2.jpg" alt="Kegiatan 2" className="w-full h-40 md:h-48 object-cover" />
                <div className="p-4 md:p-6 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-emerald-700 mb-2">Kajian Kitab</h3>
                  <p className="text-gray-600 mb-4 flex-1 text-xs md:text-base">Kajian kitab kuning untuk penguatan pemahaman keislaman</p>
                  <span className="text-xs md:text-sm text-emerald-500 mt-auto">Setiap Ahad, 08:00 WIB</span>
                </div>
              </div>
            </SwiperSlide>

            {/* Kegiatan 3 */}
            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col min-h-[340px] md:min-h-[400px]">
                <img src="/kegiatan3.jpg" alt="Kegiatan 3" className="w-full h-40 md:h-48 object-cover" />
                <div className="p-4 md:p-6 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-emerald-700 mb-2">Pelatihan Kepemimpinan</h3>
                  <p className="text-gray-600 mb-4 flex-1 text-xs md:text-base">Program pengembangan soft skills dan kepemimpinan</p>
                  <span className="text-xs md:text-sm text-emerald-500 mt-auto">Setiap Bulan</span>
                </div>
              </div>
            </SwiperSlide>

            {/* Kegiatan 4 */}
            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col min-h-[340px] md:min-h-[400px]">
                <img src="/kegiatan4.jpg" alt="Kegiatan 4" className="w-full h-40 md:h-48 object-cover" />
                <div className="p-4 md:p-6 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-emerald-700 mb-2">Workshop Digital</h3>
                  <p className="text-gray-600 mb-4 flex-1 text-xs md:text-base">Pelatihan pengembangan konten digital dan media sosial</p>
                  <span className="text-xs md:text-sm text-emerald-500 mt-auto">Setiap 2 Minggu</span>
                </div>
              </div>
            </SwiperSlide>

            {/* Kegiatan 5 */}
            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col min-h-[340px] md:min-h-[400px]">
                <img src="/kegiatan5.jpg" alt="Kegiatan 5" className="w-full h-40 md:h-48 object-cover" />
                <div className="p-4 md:p-6 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-emerald-700 mb-2">Bakti Sosial</h3>
                  <p className="text-gray-600 mb-4 flex-1 text-xs md:text-base">Program pengabdian masyarakat dan bantuan sosial</p>
                  <span className="text-xs md:text-sm text-emerald-500 mt-auto">Setiap 3 Bulan</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
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
