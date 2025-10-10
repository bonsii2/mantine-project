"use client";

import "@mantine/core/styles.css";
import {
  AppShell,
  Burger,
  Group,
  Text,
  ScrollArea,
  MantineProvider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function DemoAppShell() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 250,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        {/* Header */}
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Text fw={700}>My Mantine App</Text>
          </Group>
        </AppShell.Header>

        {/* Navbar */}
        <AppShell.Navbar p="md">
          <Text>Home</Text>
          <Text>Settings</Text>
        </AppShell.Navbar>

        {/* Main content */}
        <AppShell.Main>
          <ScrollArea>
            <Text>This is the main content area</Text>
          </ScrollArea>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
