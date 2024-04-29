import { Section } from "./components"
import landing from "./utils/landing"

export const App = () => {
  return (
    <div className='p-10'>
      {landing.map((e) => {
        return <Section title={e.section} data={e.data} />
      })}
    </div>
  )
}

export default App
