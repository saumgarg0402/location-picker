import LocationPicker from './LocationPicker';
import React from 'react';
import {
    appHeaderTextStyles,
    containerStyles,
    pickerContainerStyles,
    pickerLabelTextStyles,
    schedulerTextStyles
    } from '../styles/schedulerStyles';
import { Stack } from '@fluentui/react/lib/Stack';
import { Text } from '@fluentui/react/lib/Text';

const Scheduler = () => {

    return (
        <Stack styles={containerStyles} horizontalAlign="center">
            <Text styles={appHeaderTextStyles}>Car Rentals</Text>
            <Stack styles={pickerContainerStyles}>
                <Text styles={schedulerTextStyles}>Where are you going?</Text>
                <Text styles={pickerLabelTextStyles}>Pick-up Location</Text>
                <Stack styles={{ root: {width: '70%'}}}>
                    <LocationPicker />
                </Stack>
            </Stack>

        </Stack>
    )

}

export default Scheduler;
