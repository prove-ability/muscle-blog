import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function HeaderNav({ children }: Props) {
  return <nav className="flex gap-4">{children}</nav>
}
