
import { Stack } from '@fluentui/react/lib/Stack';
import React from 'react';
import { Text } from '@fluentui/react/lib/Text';
import { Link } from '@fluentui/react/lib/Link';

const Footer = () => {

    return (
        <Stack styles={{ root: { width: '100%', height: 50, backgroundColor: '#1b7ccd'}}} horizontal={true} horizontalAlign="center">
            <Text styles={{ root: {fontWeight: 600, fontSize: 16, color: '#fff'}}}>Created using </Text>&nbsp;
            <Link href="https://www.rentalcars.com/" underline={true} styles={{ root: { fontWeight: 600, fontSize: 16, color: '#fff'}}}>rentalcars.com</Link>
        </Stack>
    )
}

export default Footer;