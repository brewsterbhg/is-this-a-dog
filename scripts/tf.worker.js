import * as mobilenet from '@tensorflow-models/mobilenet'
import '@tensorflow/tfjs'

let model

function checkLibraryLoaded(callbackFn, waitTimeMs = 30000, stepTimeMs = 100) {
  let timeSpentMs = 0
  const interval = setInterval(() => {
    const limitReached = timeSpentMs > waitTimeMs

    if (model || limitReached) {
      clearInterval(interval)
      return callbackFn(!limitReached)
    } else {
      timeSpentMs += stepTimeMs
    }
  }, stepTimeMs)
}

async function loadMobilenet() {
  try {
    model = await mobilenet.load()
  } catch (err) {
    console.error(err)
  }
}

async function classify({ msg, payload }) {
  try {
    const results = await model.classify(payload)
    postMessage({ msg, payload: results })
  } catch (err) {
    console.error(err)
  }
}

onmessage = function (e) {
  switch (e.data.msg) {
    case 'load': {
      loadMobilenet()
      checkLibraryLoaded(function (success) {
        if (!success) {
          throw new Error('Error loading TensorFlow')
        }
        postMessage({ msg: e.data.msg })
      })
      break
    }
    case 'classify': {
      return classify(e.data)
    }
    default:
      break
  }
}
