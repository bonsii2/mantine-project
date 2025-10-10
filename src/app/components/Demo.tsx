import { Container, Title, Text } from "@mantine/core";
import { Box } from '@mantine/core';
export default function Demo() {
  return (
    <Container size="md" py="xl" bg={"yellow"}>
      <Title order={2}>Welcome to Mantine</Title>
      <Text c="red">
        This content is centered and limited to 768px wide (md size).
      </Text>
      <Box
        component="section"
        bg="red.1"
        p="md"
        c="blue"

      >
        This is a styled section
      </Box>
    </Container>
  );
}
