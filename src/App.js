import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Cart from "./Cart";
import {useState} from "react";

function App() {
  const [products,setProducts]=useState([
    {
      id: 1,
      name: 'Apple iPhone 14',
      price: 79900,
      image: 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662702995/Croma%20Assets/Communication/Mobiles/Images/261943_ffc6cl.png/mxw_2048,f_auto'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S22',
      price: 62999,
      image: 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662441829/Croma%20Assets/Communication/Mobiles/Images/248896_fbyfns.png/mxw_2048,f_auto'
    },
    {
      id: 3,
      name: 'OnePlus 10T',
      price: 49999,
      image: 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1659548049/Croma%20Assets/Communication/Mobiles/Images/259486_wof2fa.png/mxw_2048,f_auto'
    },
    {
      id: 4,
      name: 'Vivo X80',
      price: 55499,
      image: 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662439524/Croma%20Assets/Communication/Mobiles/Images/253153_uoaeya.png/mxw_2048,f_auto'
    },
    {
      id: 5,
      name: 'Oppo Find X5',
      price: 49990,
      image: 'https://fscl01.fonpit.de/devices/45/2245-w320h320.png'
    },
    {
      id: 6,
      name: 'Xiaomi 12 Pro',
      price: 54999,
      image: 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662438528/Croma%20Assets/Communication/Mobiles/Images/252195_nojq8m.png/mxw_2048,f_auto'
    },
    {
      id: 7,
      name: 'Realme GT 2',
      price: 34999,
      image: 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662436039/Croma%20Assets/Communication/Mobiles/Images/252890_ehov6v.png/mxw_2048,f_auto'
    },
    {
      id: 8,
      name: 'Redmi Note 11',
      price: 24999,
      image: 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662440619/Croma%20Assets/Communication/Mobiles/Images/248704_a06k66.png/mxw_2048,f_auto'
    },
    {
      id: 9,
      name: 'Nokia C21',
      price: 8999,
      image: 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664414686/Croma%20Assets/Communication/Mobiles/Images/258404_0_r4wdae.png/mxw_2048,f_auto'
    }
  ])

  const [cartItems,setCartItems] = useState([])

  let addToCart=(product)=>{
    setCartItems([...cartItems,product])
  }

  let removeFromCart=(cartItem)=>{
    const indexVal=cartItems.findIndex(obj=>obj.id===cartItem.id);
    cartItems.splice(indexVal,1);
    setCartItems([...cartItems])
  }
  
  return (
    <>
      <Header />
      <section className="py-5">
        <div className="container">
          <div className="row d-flex justify-content-around" >
            <div className="col-lg-8">
              <div className="row">
                {
                  products.map((product,index)=>{
                    return <Card key={index} product={product} addToCart={addToCart} cartItems={cartItems} />
                  })
                }
              </div>
            </div>
            <div className="col-lg-3">
              <h3>Cart</h3>
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
