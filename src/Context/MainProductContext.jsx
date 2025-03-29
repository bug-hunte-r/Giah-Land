import { createContext, useContext, useEffect, useState } from "react";

const MainProductContext = createContext(null)

export function MainProductsProvider({children}) {
   const [allProducts, setAllProducts] = useState([]);
   const [housePlants, setHousePlants] = useState([])
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      fetchProucts()
   } ,[])

   async function fetchProucts() {
      setLoading(true)
      const response = await fetch('https://giahland-api.vercel.app/api/products');
      const data = await response.json();
      console.log(data)
      setAllProducts(prev => [...data.products])
      setHousePlants(data.products.filter(product => product.category === 'آپارتمانی'))
      setLoading(false)
   }
   return (
      <MainProductContext.Provider value={{allProducts, loading, housePlants}}>
         {children}
      </MainProductContext.Provider>
   )
}

export const useMainProducts = () => useContext(MainProductContext)