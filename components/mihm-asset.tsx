import { getMihmImage, getMihmFallback } from '@/lib/mihm-images'

type MihmImageKey = Parameters<typeof getMihmImage>[0]

/** Renders an <img> if a path is set in mihm-images.ts, otherwise renders the emoji fallback. */
export function MihmAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: MihmImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getMihmImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getMihmFallback(name)}</span>
}
