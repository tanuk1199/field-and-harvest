import { getTtsImage, getTtsFallback } from '@/lib/yrs-images'

type TtsImageKey = Parameters<typeof getTtsImage>[0]

/** Renders an <img> if a path is set in yrs-images.ts, otherwise renders the emoji fallback. */
export function YrsAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: TtsImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getTtsImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getTtsFallback(name)}</span>
}
