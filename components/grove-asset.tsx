import { getGroveImage, getGroveFallback } from '@/lib/grove-images'

type GroveImageKey = Parameters<typeof getGroveImage>[0]

/** Renders an <img> if a path is set in grove-images.ts, otherwise renders the emoji fallback. */
export function GroveAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: GroveImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getGroveImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getGroveFallback(name)}</span>
}
