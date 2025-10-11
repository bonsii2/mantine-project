// components/RegisterForm.tsx
// "use client";

import React from "react";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Button,
  Group,
  Stack,
  NumberInput,
  Textarea,
  Checkbox,
  FileInput,
  Paper,
  Title,
} from "@mantine/core";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  age?: number | null;
  bio?: string;
  acceptTerms: boolean;
  avatar?: File | null;
};

export default function Page() {
  const form = useForm<FormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: null,
      bio: "",
      acceptTerms: false,
      avatar: null,
    },

    validate: {
      name: (val) =>
        val.trim().length < 2 ? "Name must have at least 2 characters" : null,
      email: (val) => (/^\S+@\S+\.\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length < 6 ? "Password must be at least 6 characters" : null,
      confirmPassword: (val, values) =>
        val !== values.password ? "Passwords must match" : null,
      acceptTerms: (val) => (val ? null : "You must accept the terms"),
    },
  });

  async function handleSubmit(values: FormValues) {
    // show loading state
    try {
      console.log("sending to API", values);
      // simulate API
      await new Promise((r) => setTimeout(r, 1000));
      form.reset();
      alert("Registered successfully (demo)");
    } catch (err) {
      // set general form errors (optional)
      form.setErrors({ email: "Server says this email is taken" });
    }
  }

  return (
    <Paper p="lg" radius="md" withBorder shadow="xl" >
      <Title order={3} mb="md">
        Register
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Full name"
            placeholder="Your name"
            required
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            placeholder="you@example.com"
            required
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            required
            {...form.getInputProps("password")}
          />
          <PasswordInput
            label="Confirm password"
            placeholder="Repeat password"
            required
            {...form.getInputProps("confirmPassword")}
          />

          <NumberInput
            label="Age"
            min={0}
            max={120}
            {...form.getInputProps("age")}
          />
          <Textarea
            label="Bio"
            placeholder="Short bio"
            {...form.getInputProps("bio")}
          />

          <FileInput
            label="Avatar"
            placeholder="Upload avatar"
            accept="image/*"
            {...form.getInputProps("avatar")}
          />

          <Checkbox
            label="I accept the terms"
            {...form.getInputProps("acceptTerms", { type: "checkbox" })}
          />

          <Group mt="md">
            <Button type="submit">Create account</Button>
          </Group>
        </Stack>
      </form>
    </Paper>
  );
}
