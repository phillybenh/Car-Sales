import React from 'react';
import { connect } from 'react-redux';

import { removeItem } from "../actions/removeItem";


const AddedFeature = props => {
  // console.log(props)

  const removeItem = (item) => {
    props.removeItem(item);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeItem(props.feature)}>X</button>
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

export default connect(null, { removeItem })(AddedFeature);

