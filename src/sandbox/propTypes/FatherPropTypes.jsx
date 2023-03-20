import PropTypeChild from "./PropTypeChild";

const FatherPropTypes = () => {
  const obj = { address: "Ma'ale Adummim" };
  const arr = [1, 2, 3];
  const arrayOfObjects = [{ isNice: false }, { isNice: false }];
  return (
    <PropTypeChild
      str="some string value"
      num={2}
      bool={true}
      arr={arr}
      obj={obj}
      cb={console.log}
      arrayOfObjects={arrayOfObjects}
    />
  );
};

export default FatherPropTypes;
