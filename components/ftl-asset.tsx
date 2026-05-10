import { getFtlImage, getFtlFallback, type FtlImageKey } from '@/lib/ftl-images'

/** Renders an <img> if a path is set in ftl-images.ts, otherwise renders the emoji fallback. */
export function FtlAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: FtlImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getFtlImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getFtlFallback(name)}</span>
}
