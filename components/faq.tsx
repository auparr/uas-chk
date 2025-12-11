import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Apa itu Mie Cassava Cassamee?",
      answer:
        "Mie Cassava Cassamee adalah mie instan premium yang dibuat 100% dari bahan cassava alami tanpa gluten, tanpa pengawet buatan, dan kaya akan nutrisi. Cocok untuk semua kalangan termasuk yang memiliki sensitivitas terhadap gluten.",
    },
    {
      question: "Berapa lama waktu memasak Mie Cassava Cassamee?",
      answer:
        "Mie Cassava Cassamee siap disajikan dalam waktu hanya 5 menit. Cukup rebus air, masukkan mie ke dalam air mendidih, dan siap nikmati.",
    },
    {
      question: "Apakah Mie Cassava Cassamee mengandung gluten?",
      answer:
        "Tidak! Mie Cassava Cassamee 100% bebas gluten karena dibuat dari cassava alami tanpa campuran tepung terigu.",
    },
    {
      question: "Berapa jumlah minimal pembelian?",
      answer: "Jumlah minimal pembelian adalah 5 pcs. Anda dapat membeli lebih banyak sesuai kebutuhan Anda.",
    },
    {
      question: "Metode pembayaran apa saja yang tersedia?",
      answer:
        "Kami menerima dua metode pembayaran: Transfer Bank dan COD (Bayar di Tempat). Anda dapat memilih metode pembayaran yang paling nyaman saat checkout.",
    },
    {
      question: "Apakah ada biaya pengiriman?",
      answer:
        "Biaya pengiriman akan didiskusikan langsung melalui WhatsApp setelah Anda mengirimkan detail pesanan Anda.",
    },
    {
      question: "Berapa lama proses pengiriman?",
      answer:
        "Proses pengiriman tergantung pada lokasi Anda. Tim kami akan mengkonfirmasi estimasi waktu pengiriman melalui WhatsApp setelah pesanan diterima.",
    },
    {
      question: "Apakah ada jaminan kualitas produk?",
      answer:
        "Ya! Kami menjamin semua produk Mie Cassava Cassamee berkualitas tinggi dengan bahan-bahan premium dan proses produksi yang higienis.",
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-4">Pertanyaan Umum</h2>
          <p className="text-lg text-amber-800">Temukan jawaban untuk pertanyaan Anda tentang Mie Cassava Cassamee</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-amber-200 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-orange-50 text-left font-semibold text-amber-950">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-orange-50 text-amber-900">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
