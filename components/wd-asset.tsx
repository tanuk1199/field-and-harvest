import { getWdImage, getWdFallback } from '@/lib/wd-images'

type WdImageKey = Parameters<typeof getWdImage>[0]

/** Renders an <img> if a path is set in wd-images.ts, otherwise renders the emoji fallback. */
export function WdAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: WdImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getWdImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getWdFallback(name)}</span>
}
