"use client";

import { useState } from "react";
import { Modal, Button, Text } from "@mantine/core";

export default function BasicModalExample() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="User Information"
        centered
    
      >
        <Text>This is a simple Mantine Modal popup!</Text>
      </Modal>

      <Button onClick={() => setOpened(true)}>Open Modal</Button>
    </>
  );
}
