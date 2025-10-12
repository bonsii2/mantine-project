import { Overlay, Button, Box, Text } from "@mantine/core";
import { useState } from "react";

export default function OverlayExample() {
  const [show, setShow] = useState(false);

  return (
    <Box pos="relative" h={200} bg="gray.1">
      {show && (
        <Overlay color="#000" backgroundOpacity={0.5} blur={4} zIndex={5}>
          <Text c="white" fz="xl" ta="center" mt="xl">
            Overlay Active
          </Text>
        </Overlay>
      )}

      <Button
        pos="absolute"
        bottom={10}
        left={10}
        onClick={() => setShow(!show)}
      >
        Toggle Overlay
      </Button>
    </Box>
  );
}
