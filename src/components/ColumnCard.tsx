import Card from "./Card"

type card = {
  card_title: string
  card_image?: string
  card_avatars: string[]
  card_description: string
  card_tasks: string[]
  card_tags: string[]
}

interface columnCardProps {
  title: String
  data: card[]
}
const ColumnCard: React.FC<columnCardProps> = ({ title, data }) => {
  return (
    <div className='p-3 '>
      <div className='bg-slate-400 px-3 py-1 rounded-[20px] mb-3 inline-block'>
        {title}
      </div>
      {data.map((e) => {
        return (
          <Card
            title={e.card_title}
            image={e.card_image}
            avatars={e.card_avatars}
            description={e.card_description}
            tasks={e.card_tasks}
            tags={e.card_tags}
          />
        )
      })}
    </div>
  )
}

export default ColumnCard
