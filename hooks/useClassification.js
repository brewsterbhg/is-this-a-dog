import { useState, useEffect, useMemo, useRef } from 'react'
import * as mobilenet from '@tensorflow-models/mobilenet'
import * as tf from '@tensorflow/tfjs'

import tfService from '@/services/tf'

const useTensorflow = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  const loadTensorflowMobileNet = async () => {
    try {
      await tfService.load()
      setIsLoaded(true)
    } catch (err) {
      console.error('Error loading tensorflow mobilenet')
    }
  }

  const classify = async (img) => {
    try {
      const { data } = await tfService.classify(img)
      return data.payload
    } catch (err) {
      console.error('Error classifying image')
    }
  }

  useEffect(() => {
    loadTensorflowMobileNet()
  }, [])

  return {
    isLoaded,
    classify,
  }
}

export default useTensorflow
