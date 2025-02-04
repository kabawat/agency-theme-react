import { makeStyles } from 'tss-react/mui';

const sliderArtStyles = makeStyles({ uniqId: 'slider_art' })(theme => ({
  deco: {
    [theme.breakpoints.up('lg')]: {
      width: 450
    },
    '& img': {
      position: 'relative',
      width: '100%'
    },
    '&:before': {
      content: '""',
      width: 480,
      height: 480,
      background: theme.palette.background.paper,
      borderRadius: 24,
      transform: theme.direction === 'rtl' ? 'rotate(-45deg)' : 'rotate(45deg)',
      position: 'absolute',
      top: theme.spacing(15),
      boxShadow: theme.palette.mode === 'dark' ? `-30px 20px 0px 0px ${theme.palette.secondary.dark}` : `-30px 20px 0px 0px ${theme.palette.secondary.light}`,
      right: theme.direction === 'rtl' ? 'auto' : theme.spacing(10),
      left: theme.direction === 'rtl' ? theme.spacing(10) : 'auto',
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    }
  },
  figure: {
    height: 460,
    display: 'flex',
    alignItems: 'flex-end',
    transition: 'all 0.3s ease'
  },
  fade: {
    opacity: '0.15',
    filter: 'blur(10px)'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderArtStyles;
