import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-950 mb-4 text-balance">
                Mie Cassava Alami yang Lezat
              </h2>
              <p className="text-lg md:text-xl text-amber-800 mb-6 text-balance">
                Nikmati kelezatan mie instan premium yang dibuat 100% dari cassava asli. Tanpa gluten, tanpa pengawet
                buatan, penuh nutrisi.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-amber-900 font-semibold">100% Bahan Alami</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-amber-900 font-semibold">Bebas Gluten</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-amber-900 font-semibold">Siap dalam 5 Menit</span>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 text-lg rounded-lg h-auto">
              Pesan Sekarang
            </Button>
          </div>

          {/* Right Image - reordered to appear between header and paragraph on mobile */}
          <div className="relative order-1 md:order-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <img
                src="/cassava-noodles-product-package-premium.jpg"
                alt="Cassamee Noodles Package"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
