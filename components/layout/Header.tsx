import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="p-4 border-2 border-rose-500">
      <div className="flex justify-between">
        <h1 className="text-red-900">제목</h1>
        <nav className="flex gap-4">
          <Link href="#">Home</Link>
          <Link href="#">Interview</Link>
        </nav>
      </div>
    </header>
  )
}
