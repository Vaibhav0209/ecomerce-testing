const FETCHAPI = {
  fetchAll: async () => {
    try {
      const result = await fetch("https://fakestoreapi.com/products");
      const res = await result.json();
      return res;
    } catch (error) {
      console.log("data is not available");
    }
  },
  fetchId: async (id) => {
    try {
      console.log(id);
      const result = await fetch(`https://fakestoreapi.com/products/${id}`);
      const res = await result.json();
      return res;
    } catch (error) {
      console.log("data is not available");
    }
  },
  fetchProduct: async (query) => {
    try {
      const result = await fetch(`https://fakestoreapi.com/products`);
      const res = await result.json();
      const data = res?.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
      return data;
    } catch (error) {
      console.log("data is not available", error);
    }
  },
};
export default FETCHAPI;
