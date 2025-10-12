"use client";

import { Pagination, Text, Stack } from "@mantine/core";
import { useState } from "react";

const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

export default function PaginatedList() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const start = (page - 1) * itemsPerPage;
  const visibleItems = items.slice(start, start + itemsPerPage);

  return (
    <Stack align="center">
      {visibleItems.map((item) => (
        <Text key={item}>{item}</Text>
      ))}

      <Pagination
        total={Math.ceil(items.length / itemsPerPage)}
        value={page}
        onChange={setPage}
        mt="lg"
      />
    </Stack>
  );
}
