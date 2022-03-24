import React,{useState} from 'react'
import Button from './Button';
import Data from "./Data";
import "./Main.css"
function    Main() {
  
  
 const [liste,setListe]=useState(Data);
 function handleClick(id){
  let  tempListe=liste.filter((item)=>id !== item.id)
  setListe(tempListe)
   //filter ve map metodları bir liste geri döndürür.(return eder)
   //bunlardan geri dönüş alabilmem için bir değişkene eşitlemem gerekir
   //bu değişkenin type objedir listedir
  console.log(liste)


    }
    if(liste.length===0){
      return (
        <div>Önerimiz kalmamıştır</div>
      )
    }


  return (
   <div>{
    
      liste.map((item)=>{ 
      const {id,title,price,description:desc,img} =item;
      return (
          <div className="container" key={id}>
              <div><img className='image' src={img} alt="" /></div>
              <div className="middle">
                  <div className="title">{title}</div>
                  <div className="price">$ {price}</div>
              </div>
              <div className="desc">{desc}</div>
              <Button className="button" onClickPrp={()=>handleClick(id)}>Not Interested</Button>
          </div>
      )

  })}
</div>




    
    )
}

export default Main;