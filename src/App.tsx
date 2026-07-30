import './App.css'
import Button from './components/Button'
import { Search } from 'lucide-react'

function App() {

  return (
    <>
      <h1>Home Page</h1>
      <Button text="Search Carpark Page" route="/search_carpark/welcome" lucide_icon={Search}/>
    </>
  )
}

export default App
