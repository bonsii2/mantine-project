'use state'
import {Tabs, Text} from '@mantine/core'

export default function ProfileTabs(){
    return(
        <Tabs defaultValue='overview' radius={'md'} variant='pills' className='bg-amber-400 text-amber-300' >
            <Tabs.List>
                <Tabs.Tab value='overview'>overview</Tabs.Tab>
                <Tabs.Tab value='posts'>Posts</Tabs.Tab>
                <Tabs.Tab value='setting'>setting</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value='overview' pt={'md'}>
               <Text>this is the user overview section</Text>
            </Tabs.Panel>
            <Tabs.Panel value='posts'>
                <Text>this is  user post </Text>
            </Tabs.Panel>
            <Tabs.Panel value='settings'>
                <Text>setting section goes here. </Text>
            </Tabs.Panel>
        </Tabs>
    )
}