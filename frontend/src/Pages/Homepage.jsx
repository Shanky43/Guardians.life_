import { Box, Button, Container, Divider, Flex, Heading, IconButton, Input, InputGroup, InputLeftElement, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { MdLocationPin } from "react-icons/md";

const Homepage = () => {
  const handleSearch = (event) => {
    // Perform search logic here
    const searchTerm = event.target.value;
    // ...
  };

  return (
    <div>
      <Box
        backgroundImage="url('https://www.verywellhealth.com/thmb/oG6M4FE9Lw5vsb--LHwf_SaqiR4=/1255x836/filters:no_upscale():max_bytes(150000):strip_icc()/iStock-695645846-5a84704dc064710036fb5f61.jpg')"
        backgroundPosition="center"
        backgroundAttachment="fixed"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        h="100vh"
      >
        <Box bg="rgba(0, 0, 0, 0.6)" w="100%" h="100%">
          {/* nav-bar start here */}
          <Flex align="center" justifyContent="space-between">
            {/* for logo */}
            <Box p={5} w="40%">
              <Heading as="h1" color="#049fe5" size="2xl">
                Healthcare Connect
              </Heading>
            </Box>

            <Box w="50%" color="white">
              <Flex float="center" justifyContent="space-around">
                <Box fontSize="xl" fontWeight={600} cursor="pointer">Home</Box>
                <Box fontSize="xl" fontWeight={600} cursor="pointer">About</Box>
                <Box fontSize="xl" fontWeight={600} cursor="pointer">Login</Box>
              </Flex>
            </Box>
          </Flex>
          {/* below nav-bar or content section */}
          <Divider orientation="horizontal" />
          <Box>
            <Container maxW="container.xl">
              <Box>
                <Flex justifyContent="space-between" alignContent="center" textColor="white">
                  {/* search box */}
                  <Box w="50%" h="80vh">
                    <VStack float="left" textAlign="left" w="100%">
                      <Box pt="10%">
                        <Heading size="4xl">Search Hospital</Heading>
                      </Box>
                      <Box pt="5%" width="80%">
                        <Text fontSize="xl" width="80%">
                          Discover the best doctor, clinic & hospital the city nearest to you.
                        </Text>
                      </Box>
                      <Box display="flex" justifyContent="center" pt="20%">
                        <Box bgColor="white" width={["100px", "100px", "100px", "500px"]} borderRadius="10px" height={["100px", "100px", "100px", "10vh"]}>
                          <Flex width="100%">
                            <Box height="100%" width="40%" position="relative">
                              <Flex align="center" justifyContent="space-between">
                                <InputGroup size="md" h="10vh">
                                  <Input
                                    type="text"
                                    placeholder="Search hospital"
                                    onChange={handleSearch}
                                    variant="filled"
                                    color="black"
                                    _hover={{ bg: "none" }}
                                    _focus={{ outline: "none", boxShadow: "none", borderColor: "transparent", bg: "white" }}
                                    h="100%"
                                  />
                                  <InputLeftElement display="flex" alignItems="center">
                                    <IconButton
                                      aria-label="Search"
                                      icon={<SearchIcon />}
                                      _hover={{ bg: "none" }}
                                      variant="ghost"
                                      position="absolute"
                                      top="50%"
                                      left="5px"
                                    />
                                  </InputLeftElement>
                                </InputGroup>
                              </Flex>
                            </Box>
                            <Divider orientation="vertical" />
                            <Box width="40%" h="10vh">
                              <Flex align="center" justifyContent="space-between">
                                <InputGroup size="md" h="10vh">
                                  <Input
                                    type="text"
                                    placeholder="Select a location"
                                    onChange={handleSearch}
                                    variant="filled"
                                    color="black"
                                    _hover={{ bg: "none" }}
                                    _focus={{ outline: "none", boxShadow: "none", borderColor: "transparent", bg: "white" }}
                                    h="100%"
                                  />
                                  <InputLeftElement display="flex" alignItems="center">
                                    <IconButton
                                      aria-label="location"
                                      icon={<MdLocationPin />}
                                      _hover={{ bg: "none" }}
                                      variant="ghost"
                                      position="absolute"
                                      top="50%"
                                      left="5px"
                                    />
                                  </InputLeftElement>
                                </InputGroup>
                              </Flex>
                            </Box>
                            <Box width="20%" display="flex" alignItems="center" pr="5">
                              <Button bg="#1367f6" h="6vh" _hover={{ bg: "none" }} color="white" w="100%" fontSize="xl">
                                Search
                              </Button>
                            </Box>
                          </Flex>
                        </Box>
                      </Box>
                    </VStack>
                  </Box>
                  {/* carousel starts here  */}
                  <Box w="50%"></Box>
                </Flex>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Homepage;