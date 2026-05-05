import { getFdImage, getFdFallback } from '@/lib/fd-images'

type FdImageKey = Parameters<typeof getFdImage>[0]

/** Renders an <img> if a path is set in fd-images.ts, otherwise renders the emoji fallback. */
export function FdAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: FdImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getFdImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getFdFallback(name)}</span>
}
