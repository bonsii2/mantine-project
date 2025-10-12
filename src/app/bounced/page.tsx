'use client'
import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Center } from "@mantine/core";
import { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import {notifications } from "@mantine/notifications";
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

  const handleclick = () => {
    notifications.show({
      title: 'succes!',
      message: 'your form is accept ',
      color: 'green',
      bg: 'green',
      autoClose: 2000,
      styles: {
        root:{
          maxWidth: 300,
          wordBreak: 'break-word'
        }
      }
    });
  
  }

  return (
    <form
      onSubmit={form.onSubmit((values) =>
        alert("submitted: " + values.username)
      )}
    >
      <TextInput label="Username" {...form.getInputProps("username")} />
      <Group align="center" justify="center">
        <Button mt="sm" type="submit" loading={checking}>
          Submit
        </Button>
        <Button onClick={handleclick}>notification</Button>
      </Group>
    </form>
  );
}
