import { IStackStyles } from '@fluentui/react/lib/Stack';
import { ITextStyles } from '@fluentui/react/lib/Text';

export const containerStyles: IStackStyles = {
    root: {
        backgroundColor: '#1b7ccd',
        height: 300
    }
}
export const pickerContainerStyles: IStackStyles = {
    root: {
        backgroundColor: '#ffb700',
        height: 180,
        borderRadius: 10,
        border: '1px solid #ffb700',
        width: '80%',
        paddingLeft: 50
    }
}

export const appHeaderTextStyles: ITextStyles = {
    root: { 
        color: '#fff', 
        fontSize: 36, 
        padding: 10
    }
}

export const schedulerTextStyles: ITextStyles = {
    root: { 
        fontSize: 20, 
        paddingTop: 10, 
        fontWeight: 600
    }
}

export const pickerLabelTextStyles: ITextStyles = {
    root: { 
        fontSize: 16, 
        paddingTop: 10, 
        paddingBottom: 5, 
        color: '#605E5C'
    }
}