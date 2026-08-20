import { getJntImage, getJntFallback, type JntImageKey } from '@/lib/jnt-images'

/**
 * Renders an <img> if a path is set in jnt-images.ts, otherwise the emoji fallback.
 *
 * Defaults to lazy + async decode; pass eager on above-the-fold slots only
 * (that also sets fetchPriority high). See CLAUDE.md § Lander Page Weight.
 *
 * `fit` exists because this page mixes 1:1 infographics with 9:16 photography.
 * Diagrams must render `contain` or object-cover crops the chart headline and
 * the axis labels straight off. Photographs render `cover`.
 */
export function JntAsset({
  name,
  alt,
  className,
  fallbackClassName,
  loading = 'lazy',
  fit = 'cover',
}: {
  name: JntImageKey
  alt: string
  className?: string
  fallbackClassName?: string
  loading?: 'lazy' | 'eager'
  fit?: 'cover' | 'contain'
}) {
  const src = getJntImage(name)

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

  return <span className={fallbackClassName}>{getJntFallback(name)}</span>
}
