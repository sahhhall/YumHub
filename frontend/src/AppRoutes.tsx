
import { Navigate,Route,Routes} from 'react-router-dom'
import  Layout  from "./layouts/Layout";
import HomePage from "./pages/HomePage";
export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout><HomePage></HomePage></Layout>} />
        <Route path='/user-profile' element={<span>user</span>} />
        <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  )
}
