import TaskCard from "./TaskCard"

interface cardProps {
  title: string
  image?: string
  avatars: string[]
  description: string
  tasks: string[]
  tags: string[]
}

const Card: React.FC<cardProps> = ({
  title,
  image,
  avatars,
  description,
  tasks,
  tags,
}) => {
  return (
    <div className='flex flex-col gap-2 border rounded-lg p-4 mb-2 bg-white'>
      {image ? (
        <img src={image} alt='image' />
      ) : (
        <>
          <div className='flex gap-x-1'>
            {avatars.map((e) => {
              return <img className='rounded-full' src={e} alt='Avatar' />
            })}
          </div>
          <h2 className='font-sf-compact-text font-semibold	text-base	leading-5'>
            {title}
          </h2>
          <h6 className='font-sf-compact-text font-normal	text-sm	leading-4'>
            {description}
          </h6>
          <div>
            {tasks.map((e) => {
              return <TaskCard task={e} />
            })}
          </div>
          <div className='flex gap-x-[10px]'>
            {tags.map((e) => {
              return (
                <button className='bg-slate-200 rounded-lg px-3 py-1'>
                  {e}
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default Card
