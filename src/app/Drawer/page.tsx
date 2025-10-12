'use client'
import { useState } from "react";
import { Drawer, Button, Text } from "@mantine/core";

export default function DrawerExample() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="drawerr"
        position="bottom"
        overlayProps={{ backgroundOpacity: 0.5, blur: 3 }}
      >
        <Text>Here you can place navigation links or filters!</Text>
      </Drawer>

      <Button onClick={() => setOpened(true)}>Open Drawer</Button>
    </>
  );
}
