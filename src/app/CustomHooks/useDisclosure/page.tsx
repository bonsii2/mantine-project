import { useDisclosure } from "@mantine/hooks";
import { Button, Modal } from "@mantine/core";

export default function Demo() {
  const [opened, { open, close, toggle }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Hello Mantine">
        <p>This is your modal content</p>
      </Modal>

      <Button onClick={open}>Open Modal</Button>
      <Button onClick={toggle}>Toggle</Button>
    </>
  );
}
