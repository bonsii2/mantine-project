import { Flex, SimpleGrid,Box, Button } from "@mantine/core";

export default function Demo() {
  return (
    <>
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        gap="md"
        wrap="wrap"
        bg="gray.1"
        p="md"
      >
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </Flex>

      <SimpleGrid cols={3} spacing="md">
        <Box bg="gray.2" p="md">
          Item 1
        </Box>
        <Box bg="gray.2" p="md">
          Item 2
        </Box>
        <Box bg="gray.2" p="md">
          Item 3
        </Box>
      </SimpleGrid>

      <SimpleGrid
        cols={{base: 1, sm: 2, md: 3}}
        spacing="lg"
        
      >
        <Box bg="blue.4" p="xl" ta="center">
          1
        </Box>
        <Box bg="green.4" p="xl" ta="center">
          2
        </Box>
        <Box bg="orange.4" p="xl" ta="center">
          3
        </Box>
        <Box bg="pink.4" p="xl" ta="center">
          4
        </Box>
        <Box bg="gray.4" p="xl" ta="center">
          5
        </Box>
        <Box bg="teal.4" p="xl" ta="center">
          6
        </Box>
      </SimpleGrid>
    </>
  );
}
