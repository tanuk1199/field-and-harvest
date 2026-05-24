import { getTmhImage, getTmhFallback } from '@/lib/tmh-images'

type TmhImageKey = Parameters<typeof getTmhImage>[0]

/** Renders an <img> if a path is set in tmh-images.ts, otherwise renders the emoji fallback. */
export function TmhAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: TmhImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getTmhImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getTmhFallback(name)}</span>
}
