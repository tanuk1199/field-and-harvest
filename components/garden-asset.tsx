import { getGardenImage, getGardenFallback } from '@/lib/garden-images'

type GardenImageKey = Parameters<typeof getGardenImage>[0]

export function GardenAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: GardenImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getGardenImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return (
    <div className={`bg-[#e8e0d4] flex items-center justify-center ${fallbackClassName || ''}`}>
      <span className="text-2xl">{getGardenFallback(name)}</span>
    </div>
  )
}
