import { useClickOutside } from "@mantine/hooks";
import { useState, useRef } from "react";

export default function ClickOutsideExample() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <div
      ref={ref}
      style={{ border: "1px solid gray", padding: "10px", width: "200px" }}
    >
      <button onClick={() => setOpened(true)}>Open Box</button>
      {opened && <p>Click outside me to close</p>}
    </div>
  );
}
