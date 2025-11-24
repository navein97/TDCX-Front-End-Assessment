export const theme = {
    colors: {
        primary: '#4A90E2',
        primaryDark: '#357ABD',
        secondary: '#F5A623',
        background: '#FFFFFF',
        backgroundGray: '#F8F9FA',
        text: '#333333',
        textLight: '#666666',
        textMuted: '#999999',
        border: '#E0E0E0',
        success: '#7ED321',
        danger: '#D0021B',
        dangerHover: '#A00116',
        shadow: 'rgba(0, 0, 0, 0.1)',
        overlay: 'rgba(0, 0, 0, 0.5)',
    },
    breakpoints: {
        mobile: '320px',
        tablet: '768px',
        desktop: '1200px',
    },
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '48px',
    },
    borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        full: '50%',
    },
    shadows: {
        sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
        md: '0 4px 8px rgba(0, 0, 0, 0.1)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.15)',
    },
    transitions: {
        fast: '0.15s ease',
        normal: '0.3s ease',
        slow: '0.5s ease',
    },
};

export type Theme = typeof theme;
