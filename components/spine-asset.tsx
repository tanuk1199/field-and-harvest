import { getSpineImage, getSpineFallback } from '@/lib/spine-images'

type SpineImageKey = Parameters<typeof getSpineImage>[0]

export function SpineAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: SpineImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getSpineImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return (
    <div className={`bg-[#e8e0d4] flex items-center justify-center ${fallbackClassName || ''}`}>
      <span className="text-2xl">{getSpineFallback(name)}</span>
    </div>
  )
}
