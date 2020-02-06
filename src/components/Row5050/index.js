import React from 'react';
import PropTypes from 'prop-types';
import { Text, Placeholder } from '@sitecore-jss/sitecore-jss-react';

const Row5050 = ({ rendering }) => (
  <div className="row-5050-container">
    <div>
      <Placeholder name="jss-row-5050-left" rendering={rendering} />
    </div>
    <div>
      <Placeholder name="jss-row-5050-right" rendering={rendering} />
    </div>
  </div>
);

Row5050.propTypes = {
  fields: PropTypes.object.isRequired
};

Row5050.defaultProps = {};

export default Row5050;
