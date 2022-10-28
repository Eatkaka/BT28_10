import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavFood({listData}) {
  return (

    <div>
     
      <Navbar bg="light" variant="light">
        <Container>
            {
                listData&& listData?.map((item,index)=>{
                    console.log(item)
                    return(
                        <>
                        
          <Nav className="me-auto">
            <Nav.Link href="#home">{item.name}</Nav.Link>
          </Nav>
                        </>
                    )
                })
            }
        
        </Container>
      </Navbar>

    </div>
  )
}
