import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WooCommerceProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace with your own WooCommerce API credentials
    const consumerKey = 'cs_e2d1d0fb9953fadcf00d45e700a460e872268a1f';
    const consumerSecret = 'ck_8abddcfde6f6c36bb0359a12f89ccb00567a3c86';

    // Replace with your store URL and API version
    const baseUrl = 'http://localhost/wordpress/wp-json/wc/v3/orders';
    const endpoint = '/products';

    // Create an Axios instance with authentication headers
    const api = axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`,
      },
    });

    // Fetch products from the WooCommerce API
    api.get('http://localhost/wordpress/wp-json/wc/v3/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h1>WooCommerce Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WooCommerceProducts;
