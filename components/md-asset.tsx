import { getMdImage, getMdFallback } from '@/lib/md-images'

type MdImageKey = Parameters<typeof getMdImage>[0]

/** Renders an <img> if a path is set in md-images.ts, otherwise renders the emoji fallback. */
export function MdAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: MdImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getMdImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getMdFallback(name)}</span>
}
