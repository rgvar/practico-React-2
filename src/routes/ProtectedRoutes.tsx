import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/screens/Home/Home'
import { Search } from '../components/screens/Search/Search'
import { Header } from '../components/ui/Header/Header'
import { DcHeroes } from '../components/screens/DcHeroes/DcHeroes'
import { MarvelHeroes } from '../components/screens/MarvelHeroes/MarvelHeroes'

export const ProtectedRoutes = () => {
  return (
    <>
        <Header />
        <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/dc-heroes" element={<DcHeroes />} />
            <Route path="/marvel-heroes" element={<MarvelHeroes />} />

        </Routes>
    </>
    
  )
}
