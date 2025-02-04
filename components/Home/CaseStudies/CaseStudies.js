import React, { useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import imgApi from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import CaseCard from '../../Cards/CaseCard';
import useStyles from './case-study-style';

const categories = ['corporate', 'advertising', 'marketing', 'government', 'creative'];
const caseData = [
  {
    bg: imgApi.agency[9],
    logo: '/images/logos/cloud.png',
    title: 'Donec commodo convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
    size: 'big'
  },
  {
    bg: imgApi.agency[8],
    logo: '/images/logos/fashion.png',
    title: 'Donec commodo convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
    size: 'big'
  },
  {
    bg: imgApi.agency[5],
    logo: '/images/logos/mobile.png',
    title: 'Donec commodo convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
    size: 'medium'
  },
  {
    bg: imgApi.agency[6],
    logo: '/images/logos/profile.png',
    title: 'Donec commodo convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
    size: 'medium'
  },
  {
    bg: imgApi.agency[7],
    logo: '/images/logos/architect.png',
    title: 'Donec commodo convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
    size: 'medium'
  }
];

function CaseStudies() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Translation Function
  const { t } = useTranslation('common');

  // Image Gallery
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const [selectedIndex, setSelectedIndex] = useState('corporate');

  function handleListItemClick(event, index) {
    setSelectedIndex(index);
  }

  function onMovePrevRequest() {
    setPhotoIndex((photoIndex + caseData.length - 1) % caseData.length);
  }

  function onMoveNextRequest() {
    setPhotoIndex((photoIndex + caseData.length + 1) % caseData.length);
  }

  function showPopup(index) {
    setOpen(true);
    setPhotoIndex(index);
  }

  const renderCard = (item, index) => (
    <CaseCard
      key={index.toString()}
      bg={item.bg || ''}
      logo={item.logo}
      title={item.title}
      desc={item.desc}
      size={item.size}
      simple={item.simple || false}
      openPopup={() => showPopup(index)}
    />
  );

  return (
    <div className={classes.root}>
      {open && (
        <Lightbox
          mainSrc={caseData[photoIndex].bg || caseData[photoIndex].logo}
          nextSrc={caseData[(photoIndex + 1) % caseData.length].bg || caseData[(photoIndex + 1) % caseData.length].logo}
          prevSrc={caseData[(photoIndex + 1) % caseData.length].logo || null}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
        />
      )}
      <Container fixed={isDesktop}>
        <Grid container spacing={6}>
          <Grid item md={3} xs={12}>
            <ScrollAnimation animateOnce animateIn="fadeInLeftShort" offset={-100} delay={200} duration={0.3}>
              <div>
                <h4 className={text.titlePrimary}>
                  {t('agency-landing.case_title')}
                </h4>
                <List component="nav">
                  {categories.map((item, index) => (
                    <ListItem
                      button
                      key={index.toString()}
                      className={cx(classes.filter, selectedIndex === item && classes.active)}
                      onClick={event => handleListItemClick(event, item)}
                    >
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item md={9} xs={12}>
            <div className={classes.massonry}>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <ScrollAnimation animateOnce animateIn="fadeInUpShort" offset={-100} delay={200} duration={0.4}>
                    <div>
                      {caseData.map((item, index) => {
                        if (item.size === 'big') {
                          return renderCard(item, index);
                        }
                        return false;
                      })}
                    </div>
                  </ScrollAnimation>
                </Grid>
                <Grid item sm={6} md={5} xs={12}>
                  <ScrollAnimation animateOnce animateIn="fadeInUpShort" offset={-100} delay={400} duration={0.4}>
                    <div>
                      {caseData.map((item, index) => {
                        if (item.size === 'medium') {
                          return renderCard(item, index);
                        }
                        return false;
                      })}
                    </div>
                  </ScrollAnimation>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CaseStudies;
