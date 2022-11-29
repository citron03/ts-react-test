import { useEffect, useState } from 'react'

const getSeconds = (time: number) => {
  const seconds = Number(time % 60)
  if (seconds < 10) {
    return '0' + String(seconds)
  } else {
    return String(seconds)
  }
}

let isValid = true;

const Timer = () => {
  const [time, setTime] = useState<number>(10) // 남은 시간 (단위: 초)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("check")
      if(isValid) {
        setTime((prev) => prev - 1)
      } else {
        clearInterval(timer)
      }
    }, 1000)
    if (time < 0) {
      clearInterval(timer)
      isValid = false
    }
    return () => clearInterval(timer)
  }, [time])
  useEffect(() => {
    if(time === 0) {
      console.log('Time OVER!')
      isValid = false
    }
  }, [time])
  return (
    <div>
      <h1>남은 시간</h1>
      <div>
        <span>{Math.floor(time / 60)} 분</span>
        <span> : </span>
        <span>{getSeconds(time)} 초</span>
      </div>
    </div>
  )
}

export default Timer
