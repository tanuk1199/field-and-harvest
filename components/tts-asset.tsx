import { getTtsImage, getTtsFallback } from '@/lib/tts-images'

type TtsImageKey = Parameters<typeof getTtsImage>[0]

/**
 * Renders an <img> if a path is set in tts-images.ts, otherwise renders the emoji fallback.
 *
 * Everything defaults to loading="lazy" so the browser is not racing the whole page's imagery
 * against the above-the-fold hero. Un-lazied, this page pulled ~8.4 MB on first paint, which
 * showed up in Clarity as a 90% -> 57% cliff between 5% and 10% scroll depth plus 10% quick
 * backs. Pass `eager` on above-the-fold images only.
 */
export function TtsAsset({
  name,
  alt,
  className,
  fallbackClassName,
  eager = false,
}: {
  name: TtsImageKey
  alt: string
  className?: string
  fallbackClassName?: string
  eager?: boolean
}) {
  const src = getTtsImage(name)

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={eager ? 'high' : 'auto'}
      />
    )
  }

  return <span className={fallbackClassName}>{getTtsFallback(name)}</span>
}
