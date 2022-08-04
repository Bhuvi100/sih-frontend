import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  ButtonGroup
} from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Nav } from "../components/Navbar";
import React from 'react'

//import { useDisclosure } from '@chakra-ui/react/dist/declarations/src';

export default function Debug() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('md')
  const [img,setImg] = React.useState('')
  

  const handleSizeClick = (e) => {
    setSize('full')
    onOpen()
    //setImg(e.target.src)
    console.log(img)
  }

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
  const images = ["https://www.youtube.com/embed/sMt2uhhwh1g","https://www.youtube.com/embed/sMt2uhhwh1g","https://www.youtube.com/embed/sMt2uhhwh1g"]

  return (
    <>
      
      <Nav />
        
        <>
        <Grid
  templateAreas={`"header header header"`}
  gridTemplateRows={'1fr 1fr 1fr'}
  gridTemplateColumns={'1fr 1fr 1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem  bg='orange.300' area={'header'}>
  <div onClick={() => handleSizeClick()}>
          
          <iframe onClick={(e) => setImg(e.target.src)}  width="500" height="315" src= "https://www.youtube.com/embed/sMt2uhhwh1g" title="YouTube video player" frameborder="0" allowfullscreen ></iframe>
          
         
          </div>
  </GridItem>
  <GridItem pl='1' bg='pink.300' area={'header'}>
  <div onClick={() => handleSizeClick()}>
          
        <iframe onClick={(e) => setImg(e.target.src)}  width="500" height="315" src= "https://www.youtube.com/embed/sMt2uhhwh1g" title="YouTube video player" frameborder="0" allowfullscreen ></iframe>
        
       
        </div>
  </GridItem>
  <GridItem pl='1' bg='green.300' area={'header'}>
  <div onClick={() => handleSizeClick()}>
          
        <iframe onClick={(e) => setImg(e.target.src)}  width="500" height="315" src= "https://www.youtube.com/embed/sMt2uhhwh1g" title="YouTube video player" frameborder="0" allowfullscreen ></iframe>
        
       
        </div>
  </GridItem>

  <GridItem pl='2' bg='green.300' area={'header'}>
  <div onClick={() => handleSizeClick()}>
          
        <iframe onClick={(e) => setImg(e.target.src)}  width="500" height="315" src= "https://www.youtube.com/embed/sMt2uhhwh1g" title="YouTube video player" frameborder="0" allowfullscreen ></iframe>
        
       
        </div>
  </GridItem>

  <GridItem pl='2' bg='green.300' area={'header'}>
  <div onClick={() => handleSizeClick()}>
          
        <iframe onClick={(e) => setImg(e.target.src)}  width="500" height="315" src= "https://www.youtube.com/embed/sMt2uhhwh1g" title="YouTube video player" frameborder="0" allowfullscreen ></iframe>
        
       
        </div>
  </GridItem>

  <GridItem pl='2' bg='green.300' area={'header'}>
  <div onClick={() => handleSizeClick()}>
          
        <iframe onClick={(e) => setImg(e.target.src)}  width="500" height="315" src= "https://www.youtube.com/embed/sMt2uhhwh1g" title="YouTube video player" frameborder="0" allowfullscreen ></iframe>
        
       
        </div>
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'header'}>
  <div onClick={() => handleSizeClick()}>
          
          <iframe onClick={(e) => setImg(e.target.src)}  width="500" height="315" src= "https://www.youtube.com/embed/sMt2uhhwh1g" title="YouTube video player" frameborder="0" allowfullscreen ></iframe>
          
         
          </div>
  </GridItem>
</Grid>

        
        </>
     

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody style = {{display : 'flex', alignItems : 'center', justifyContent : 'center' , height : '100vh'}}>
            <h1></h1>
           
          <iframe width="560" height="315" src= "https://www.youtube.com/embed/sMt2uhhwh1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
          
             
          </ModalBody>
          <ModalFooter>
            <Button color ='blue' variant = 'solid' onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


