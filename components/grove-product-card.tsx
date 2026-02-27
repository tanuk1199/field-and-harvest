"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { GroveAsset } from "@/components/grove-asset"
import { getGroveImage } from "@/lib/grove-images"

const PDP_URL = "https://fieldandharvestco.com/products/the-grove-starter-set"

const thumbKeys = ["productThumb1", "productThumb2", "productThumb3", "productThumb4", "productThumb5"] as const

export function GroveProductCard() {
  const [activeImage, setActiveImage] = useState<typeof thumbKeys[number] | "productMain">("productMain")

  return (
    <section className="max-w-lg mx-auto px-4 pt-12 pb-4">
      <div className="text-center mb-8">
        <Badge className="bg-[#F4EFE3] text-[#4A3F35] hover:bg-[#F4EFE3] border border-[#D4C4B0] text-xs font-bold mb-5 px-4 py-1.5">
          2-Pack Set + 2 Free Gardening Guides
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
          Start 80 Plants for Less Than One Nursery Trip
        </h2>
        <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
          Two trays. Eighty cells. Built-in lights. Humidity domes. Two free guides. Everything you need to skip the nursery this season and every season after.
        </p>

        <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <p className="text-sm text-foreground font-medium">
            4.9 stars <span className="text-muted-foreground mx-1.5">|</span> 2-Pack Set <span className="text-muted-foreground mx-1.5">|</span> 80 Cells Total
          </p>
        </div>
      </div>

      <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-lg">
        <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center py-3 px-4">
          <p className="text-sm font-bold tracking-wide">TODAY: 21% OFF + 2 FREE GARDENING GUIDES</p>
        </div>

        <div className="p-5">
          {/* Main product image */}
          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-4">
            <GroveAsset name={activeImage} alt="The Grove Starter Set — 2-Pack" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-5 gap-1.5 mb-5">
            {thumbKeys.map((name, i) => {
              const isActive = activeImage === name
              return (
                <button
                  key={i}
                  onClick={() => setActiveImage(name)}
                  className={`relative aspect-square rounded-md border-2 bg-muted transition-colors cursor-pointer overflow-hidden ${
                    isActive ? "border-primary" : "border-border hover:border-primary/50"
                  }`}
                >
                  <GroveAsset name={name} alt={`Product view ${i + 1}`} className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-muted-foreground font-bold" />
                </button>
              )
            })}
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
              <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-base">🌱</span>
              <p className="text-xs text-foreground font-semibold leading-snug">80 cells across 2 trays — start your whole garden at once</p>
            </div>
            <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
              <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-base">💡</span>
              <p className="text-xs text-foreground font-semibold leading-snug">Built-in LED grow lights — no extra equipment needed</p>
            </div>
            <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
              <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-base">♻️</span>
              <p className="text-xs text-foreground font-semibold leading-snug">Reusable season after season — saves more every year</p>
            </div>
            <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
              <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-base">🌡️</span>
              <p className="text-xs text-foreground font-semibold leading-snug">Humidity domes with adjustable vents for ideal germination</p>
            </div>
          </div>

          <a href={PDP_URL}>
            <Button
              variant="outline"
              size="lg"
              className="w-full border-2 border-foreground text-foreground font-bold hover:bg-muted bg-transparent py-6 rounded-lg"
            >
              See Full Product Details
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
