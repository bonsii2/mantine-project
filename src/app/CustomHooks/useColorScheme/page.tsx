import { useColorScheme } from "@mantine/hooks";

export default function ThemeExample() {
  const preferredColorScheme = useColorScheme(); // 'light' or 'dark'

  return <p>Your system theme is {preferredColorScheme}</p>;
}
