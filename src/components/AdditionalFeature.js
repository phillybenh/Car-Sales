import React from 'react';
import { addItem } from "../actions/addItem"


import { connect } from "react-redux";
const AdditionalFeature = props => {

  console.log("AdditionalFeature", props.feature);

const buyItem = (item) => {
  props.addItem(item)
};

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => buyItem(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// not needed b/c passed down from AdditionalFeatures
// const mapStateToProps = state => {
//   return {
//     feature: state.feature,
//   };
// }

export default connect(null, { addItem })(AdditionalFeature);

