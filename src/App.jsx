import { useState } from 'react'

export default function App() {

  return (
    <>
      <Literature></Literature>
      <Science ></Science>
    </>
  )
}



function Literature(){
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

  return (
    <>
    <div id='literature'>
      <div className='nav container'>
        <h1 className='title'>The Literature <br></br> Bookshelf</h1>
        <div className='topSettings'>
          <div className='dot'><a href='#' onClick={() => {turnLiterature()}}>L</a></div>
          <div className='dot2'><a href='#' onClick={()=>{turnScience()}}>S</a></div>
          <input type='text'></input>
        </div>
      </div>
      <div className='grid container'>
        <Card title='Discourses And Selected writings' author='Epictetus' price='1200 DA' img_url='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696978285i/130548586.jpg'></Card>
        <Card title='Discourses And Selected writings' author='Epictetus' price='1200 DA' img_url='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696978285i/130548586.jpg'></Card>
        <Card title='Discourses And Selected writings' author='Epictetus' price='1200 DA' img_url='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696978285i/130548586.jpg'></Card>
        <Card title='Discourses And Selected writings' author='Epictetus' price='1200 DA' img_url='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696978285i/130548586.jpg'></Card>
        <Card title='Discourses And Selected writings' author='Epictetus' price='1200 DA' img_url='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696978285i/130548586.jpg'></Card>
        <Card title='Discourses And Selected writings' author='Epictetus' price='1200 DA' img_url='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696978285i/130548586.jpg'></Card>

      </div>
    </div>

    </>
  )
}




function Science(){

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
          <input type='text'></input>
        </div>
      </div>
      <div className='grid container'>
        <Card title='Discourses And Selected writings' author='Epictetus' price='1200 DA' img_url='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696978285i/130548586.jpg'></Card>
        <Card title='Discourses And Selected writings' author='Epictetus' price='1200 DA' img_url='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696978285i/130548586.jpg'></Card>
        <Card title='Discourses And Selected writings' author='Epictetus' price='1200 DA' img_url='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696978285i/130548586.jpg'></Card>
        <Card title='Discourses And Selected writings' author='Epictetus' price='1200 DA' img_url='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696978285i/130548586.jpg'></Card>
        <Card title='Discourses And Selected writings' author='Epictetus' price='1200 DA' img_url='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696978285i/130548586.jpg'></Card>
        <Card title='Discourses And Selected writings' author='Epictetus' price='1200 DA' img_url='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696978285i/130548586.jpg'></Card>
      </div>
    </div>
    </>
  )
}


function Card({title, author, price, img_url}){
  
  return(
    <div className='card'>
      <div className='image'><img src={img_url}></img></div>
      <h2>{title}</h2>
      <p>{author}</p>
      <h3>{price}</h3>
    </div>
  )

}