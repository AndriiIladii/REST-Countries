import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import DetailPage from "./pages/DetailPage/DetailPage"
import Page404 from "./components/Page404/Page404"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<DetailPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
