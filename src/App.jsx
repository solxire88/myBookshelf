import { useState } from "react";
import { data } from "./newData.js";
import { data2 } from "./data2.js";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [cart, setCart] = useState(new Set([]));

  function addToCart(book, cart) {
    setCart(prev => new Set(prev.add(book)));
    console.log(cart)
  }

  function deleteFromCart(Dbook, cart){
    setCart(prev => { const newPrev = new Set(prev)
      // console.log(Dbook)
      console.log(newPrev.delete(Dbook))
      return newPrev
    })
    console.log(cart)
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Literature addToCartL={(e) => addToCart(e, cart)} cart={cart} deleteFromCartL={e => deleteFromCart(e, cart)} />
          }
        />
        <Route path="/Science" element={<Science addToCartL={(e) => addToCart(e, cart)} cart={cart} deleteFromCartL={e => deleteFromCart(e, cart)}/>} />
      </Routes>
    </>
  );
}

function Literature({ addToCartL, cart, deleteFromCartL }) {
  const [search, setSearch] = useState("");
  const [cardPopup, setCardPopup] = useState("");
  const [cartPopup, setCartPopup] = useState("");
  const [clickedCardName, setClickedCardName] = useState("");

  return (
    <>
      <div className="hide" id="literature">
        <div className="dot" id="up">
          <a href="#literature">
            <svg
              id="Arrow-Up--Streamline-Carbon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.5 -0.5 16 16"
              height="50"
              width="50"
            >
              <desc>Arrow Up Streamline Icon: https://streamlinehq.com</desc>
              <defs></defs>
              <path
                d="M7.5 1.875 2.8125 6.5625l0.6609375 0.6609375L7.03125 3.6703125 7.03125 13.125l0.9375 0 0 -9.4546875 3.5578125 3.553125L12.1875 6.5625 7.5 1.875z"
                stroke-width="1"
              ></path>
              <path
                id="_Transparent_Rectangle_"
                d="M0 0h15v15H0Z"
                fill="none"
                stroke-width="1"
              ></path>
            </svg>
          </a>
        </div>
        <div className="nav container">
          <h1 className="title">
             Literature <br></br> Bookshelf
          </h1>
          <div className="topSettings">
            <div className="dot">
              <Link to="/">L</Link>
            </div>
            <div className="dot2">
              <Link to="/science">S</Link>
            </div>
            
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <div className="dot3">
              <a
                href="."
                onClick={(e) => {
                  e.preventDefault();
                  setCartPopup(true);
                }}
              >
               <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" class="bi bi-cart4" viewBox="0 0 16 16" id="Cart4--Streamline-Bootstrap" height="30" width="30"><desc>Cart4 Streamline Icon: https://streamlinehq.com</desc><path d="M0.16 1.2053C0.16 0.9166 0.394 0.6826 0.6827 0.6826H2.2507C2.4906 0.6827 2.6996 0.846 2.7577 1.0788L3.181 2.7733H15.3175C15.6573 2.7734 15.9067 3.0927 15.8245 3.4224L14.2565 9.6945C14.1984 9.9273 13.9893 10.0906 13.7495 10.0907H4.3414C4.1015 10.0906 3.8924 9.9273 3.8344 9.6945L1.843 1.7279H0.6827C0.394 1.728 0.16 1.4939 0.16 1.2053M3.4424 3.8186L3.9651 5.9093H5.3867V3.8186ZM6.4321 3.8186V5.9093H8.5228V3.8186ZM9.5681 3.8186V5.9093H11.6588V3.8186ZM12.7041 3.8186V5.9093H14.1258L14.6485 3.8186ZM13.8645 6.9547H12.7041V9.0453H13.3418ZM11.6588 6.9547H9.5681V9.0453H11.6588ZM8.5227 6.9547H6.4321V9.0453H8.5228ZM5.3867 6.9547H4.2264L4.749 9.0453H5.3867ZM5.3867 12.1814C4.582 12.1814 4.0791 13.0525 4.4814 13.7494C4.6682 14.0728 5.0132 14.2721 5.3867 14.2721C6.1914 14.272 6.6944 13.4009 6.292 12.704C6.1052 12.3806 5.7602 12.1814 5.3867 12.1814M3.296 13.2267C3.2925 11.6173 5.0325 10.6076 6.4281 11.4093C7.0786 11.7829 7.479 12.4765 7.4774 13.2267C7.4739 14.8361 5.7294 15.8382 4.3374 15.0304C3.6942 14.6572 3.2976 13.9704 3.296 13.2267M12.7041 12.1814C11.8994 12.1814 11.3965 13.0525 11.7988 13.7494C11.9855 14.0728 12.3306 14.2721 12.7041 14.2721C13.5088 14.272 14.0118 13.4009 13.6094 12.704C13.4226 12.3806 13.0775 12.1814 12.7041 12.1814M10.6134 13.2267C10.6099 11.6173 12.3499 10.6076 13.7455 11.4093C14.396 11.7829 14.7964 12.4765 14.7948 13.2267C14.7913 14.8361 13.0468 15.8382 11.6548 15.0304C11.0116 14.6572 10.615 13.9704 10.6134 13.2267" stroke-width="1"></path></svg>

              </a>
            </div>
          </div>
        </div>
        <CartPopup
          deleteFromCart={e => {deleteFromCartL(e)}}
          cart={cart}
          trigger={cartPopup}
          setTrigger={(e) => {
            setCartPopup(false);
          }}
        ></CartPopup>
        <Popup
          addToCart={(word) => addToCartL(word)}
          trigger={cardPopup}
          setTrigger={(e) => {
            setCardPopup(false);
          }}
          card={clickedCardName}
        ></Popup>
        <div className="grid container">
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.Book.toLowerCase().includes(search);
            })
            .map((item) => {
              return (
                <Card
                  key={crypto.randomUUID()}
                  title={item.Book}
                  author={item.author}
                  price={item.price}
                  img_url={item.image}
                  popup={() => {
                    setCardPopup(true);
                  }}
                  outerData={(card) => {
                    setClickedCardName(card);
                  }}
                  descp={item.descp}
                  tags={item.tags}
                ></Card>
              );
            })}
        </div>
      </div>
    </>
  );
}

