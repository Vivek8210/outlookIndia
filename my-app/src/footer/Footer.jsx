import  "./Footer.Module.css"

import React from 'react'
import {
    Box,
    Container,
 
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
  } from '@chakra-ui/react';
 import {  NavLink } from "react-router-dom";

const Footer = () => {
    const ListHeader = ({ children }: { children: ReactNode }) => {
        return (
          <Text fontWeight={'700'} fontSize={'1g'} mb={5} color={useColorModeValue('#C2C2C2', 'gray.200')}>
            {children}
          </Text>
        );
      };
   return (
    <Box
    bg={useColorModeValue('#000000', 'black.900')}
    color={useColorModeValue('gray', 'gray.200')} >
      
    <Container as={Stack} maxW={'6xl'} py={10}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8} marginLeft={"25px"}>
        <Stack align={'flex-start'}>
          <ListHeader>Main Stories</ListHeader>
          <NavLink to={'/'}>Maganize</NavLink>
          <Stack direction={'row'} align={'center'} spacing={2}>
            <NavLink to={'/'}>NATIONAL</NavLink>
            {/* <Tag
              size={'sm'}
              bg={useColorModeValue('green.300', 'green.800')}
              ml={2}
              color={'white'}>
              New
            </Tag> */}
          </Stack>
          <NavLink to={'/international'}>INTERNATIONAL</NavLink>
          <NavLink to={'/business'}>BUSINESS</NavLink>
          <NavLink to={'/opinions'}>OPINIONS</NavLink>
          <NavLink to={'/look reviews'}>LOOK REVIEWS</NavLink>
          <NavLink to={'/'}>THE NEWS</NavLink>
          <NavLink to={'/'}>SPORTS</NavLink>
        </Stack>
        <Stack align={'flex-start'}>
          <ListHeader>Traveller</ListHeader>
          <NavLink to={'/'}>TRAVELOGUES</NavLink>
          <NavLink to={'/'}>WEEKEND BREAKS</NavLink>
          <NavLink to={'/'}>HOLYDAYS WITH </NavLink>
          <NavLink to={'/'}>PHOTO FEATURES</NavLink>
          <NavLink to={'/'}>HOTELS</NavLink>
          <NavLink to={'/'}>GUIDEBOOKS</NavLink>
        </Stack>
        <Stack align={'flex-start'}>
          <ListHeader>Money</ListHeader>
          <NavLink to={'/'}>MUTUAL FUNDS </NavLink>
          <NavLink to={'/'}>INSURANCE </NavLink>
          <NavLink to={'/'}>EQUILTY</NavLink>
          <NavLink to={'/'}>FIXED ASSETS</NavLink>
          <NavLink to={'/'}>BANKING</NavLink>
          <NavLink to={'/'}>ASK</NavLink>
          
        
        </Stack>
        <Stack align={'flex-start'}>
          <ListHeader>Follow Us</ListHeader>
          <NavLink to={'/'}>Facebook</NavLink>
          <NavLink to={'/'}>Twitter</NavLink>
          <NavLink to={'/'}>Dribbble</NavLink>
          <NavLink to={'/'}>Instagram</NavLink>
          <NavLink to={'/'}>NavLinkedIn</NavLink>
        </Stack>
      
        <Stack align={'flex-start'}>
          <ListHeader>Follow Us</ListHeader>
          <NavLink to={'/'}>Facebook</NavLink>
          <NavLink to={'/'}>Twitter</NavLink>
          <NavLink to={'/'}>Dribbble</NavLink>
          <NavLink to={'/'}>Instagram</NavLink>
          <NavLink to={'/'}>NavLinkedIn</NavLink>
        </Stack>
        
      </SimpleGrid>
    </Container>
    <Box py={10}>
      <Flex
        align={'center'}
        _before={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: useColorModeValue('gray.200', 'gray.700'),
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: useColorModeValue('gray.200', 'gray.700'),
          flexGrow: 1,
          ml: 8,
        }}>
        
      </Flex>
     
    </Box>
  </Box>
   )
}

export default Footer