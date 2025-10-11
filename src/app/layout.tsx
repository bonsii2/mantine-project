"use client";

import "@mantine/core/styles.css";
import {
  AppShell,
  Burger,
  Group,
  Text,
  ScrollArea,
  MantineProvider,
  ColorSchemeScript,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ThemeToggle from "./components/ThemeToggle";
import HomePage from "./page";


export default function DemoAppShell() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
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
                <ThemeToggle/>
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
                <HomePage/>
              </ScrollArea>
            </AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
