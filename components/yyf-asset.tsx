import { getYyfImage, getYyfFallback } from '@/lib/yyf-images'

type YyfImageKey = Parameters<typeof getYyfImage>[0]

/** Renders an <img> if a path is set in yyf-images.ts, otherwise renders the emoji fallback. */
export function YyfAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: YyfImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getYyfImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getYyfFallback(name)}</span>
}
