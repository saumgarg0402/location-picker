import React, { useState, useRef } from 'react';
import { LocationPickerSchema } from '../schema/LocationPickerSchema';
import getSuggestions from '../utils/getSuggestions';
import mapSuggestions from '../utils/mapSuggestions';
import take from 'lodash-es/take';
import {
    IBasePickerSuggestionsProps,
    NormalPeoplePickerBase,
    IPickerItemProps,
} from '@fluentui/react/lib/Pickers';
import { Stack } from '@fluentui/react/lib/Stack';
import { Text } from '@fluentui/react/lib/Text';
import { IPersonaProps } from '@fluentui/react/lib/Persona';

import classes from "./LocationPicker.module.scss";

const LocationPicker = () => {

    const peoplePicker = useRef<NormalPeoplePickerBase>(null);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

    
    const getTextFromItem = (item: LocationPickerSchema) => (item.region || '');

    const onResolveSuggestions = (filter: string): Promise<LocationPickerSchema[]> => {

        if(filter.length > 1) {
            return getSuggestions(filter).then(data => {
                if(!!data?.results?.docs) {
                    return Promise.resolve(mapSuggestions(take(data.results.docs,6)));
                }
                return Promise.resolve([]);
            }).catch(e => { return Promise.resolve([]) });
        }
        return Promise.resolve([]); 
    }

    const onInputChange = (input: string) => {
        setShowSuggestions(input.length > 1);
        return input;
    };

    const suggestionProps: IBasePickerSuggestionsProps = {
        noResultsFoundText: 'No results found',
        loadingText: 'Loading...',
        showForceResolve: () => false,
        forceResolveText: '',
        resultsMaximumNumber: 6,
        showRemoveButtons: false,
        suggestionsAvailableAlertText: "Location suggestions available"
    };

    const onRenderItem = (resource: IPickerItemProps<IPersonaProps>): JSX.Element => {

        return (
            <Stack styles={{ root: { background: 'transparent', margin: '1px 2px',maxHeight: '35px',}}}>
                <Text>
                    {resource.item.text}
                </Text>
            </Stack>
        );
    }

    const onRenderSuggestionsItem = (itemProps: LocationPickerSchema): JSX.Element => {

        return (
            <Stack horizontal={true} styles={{ root: { borderBottom: '1px solid #d2d0ce', width: '100%'}}}>
                <Stack styles={{ root: { height: 40, width: 60}}} verticalAlign="center">
                    <Text>{itemProps.placeType}</Text>
                </Stack>
                <Stack styles={{ root: { height: 40}}} horizontalAlign="start">
                    <Text styles={{root: {fontSize: 14}}}>{itemProps.region}</Text>
                    <Text styles={{ root: { fontSize: 10, color: '#797775'}}}>{itemProps.text}</Text>
                </Stack>
            </Stack>
        )
    }
    return (
        <NormalPeoplePickerBase
            onResolveSuggestions={onResolveSuggestions}
            getTextFromItem={getTextFromItem}
            pickerSuggestionsProps={suggestionProps}
            componentRef={peoplePicker}
            onInputChange={onInputChange}
            resolveDelay={300}
            inputProps={{
                'aria-label': 'Pick-up location search box',
                placeholder: 'city, airport, station, region, district...',
            }}
            removeButtonAriaLabel='Remove'
            onRenderItem={onRenderItem}
            onRenderSuggestionsItem={onRenderSuggestionsItem}
            className={classes.picker}
            pickerCalloutProps={{
                calloutWidth: 300,
                hidden: !showSuggestions,
                styles: {
                    root: {
                        border: '1px solif #000',
                        borderRadius: 4
                    }
                }
            }}
        />
    );

}

export default LocationPicker;