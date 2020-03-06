import React from 'react';
import {connect} from 'react-redux';
import {removeFeature} from './Actions';

const AddedFeature = props => {
  console.log("random", props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return { 
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures,
    car: state.cars } 
};

export default connect(mapStateToProps, {removeFeature})(AddedFeature)