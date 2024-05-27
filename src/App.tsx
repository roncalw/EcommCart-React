import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { Documentation } from "./pages/Documentation"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {

  return (
    <ShoppingCartProvider>
    <BrowserRouter>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/About" element={<About />} />
        <Route path="/Documentation" element={<Documentation />} />
      </Routes>
    </Container>
    </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
