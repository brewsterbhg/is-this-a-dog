import { useCallback, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const Dropzone = ({ onDrop }) => {
  const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
    accept: 'image/*',
    onDrop,
  })

  return (
    <div
      {...getRootProps({
        className: `text-center bg-gray-100
      ${isDragAccept && 'bg-green-100'}
      ${isDragReject && ' bg-red-100'}`,
      })}
    >
      <input {...getInputProps({ multiple: false })} />
      <div className="py-24 px-12">
        <div className="text-lg font-medium">Drop files here or click to upload.</div>
        <div className="text-gray-500 font-light">
          Don't worry, nothing is actually uploaded. I respect the privacy of your dog photos.
        </div>
      </div>
    </div>
  )
}

export default Dropzone
