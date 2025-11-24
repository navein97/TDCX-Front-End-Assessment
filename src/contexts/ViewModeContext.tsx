import { createContext, useState, ReactNode } from 'react';
import { Theme } from '../styles/theme';

type Mode = 'mobile' | 'desktop';

interface ViewModeContextProps {
  mode: Mode;
  toggleMode: () => void;
  themed: Theme;
}

// Import the default theme to use as base
import { theme as defaultTheme } from '../styles/theme';

export const ViewModeContext = createContext<ViewModeContextProps>({
  mode: 'mobile',
  toggleMode: () => {},
  themed: defaultTheme,
});

export const ViewModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>('mobile');

  const toggleMode = () => setMode(prev => (prev === 'mobile' ? 'desktop' : 'mobile'));

  // Clone the base theme and override breakpoints based on mode
  // We're essentially swapping the breakpoints to force the layout
  const themed: Theme = {
    ...defaultTheme,
    breakpoints: {
      ...defaultTheme.breakpoints,
      // If mode is mobile, we keep defaults (mobile-first).
      // If mode is desktop, we trick the media queries.
      // Actually, to FORCE a view, we need to manipulate how the components perceive the screen width.
      // But since we can't easily change the window width, we'll adjust the media query strings in the theme.
      
      // However, styled-components uses these strings in @media (min-width: ...).
      // To force "mobile view" on desktop: we want the mobile styles to apply and desktop ones NOT to.
      // To force "desktop view" on mobile: we want the desktop styles to apply.
      
      // A simpler approach for this demo:
      // When in 'mobile' mode (default), use standard breakpoints.
      // When in 'desktop' mode, we could try to adjust, but actually, 
      // the request is to "smoothly convert".
      
      // Let's implement the logic requested: override breakpoint values.
      mobile: mode === 'mobile' ? '0px' : '1200px',
      tablet: mode === 'mobile' ? '768px' : '1200px',
      desktop: mode === 'mobile' ? '1200px' : '0px', 
    },
  };

  return (
    <ViewModeContext.Provider value={{ mode, toggleMode, themed }}>
      {children}
    </ViewModeContext.Provider>
  );
};
