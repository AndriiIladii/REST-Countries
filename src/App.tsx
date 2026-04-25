import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import DetailPage from "./pages/DetailPage/DetailPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
