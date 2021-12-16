import breeds from '@/data/breeds'
import { RESULT_MESSAGES } from '@/constants/index'

const cleanResult = (result) =>
  result.className.includes(',') ? { ...result, className: result.className.split(',')[0] } : result
const checkBreed = (result) => breeds.has(result.className)

const getScoreByConfidence = (n) => {
  if (!n || n <= 0.1) return RESULT_MESSAGES.NO_SCORE
  else if (n > 0.1 && n <= 0.4) return RESULT_MESSAGES.BAD_SCORE
  else if (n > 0.5 && n <= 0.6) return RESULT_MESSAGES.LOW_SCORE
  else if (n > 0.6 && n <= 0.7) return RESULT_MESSAGES.NEUTRAL_SCORE
  else if (n > 0.7 && n <= 0.8) return RESULT_MESSAGES.GOOD_SCORE
  else if (n > 0.8 && n <= 0.9) return RESULT_MESSAGES.GREAT_SCORE
  else if (n > 0.9 && n <= 1.0) return RESULT_MESSAGES.PERFECT_SCORE
}

export const checkBreedsAndConfidence = (results) => {
  const cleanResults = results.map(cleanResult).filter(checkBreed)
  const confidence = cleanResults.reduce((acc, cur) => (acc += cur.probability), 0)

  return {
    score: getScoreByConfidence(confidence),
    results: cleanResults,
  }
}
