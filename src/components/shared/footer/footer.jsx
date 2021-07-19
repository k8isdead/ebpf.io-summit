import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import LinkedInIcon from 'icons/linkedin.inline.svg';
import TwitterIcon from 'icons/twitter.inline.svg';
import Logo from 'images/logo.inline.svg';

const Footer = (props) => (
  <footer className="py-14" aria-labelledby="footerHeading">
    <h2 id="footerHeading" className="sr-only">
      Footer
    </h2>
    <Container className="flex items-center justify-between">
      <Logo />
      <Link className="font-bold text-primary-2" to="/">
        Code of Conduct
      </Link>
      <div className="flex items-center space-x-6">
        <Link to="/" target="_blank" rel="noopener">
          <TwitterIcon />
        </Link>
        <Link to="/" target="_blank" rel="noopener">
          <LinkedInIcon />
        </Link>
      </div>
    </Container>
  </footer>
);

export default Footer;
