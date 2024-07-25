import { Route, Routes } from "react-router-dom"
import Hero from "./pages/Hero"
import Detail from "./pages/Detail"
import Update from "./pages/Update"
import { RestuarantsContextProvider } from "./provider/restuarantProvider"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/restaurants/:id" element={<Detail />}/>
        <Route path="/restaurants/:id/update" element={<Update />}/>
      </Routes>
    </>
  )
}

export default App