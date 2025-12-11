export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-amber-950 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-bold">C</div>
              <h3 className="text-xl font-bold">Cassamee</h3>
            </div>
            <p className="text-amber-200 text-sm">
              Mie cassava premium yang alami, sehat, dan lezat untuk keluarga Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-orange-300">Menu</h4>
            <ul className="space-y-2 text-sm text-amber-200">
              <li>
                <a href="#keunggulan" className="hover:text-white transition-colors">
                  Keunggulan
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-white transition-colors">
                  Produk
                </a>
              </li>
              <li>
                <a href="#pesan" className="hover:text-white transition-colors">
                  Pesan
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold mb-4 text-orange-300">Informasi</h4>
            <ul className="space-y-2 text-sm text-amber-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-orange-300">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm text-amber-200">
              <li>WhatsApp: +62 857 3085 8270</li>
              <li>Email: info@cassamee.com</li>
              <li>Instagram: @cassamee.id</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-amber-200">
            <p>&copy; {currentYear} Cassamee. Semua hak dilindungi.</p>
            <p>Dibuat dengan ❤️ untuk Indonesia</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
