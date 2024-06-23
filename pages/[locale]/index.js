import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Head from 'next/head';
import Hidden from '@mui/material/Hidden';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import BannerSlider from '~/components/Home/BannerSlider';
import About from '~/components/Home/About';
import Services from '~/components/Home/Services';
import Expertise from '~/components/Home/Expertise';
import Testimonials from '~/components/Home/Testimonials';
import CaseStudies from '~/components/Home/CaseStudies';
import CallAction from '~/components/CallAction';
import CompanyLogo from '~/components/CompanyLogo';
import Corner from '~/components/Home/Corner';
import Footer from '~/components/Footer';
import Notification from '~/components/Notification';
import brand from '~/public/text/brand';

function Landing(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.agency.name + ' - Home Page' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          home
        />
        <main className={classes.containerWrap}>
          <section id="home">
            <BannerSlider />
          </section>
          <section
            id="about"
            className={classes.spaceTop}
          >
            <About />
          </section>
          <section
            id="services"
            className={isTablet ? classes.spaceTopShort : classes.spaceTop}
          >
            <Services />
          </section>
          <section
            id="our-expertise"
            className={isMobile ? classes.spaceTopShort : classes.spaceTop}
          >
            <Expertise />
          </section>
          <section
            id="testimonials"
            className={isMobile ? classes.spaceTopShort : classes.spaceTop}
          >
            <Testimonials />
          </section>
          <section id="company" className={cx(classes.spaceTopShort, classes.spaceBottomShort)}>
            <CompanyLogo />
          </section>
          <section id="case-studies">
            <CaseStudies />
          </section>
          <div
            id="call-to-action"
            className={cx(classes.spaceBottom, classes.spaceTopShort)}
          >
            <CallAction />
          </div>
        </main>
        <Hidden mdDown>
          <Corner />
        </Hidden>
        <Footer toggleDir={onToggleDir} />
        <Hidden lgDown>
          <Notification />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
