import { useState, useEffect, useMemo, useRef } from 'react'
import * as mobilenet from '@tensorflow-models/mobilenet'
import * as tf from '@tensorflow/tfjs'

import tfService from '@/services/tf'

const useTensorflow = () => {
  const [modelLoaded, setModelLoaded] = useState(false)
  const [classificationRunning, setClassificationRunning] = useState(false)

  const loadTensorflowMobileNet = async () => {
    try {
      await tfService.load()
      setModelLoaded(true)
    } catch (err) {
      console.error('Error loading tensorflow mobilenet')
    }
  }

  const classify = async (img) => {
    try {
      setClassificationRunning(true)
      const { data } = await tfService.classify(img)
      setClassificationRunning(false)
      return data.payload
    } catch (err) {
      console.error('Error classifying image')
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
