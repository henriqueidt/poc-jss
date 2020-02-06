import React from 'react';
import PropTypes from 'prop-types';
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';

const Hero = ({ fields }) => (
  <div className="hero-container">
    {
      fields.title && 
        <h1 className="title"><Text field={fields.title} /></h1>
    }

    {
      fields.description && 
        <p><Text field={fields.description} /></p>
    }

    {
      fields.link && 
        <p className="lead mb-0">
          <Link field={fields.link} className="link" />
        </p>
    }
  </div>
);

Hero.propTypes = {
  fields: PropTypes.object.isRequired
};

Hero.defaultProps = {
  fields: {
    title: '',
    description: '',
    link: ''
  }
};

export default Hero;
