import PropTypes from "prop-types";

const PropTypeChild = ({
  str,
  num,
  bool,
  arr,
  obj,
  cb,
  arrayOfObjects,
  numOrStr,
}) => {
  //   console.table({ str, num, bool, arr, obj, cb, arrayOfObjects });
  return <div>PropTypeChild, {str}</div>;
};

const imageType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

PropTypeChild.propTypes = {
  numOrStr: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  number1OrTwo: PropTypes.oneOf([1, 2]),
  str: PropTypes.string,
  num: PropTypes.number,
  bool: PropTypes.bool,
  //   obj: PropTypes.objectOf(PropTypes.string),
  obj: PropTypes.exact({
    address: PropTypes.string,
  }),
  arr: PropTypes.arrayOf(PropTypes.number),
  arrayOfObjects: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.bool)),
  cb: PropTypes.func,
  image: imageType.isRequired,
};

export default PropTypeChild;
