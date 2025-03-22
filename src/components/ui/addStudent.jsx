import React from 'react'
import { Span, Accordion } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

const AddStudent = () => {

    return (
        <>
            <Accordion.Root>
                <Accordion.Item >
                    <Accordion.ItemTrigger>
                        <Span flex="1">Add Students</Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>adding</Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
            </Accordion.Root>

        </>
    )
}

export default AddStudent
