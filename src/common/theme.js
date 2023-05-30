import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h1: { fontSize: '2.5rem' },
    h2: { fontSize: '2.1rem' },
    h3: { fontSize: '1.7rem' },
    h4: { fontSize: '1.5rem' },
    h5: { fontSize: '1.3rem' },
    h6: { fontSize: '1.1rem' },
  },
  components: {
    MuiLink: {
      defaultProps: {
        color: 'inherit',
        underline: 'always',
      },
    },
  },
});

export default theme;
