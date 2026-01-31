import { getImage, getFallback } from '@/lib/images'

type ImageKey = Parameters<typeof getImage>[0]

/** Renders an <img> if a path is set in images.ts, otherwise renders the emoji fallback. */
export function Asset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: ImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getFallback(name)}</span>
}
