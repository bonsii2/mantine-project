"use client";

import { Button, Loader, Group } from "@mantine/core";
import { useState } from "react";

export default function LoaderExample() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Group>
      <Button loading={loading} onClick={handleClick}>
        Submit
      </Button>

      {loading && <Loader color="blue" type="dots" />}
    </Group>
  );
}
