import Button from '@/components/Button'
import DogIcon from '@/assets/dog-icon.svg'
import CancelIcon from '@/assets/cancel-icon.svg'

const Controls = ({ onSubmit, onCancel }) => {
  return (
    <div className="flex space-x-2 mt-6">
      <Button
        onClick={onSubmit}
        className="bg-orange-300 hover:bg-orange-400 text-sm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center border border-orange-400"
        icon={DogIcon}
        text="Check"
      />
      <Button
        onClick={onCancel}
        className="bg-red-300 hover:bg-red-400 text-sm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center border border-red-400"
        icon={CancelIcon}
        text="Cancel"
      />
    </div>
  )
}

export default Controls
