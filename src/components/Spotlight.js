import React from 'react';
import PropTypes from 'prop-types';

const JoyrideSpotlight = ({ styles }) => {
  if (styles) {
    if (Number.isNaN(styles.height)) {
      styles.height = 0;
    }
    if (Number.isNaN(styles.width)) {
      styles.width = 0;
    }
    if (Number.isNaN(styles.left)) {
      styles.left = 0;
    }
    if (Number.isNaN(styles.top)) {
      styles.top = 0;
    }
  }
  return (
    <div key="JoyrideSpotlight" className="react-joyride__spotlight" style={styles} />
  );
};

JoyrideSpotlight.propTypes = {
  styles: PropTypes.object.isRequired,
};

export default JoyrideSpotlight;
