import { useState, useEffect } from 'react'

import tfService from '@/services/tf'

const useTensorflow = () => {
  const [modelLoaded, setModelLoaded] = useState(false)
  const [classificationRunning, setClassificationRunning] = useState(false)

  const loadTensorflowMobileNet = async () => {
    try {
      await tfService.load()
      setModelLoaded(true)
    } catch (err) {
      console.error('Error loading tensorflow mobilenet', err)
    }
  }

  const classify = async (img) => {
    try {
      setClassificationRunning(true)
      const { data } = await tfService.classify(img)
      return data.payload
    } catch (err) {
      console.error('Error classifying image', err)
    } finally {
      setClassificationRunning(false)
    }
  }

  useEffect(() => {
    loadTensorflowMobileNet()
  }, [])

  return {
    modelLoaded,
    classify,
    classificationRunning,
  }
}

export default useTensorflow
