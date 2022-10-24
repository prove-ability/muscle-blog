import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function HeaderContainer({ children }: Props) {
  return <header className="p-4 border-2 border-rose-500">{children}</header>
}
