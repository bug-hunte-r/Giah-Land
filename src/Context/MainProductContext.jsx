import { createContext, useContext, useEffect, useState } from "react";

const MainProductContext = createContext(null)

export function MainProductsProvider({ children }) {
   const [allProducts, setAllProducts] = useState([]);
   const [housePlants, setHousePlants] = useState([])
   const [decorativePlants, setDecorativePlants] = useState([])
   const [giftPlants, setGiftPlants] = useState([])
   const [loading, setLoading] = useState(false)


   useEffect(() => {
      fetchProucts()
   }, [])

   async function fetchProucts() {
      setLoading(true)
      const response = await fetch('https://giahland-api.vercel.app/api/products');
      const data = await response.json();
      console.log(data)
      setAllProducts(prev => [...data.products])
      setHousePlants(data.products.filter(product => product.category === 'آپارتمانی'))
      setDecorativePlants(data.products.filter(product => product.category === 'تزئینی'))
      setGiftPlants(data.products.filter(product => product.category === 'کادویی'))
      setLoading(false)
   }
   return (
      <MainProductContext.Provider value={{ allProducts, loading, housePlants, decorativePlants, giftPlants }}>
         {children}
      </MainProductContext.Provider>
   )
}

export const useMainProducts = () => useContext(MainProductContext)