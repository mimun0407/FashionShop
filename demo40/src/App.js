import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from '../src/page/Home.js'
import Login from '../src/component/Login.js'
import CustomerList from './component/CustomerList.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductDetail from './page/ProductDetail.js'
function App(){
    
    return(
       <div>
        <BrowserRouter>
        <Routes>
            <Route path='/MimunShop' element={ <Home />}></Route>
            <Route path='/' element={<Login />}></Route>
            <Route path='/CustomerList' element={<CustomerList />}></Route>
            <Route path='/Product' element={<ProductDetail />}></Route>
        </Routes>
        </BrowserRouter>
         
       </div>
    )
}
export default App