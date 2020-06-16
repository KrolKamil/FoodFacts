import React, { useEffect } from "react";
import { getProduct, getCategory } from "./api";

const validCategory = async () => {
  try {
    const response = await getCategory("milks");
    console.log("Im valid category response:");
    console.log(response);
  } catch (e) {}
};

const invalidCategory = async () => {
  try {
    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ IMPORTANT NETWORK ERROR IS SAME AS CAN NOT FIND CATEGORY@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    const response = await getCategory("milk");
    console.log("Im invalid category response:");
    console.log(response);
  } catch (e) {}
};

const validProduct = async () => {
  try {
    const response = await getProduct("8430807014887");
    console.log("Im valid product response:");
    console.log(response);
  } catch (e) {}
};

const invalidProduct = async () => {
  try {
    const response = await getProduct("asdjf;lk23jio32fjffj2;;");
    console.log("Im invalid product response:");
    console.log(response);
  } catch (e) {}
};

function App() {
  useEffect(() => {
    validCategory();
    invalidCategory();
    validProduct();
    invalidProduct();
  }, []);

  return <>Hello World</>;
}

export default App;
