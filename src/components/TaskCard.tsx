import { RiCheckboxBlankCircleFill } from "react-icons/ri"
import { FaCheck } from "react-icons/fa6"
import { useState } from "react"

interface taskCardProps {
  task: string
}

const TaskCard: React.FC<taskCardProps> = ({ task }) => {
  const [isChecked, SetChecked] = useState(false)
  return (
    <div className='flex items-center	gap-x-2'>
      <button
        onClick={() => SetChecked(!isChecked)}
        className='bg-slate-200 w-4 h-4 flex items-center justify-center	rounded'
      >
        {isChecked ? (
          <FaCheck size={9} />
        ) : (
          <RiCheckboxBlankCircleFill size={4} />
        )}
      </button>
      <p>{task}</p>
    </div>
  )
}

export default TaskCard
