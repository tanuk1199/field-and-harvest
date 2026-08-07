import { getEmbImage, getEmbFallback } from '@/lib/emb-images'

type EmbImageKey = Parameters<typeof getEmbImage>[0]

/**
 * Renders an <img> if a path is set in emb-images.ts, otherwise the emoji fallback.
 * Defaults to lazy + async decode; pass eager on above-the-fold slots only
 * (that also sets fetchPriority high). See CLAUDE.md § Lander Page Weight.
 */
export function EmbAsset({
  name,
  alt,
  className,
  fallbackClassName,
  loading = 'lazy',
}: {
  name: EmbImageKey
  alt: string
  className?: string
  fallbackClassName?: string
  loading?: 'lazy' | 'eager'
}) {
  const src = getEmbImage(name)

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        fetchPriority={loading === 'eager' ? 'high' : undefined}
      />
    )
  }

  return <span className={fallbackClassName}>{getEmbFallback(name)}</span>
}
