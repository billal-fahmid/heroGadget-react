import { getStoredCart } from "../../utils/fakeDB"


export const productsAndCartData =async() =>{
    const productsData = await fetch('products.json')
    const products = await productsData.json();
    const savedCart = getStoredCart();

    const cartArray = []

    for (const id in savedCart) {
        const foundProduct = products.find(product => product.id === id)
        if (foundProduct) {
          const quantity = savedCart[id]
          foundProduct.quantity = quantity
          cartArray.push(foundProduct)
        }
      }
      return {cartArray,products};

}

// export {productsAndCartData}
