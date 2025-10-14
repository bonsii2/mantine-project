"use client";

import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";

export default function NotificationExample() {
  const handleClick = () => {
    notifications.show({
      title: "Success!",
      message: "Your changes have been saved successfully 🎉",
      color: "green",
      autoClose: 2000,
      position: 'top-left'
    });
  };

  return <Button onClick={handleClick}>Show Notification</Button>;
}
