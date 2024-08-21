import { useState } from 'react'
import {data} from './data.js'
import {data2} from './data2.js'

export default function App() {
  
  return (
    <>
      <Literature ></Literature>
      <Science ></Science>
    </>
  )
}



function Literature(){
  const [search, setSearch] = useState('')
  const [cardPopup, setCardPopup] = useState('')
  const [clickedCardName, setClickedCardName] = useState('')


  function turnScience(){
    document.body.style.backgroundColor = '#1e1e1e'
    document.querySelector('#science').style.display = 'block';
    document.querySelector('#literature').style.display = 'none';
  }
  function turnLiterature(){
    document.body.style.backgroundColor = '#EDE8D0'
    document.querySelector('#science').style.display = 'none';
    document.querySelector('#literature').style.display = 'block';
  }
  
  console.log(clickedCardName.title)

  return (
    <>
    <div className='hide' id='literature'>
    <div className="dot" id='up'><a href="#literature"><img src="../assets/icons/Arrow-Up--Streamline-Carbon.svg" height='50' width='50'/></a></div>
      <div className='nav container'>
        <h1 className='title'>The Literature <br></br> Bookshelf</h1>
        <div className='topSettings'>
          <div className='dot'><a href='#' onClick={() => {turnLiterature()}}>L</a></div>
          <div className='dot2'><a href='#' onClick={()=>{turnScience()}}>S</a></div>
          <input type='text' onChange={(e) => setSearch(e.target.value)}></input>
        </div>
      </div>
      <Popup trigger={cardPopup} setTrigger={(e) => {setCardPopup(false)}} card={clickedCardName}>
      </Popup>
      <div className='grid container'>
      {data.filter((item) => {
        return search.toLowerCase() === '' ? item : item.Book.toLowerCase().includes(search)
      }).map((item) => {
          return <Card key={item.price} title = {item.Book} author={item.author} price={item.price} img_url={item.image} popup={() => {setCardPopup(true)}} outerData={(card) => {setClickedCardName(card)}}></Card>
        })}
      </div>
    </div>

    </>
  )
}




function Science(){
  const [search, setSearch] = useState('')
  const [cardPopup, setCardPopup] = useState('')
  const [clickedCardName, setClickedCardName] = useState('')

  function turnLiterature(){
    document.body.style.backgroundColor = '#EDE8D0'
    document.querySelector('#science').style.display = 'none';
    document.querySelector('#literature').style.display = 'block';
  }
  function turnScience(){
    document.body.style.backgroundColor = '#1e1e1e'
    document.querySelector('#science').style.display = 'block';
    document.querySelector('#literature').style.display = 'none';
  }

  return (
    <>
    <div id='science'>
      <div className='nav container'>
        <h1 className='title'>The Science <br></br> Bookshelf</h1>
        <div className='topSettings'>
          <div className='dot'><a href='#' onClick={() => turnLiterature()}>L</a></div>
          <div className='dot2'><a href='#' onClick={()=>turnScience()}>S</a></div>
          <input type='text' onChange={(e) => setSearch(e.target.value)}></input>
        </div>
      </div>
      <Popup trigger={cardPopup} setTrigger={(e) => {setCardPopup(false)}} card={clickedCardName}>
      </Popup>
      <div className='grid container'>
      <div className='grid container'>
      {data2.filter((item) => {
        return search.toLowerCase() === '' ? item : item.Book.toLowerCase().includes(search)
      }).map((item) => {
          return <Card key={item.price} title = {item.Book} author={item.author} price={item.price} img_url={item.image} popup={() => {setCardPopup(true)}} outerData={(card) => {setClickedCardName(card)}}></Card>
        })}
      </div>        
      </div>
    </div>
    </>
  )
}



function Card({title, author, price, img_url, popup, outerData}){

  
  return(
    <div className='card' onClick={() => {
      popup()
      outerData({title})
    }}>
      <div className='image'><img src={img_url}></img></div>
      <h2><a>{title}</a></h2>
      <p><a>{author}</a></p>
      <h3><a>{price}</a></h3>
    </div>
  )

}


function Popup(props){
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="popupClose" onClick={() => {props.setTrigger()}}>
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" id="Close-Sharp--Streamline-Ionic-Sharp.svg" height="25" width="25"><desc>Close Sharp Streamline Icon: https://streamlinehq.com</desc><path fill="#000000" d="M47.52 5.9501 42.0499 0.48 24 18.5299 5.9499 0.48 0.48 5.9501 18.5299 24 0.48 42.0499 5.9499 47.52 24 29.4701 42.0499 47.52l5.4701 -5.4701L29.4699 24 47.52 5.9501Z" stroke-width="1"></path></svg>
        </div>
        <form action='https://api.staticforms.xyz/submit' method='post'>
          <input type="hidden" name="accessKey" value='23d277b2-5874-4237-90b5-4f380bad751f' />
          <label htmlFor="book">Book:</label>
          <input className='popupInput' type="text" name="$book" readOnly value={props.card.title} />
          <label htmlFor="fullName">Full Name:</label>
          <input className='popupInput' type="text" name="$full name" required />
          <label htmlFor="phone">Phone:</label>
          <input className='popupInput' type="text" name="$phone" required/>
          <label htmlFor="phone">Adress:</label>
          <input className='popupInput' type="text" name="$adress"/>
          <div className="submit"><input type="submit" value="Submit" id='submit'/></div>
        </form>
      </div>
    </div>
  ) : "";
}