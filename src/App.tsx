import { HashRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import DetailPage from "./pages/DetailPage/DetailPage"
import Page404 from "./components/Page404/Page404"
import 'react-loading-skeleton/dist/skeleton.css'
import Layout from "./components/Layout/Layout"
import CountryProvider from "./context/CountryProvider"

function App() {

  return (
    <>
      <CountryProvider>
        <HashRouter>
          <Routes>
            <Route element={<Layout />} >
              <Route path="/" element={<HomePage />} />
              <Route path="/country/:name" element={<DetailPage />} />
              <Route path="*" element={<Page404 />} /></Route>
          </Routes>
        </HashRouter>
      </CountryProvider>
    </>
  )
}

export default App
