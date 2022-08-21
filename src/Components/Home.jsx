import { Button, Input } from "@chakra-ui/react";

function Home(){
    return(
        <>
        <div>

          <h1 style={{fontSize:"62px" ,fontWeight:"bold"}}>Find The Right</h1>
          <h1 style={{fontSize:"62px"}}>Four-Day Week job</h1>


          <Input placeholder="Type job title or keyword" width="50%" marginBottom="10px" marginTop="5%"></Input> <br/>
        

          <Button  backgroundColor="#6369d2" color="white">Remote</Button>
          <Button  marginLeft="10px" backgroundColor="#6369d2" color="white">Tech</Button>
          <Button marginLeft="10px" backgroundColor="#6369d2" color="white">Marketing</Button>

        
          



        </div>
        </>
    )
}

export default Home;