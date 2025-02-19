export const uiConfig = {
  colors: {
    primary: {
      light: '#93C5FD', // blue-300
      main: '#3B82F6',  // blue-500
      dark: '#1D4ED8'   // blue-700
    },
    secondary: {
      light: '#C4B5FD', // purple-300
      main: '#8B5CF6',  // purple-500
      dark: '#6D28D9'   // purple-700
    },
    success: {
      light: '#86EFAC', // green-300
      main: '#22C55E',  // green-500
      dark: '#15803D'   // green-700
    },
    error: {
      light: '#FCA5A5', // red-300
      main: '#EF4444',  // red-500
      dark: '#B91C1C'   // red-700
    },
    neutral: {
      background: '#F9FAFB', // gray-50
      surface: '#FFFFFF',    // white
      border: '#E5E7EB',     // gray-200
      text: '#111827'        // gray-900
    }
  },
  typography: {
    fontFamily: {
      primary: 'Inter, system-ui, sans-serif',
      mono: 'Courier Prime, monospace'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem'
    }
  },
  spacing: {
    grid: 2,    // 0.5rem
    base: 4,    // 1rem
    loose: 6,   // 1.5rem
    wide: 8     // 2rem
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  animation: {
    transition: 'all 0.3s ease',
    dotClick: 'scale-bounce 0.2s ease',
    fadeIn: 'fade-in 0.3s ease-out',
    slideIn: 'slide-in 0.4s ease-out'
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)'
  }
};