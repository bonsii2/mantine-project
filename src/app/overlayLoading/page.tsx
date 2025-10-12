'use client'
import { LoadingOverlay, Button, Box } from "@mantine/core";
import { useState } from "react";

export default function LoadingExample() {
  const [visible, setVisible] = useState(false);

  const simulateLoad = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 2000);
  };

  return (
    <Box pos="relative">
      <LoadingOverlay visible={visible} />
      <Button onClick={simulateLoad}>Simulate Loading</Button>
    </Box>
  );
}
