import { useClipboard } from "@mantine/hooks";
import { Button } from "@mantine/core";

export default function ClipboardExample() {
  const clipboard = useClipboard({ timeout: 1000 });

  return (
    <Button onClick={() => clipboard.copy("Copied text!")}>
      {clipboard.copied ? "Copied!" : "Copy"}
    </Button>
  );
}
