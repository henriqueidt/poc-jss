import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder, Text } from '@sitecore-jss/sitecore-jss-react';
import { placeholders } from 'Config';

const Header = ({ rendering, children, fields }) => (
  <header className="site-header" role="banner">
    <div className="page-wrapper">
      {/* {children || <Placeholder name={placeholders.header} rendering={rendering} />} */}
      <Text tag="span" className="blog-header-logo text-dark" field={fields.heading} />
    </div>
  </header>
);

Header.propTypes = {
  rendering: PropTypes.object.isRequired,
  children: PropTypes.object
};

Header.defaultProps = {
  rendering: {},
  fields: {
    heading: 'Default Heading'
  },
};

export default Header;
