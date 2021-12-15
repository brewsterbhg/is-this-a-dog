/* eslint-disable react/display-name */
import { useEffect, useCallback, forwardRef } from 'react'

import { toImage } from '@/utils/toImage'

const Canvas = forwardRef(({ file }, canvasRef) => {
  const drawImage = useCallback(
    async (src) => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      const imageElement = await toImage(src)

      canvas.width = imageElement.width
      canvas.height = imageElement.height
      ctx.drawImage(imageElement, 0, 0)
    },
    [canvasRef]
  )

  useEffect(() => {
    if (!file || !canvasRef.current) {
      return
    }
    const src = URL.createObjectURL(file)
    drawImage(src)
    return () => URL.revokeObjectURL(src)
  }, [file, canvasRef, drawImage])

  return (
    <canvas
      ref={canvasRef}
      className="w-full"
      style={{ maxHeight: 300, objectFit: 'contain' }}
    ></canvas>
  )
})

export default Canvas
