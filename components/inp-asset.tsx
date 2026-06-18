import { getInpImage, getInpFallback } from '@/lib/inp-images'

type InpImageKey = Parameters<typeof getInpImage>[0]

/** Renders an <img> if a path is set in inp-images.ts, otherwise renders the emoji fallback. */
export function InpAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: InpImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getInpImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getInpFallback(name)}</span>
}
