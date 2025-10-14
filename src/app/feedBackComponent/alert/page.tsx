import { Alert } from '@mantine/core';
import { Info } from 'lucide-react';

export default function AlertExample() {
  return (
    <Alert
      icon={<Info size={16} />}
      title="Important Info"
      color="blue"
      variant="light"
      radius="md"
      withCloseButton
    >
      Your account is under review. You will be notified once it’s approved.
    </Alert>
  );
}
