import React from 'react'
import { Heading, Box } from '@chakra-ui/core';
import Layout from '../components/layout';

export default () => (
    <Layout>
        <Box>
            <Heading as="h1" size="xl">Oops, that page doesn't exist</Heading>
        </Box>
    </Layout>
)