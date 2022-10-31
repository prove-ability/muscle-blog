import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function SnapArticle({ children }: Props) {
  return (
    <article className="flex items-center justify-center w-screen h-screen snap-start text-8xl">
      {children}
    </article>
  )
}
