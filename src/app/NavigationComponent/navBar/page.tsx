import { AppShell, Group, Button, Text, Stack } from "@mantine/core";

import { useState } from "react"

export default function Page(){
    const [active, setActive] = useState('home')
    return(
     <AppShell
       navbar={{
        width: 220,
        breakpoint: 'sm',
        collapsed:{mobile: false},
       }}
       >

        <AppShell.Navbar p='md'>
            <Text fw='700' mb='md'>
                use dashboard
            </Text>

            <Stack>
                <Button variant={active ==='home' ? 'filled': 'light'}
                fullWidth
                onClick={() => setActive('home')}>home</Button>
                <Button variant={active ==='profile' ? 'filled': 'light'}
                fullWidth
                onClick={() => setActive('profile')}>profile</Button>
                <Button variant={active ==='setting' ? 'filled': 'light'}
                fullWidth
                onClick={() => setActive('setting')}>setting</Button>
            </Stack>
        </AppShell.Navbar>

       <AppShell.Main p='md'>
        <Text>current page: {active}</Text>
       </AppShell.Main>



     </AppShell>

    )
}

