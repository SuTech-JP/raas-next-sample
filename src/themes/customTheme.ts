import { ThemeOptions } from '@sutech-jp/raas-react-client'

/**
 * Theme options that can be applied to RaaS components as "Custom Styles".
 * To apply the styles, set it to "customStyles" attribute of each component.
 *
 * e.g.) <ReportLayoutGallery customStyles={customStyles} {...restProps} />
 *
 * Following definition is same as the styles provided by RaaS UI System.
 * Change the properties as you want to overwrite.
 */
export const customStyles: ThemeOptions = {
  palette: {
    primary: {
      light: '#E9F2FB',
      soft: '#6DA9E5',
      main: '#1B6FD3',
      dark: '#1659A9',
    },
    secondary: {
      light: '#EFF1F5',
      soft: '#D5DAE4',
      main: '#BABFCA',
      dark: '#4B5361',
    },
    info: {
      light: '#E9F2FB',
      soft: '#6DA9E5',
      main: '#1B6FD3',
      dark: '#1659A9',
    },
    success: {
      light: '#EAF8F4',
      soft: '#75C8AB',
      main: '#189F71',
      dark: '#26835C',
    },
    warning: {
      light: '#FFF5EA',
      soft: '#F6B471',
      main: '#E27822',
      dark: '#BF671E',
    },
    error: {
      light: '#FEEFF1',
      soft: '#E5949D',
      main: '#D34C5C',
      dark: '#A93D4A',
    },
    grey: {
      '50': '#EFF1F5',
      '100': '#D5DAE4',
      '200': '#BABFCA',
      '300': '#9FA4AF',
      '400': '#838995',
      '500': '#686E7A',
      '600': '#5A606E',
      '700': '#4B5361',
      '800': '#3D4555',
      '900': '#2E3748',
      A100: '#D5DAE4',
      A200: '#BABFCA',
      A400: '#838995',
      A700: '#4B5361',
    },
  },
  typography: {
    pageTitle: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#333333',
    },
    dialogTitle: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.2,
      color: '#333333',
    },
    subheadM: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#333333',
    },
    subheadL: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#333333',
    },
    textNormal: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#333333',
    },
    textStrong: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: 1.5,
      color: '#333333',
    },
    textSupplement: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#7f7f7f',
    },
    textHint: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#AAAAAA',
    },
    labelNormal: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.2,
      color: '#7f7f7f',
    },
    labelError: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.2,
      color: '#D34C5C',
    },
    labelSmall: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.2,
      color: '#7f7f7f',
    },
    labelSmallActive: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.2,
      color: '#1B6FD3',
    },
    labelSmallError: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.2,
      color: '#D34C5C',
    },
    textPrimary: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#1B6FD3',
    },
    textStrongPrimary: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: 1.5,
      color: '#1B6FD3',
    },
    textError: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#D34C5C',
    },
    textStrongError: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: 1.5,
      color: '#D34C5C',
    },
    textWarning: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#E27822',
    },
    textStrongWarning: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: 1.5,
      color: '#E27822',
    },
    textSuccess: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#189F71',
    },
    textStrongSuccess: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: 1.5,
      color: '#189F71',
    },
    textWhite: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#FFFFFF',
    },
    groupHeader: {
      fontSize: '0.75rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#7f7f7f',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.2,
      color: '#333333',
    },
    subtextNormal: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#7f7f7f',
    },
    subtextWhite: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#FFFFFF',
    },
    toggleNormal: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.2,
      color: '#7f7f7f',
    },
    togglePrimary: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.2,
      color: '#1B6FD3',
    },
  },
}
