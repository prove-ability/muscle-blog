import Link from 'next/link'
import { ReactNode } from 'react'

import Footer from './footer'
import Header from './header'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header>
        <Header.Wrapper>
          <Header.Title>제목</Header.Title>
          <Header.Nav>
            <Link href="#">Home</Link>
            <Link href="#">Interview</Link>
          </Header.Nav>
        </Header.Wrapper>
      </Header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
