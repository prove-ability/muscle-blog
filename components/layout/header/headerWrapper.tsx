import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function HeaderWrapper({ children }: Props) {
  return <div className="flex justify-between">{children}</div>
}
