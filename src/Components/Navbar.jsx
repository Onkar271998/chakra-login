import { Button, position } from "@chakra-ui/react";
import Login from "./Login";


function Navbar(){

    return(
        <>
        <div  style={{display:"flex", justifyContent:"space-between" }}>
        <div>
        <Button bg="#6369d2"  color="white" >4d</Button>
        </div>
    
        
        <div style={{ display:"flex" ,justifyContent:"flex-end",gap:"10px"}}>

        <div>{<Login/>}</div>
        <Button backgroundColor="#6369d2" color="white">post a job</Button>
        </div>
        </div>
        
        </>
    )
}
export default Navbar;