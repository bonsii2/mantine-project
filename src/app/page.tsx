"use client";
import Link from "next/link";
import { Button, Title, Container, Paper, Group,Text, Divider } from "@mantine/core";
import  ThemeToggle  from "@/app/components/ThemeToggle";
import Demo from "./components/Demo";

export default function HomePage() {
  return (
    <Container size="sm" py="xl">
      <Title order={2}>Hello Mantine + Next.js (App Router) 👋</Title>
      <Button mt="md" color="blue" onClick={() => alert("Button clicked")}>
        Click me
      </Button>
      <Divider label="Details" labelPosition="center" my="sm" />

      <Paper withBorder radius="md" p="md" shadow="sm" component="article">
        <Group align="center">
          <Text fw={700}>title</Text>
          <Divider orientation="vertical" mx="sm" aria-orientation="vertical"/>
          <Text c="dimmed">$price</Text>
        </Group>

        <Text size="sm" color="dimmed" mt="sm">
          text
        </Text>

        <Group mt="md">
          <Button size="sm">Buy</Button>
        </Group>
      </Paper>

      <ThemeToggle />
      <Demo />
      <Link href={"/appshell"}>App shale</Link>
    </Container>
  );
}
