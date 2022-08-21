
import React, { useEffect, useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure, Input, Stack
  } from '@chakra-ui/react'
import axios from "axios";
  function Login() {
    const { isOpen: isFirstModalOpen , onOpen: onFirstModalOpen, onClose: onFirstModalClose } = useDisclosure()
    const { isOpen: isSecondModalOpen , onOpen: onSecondModalOpen, onClose: onSecondModalClose } = useDisclosure()
    
const [email,setemail]=useState("")
const [password,setpassword]=useState("")
const [email2,setemail2]=useState("")
const [password2,setpassword2]=useState("")
const [data,setData]=useState([])



    const handleclick=()=>{

      axios.post("http://localhost:8080/user",{
        Email:email,
        Password:password
        })      
    }
    
        
    function getdata(){
      axios.get("http://localhost:8080/user")
      .then((res)=>{
      setData(res.data)
      })
    }
    



    const handleclick2=()=>{
      getdata()
        
      data?.forEach((e)=>{
           if(e.Email === email2 && e.Password === password2){
             console.log("yes")
           }
      })

    }













    return (
      <>
      
        <Button onClick={onFirstModalOpen}>Sign up</Button>
  
        <Modal isOpen={isFirstModalOpen} onClose={onFirstModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               <Stack   justifyContent="center" alignItems="center">
              <Input onChange={(e)=>setemail(e.target.value)} value={email}  placeholder="Enter Email" ></Input>
              <Input onChange={(e)=>setpassword(e.target.value)} value={password} type="password" placeholder="Enter Password" ></Input>
              <Button onClick={handleclick}>Sign up</Button>
                  
              </Stack>
            
            </ModalBody>
  
            <ModalFooter>
              
              <Button colorScheme='red' mr={3} onClick={onFirstModalClose}>
                Close
              </Button>           
            </ModalFooter>
          </ModalContent>
        </Modal>
        



        
        <Button onClick={onSecondModalOpen}>Sign in</Button>
  
  <Modal isOpen={isSecondModalOpen} onClose={onSecondModalClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Modal Title</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
         <Stack   justifyContent="center" alignItems="center">
        <Input onChange={(e)=>setemail2(e.target.value)} value={email2}  placeholder="Enter Email" ></Input>
        <Input onChange={(e)=>setpassword2(e.target.value)} value={password2} type="password" placeholder="Enter Password" ></Input>
        <Button onClick={handleclick2}>Login</Button>
        </Stack>
      
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='red' mr={3} onClick={onSecondModalClose}>
          Close
        </Button>    
      </ModalFooter>
    </ModalContent>
  </Modal>







      </>
    )
  }
  export default Login;