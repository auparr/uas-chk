"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

const PRICE_PER_UNIT = 6000 // Rp6.000
const MIN_QUANTITY = 5
const WHATSAPP_NUMBER = "6285730858270"

export function ProductCheckout() {
  const [quantity, setQuantity] = useState(MIN_QUANTITY)
  const [paymentMethod, setPaymentMethod] = useState<"transfer" | "cod">("transfer")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const totalPrice = quantity * PRICE_PER_UNIT

  const handleQuantityChange = (value: string) => {
    const num = Number.parseInt(value) || 0
    if (num >= MIN_QUANTITY) {
      setQuantity(num)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi"
    if (!formData.phone.trim()) newErrors.phone = "Nomor telepon wajib diisi"
    if (!formData.address.trim()) newErrors.address = "Alamat wajib diisi"
    if (!formData.city.trim()) newErrors.city = "Kota wajib diisi"
    if (!formData.postalCode.trim()) newErrors.postalCode = "Kode pos wajib diisi"
    return newErrors
  }

  const handleOrderClick = () => {
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const paymentText = paymentMethod === "transfer" ? "Transfer Bank" : "Bayar di Tempat (COD)"

    const message = `Halo, saya ingin memesan Cassamee Natural Cassava Noodles.

*Detail Pesanan:*
Produk: Cassamee - Rasa Original
Jumlah: ${quantity} pcs
Harga per pcs: Rp${PRICE_PER_UNIT.toLocaleString("id-ID")}
Total Harga: Rp${totalPrice.toLocaleString("id-ID")}

*Metode Pembayaran:*
${paymentText}

*Data Pemesan:*
Nama: ${formData.name}
No. Telepon: ${formData.phone}
Alamat: ${formData.address}
Kota: ${formData.city}
Kode Pos: ${formData.postalCode}

Terima kasih!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-2">Cassamee</h1>
          <p className="text-xl text-amber-700">Mie Cassava Alami - Bebas Gluten & Lezat</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Section */}
          <Card className="bg-white border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-900">Rasa Original</CardTitle>
              <CardDescription>Mie instan premium dari cassava alami</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-amber-50 p-6 rounded-lg">
                <img
                  src="/cassava-noodles-product-package.jpg"
                  alt="Cassamee Noodles"
                  className="w-full h-64 object-cover rounded-lg bg-amber-100"
                />
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-amber-900">Keunggulan Produk:</h3>
                <ul className="space-y-2 text-sm text-amber-800">
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>100% Cassava Alami</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Bebas Gluten</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Tanpa Warna dan Pengawet Buatan</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Siap dalam 5 Menit</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Rasa Asli yang Lezat</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Order Section */}
          <Card className="bg-white border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-900">Pesan Sekarang</CardTitle>
              <CardDescription>Isi detail dan jumlah pesanan Anda</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Quantity Selector */}
              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  Jumlah Pesanan (Minimal {MIN_QUANTITY})
                </label>
                <div className="flex gap-2 items-center">
                  <Input
                    type="number"
                    min={MIN_QUANTITY}
                    value={quantity}
                    onChange={(e) => handleQuantityChange(e.target.value)}
                    className="w-24 border-amber-200 focus:ring-amber-500"
                  />
                  <span className="text-sm text-amber-700">pcs</span>
                </div>
                {quantity < MIN_QUANTITY && (
                  <p className="text-xs text-red-600 mt-1 flex gap-1 items-center">
                    <AlertCircle size={14} />
                    Minimal {MIN_QUANTITY} pcs
                  </p>
                )}
              </div>

              {/* Price Display */}
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-amber-900">Harga per unit:</span>
                  <span className="font-semibold text-amber-900">Rp{PRICE_PER_UNIT.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-amber-900 pt-2 border-t border-amber-200">
                  <span>Total:</span>
                  <span>Rp{totalPrice.toLocaleString("id-ID")}</span>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <h3 className="font-semibold text-amber-900 text-sm mb-3">Metode Pembayaran</h3>
                <div className="space-y-2">
                  <label
                    className="flex items-center gap-3 p-3 border-2 border-amber-200 rounded-lg cursor-pointer hover:bg-amber-50 transition-colors"
                    style={{ borderColor: paymentMethod === "transfer" ? "#b45309" : "#fcd34d" }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="transfer"
                      checked={paymentMethod === "transfer"}
                      onChange={(e) => setPaymentMethod(e.target.value as "transfer" | "cod")}
                      className="w-4 h-4 accent-amber-600"
                    />
                    <div>
                      <div className="font-semibold text-amber-900">Transfer Bank</div>
                      <div className="text-xs text-amber-700">Bayar melalui transfer bank</div>
                    </div>
                  </label>

                  <label
                    className="flex items-center gap-3 p-3 border-2 border-amber-200 rounded-lg cursor-pointer hover:bg-amber-50 transition-colors"
                    style={{ borderColor: paymentMethod === "cod" ? "#b45309" : "#fcd34d" }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) => setPaymentMethod(e.target.value as "transfer" | "cod")}
                      className="w-4 h-4 accent-amber-600"
                    />
                    <div>
                      <div className="font-semibold text-amber-900">Bayar di Tempat (COD)</div>
                      <div className="text-xs text-amber-700">Bayar saat barang tiba</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Customer Details Form */}
              <div className="space-y-3">
                <h3 className="font-semibold text-amber-900 text-sm">Detail Pengiriman</h3>

                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nama Lengkap"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`border-amber-200 focus:ring-amber-500 ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Nomor Telepon (cth: 081234567890)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`border-amber-200 focus:ring-amber-500 ${errors.phone ? "border-red-500" : ""}`}
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Input
                    type="text"
                    name="address"
                    placeholder="Alamat Jalan"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`border-amber-200 focus:ring-amber-500 ${errors.address ? "border-red-500" : ""}`}
                  />
                  {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address}</p>}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Input
                      type="text"
                      name="city"
                      placeholder="Kota"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`border-amber-200 focus:ring-amber-500 ${errors.city ? "border-red-500" : ""}`}
                    />
                    {errors.city && <p className="text-xs text-red-600 mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <Input
                      type="text"
                      name="postalCode"
                      placeholder="Kode Pos"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className={`border-amber-200 focus:ring-amber-500 ${errors.postalCode ? "border-red-500" : ""}`}
                    />
                    {errors.postalCode && <p className="text-xs text-red-600 mt-1">{errors.postalCode}</p>}
                  </div>
                </div>
              </div>

              {/* Order Button */}
              <Button
                onClick={handleOrderClick}
                disabled={quantity < MIN_QUANTITY}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-6 text-lg"
              >
                Pesan via WhatsApp
              </Button>

              <p className="text-xs text-center text-amber-700">
                Klik tombol di atas untuk menyelesaikan pesanan Anda melalui WhatsApp
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
