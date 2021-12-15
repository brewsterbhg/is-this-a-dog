import { useState, useRef, useCallback } from 'react'

import Canvas from '@/components/Canvas'
import Dropzone from '@/components/Dropzone'
import Loading from '@/components/Loading'
import Results from '@/components/Results'
import Controls from '@/components/Controls'
import useClassification from '@/hooks/useClassification'
import { checkBreedsAndConfidence } from '@/utils/results'

const Upload = () => {
  const canvasRef = useRef(null)
  const [file, setFile] = useState(null)
  const [results, setResults] = useState([])
  const { modelLoaded, classify, classificationRunning } = useClassification()

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0])
  }, [])

  const clearFile = useCallback(() => {
    setFile(null)
    setResults([])
  }, [])

  const runClassification = async () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const classes = await classify(imageData)
    setResults(checkBreedsAndConfidence(classes))
  }

  if (!modelLoaded) {
    return <Loading />
  }

  return (
    <>
      {!file ? (
        <Dropzone onDrop={onDrop} />
      ) : (
        <>
          <Canvas ref={canvasRef} file={file} />
          <Controls
            onSubmit={runClassification}
            onCancel={clearFile}
            classificationRunning={classificationRunning}
          />
          <Results
            results={results.results}
            score={results.score}
            classificationRunning={classificationRunning}
          />
        </>
      )}
    </>
  )
}

export default Upload
