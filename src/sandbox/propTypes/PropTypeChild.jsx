import PropTypes from "prop-types";

const PropTypeChild = ({ str, num, bool, arr, obj, cb, arrayOfObjects }) => {
 console.table({ str, num, bool, arr, obj, cb, arrayOfObjects });
  return <div>PropTypeChild, {str}</div>;
};

PropTypeChild.propTypes = {
  str: PropTypes.string,
  num: PropTypes.number,
  bool: PropTypes.bool,
  obj: PropTypes.objectOf(PropTypes.string),
  arr: PropTypes.arrayOf(PropTypes.number),
  arrayOfObjects: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.bool)),
  cb: PropTypes.func,
};

export default PropTypeChild;
