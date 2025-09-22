import React from 'react'

const WomenCollection = (props) => {
     const {title, image1, image2, image3, image4, image5, image6,image7,image8} =props.ladiesFashion;
     const { price1, price2, price3, price4, price5,  price6 , price7,  price8} =props.ladiesFashion;

  return (
    <div id="womendiv">
      <div >
         <h1 style={{textAlign:"center"}}> {title}</h1>
      <div className="bannerBox">
        <img src="src/assets/Images/banner.webp" alt="" />
      </div>
      </div>

      <div >
        <div className="LadiesImages" >
          <div className='dis'> <img src={image1} alt={title}  />  <p> {price1}</p></div>
          <div className='dis'> <img src={image2} alt={title}  />  <p> {price2}</p></div>
          <div className='dis'> <img src={image3} alt={title}  /> <p> {price3}</p></div>
           <div className='dis'> <img src={image4} alt={title}  /> <p> {price4}</p></div>
       
        </div>

        <div  className="LadiesImages">
         <div className='dis'> <img src={image5} alt={title}  /> <p> {price5}</p></div>
          <div className='dis'> <img src={image6} alt={title}  /> <p> {price6}</p></div>
          <div className='dis'> <img src={image7} alt={title}  /> <p> {price7}</p></div>
           <div className='dis'> <img src={image8} alt={title}  /> <p> {price8}</p></div>
         </div>

     
      </div>
    </div>
  )
}

export default WomenCollection;

