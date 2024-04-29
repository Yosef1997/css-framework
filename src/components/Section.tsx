import { ColumnCard } from "../components"

type card = {
  card_avatars: string[]
  card_image?: string
  card_title: string
  card_description: string
  card_tasks: string[]
  card_tags: string[]
}

type columnCard = {
  title: String
  data: card[]
}

interface sectionProps {
  title: string
  data: columnCard[]
}

const Section: React.FC<sectionProps> = ({ title, data }) => {
  return (
    <div className='mb-5'>
      <h1 className='font-bold text-[32px] "sf-compact-text" mb-2'>{title}</h1>
      <p className='font-normal text-sm "sf-compact-text" mb-6'>
        A board to keep track of personal tasks.
      </p>
      <div className='grid grid-cols-4 p-2 bg-slate-200 rounded-xl'>
        {data.map((e) => {
          return <ColumnCard title={e.title} data={e.data} />
        })}
      </div>
    </div>
  )
}

export default Section
