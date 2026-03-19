import { getMethodImage, getMethodFallback } from '@/lib/method-images'

type MethodImageKey = Parameters<typeof getMethodImage>[0]

export function MethodAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: MethodImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getMethodImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return (
    <div className={`bg-[#e8e0d4] flex items-center justify-center ${fallbackClassName || ''}`}>
      <span className="text-2xl">{getMethodFallback(name)}</span>
    </div>
  )
}
