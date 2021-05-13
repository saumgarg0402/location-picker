import React from 'react';
import { Stack } from '@fluentui/react/lib/Stack';
import { containerStyles, pickerContainerStyles } from '../styles/schedulerStyles';
import { Text } from '@fluentui/react/lib/Text';
import LocationPicker from './LocationPicker';

const Scheduler = () => {

    return (
        <Stack styles={containerStyles} horizontalAlign="center">
            <Text styles={{ root: { color: '#fff', fontSize: 36, padding: 10}}} aria-label="Car rentals">Car Rentals</Text>
            <Stack styles={pickerContainerStyles}>
                <Text aria-label="Where are you going?" styles={{ root: { fontSize: 20, paddingTop: 10, fontWeight: 600}}}>Where are you going?</Text>
                <Text aria-label="Seelct location below" styles={{ root: { fontSize: 16, paddingTop: 10, paddingBottom: 5, color: '#605E5C'}}}>Pick-up Location</Text>
                <Stack styles={{ root: {width: '70%'}}}>
                    <LocationPicker />
                </Stack>
            </Stack>

        </Stack>
    )

}

export default Scheduler;
