import React, { useEffect, useState } from "react";
import { getProduct, getCategory } from "./api";
import ProductDetails from './components/ProductDetails';
import InputBar from './components/InputBar';

const validCategory = async () => {
  try {
    const response = await getCategory("milks");
    console.log("Im valid category response:");
    console.log(response);
  } catch (e) { }
};

const invalidCategory = async () => {
  try {
    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ IMPORTANT NETWORK ERROR IS SAME AS CAN NOT FIND CATEGORY@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    const response = await getCategory("milk");
    console.log("Im invalid category response:");
    console.log(response);
  } catch (e) { }
};

const validProduct = async (productId) => {
  try {
    const response = await getProduct(productId);
    console.log("Im valid product response:");
    console.log(response);
    console.debug({ response });
    return response;
  } catch (e) { }
};

const invalidProduct = async () => {
  try {
    const response = await getProduct("asdjf;lk23jio32fjffj2;;");
    console.log("Im invalid product response:");
    console.log(response);
  } catch (e) { }
};

function App() {
  const [product, setProduct] = useState();
  const [productId, setProductId] = useState('');

  const onButtonPressHandler = () => {
    validProduct(productId).then((details) => setProduct(details.product));
  }
  const onTextChange = (text) => {
    setProductId(text);
  }

  useEffect(() => {
    // validCategory();
    // invalidCategory();
    validProduct().then((details) => setProduct(details.product));
    // invalidProduct();
  }, []);

  return (
    <>
      <InputBar onTextChange={onTextChange} textValue={productId} onButtonPressHandler={onButtonPressHandler} />
      <ProductDetails details={product} />
    </>
  );
}

export default App;
