"use client";

import { useState } from "react";
import { Dialog, Button, Group, Text } from "@mantine/core";

export default function ConfirmDialog() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        radius="md"
        size="md"
      >
        <Text mb="sm">Are you sure you want to delete this record?</Text>
        <Group justify="flex-end">
          <Button variant="default" onClick={() => setOpened(false)}>
            Cancel
          </Button>
          <Button color="red" onClick={() => alert("Deleted!")}>
            Delete
          </Button>
        </Group>
      </Dialog>

      <Button color="red" onClick={() => setOpened(true)}>
        Delete Item
      </Button>
    </>
  );
}
