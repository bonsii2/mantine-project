"use client";

import { Progress, Button, Text, Stack } from "@mantine/core";
import { useState, useEffect } from "react";

export default function ProgressExample() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress > 0 && progress < 100) {
      const timer = setTimeout(() => setProgress(progress + 10), 300);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <Stack>
      <Text>Upload Progress: {progress}%</Text>
      <Progress value={progress} color="teal" striped animated />
      <Button onClick={() => setProgress(10)}>Start Upload</Button>
    </Stack>
  );
}
