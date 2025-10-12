
import Link from "next/link";
import { Button, Title, Container, Paper, Group,Text,  Divider } from "@mantine/core";
import  ThemeToggle  from "@/app/components/ThemeToggle";
import Demo from "./components/Demo";
import { Icon } from "lucide-react";
import { ActionIcon, CloseButton } from "@mantine/core";



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
        </Button>git
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
      <Paper shadow="sm"  radius="md" p="lg" withBorder>
        <Group justify="space-between">
          <Text fw={600}>How to build a great UI with Mantine</Text>
          <CloseButton aria-label="Close post" />
        </Group>

        <Text mt="sm" color="dimmed" size="sm">
          Mantine provides everything you need to build responsive UIs faster.
        </Text>

        <Group mt="md" justify="space-between">
          <Group>
            <ActionIcon color="red" variant="light" aria-label="Like">
              L
            </ActionIcon>
            <ActionIcon variant="subtle" aria-label="Share">
              sh
            </ActionIcon>
          </Group>

          <Button color="blue" radius="md">
            Read More
          </Button>
        </Group>
      </Paper>
      <Demo />
      <Link href={"/appshell"}>App shale</Link>
      <Link href={'/formPage'}>form page</Link>
      <Link href={'/bounced'}>bounced</Link>
      <Link href={'/NavigationComponent/navBar'}>bounced</Link>

    </Container>
  );
}
