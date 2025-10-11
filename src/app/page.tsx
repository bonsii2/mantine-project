"use client";
import Link from "next/link";
import { Button, Title, Container, Paper, Group,Text,  Divider } from "@mantine/core";
import  ThemeToggle  from "@/app/components/ThemeToggle";
import Demo from "./components/Demo";
import { Icon } from "lucide-react";
import { ActionIcon,  } from "@mantine/core";



export default function HomePage() {
  return (
    <Container size="sm" py="xl">
      <Title order={2}>Hello Mantine + Next.js (App Router) 👋</Title>
      <Button mt="md" color="blue" onClick={() => alert("Button clicked")}>
        Click me
      </Button>
      <Divider label="Details" labelPosition="center" my="sm" />

      <Group>
        <Button color="blue" radius="md">
          default
        </Button>
        <Button color="blue" variant="outline" radius="md">
          add item
        </Button>
        <Button color="red" variant="teal" radius="md">
          add item
        </Button>
        <Button
          color="red"
          radius="md"
          rightSection={"text"}
          onClick={() => alert("how are you bonsa")}
        >
          delete
        </Button>

        <Button loading>savin..g</Button>
      </Group>
      <Group>
        <ActionIcon color="blue" variant="filled" aria-label="Edit">
         E
        </ActionIcon>

        <ActionIcon color="red" variant="light" aria-label="Delete">
          x
        </ActionIcon>

        <ActionIcon variant="subtle" aria-label="Settings">
          s
        </ActionIcon>
      </Group>

      <ThemeToggle />
      <Demo />
      <Link href={"/appshell"}>App shale</Link>
    </Container>
  );
}
