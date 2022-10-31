import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function SnapContainer({ children }: Props) {
  return (
    <section className="h-screen overflow-scroll snap-y snap-mandatory scrollbar-hide">
      {children}
    </section>
  )
}
