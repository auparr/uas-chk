import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { ProductShowcase } from "@/components/product-showcase"
import { ProductCheckout } from "@/components/product-checkout"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Cassamee - Mie Cassava Alami Tanpa Gluten",
  description:
    "Cassamee adalah mie cassava premium yang alami, tanpa gluten, dan lezat. Pesan sekarang dan nikmati kesehatan dalam setiap gigitan.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <ProductShowcase />
      <ProductCheckout />
      <FAQ />
      <Footer />
    </main>
  )
}
