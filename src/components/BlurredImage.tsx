import { blurhashToCssGradientString } from '@unpic/placeholder'
import { Image } from '@unpic/react'
import { useEffect, useState } from 'react'
import { getBlurhashForImage } from '@/lib/utils'

interface BlurredImageProps {
  src: string
  alt: string
}

export function BlurredImage({ src, alt }: BlurredImageProps) {
  const [placeholder, setPlaceholder] = useState<string | undefined>()

  useEffect(() => {
    getBlurhashForImage({ data: src }).then((blurhash) => {
      if (blurhash) {
        const gradient = blurhashToCssGradientString(blurhash)
        setPlaceholder(gradient)
      }
    })
  }, [src])

  return (
    <Image src={src} alt={alt} background={placeholder} layout="fullWidth" />
  )
}
