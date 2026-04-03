import {useState} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import Drawer from '../components/Drawer'

const Home = () => {
  const [showDrawer, setShowDrawer] = useState(false)
const [cards, setCards] = useState([
  { id: 1, name: "Test", desc: "Lorem Ipsum...", date: "14/07/2025" },
  { id: 2, name: "Test", desc: "Lorem Ipsum...", date: "14/07/2025" },
])
const [search, setSearch] = useState("")
const filteredCards = cards.filter(card =>
  card.name.toLowerCase().includes(search.toLowerCase())
)
const handleCreate = (newItem) => {
  const newCard = {
    id: Date.now(),
    name: newItem.name,
    desc: newItem.desc,
    date: new Date().toLocaleDateString()
  }

  setCards(prev => [newCard, ...prev])
}
  return (

    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-6">
          
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold">Knowledge Base</h1>

            <div className="flex space-x-3">
          <input
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="border px-3 py-1 rounded"
  placeholder="Search..."
/>

              <button
                onClick={() => setShowDrawer(true)}
                className="bg-primary text-white px-4 py-2 rounded"
              >
                + Create New
              </button>
            </div>
          </div>

         <div className="grid grid-cols-3 gap-6">
      {filteredCards.map(card => (
  <Card key={card.id} data={card} />
))}
          </div>
        </div>

        {showDrawer && (
        <Drawer
  onClose={() => setShowDrawer(false)}
  onCreate={handleCreate}
/>
        )}
      </div>
    </div>
  )
}

export default Home