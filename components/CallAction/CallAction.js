import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import useStyles from './action-style';

function CallAction() {
  // Translation Function
  const { t } = useTranslation('common');

  const { classes } = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <ScrollAnimation animateOnce animateIn="fadeInUpShort" offset={40} delay={300} duration={0.5}>
          <Paper className={classes.paper}>
            <Grid container alignItems="center">
              <Grid item md={9} xs={12}>
                <Typography variant="h4" gutterBottom display="block">
                  {t('about_ready')}
                </Typography>
                <Typography display="block" component="p">
                  Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
                </Typography>
              </Grid>
              <Grid item md={3} xs={12}>
                <Grid container alignItems="center">
                  <Button size="large" fullWidth href={link.agency.contact} className={classes.button}>
                    {t('btn_contact')}
                    <SendIcon className={classes.rightIcon} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

export default CallAction;
