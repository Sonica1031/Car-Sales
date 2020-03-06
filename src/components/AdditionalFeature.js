import React from 'react';
import { buyItem } from './Actions';
import { connect } from 'react-redux';
// import {state} from './Reducer';
const AdditionalFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onMouseDown={() => buyItem(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = (state) => {
  return { additionalFeatures: state.additionalFeatures } 
};

export default connect(mapStateToProps, {buyItem})(AdditionalFeature)