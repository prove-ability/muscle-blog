import Link from 'next/link'
import React, { ReactNode, useEffect } from 'react'

import Footer from './footer'
import Header from './header'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  useEffect(() => {
    let lastScrollTop = 0
    const header = document.querySelector('header')
    const main = document.getElementById('main')
    const indexDom = document.querySelector('.snap-mandatory')

    // 헤더 숨기는 함수
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || indexDom?.scrollTop || 0
      if (scrollTop > lastScrollTop)
        header?.setAttribute('style', 'top: -60px;')
      else header?.setAttribute('style', 'top: 0px;')
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop // For Mobile or negative scrolling
    }

    // 스크롤 위로 올릴때
    const handleScrollEnd = (e: unknown) => {
      if ((e as WheelEvent).deltaY < 0) window?.scrollTo(0, 0)
    }

    indexDom?.addEventListener('scroll', handleScroll)
    main?.addEventListener('mousewheel', handleScrollEnd)
    return () => {
      indexDom?.removeEventListener('scroll', handleScroll)
      main?.removeEventListener('mousewheel', handleScrollEnd)
    }
  }, [])
  return (
    <div id="main" className="flex flex-col min-h-screen scrollbar-hide">
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
