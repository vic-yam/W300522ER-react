import PropTypeChild from "./PropTypeChild";

const FatherPropTypes = () => {
  const obj = { address: "Ma'ale Adummim" };
  const image = { url: "https://cdn.pixabay.com/photo/2019/12/18/19/22/christmas-4704706_960_720.jpg", alt: "Wowww this is Apple Watch"}
  const arr = [1, 2, 3];
  const arrayOfObjects = [{ isNice: false }, { isNice: false }];
  return (
    <PropTypeChild
      numOrStr="asd"
      number1OrTwo={1}
      str="some string value"
      num={2}
      bool={true}
      arr={arr}
      obj={obj}
      cb={console.log}
      arrayOfObjects={arrayOfObjects}
      image={image}
    />
  );
};

export default FatherPropTypes;
