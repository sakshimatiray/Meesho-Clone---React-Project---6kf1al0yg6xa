import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../AllProducts";
import { useNavigate } from "react-router-dom";
import { increaseStep, removeFromCart } from "../../Redux/action";

export default function Cart() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let res = [];
  for (let i = 0; i < allProducts.length; i++) {
    if (cart.includes(allProducts[i].id)) {
      let { img, name, sprice, id } = allProducts[i];
      res.push({
        id,
        img,
        name,
       sprice,
        q: 1,
     
      });
    }
  }
  let [cartData, setCartData] = React.useState(res);
  let countHandler = (e, type) => {
    let newData = [...cartData];
    let ele = newData[+e.target.parentElement.id];
    if (type === "inc") {
      ele.q++;
      ele.sprice += ele.sprice;
    } else {
      if (ele.q === 1) return;
      ele.q--;
       ele.sprice -= ele.sprice;
    }

    setCartData(newData);
    console.log(newData);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(increaseStep());
    localStorage.setItem(
      "total",
      Math.round(cartData.reduce((acc, cur) => acc + cur.sprice, 0))
    );
    navigate("/checkout/address");
  };
  return (
    <main id="cart-main">
      <section>
        <h1>Order Summary</h1>
        <h2>
          Cart <span id="cart-line">| </span>
          <span id="total-items">{cartData.length} Items</span>
        </h2>
        {cartData.map((i, index) => (
          <div key={index} id={i.id}>
            <img src={i.img} alt="" />
            <h3>{i.name}</h3>
          <h5>
              <span>₹{i.sprice}</span>
            </h5>
            <p>Delivery between APRIL 13 - APRIL 15</p>
            <div id={index}>
              <p>Quantity: </p>
              <button onClick={(e) => countHandler(e, "dec")}>-</button>
              <p>{i.q}</p>
              <button onClick={(e) => countHandler(e, "inc")}>+</button>
            </div>
            <button
              id={i.id}
              onClick={() => {
                let newData = [...cartData];
                newData.splice(index, 1);
                setCartData(newData);
                dispatch(removeFromCart(i.id));
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </section>
      <section>
     
        <div id="payment-details">
          <p>PAYMENT DETAILS</p>
       
          <p>
            Total Amount:{" "}
            <span>
              Rs.
              {cartData.reduce((acc, cur) => acc + cur.sprice, 0)}
            </span>
          </p>
         
          <button onClick={handleClick}>
            PROCEED TO PAY Rs.{" "}
            {Math.round(
              cartData.reduce((acc, cur) => acc + cur.sprice, 0) 
            )}
          </button>
        </div>
        <div>
          <p style={{ fontSize: "11px", lineHeight: "145%", color: "#888" }}>
            Meesho is a technology platform to facilitate transaction of
            business. The products and services are offered for sale by the
            sellers. The user authorizes the delivery personnel to be his agent
            for delivery of the goods. For details read{" "}
            <span>Terms &amp; Condition.</span>
          </p>
        </div>
      </section>
    </main>
  );
}
