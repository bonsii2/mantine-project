import { Skeleton, Stack, Card } from "@mantine/core";

export default function SkeletonExample() {
  return (
    <Stack className="w-full">
      <Card p="md" radius="md" withBorder>
        <Skeleton height={20} width="70%" mb="sm" />
        <Skeleton height={10} width="90%" mb="xs" />
        <Skeleton height={10} width="60%" />
      </Card>
    </Stack>
  );
}
