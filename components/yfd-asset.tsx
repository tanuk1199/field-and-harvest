import { getYfdImage, getYfdFallback } from '@/lib/yfd-images'

type YfdImageKey = Parameters<typeof getYfdImage>[0]

/** Renders an <img> if a path is set in yfd-images.ts, otherwise renders the emoji fallback. */
export function YfdAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: YfdImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getYfdImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getYfdFallback(name)}</span>
}
