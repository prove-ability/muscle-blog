import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function HeaderContainer({ children }: Props) {
  return (
    <header className="fixed top-0 z-10 w-full p-4 transition-all duration-500 bg-opacity-0 border-2 border-rose-500">
      {children}
    </header>
  )
}
