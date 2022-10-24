import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function HeaderTitle({ children }: Props) {
  return <h1 className="text-red-900">{children}</h1>
}
