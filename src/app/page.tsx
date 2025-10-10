"use client";

import { Button, Title, Container } from "@mantine/core";
import { ThemeToggle } from "./components/ThemeToggle";
import Demo from "./components/Demo";

export default function HomePage() {
  return (
    <Container size="sm" py="xl">
      <Title order={2}>Hello Mantine + Next.js (App Router) 👋</Title>
      <Button mt="md" color="blue" onClick={() => alert("Button clicked")}>
        Click me
      </Button>
      <ThemeToggle/>
      <Demo />
    </Container>
  );
}
