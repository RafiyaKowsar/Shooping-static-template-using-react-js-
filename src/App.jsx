import React ,{useState} from "react";
import './App.css';


import Navbar from "./Components/Navbar.jsx";
import MenCollection from "./Components/MenCollection";
import Form from "./Components/Form.jsx"
import WomenCollection from "./Components/WomenCollection";
import KidCollection from "./Components/KidCollection.jsx";
import Footer  from "./Components/Footer.jsx";
import Shop from "./Components/Shop.jsx";
import { ladies, men, kid } from './data.js';
import { BrowserRouter, Routes, Route, } from "react-router-dom";


 
 


function App (){
    const [ladiesFashion, setLadiesFashion] = useState( ladies);
   
    console.log(ladies);
   
    const[menFashion, setMenFashion] =useState(men);
      console.log(men);
    const[kidFashion, setKidFashion] =useState(kid);
      console.log(kid);

      

    return(
        <>
 <BrowserRouter>
  <Navbar/>
  


   


   <Routes>
    {/* <Route path="/" element={<HomePage/>}/> */}
     <Route path="/" element={
       <>
       < Shop/>
         <WomenCollection ladiesFashion={ladiesFashion} />
         <MenCollection menFashion={menFashion} />
         <KidCollection kidFashion={kidFashion} />
         <Form/>
      
      </>
    }/> 
     
     <Route path="/Shop" element={
       <>
       < Shop/>
         <WomenCollection ladiesFashion={ladiesFashion} />
         <MenCollection menFashion={menFashion} />
         <KidCollection kidFashion={kidFashion} />
         <Form/>
      
      </>
    }/>
     <Route path="/women" element={<WomenCollection ladiesFashion={ladiesFashion} />} />
     <Route path="/men" element={<MenCollection menFashion={menFashion} />} />
     <Route path="/kids" element={<KidCollection kidFashion={kidFashion} />} />
     <Route path="/signin" element={<Form />}/>
   </Routes>
   <Footer />
 </BrowserRouter>
        
        



        
        
        </>
    )
}

export default App;