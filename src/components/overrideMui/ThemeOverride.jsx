import {createMuiTheme} from '@material-ui/core/styles';
import variables from '../../styles/_variables.scss';

const ThemeDefault = createMuiTheme({
    palette: {
        type: 'light',
        // type: 'dark',
        background: {
            paper: '#f5f5f5',
            default: '#f0f0f0',
        },
        primary: {
            main: '#101010'
        }
    },
    typography: {
        fontFamily: [
            '"DM Sans"',
            'sans-serif'
        ].join(','),
        fontSize: 24,
        // fontWeightLight: 300,
        // fontWeightRegular: 400,
        // fontWeightMedium: 500,
        // fontWeightBold: 700,
    },
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
            // Name of the rule
            text: {
                // Some CSS
                color: 'red',
            },
        },
        MuiToolbar: {
            regular: {
                paddingLeft: 0,
                paddingRight: 0,
                background: '#ffffff',
                minHeight: 0
            },
            root: {
              minHeight: '0 !important',
            }
        },
        MuiList: {

        }
    },
});

export {ThemeDefault};
