export function ProductShowcase() {
  return (
    <section id="produk" className="py-12 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-4">Produk Kami</h2>
          <p className="text-lg text-amber-800">Mie Cassava Premium Berkualitas Tinggi</p>
        </div>

        {/* Single Product */}
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-orange-50 p-6 h-64 flex items-center justify-center">
              <img
                src="/cassava-noodles-original-flavor.jpg"
                alt="Mie Cassava"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-amber-950 mb-2">Mie Cassava Cassamee</h3>
              <p className="text-amber-800 mb-4">
                Mie cassava alami tanpa gluten dengan rasa yang lezat dan autentik. Siap disajikan dalam 5 menit.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-orange-600">Rp6.000</span>
                <span className="text-sm text-amber-700">/pcs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
