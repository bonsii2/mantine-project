import { useHotkeys } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";

export default function HotKeyPractical(){
    useHotkeys(
        [
            ['ctrl+s', () => notifications.show({message: 'you pressed ctrl+s!'})],
            ['ctrl+d', () =>notifications.show({ message: 'you click ctrl+d!'})],        
        ]);
        return (<p>try pressing Ctrl+s or Alt + N</p>)
}