function Science({ addToCartL, cart, deleteFromCartL }) {
  const [search, setSearch] = useState("");
  const [cardPopup, setCardPopup] = useState("");
  const [cartPopup, setCartPopup] = useState("");
  const [clickedCardName, setClickedCardName] = useState("");



  return (
    <>
      <div id="science">
        <div className="dot" id="up">
          <a href="#science">
            <svg
              id="Arrow-Up--Streamline-Carbon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.5 -0.5 16 16"
              height="50"
              width="50"
            >
              <desc>Arrow Up Streamline Icon: https://streamlinehq.com</desc>
              <defs></defs>
              <path
                d="M7.5 1.875 2.8125 6.5625l0.6609375 0.6609375L7.03125 3.6703125 7.03125 13.125l0.9375 0 0 -9.4546875 3.5578125 3.553125L12.1875 6.5625 7.5 1.875z"
                stroke-width="1"
              ></path>
              <path
                id="_Transparent_Rectangle_"
                d="M0 0h15v15H0Z"
                fill="none"
                stroke-width="1"
              ></path>
            </svg>
          </a>
        </div>

        <div className="nav container">
          <h1 className="title">
            Science <br></br> Bookshelf
          </h1>
          <div className="topSettings">
            <div className="dot">
              <Link to="/">L</Link>
            </div>
            <div className="dot2">
              <Link to="/Science">S</Link>
            </div>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <div className="dot3">
              <a
                href="."
                onClick={(e) => {
                  e.preventDefault();
                  setCartPopup(true);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" class="bi bi-cart4" viewBox="0 0 16 16" id="Cart4--Streamline-Bootstrap" height="30" width="30"><desc>Cart4 Streamline Icon: https://streamlinehq.com</desc><path d="M0.16 1.2053C0.16 0.9166 0.394 0.6826 0.6827 0.6826H2.2507C2.4906 0.6827 2.6996 0.846 2.7577 1.0788L3.181 2.7733H15.3175C15.6573 2.7734 15.9067 3.0927 15.8245 3.4224L14.2565 9.6945C14.1984 9.9273 13.9893 10.0906 13.7495 10.0907H4.3414C4.1015 10.0906 3.8924 9.9273 3.8344 9.6945L1.843 1.7279H0.6827C0.394 1.728 0.16 1.4939 0.16 1.2053M3.4424 3.8186L3.9651 5.9093H5.3867V3.8186ZM6.4321 3.8186V5.9093H8.5228V3.8186ZM9.5681 3.8186V5.9093H11.6588V3.8186ZM12.7041 3.8186V5.9093H14.1258L14.6485 3.8186ZM13.8645 6.9547H12.7041V9.0453H13.3418ZM11.6588 6.9547H9.5681V9.0453H11.6588ZM8.5227 6.9547H6.4321V9.0453H8.5228ZM5.3867 6.9547H4.2264L4.749 9.0453H5.3867ZM5.3867 12.1814C4.582 12.1814 4.0791 13.0525 4.4814 13.7494C4.6682 14.0728 5.0132 14.2721 5.3867 14.2721C6.1914 14.272 6.6944 13.4009 6.292 12.704C6.1052 12.3806 5.7602 12.1814 5.3867 12.1814M3.296 13.2267C3.2925 11.6173 5.0325 10.6076 6.4281 11.4093C7.0786 11.7829 7.479 12.4765 7.4774 13.2267C7.4739 14.8361 5.7294 15.8382 4.3374 15.0304C3.6942 14.6572 3.2976 13.9704 3.296 13.2267M12.7041 12.1814C11.8994 12.1814 11.3965 13.0525 11.7988 13.7494C11.9855 14.0728 12.3306 14.2721 12.7041 14.2721C13.5088 14.272 14.0118 13.4009 13.6094 12.704C13.4226 12.3806 13.0775 12.1814 12.7041 12.1814M10.6134 13.2267C10.6099 11.6173 12.3499 10.6076 13.7455 11.4093C14.396 11.7829 14.7964 12.4765 14.7948 13.2267C14.7913 14.8361 13.0468 15.8382 11.6548 15.0304C11.0116 14.6572 10.615 13.9704 10.6134 13.2267" stroke-width="1"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <CartPopup
          deleteFromCart={e => {deleteFromCartL(e)}}
          cart={cart}
          trigger={cartPopup}
          setTrigger={(e) => {
            setCartPopup(false);
          }}
        ></CartPopup>
        <Popup
          addToCart={(word) => addToCartL(word)}
          trigger={cardPopup}
          setTrigger={(e) => {
            setCardPopup(false);
          }}
          card={clickedCardName}
        ></Popup>
        <div className="grid container">
          {data2
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.Book.toLowerCase().includes(search);
            })
            .map((item) => {
              return (
                <Card
                  key={crypto.randomUUID()}
                  title={item.Book}
                  author={item.author}
                  price={item.price}
                  img_url={item.image}
                  popup={() => {
                    setCardPopup(true);
                  }}
                  outerData={(card) => {
                    setClickedCardName(card);
                  }}
                  descp={item.descp}
                  tags={item.tags}
                ></Card>
              );
            })}
        </div>
      </div>
    </>
  );
}

