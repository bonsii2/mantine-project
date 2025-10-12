import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ColorSchemeScript } from "@mantine/core";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Notifications position="bottom-right"
          limit={3}
          containerWidth={320}
          zIndex={99999} />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
