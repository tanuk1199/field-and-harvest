import { getPabImage, getPabFallback } from '@/lib/pab-images'

type PabImageKey = Parameters<typeof getPabImage>[0]

/** Renders an <img> if a path is set in pab-images.ts, otherwise renders the emoji fallback. */
export function PabAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: PabImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getPabImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getPabFallback(name)}</span>
}
