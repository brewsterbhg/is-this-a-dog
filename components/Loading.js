import { useState, useRef } from 'react'
import Image from 'next/image'

import useInterval from '@/hooks/useInterval'
import { LOADING_MESSAGES, LOADING_INTERVAL } from '@/constants/index'
import LoadingDog from '@/assets/loading-dog.gif'

let index = getStartingIndex()

function getStartingIndex() {
  return Math.floor(Math.random() * LOADING_MESSAGES.length - 1 + 1)
}

function updateIndex() {
  index = index === LOADING_MESSAGES.length - 1 ? 0 : ++index
}

const Loading = () => {
  const [message, setMessage] = useState(() => LOADING_MESSAGES[index])

  useInterval(() => {
    updateIndex()
    setMessage(LOADING_MESSAGES[index])
  }, LOADING_INTERVAL)

  return (
    <div className="mt-12 mb-20 mx-auto w-100 text-center">
      <Image src={LoadingDog} alt="animation of dog running" height={80} width={80} />
      <h2 className="text-l text-gray-500 font-light mt-4">{message}</h2>
    </div>
  )
}

export default Loading
