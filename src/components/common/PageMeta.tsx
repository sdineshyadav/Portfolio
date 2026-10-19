import { useEffect } from 'react'

type PageMetaProps = {
  title: string
  description: string
}

function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = `${title} | Sathu Dinesh`
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', `${title} | Sathu Dinesh`)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
  }, [description, title])

  return null
}

export default PageMeta
