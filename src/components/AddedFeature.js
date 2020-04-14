import React from 'react';
// import { connect } from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

//not needed b/c passed down from AddedFeatures
// const mapStateToProps = state => {
//   return {
//     feature: state.feature
//   }
// }

// export default connect(mapStateToProps, {})(AddedFeature);

export default AddedFeature;
