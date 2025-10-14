"use client";

import { LoadingOverlay, Box, Button } from "@mantine/core";
import { useState } from "react";

export default function OverlayExample() {
  const [visible, setVisible] = useState(false);

  const handleAction = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 2000);
  };

  return (
    <Box pos="relative" w={300} h={150} p="md" bg="gray.0">
      <LoadingOverlay visible={visible} zIndex={1000} />
      <Button onClick={handleAction}>Process Data</Button>
    </Box>
  );
}

