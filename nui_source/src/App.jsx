import { useEffect, useState } from 'react'
import Container from './components/Container'

import './index.css'

function App() {
  const [showContainerStores, setShowContainerStores] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    const handleNuiMessage = (event) => {
      if (event.data.type === "toggleStores") {
        setShowContainerStores(event.data.show);
      }

      if (event.data.action === "loadItems") {
        setItems(event.data.items.map((item, index) => ({
          id: index + 1,
          label: item.label,
          name: item.name,
          price: item.price,
          logo: item.image,
        })));
      }
    };

    window.addEventListener("message", handleNuiMessage)

    return () => window.removeEventListener("message", handleNuiMessage)
  })

  return (
    <>
    {showContainerStores && <Container items={items} />}
    </>
  )
}

export default App
