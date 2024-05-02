import axios from 'axios';

export async function getProducts() {
  try {
    const response = await axios.get(
      'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC'
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
}
