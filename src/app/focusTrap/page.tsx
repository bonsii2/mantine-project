import { FocusTrap, TextInput, Button, Stack } from "@mantine/core";
import { useState } from "react";

export default function FocusTrapExample() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Button onClick={() => setActive(!active)}>
        {active ? "Deactivate" : "Activate"} Focus Trap
      </Button>

      {active && (
        <FocusTrap active>
          <Stack mt="md" p="md" bg="gray.1" w={300}>
            <TextInput placeholder="Username" />
            <TextInput placeholder="Password" />
            <Button>Submit</Button>
          </Stack>
        </FocusTrap>
      )}
    </>
  );
}
