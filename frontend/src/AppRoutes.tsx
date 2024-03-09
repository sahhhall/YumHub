
import { Navigate,Route,Routes} from 'react-router-dom'
import  Layout  from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import { UserProfilePage } from './pages/UserProfilePage';
import { PrivateRoute } from './routes/PrivateRoute';
export const AppRoutes = () => {
  return (
    <>
  
    <Routes>
       
        <Route path='/' element={<Layout><HomePage></HomePage></Layout>} />
        <Route  element={<PrivateRoute />} >
        <Route path='/user/:activepage' element={<Layout> 
          <UserProfilePage />
           </Layout>} />
        </Route>
        
        <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
    </>
  )
}
