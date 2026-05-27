export const colorSystem = {
  primary: {
    50: '#EEF2FF',
    100: '#E0E7FF',
    500: '#6366F1',
    600: '#4F46E5',
    900: '#312E81',
  },
  secondary: {
    500: '#8B5CF6',
    600: '#7C3AED',
  },
  accent: {
    500: '#EC4899',
    600: '#DB2777',
  },
  warning: {
    500: '#F59E0B',
  },
  success: {
    500: '#10B981',
  },
  background: {
    dark: '#0F172A',
    medium: '#1E293B',
    light: '#334155',
  },
  text: {
    primary: '#F8FAFC',
    secondary: '#94A3B8',
    muted: '#64748B',
  },
};

export const fonts = {
  arabic: {
    primary: 'Tajawal',
    weights: [400, 500, 700, 900],
    fallback: 'Arial',
  },
  english: {
    primary: 'Inter',
    weights: [400, 600, 700],
    fallback: 'sans-serif',
  },
  code: {
    primary: 'Fira Code',
    weights: [400, 500],
  },
};

export const animations = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: 30, // frames
  },
  fadeInUp: {
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    duration: 40,
  },
  scaleIn: {
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    duration: 30,
  },
  slideInLeft: {
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
    duration: 40,
  },
};
