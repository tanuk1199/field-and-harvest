import { getBshImage, getBshFallback } from '@/lib/bsh-images'

type BshImageKey = Parameters<typeof getBshImage>[0]

/** Renders an <img> if a path is set in bsh-images.ts, otherwise renders the emoji fallback. */
export function BshAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: BshImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getBshImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getBshFallback(name)}</span>
}
