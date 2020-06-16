import React, { useEffect, useState } from "react";
import { getProduct, getCategory } from "./api";
import ProductDetails from './components/ProductDetails';
import Typography from "@material-ui/core/Typography";
import CircularProgress from '@material-ui/core/CircularProgress';
import { red } from "@material-ui/core/colors";
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
    return response;
  } catch (e) { }
};

const invalidProduct = async () => {
  try {
    const response = await getProduct("asdjf;lk23jio32fjffj2;;");
    console.log("Im invalid product response:");
    console.log(response);
    return response;
  } catch (e) {}
};

function App() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [productId, setProductId] = useState('');

  const onButtonPressHandler = () => {
    setLoading(true);
    validProduct(productId)
      .then((details) => {
        if (details.error) {
          setError(details.message);
          return;
        }
        setProduct(details.product);
      })
      .finally(() => setLoading(false));
  }
  const onTextChange = (text) => {
    setProductId(text);
  }

  useEffect(() => {
    setLoading(true);
    validProduct().then((details) => {
      if (details.error) {
        setError(details.message);
        return;
      }
      setProduct(details.product);
    })
    .finally(() => setLoading(false));
  }, []);

  return (
    <>
      { loading && <div><CircularProgress style={{ margin: '0 auto', display: 'block' }} /></div> }
      { error && <Typography style={{ color: red[700], textAlign: 'center' }}>An error occurred: {error}</Typography> }
      <InputBar onTextChange={onTextChange} textValue={productId} onButtonPressHandler={onButtonPressHandler} />
      { product && <ProductDetails details={product} /> }
    </>
  );
}

export default App;