function Card({
  title,
  author,
  price,
  img_url,
  popup,
  outerData,
  descp,
  tags,
}) {
  return (
    <div
      className="card"
      onClick={() => {
        popup();
        outerData({ title, descp, tags });
      }}
    >
      <div className="image">
        <img src={img_url}></img>
      </div>
      <div className="bookTitle">
        <a>{title}</a>
      </div>
      <div className="bookAuthor">
        <a>{author}</a>
      </div>
      <div className="bookPrice">
        <a>{price}</a>
      </div>
    </div>
  );
}

function Popup(props) {
  function buyButton() {
    document.querySelector("#descp").style.display = "none";
    document.querySelector("#orderForm").style.display = "block";
  }

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div
          className="popupClose"
          onClick={() => {
            props.setTrigger();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 48 48"
            id="Close-Sharp--Streamline-Ionic-Sharp.svg"
            height="25"
            width="25"
          >
            <desc>Close Sharp Streamline Icon: https://streamlinehq.com</desc>
            <path
              fill="#000000"
              d="M47.52 5.9501 42.0499 0.48 24 18.5299 5.9499 0.48 0.48 5.9501 18.5299 24 0.48 42.0499 5.9499 47.52 24 29.4701 42.0499 47.52l5.4701 -5.4701L29.4699 24 47.52 5.9501Z"
              stroke-width="1"
            ></path>
          </svg>
        </div>
        <form
          action="https://api.staticforms.xyz/submit"
          method="post"
          id="orderForm"
        >
          <input
            type="hidden"
            name="accessKey"
            value="23d277b2-5874-4237-90b5-4f380bad751f"
          />
          <label htmlFor="book">Book:</label>
          <input
            className="popupInput"
            type="text"
            name="$book"
            readOnly
            value={props.card.title}
          />
          <label htmlFor="fullName">Full Name:</label>
          <input
            className="popupInput"
            type="text"
            name="$full name"
            required
          />
          <label htmlFor="phone">Phone:</label>
          <input className="popupInput" type="text" name="$phone" required />
          <label htmlFor="phone">Adress:</label>
          <input className="popupInput" type="text" name="$adress" />
          <div className="submit">
            <input type="submit" value="Order" id="submit" />
          </div>
        </form>
        <div id="descp">
          <div id="descpTitle">{props.card.title}</div>
          <div id="descpText">
            <p>{props.card.descp}</p>
          </div>
          <div>
            <hr />
            <div className="descpTags">
              {props.card.tags.map((item) => {
                return <div className="tag">{item}</div>;
              })}
            </div>
          </div>
          <div className="submit">
            <button
              id="buyButton"
              onClick={() => {
                buyButton();
              }}
            >
              Buy Now
            </button>
            <button
              id="buyButton"
              onClick={() => {
                props.addToCart(props.card.title);
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

function CartPopup(props) {


  function buyButton() {
    document.querySelector("#cartItemsParent").style.display = "none";
    document.querySelector(".cartOrderButton").style.display = "none";

    document.querySelector("#orderForm2").style.display = "block";
    document.querySelector("#orderForm").style.display = "block";

  }

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div
          className="popupClose"
          onClick={() => {
            props.setTrigger();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 48 48"
            id="Close-Sharp--Streamline-Ionic-Sharp.svg"
            height="25"
            width="25"
          >
            <desc>Close Sharp Streamline Icon: https://streamlinehq.com</desc>
            <path
              fill="#000000"
              d="M47.52 5.9501 42.0499 0.48 24 18.5299 5.9499 0.48 0.48 5.9501 18.5299 24 0.48 42.0499 5.9499 47.52 24 29.4701 42.0499 47.52l5.4701 -5.4701L29.4699 24 47.52 5.9501Z"
              stroke-width="1"
            ></path>
          </svg>
        </div>
        <div id="cartItemsParent">
          {
            Array.from(props.cart).map((item) => {
            return <div className="cartItemChild">
            <div className="cartTitle">{item}</div>
            <div className="cartButton" onClick={() => {props.deleteFromCart(item); console.log(item)}}>
              <svg
                width="35"
                height="35"
                viewBox="-0.5 -0.5 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="Delete--Streamline-Outlined----Material-Symbols"
              >
                <g id="Delete--Streamline-Outlined----Material-Symbols">
                  <path
                    id="Vector"
                    d="M6.253125000000001 20.125C5.8578125 20.125 5.519425000000001 19.984220833333335 5.238010416666667 19.702614583333332C4.956404166666667 19.4212 4.815625000000001 19.082812500000003 4.815625000000001 18.6875V5.03125H3.8333333333333335V3.59375H8.3375V2.875H14.662500000000001V3.59375H19.166666666666668V5.03125H18.184375000000003V18.6875C18.184375000000003 19.070833333333333 18.040625 19.40625 17.753125 19.69375C17.465625000000003 19.981250000000003 17.130208333333336 20.125 16.746875000000003 20.125H6.253125000000001ZM16.746875000000003 5.03125H6.253125000000001V18.6875H16.746875000000003V5.03125ZM8.792708333333334 16.627083333333335H10.230208333333334V7.067708333333334H8.792708333333334V16.627083333333335ZM12.769791666666666 16.627083333333335H14.207291666666666V7.067708333333334H12.769791666666666V16.627083333333335Z"
                    fill="black"
                    stroke-width="1"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          })}
 
        </div>
        
        <div id="orderForm2">
          <form
          action="https://api.staticforms.xyz/submit"
          method="post"
          id="orderForm"
        >
          <input
            type="hidden"
            name="accessKey"
            value="23d277b2-5874-4237-90b5-4f380bad751f"
          />
          <label htmlFor="book">Book:</label>
          <input
            className="popupInput"
            type="text"
            name="$book"
            readOnly
            value={Array.from(props.cart)}
          />
          <label htmlFor="fullName">Full Name:</label>
          <input
            className="popupInput"
            type="text"
            name="$full name"
            required
          />
          <label htmlFor="phone">Phone:</label>
          <input className="popupInput" type="text" name="$phone" required />
          <label htmlFor="phone">Adress:</label>
          <input className="popupInput" type="text" name="$adress" />
          <div className="submit">
            <input type="submit" value="Order" id="submit" />
          </div>
          </form>
        </div>
        <div className="cartOrderButton">
          <button className="buyButton" onClick={() => {buyButton()}}>
            Order
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
