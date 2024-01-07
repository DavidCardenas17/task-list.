// Header.jsx
import React from 'react';
import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header = ({ modoNoche }) => {
  return (
    <header style={{ maxWidth: '100%', padding: '10px', color: modoNoche ? '#fff' : '#000'}}>
      <Box bg={modoNoche ? '#0b4444' : 'var(--azul)'} p={4} color={modoNoche ? 'white' : 'white'}>
        <Flex justify="space-between" align="center" style={{ letterSpacing: '3px' }}>
          <Heading as="h1" size="lg" mr={4}>
            Lista TO DO 
          </Heading>
          <Flex>
            <Link as={RouterLink} to="/" mr={4}>
              Inicio
            </Link>
            <Link as={RouterLink} to="/sobre-nosotros" mr={4}>
              Sobre Nosotros  
            </Link>
            <Link as={RouterLink} to="/todos" mr={4}>
              Lista de Tareas
            </Link>
          </Flex>
        </Flex>
      </Box>
    </header>
  );
};

export default Header;
