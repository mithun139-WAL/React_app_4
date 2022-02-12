// import logo from './logo.svg';
import { useState } from 'react';
import Ecommerce from './Ecommerce';
import AllProducts from './AllProducts';
import Categories from './Categories';
function App() {
  let [pid, setPid] = useState(1);

  return (
    <>
      <div>
        <div>
          <form onSubmit={(event)=>{
            event.preventDefault();
            setPid(event.target.productId.value);
          }}>
            <input type="number" style={{width:"500px",margin:"2px"}} name='productId' placeholder='Enter the Product Id' />
            <button><i class="fa fa-search"></i></button>
          </form>
        </div>
        <Categories></Categories>
        <Ecommerce pid={Number(pid)}></Ecommerce>
        <AllProducts></AllProducts>
        
      </div>
    </>
  );
}

export default App;
