import { getDbImage, getDbFallback } from '@/lib/db-images'

type DbImageKey = Parameters<typeof getDbImage>[0]

/** Renders an <img> if a path is set in db-images.ts, otherwise renders the emoji fallback. */
export function DbAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: DbImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getDbImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getDbFallback(name)}</span>
}
