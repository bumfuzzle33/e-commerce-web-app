import './App.css';
//importing bulma framework css file
import './css framework(s)/bulma.css'
import { useState } from 'react';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/home/home'
import Product_page from './components/product_page/product_page';

function App() {
  const [category,set_category] = useState('all')
  let json_data = [{ 
    
    "name":"Potato", 
    "id":1, 
    "price":30, 
    "available":1, 
    
    "vendor":"Himachal Pvt Ltd", 
    
    "category":"Vegtables" 
    
    }, 
    
    { 
    
    "name":"Banana", 
    
    "id":2, 
    
    "price":50, 
    
    "available":1, 
    
    "category":"Fruits",
    
    "vendor": "Organic farms"
    
    }, 
    
    { 
    
    "name":"Drumsticks", 
    
    "id":3, 
    
    "price":20, 
    
    "available":0, 
    
    "category":"Vegetables", 
    
    "vendor":"Mallikarjuna farms"
    
    }, 
    
    { 
    
    "name":"Orange", 
    
    "id":4, 
    
    "price":25, 
    
    "available":1, 
    
    "vendor":"Nagpur farms", 
    
    "category":"Fruits" 
    
    } 
    
    ] 

  return (
    <div id="App_container">
      

      {/* routing paths */}
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Home
        category={category}
        set_category={set_category}
        json_data = {json_data}
      />}/>
      {
        json_data.map(obj=>(
          <Route exact path={`/product-id-${obj.id}`} element ={<Product_page
          product_name={obj.name}
          product_price={obj.price}
          product_available={obj.available}
          product_vendor={obj.vendor}
          product_category={obj.category}
          category={category}
          set_category={set_category}
          json_data={json_data}
          product_id={obj.id}
          
          />}/>
        ))
      }

      </Routes>
      
      </BrowserRouter>
    </div>
    
  );
}

export default App;
