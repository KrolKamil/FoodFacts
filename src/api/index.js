import axios from "axios";

const openFoodFactsAPI = axios.create({
  baseURL: "https://world.openfoodfacts.org",
});

export async function getProduct(productId) {
  try {
    const response = await openFoodFactsAPI.get(
      `/api/v0/product/${productId}.json`
    );
    if (response.data.status === 0) {
      return { error: true, message: response.data.status_verbose };
    }
    return response.data;
  } catch (e) {
    return { error: true, message: e.message };
  }
}

export async function getCategory(categoryName, page = 1) {
  try {
    const response = await openFoodFactsAPI.get(
      `/category/${categoryName}/${page}.json`
    );
    return response.data;
  } catch (e) {
    return { error: true, message: e.message };
  }
}
