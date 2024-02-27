import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


import "./index.css"
import Header from "../Header"
import "../Footer"
import Footer from '../Footer';

const Home=()=>{


    const  FullName=localStorage.getItem("name")

    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img className='carosel-img' src="https://assets.owebest.com/files/Blogs/bg_img/3fb1a1ee2fbff71adf551002c19a4dcf/flutter.png" onDragStart={handleDragStart} role="presentation" />,
        <img className='carosel-img' src="https://tuhoclaptrinh.edu.vn/upload/post/2022/09/30/html-css-javascript-la-gi-20220930112510-837515.jpg" onDragStart={handleDragStart} role="presentation" />,
        <img className='carosel-img' src="https://hermes.dio.me/articles/cover/a4b5221c-5d38-4f82-830e-78a655b87de6.jpg" onDragStart={handleDragStart} role="presentation" />,
      ];

   return( 
    <>
    <Header/>
        <div className="home-container">
        <h1 className="greeting-msg"> Hi! {FullName}, Ready To Learn</h1>
       <div className="card">
       <AliceCarousel mouseTracking items={items} className="carosel-style" />
       <div className='new'>
        <img src="https://static.vecteezy.com/system/resources/previews/014/500/439/original/new-arrival-illustration-design-free-png.png" alt="new-arrival" className='new-arrival'/>
       </div>
       <p className='welcome-msg'>What did you want to learn today {FullName}?? </p>
       <Footer/>
       </div>
       

</div>
        
  
    </>



)
}
export default Home