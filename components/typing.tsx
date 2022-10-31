import React from 'react'

interface Props {
  className?: string
  // 글자 모음
  letters: string[]
  // 글자 입력 속도
  speed?: number
  // 반복
  loop?: boolean
}

export default function Typing({
  className,
  letters,
  speed = 120,
  loop = false,
}: Props) {
  const textRef = React.useRef<HTMLSpanElement>(null)

  const lettersTmp = [...letters, 'tmp']
  let i = 0

  // 타이핑 효과
  const typing = async () => {
    const letter = lettersTmp[i].split('')

    while (letter.length) {
      await wait(speed)
      if (textRef.current) textRef.current.innerHTML += letter.shift()
    }

    // 잠시 대기
    await wait(1000)

    // 지우는 효과
    if (lettersTmp[i + 1]) remove()
  }

  // 글자 지우는 효과
  const remove = async () => {
    const letter = lettersTmp[i].split('')

    while (letter.length) {
      await wait(speed)

      letter.pop()
      if (textRef.current) textRef.current.innerHTML = letter.join('')
    }

    // loop 실행
    if (!lettersTmp[i + 2] && loop) i = 0
    else i++

    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    typing()
  }

  // 딜레이 기능 ( 마이크로초 )
  const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

  // 초기 실행
  setTimeout(typing, 300)
  return <span className={className} ref={textRef}></span>
}
