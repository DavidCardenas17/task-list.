// Header.js
import React from 'react';
import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
    return (
        <Box bg="teal" p={4} color="white">
            <Flex justify="space-between" align="center">
                <Heading as="h1" size="lg">
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
    );
};

export default Header;
