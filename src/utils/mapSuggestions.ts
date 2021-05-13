
import map from 'lodash-es/map';
import { LocationPickerSchema } from '../schema/LocationPickerSchema';

const mapSuggestions = (results): LocationPickerSchema[] => {

    return map(results, r => {

        
        let textArray: string[] = [];
        !!r?.region && textArray.push(r?.region);
        !!r?.city && textArray.push(r?.city);
        !!r?.country && textArray.push(r?.country);
        
        return {
            text: textArray.join(),
            placeType: r?.placeType,
            region: r?.region || r?.name || '',
            city: r?.city,
            country: r?.country,
        }
    })

}

export default mapSuggestions;