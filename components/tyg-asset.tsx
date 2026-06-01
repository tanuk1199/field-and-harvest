import { getTygImage, getTygFallback } from '@/lib/tyg-images'

type TygImageKey = Parameters<typeof getTygImage>[0]

/** Renders an <img> if a path is set in tyg-images.ts, otherwise renders the emoji fallback. */
export function TygAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: TygImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getTygImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getTygFallback(name)}</span>
}
