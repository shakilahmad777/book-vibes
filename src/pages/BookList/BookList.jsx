import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function BookList() {
    
    return (
        <div>
            <div className="text-center shadow-2xs my-5 py-5">
                <h1 className='text-5xl'>BOOKS</h1>
            </div>
            <div className="">
                <Tabs>
                    <TabList>
                        <Tab>Read List</Tab>
                        <Tab>Wish List</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1 </h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}
