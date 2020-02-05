import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const TextInput = ({
  fields,
  classNames,
  disabled
}) => (
  <div
  className='input-container'
  >
    <Text
      field={fields.heading}
      disabled={disabled}
    />
    <input
      type="text"
      disabled={disabled}  
    />
  </div>
);

TextInput.propTypes = {
  fields: PropTypes.object.isRequired
};

TextInput.defaultProps = {
  fields: {
    heading: 'Default Heading'
  },
  classNames: null
};

export default TextInput;
