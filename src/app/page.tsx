"use client";
import Link from "next/link";
import {
  Button,
  Title,
  Container,
  Paper,
  Group,
  Text,
  Divider,
  Stack,
  SimpleGrid,
  Card,
} from "@mantine/core";
import ThemeToggle from "@/app/components/ThemeToggle";
import Demo from "./components/Demo";
import { Icon } from "lucide-react";
import { ActionIcon, CloseButton } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import Alert from "@/app/feedBackComponent/alert/page";
import Loader from "@/app/feedBackComponent/Loader/page";
import LoadingOverlay from "@/app/feedBackComponent/LoadingOverlay/page";
import Progress from "@/app/feedBackComponent/Progress/page";
import Skeleton from "@/app/feedBackComponent/skeleton/page";
import UseDisclosure from "@/app/CustomHooks/useDisclosure/page";
import UseHotKeys from "@/app/CustomHooks/useHotKeys/page";
import UseClipBoard from "@/app/CustomHooks/UseClipBoard/page";
import UseclickOutside from "@/app/CustomHooks/useClickOutSide/page";
import ColorScheme from "@/app/CustomHooks/useColorScheme/page";

export default function HomePage() {
  const handleClick = () => {
    notifications.show({
      title: "Success",
      message: "Deleted successfully",
      bg: "red",
      autoClose: 2000,
    });
  };

  const components = [
    { name: "App Shell", href: "/appshell" },
    { name: "Form Page", href: "/formPage" },
    { name: "Bounced", href: "/bounced" },
    { name: "Navigation Bar", href: "/NavigationComponent/navBar" },
  ];

  const feedbackComponents = [
    { component: <Alert />, name: "Alert" },
    { component: <Loader />, name: "Loader" },
    { component: <LoadingOverlay />, name: "Loading Overlay" },
    { component: <Progress />, name: "Progress" },
    { component: <Skeleton />, name: "Skeleton" },
  ];

  const customHooks = [
    { component: <UseDisclosure />, name: "Use Disclosure" },
    { component: <UseHotKeys />, name: "Use Hot Keys" },
    { component: <UseClipBoard />, name: "Use Clipboard" },
    { component: <UseclickOutside />, name: "Use Click Outside" },
    { component: <ColorScheme />, name: "Color Scheme" },
  ];

  return (
    <Container size="lg" py="xl">
      {/* Header Section */}
      <Stack gap="lg" mb="xl">
        <Group justify="space-between" align="center">
          <Title order={1} c="blue" fw={700}>
            Mantine + Next.js
          </Title>
          <ThemeToggle />
        </Group>

        <Text size="xl" c="dimmed">
          Welcome to your Mantine component showcase
        </Text>
      </Stack>

      {/* Demo Section */}
      <Card shadow="md" radius="lg" p="xl" withBorder mb="xl">
        <Title order={2} mb="md">
          Interactive Demo
        </Title>
        <Demo />
      </Card>

      {/* Quick Actions */}
      <Card shadow="sm" radius="md" p="lg" withBorder mb="xl">
        <Title order={3} mb="md">
          Quick Actions
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
          {components.map((item, index) => (
            <Button
              key={index}
              component={Link}
              href={item.href}
              variant="light"
              color="blue"
              fullWidth
            >
              {item.name}
            </Button>
          ))}
        </SimpleGrid>
      </Card>

      {/* Buttons Showcase */}
      <Card shadow="sm" radius="md" p="lg" withBorder mb="xl">
        <Title order={3} mb="md">
          Button Variants
        </Title>
        <Group gap="md" mb="lg">
          <Button color="blue" radius="md">
            Default
          </Button>
          <Button color="blue" variant="outline" radius="md">
            Outline
          </Button>
          <Button color="red" variant="light" radius="md">
            Light
          </Button>
          <Button color="red" radius="md" onClick={handleClick}>
            Delete
          </Button>
          <Button variant="gradient" gradient={{ from: "blue", to: "cyan" }}>
            Gradient
          </Button>
          <Button loading>Loading</Button>
        </Group>

        <Divider label="Notification Demo" labelPosition="center" my="md" />
        <Group>
          <Button onClick={handleClick} color="orange">
            Show Notification
          </Button>
        </Group>
      </Card>

      {/* Example Card Component */}
      <Card shadow="md" radius="lg" p="xl" withBorder mb="xl">
        <Title order={3} mb="md">
          Card Example
        </Title>
        <Paper shadow="sm" radius="md" p="lg" withBorder>
          <Group justify="space-between" mb="sm">
            <Text fw={700} size="lg">
              How to build a great UI with Mantine
            </Text>
            <CloseButton aria-label="Close post" />
          </Group>

          <Text mt="sm" color="dimmed" size="sm">
            Mantine provides everything you need to build responsive UIs faster
            with built-in components and hooks.
          </Text>

          <Group mt="md" justify="space-between">
            <Group>
              <ActionIcon
                color="red"
                variant="light"
                aria-label="Like"
                size="lg"
              >
                ❤️
              </ActionIcon>
              <ActionIcon variant="subtle" aria-label="Share" size="lg">
                📤
              </ActionIcon>
            </Group>

            <Button color="blue" radius="md">
              Read More
            </Button>
          </Group>
        </Paper>
      </Card>

      {/* Feedback Components */}
      <Card shadow="sm" radius="md" p="lg" withBorder mb="xl">
        <Title order={3} mb="md">
          Feedback Components
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          {feedbackComponents.map((item, index) => (
            <Card key={index} withBorder p="md" radius="md">
              <Text fw={600} mb="sm" ta="center">
                {item.name}
              </Text>
              {item.component}
            </Card>
          ))}
        </SimpleGrid>
      </Card>

      {/* Custom Hooks */}
      <Card shadow="sm" radius="md" p="lg" withBorder>
        <Title order={3} mb="md">
          Custom Hooks
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          {customHooks.map((item, index) => (
            <Card key={index} withBorder p="md" radius="md">
              <Text fw={600} mb="sm" ta="center">
                {item.name}
              </Text>
              {item.component}
            </Card>
          ))}
        </SimpleGrid>
      </Card>
    </Container>
  );
}
