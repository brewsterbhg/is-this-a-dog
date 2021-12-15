import Button from '@/components/Button'
import DogIcon from '@/assets/dog-icon.svg'
import CancelIcon from '@/assets/cancel-icon.svg'

const Controls = ({ onSubmit, onCancel, classificationRunning }) => {
  return (
    <div className="flex space-x-2 mt-6">
      <Button
        onClick={onSubmit}
        className="bg-teal-300 hover:bg-teal-400 text-sm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        icon={DogIcon}
        text="Check"
        disabled={classificationRunning}
      />
      <Button
        onClick={onCancel}
        className="bg-red-300 hover:bg-red-400 text-sm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        icon={CancelIcon}
        text="Clear"
        disabled={classificationRunning}
      />
    </div>
  )
}

export default Controls
