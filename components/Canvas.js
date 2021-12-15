/* eslint-disable react/display-name */
import { useEffect, forwardRef } from 'react'

import { toImage } from '@/utils/toImage'

const Canvas = forwardRef(({ file }, canvasRef) => {
  async function drawImage(src) {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const imageElement = await toImage(src)

    canvas.width = imageElement.width
    canvas.height = imageElement.height
    ctx.drawImage(imageElement, 0, 0)
  }

  const processImage = useEffect(() => {
    if (!file || !canvasRef.current) {
      return
    }
    const src = URL.createObjectURL(file)
    drawImage(src)
    return () => URL.revokeObjectURL(src)
  })

  return (
    <canvas
      ref={canvasRef}
      className="w-full"
      style={{ maxHeight: 300, objectFit: 'contain' }}
    ></canvas>
  )
})

export default Canvas
