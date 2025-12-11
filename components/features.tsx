import { CheckCircle2, Leaf, Zap, Heart } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Leaf,
      title: "100% Alami",
      description: "Dibuat dari cassava pilihan tanpa bahan kimia berbahaya",
    },
    {
      icon: CheckCircle2,
      title: "Bebas Gluten",
      description: "Cocok untuk Anda yang memiliki sensitivitas gluten",
    },
    {
      icon: Zap,
      title: "Siap 5 Menit",
      description: "Memasak mudah dan cepat, sempurna untuk rutinitas harian",
    },
    {
      icon: Heart,
      title: "Bernutrisi",
      description: "Kaya akan serat dan nutrisi penting untuk kesehatan",
    },
  ]

  return (
    <section id="keunggulan" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-4">Mengapa Pilih Cassamee?</h2>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Kami berkomitmen memberikan mie cassava berkualitas tinggi dengan standar kesehatan terbaik
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-amber-50 p-6 rounded-lg border border-amber-200 hover:shadow-lg transition-shadow"
              >
                <Icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-lg font-bold text-amber-950 mb-2">{feature.title}</h3>
                <p className="text-amber-800 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
