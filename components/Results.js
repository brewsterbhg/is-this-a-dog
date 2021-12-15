import Image from 'next/image'

import { checkBreedsAndConfidence } from '@/utils/results'
import LoadingDog from '@/assets/loading-dog.gif'

const Results = ({ results, score, classificationRunning }) => {
  if (classificationRunning) {
    return <Image src={LoadingDog} alt="animation of dog running" height={60} width={60} />
  }

  return (
    <>
      <h2 className="px-8 mt-6 text-xl text-orange-600 text-center">{score}</h2>
      {results && results.length > 0 ? (
        <table className="sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 mt-6">
          <thead className="bg-teal-500 sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 text-white">
            <th>Name</th>
            <th>Probability</th>
          </thead>
          <tbody className="text-gray-800 font-light">
            {results.map((result) => (
              <tr className="sm:table-row mb-2 sm:mb-0" key={result.className}>
                <td className="border-grey-light border hover:bg-gray-100 p-3">
                  {result.className}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3">
                  {result.probability}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </>
  )
}

export default Results
