import { IPersonaProps } from '@fluentui/react/lib/Persona';

export interface LocationPickerSchema extends IPersonaProps {
    placeType?: string;
    region?: string;
    city?: string;
    country?: string;
}