import React from 'react';
import PropTypes from 'prop-types';
import { Text, DateField, Image} from '@sitecore-jss/sitecore-jss-react';

const FeaturedPost = ({ fields }) => (
  <div>
    <p>FeaturedPost Component</p>
    <DateField
      field={fields.date}
      render={(date) => date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
    />
    <Image media={fields.image} />
  </div>
);

FeaturedPost.propTypes = {
  fields: PropTypes.object.isRequired
};

FeaturedPost.defaultProps = {
  fields: {
    heading: 'Default Heading'
  }
};

export default FeaturedPost;
