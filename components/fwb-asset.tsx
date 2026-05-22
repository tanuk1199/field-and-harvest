import { getFwbImage, getFwbFallback } from '@/lib/fwb-images'

type FwbImageKey = Parameters<typeof getFwbImage>[0]

/** Renders an <img> if a path is set in fwb-images.ts, otherwise renders the emoji fallback. */
export function FwbAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: FwbImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getFwbImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getFwbFallback(name)}</span>
}
