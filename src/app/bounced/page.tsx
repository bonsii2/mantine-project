'use client'
import { useForm } from "@mantine/form";
import { TextInput, Button } from "@mantine/core";
import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

export default function UsernameCheckForm() {
  const [checking, setChecking] = useState(false);
  const form = useForm({ initialValues: { username: "" } });

  // debounced availability check
  const check = debounce(async (username: string) => {
    if (!username) return;
    setChecking(true);
    // simulate API
    await new Promise((r) => setTimeout(r, 700));
    const taken = username.toLowerCase() === "admin"; // fake rule
    if (taken) form.setErrors({ username: "Username already taken" });
    else form.setErrors({ username: undefined });
    setChecking(false);
  }, 500);

  useEffect(() => {
    check(form.values.username);
    return () => check.cancel();
  }, [form.values.username]);

  return (
    <form
      onSubmit={form.onSubmit((values) =>
        alert("submitted: " + values.username)
      )}
    >
      <TextInput label="Username" {...form.getInputProps("username")} />
      <Button mt="sm" type="submit" loading={checking}>
        Submit
      </Button>
    </form>
  );
}
