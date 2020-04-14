import React from 'react';
// import { connect } from "react-redux";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
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

// export default connect(mapStateToProps, {})(AdditionalFeature);

export default AdditionalFeature;
