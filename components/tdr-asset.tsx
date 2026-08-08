import { getTdrImage, getTdrFallback, type TdrImageKey } from '@/lib/tdr-images'

/**
 * Renders an <img> if a path is set in tdr-images.ts, otherwise the emoji fallback.
 *
 * Defaults to lazy + async decode; pass eager on above-the-fold slots only
 * (that also sets fetchPriority high). See CLAUDE.md § Lander Page Weight.
 *
 * `fit` exists because this page mixes 1:1 infographics with 9:16 photography.
 * Diagrams must render `contain` or object-cover crops the chart headline and
 * the axis labels straight off. Photographs render `cover`.
 */
export function TdrAsset({
  name,
  alt,
  className,
  fallbackClassName,
  loading = 'lazy',
  fit = 'cover',
}: {
  name: TdrImageKey
  alt: string
  className?: string
  fallbackClassName?: string
  loading?: 'lazy' | 'eager'
  fit?: 'cover' | 'contain'
}) {
  const src = getTdrImage(name)

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${className ?? ''} ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
        loading={loading}
        decoding="async"
        fetchPriority={loading === 'eager' ? 'high' : undefined}
      />
    )
  }

  return <span className={fallbackClassName}>{getTdrFallback(name)}</span>
}
