// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the FeaturedPost component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'FeaturedPost',
    fields: [
      { name: 'eyebrow', type: CommonFieldTypes.SingleLineText },
      { name: 'title', type: CommonFieldTypes.GeneralLink },
      { name: 'date', type: CommonFieldTypes.Date },
      { name: 'description', type: CommonFieldTypes.SingleLineText },
      { name: 'readMore', type: CommonFieldTypes.GeneralLink },
      { name: 'image', type: CommonFieldTypes.Image },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}