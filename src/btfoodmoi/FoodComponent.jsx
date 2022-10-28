import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

export default function FoodComponent({ listData }) {
  console.log("listdata", listData);
  const [added,setAdded] = useState(false)
  const [kiemtra,setKiemTra]=useState(false)
  const [qualityPro,setQualityPro] = useState(1)
  const handleClick = () =>{
    
     console.log(added)
     setAdded(!added)
  }
const CountUp = () =>{
setQualityPro(pre=>pre=qualityPro+1)
}
const CountDown = () =>{
 setQualityPro(pre=>pre=qualityPro-1)
 if(qualityPro===0){
  setQualityPro(0)
  console.log(qualityPro)
 
 return setKiemTra(true)
 }else{
  
  setKiemTra(false)
 }
}

  return (
    <div style={{display : "flex",flexWrap : "wrap", justtifyContent:"space-between"}}>
      {listData?.length > 0 &&
        listData?.map((item, index) => {
          return item?.products?.data?.map((itempro, index) => {
            return (
              <>
                <Card key={index} style={{margin:"100px", width: "300px",height: "300px" }}>
                  <Card.Img variant="top" src={itempro.imagePath} />
                  <Card.Body>
                    <Card.Title>{itempro.name}</Card.Title>
                    <Card.Text>
                      {itempro.price} {itempro.currency}
                    </Card.Text>

                    {
                     (added===false)?(
                        <Button
                    onClick={()=>handleClick()}
                     variant="primary"
                    >Add To Card</Button>
                      ):(
                        <Button>
                      {
                     kiemtra ?( <Button onClick={()=>handleClick() }>delete</Button>):
                     ( <Button onClick={()=>CountDown()}>-</Button>)
                      }

                <p>{qualityPro}</p>  
                  <Button onClick={()=>CountUp()}>+</Button>
                    </Button>
                      )
                    }




                    
                  </Card.Body>
                </Card>
              </>
            );
          });
        })}
    </div>
  );
}
