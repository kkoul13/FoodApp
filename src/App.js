import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import { Cart } from "./components/Cart/Cart";
import { useState } from "react";
import { CartProvider } from "./components/store/CartProvider";

function App() {

  const [showCart , setShowCart] = useState(false);

  function showCartHandler(){
    return setShowCart(!showCart)
  
  }
  
  return (
    <CartProvider>
    { showCart && <Cart onClose={showCartHandler}/>}
    <Header onClick={showCartHandler}/>
    <Meals/>
    </CartProvider>
    
  );
}

export default App;
