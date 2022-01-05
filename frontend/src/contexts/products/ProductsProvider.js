import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = (probs) => {

    const [error, setError] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const controller = new AbortController();

                const res = await fetch("/products", { signal: controller.signal });

                const data = await res.json();

                if (res.status === 200) {
                    setProducts(data);
                } else {
                    const err = new Error(data.error.message);
                    err.status = data.error.status;
                    throw err;
                }
                controller.abort();
            } catch (err) {
                if (err.name === "AbortError") {
                    return console.log("Fetch request aborted");
                }
                setError(err);
            }
        }
        fetchData();
    }, []);

    return (
        <ProductsContext.Provider value={{ error, products, setProducts }}>
            {probs.children}
        </ProductsContext.Provider>
    )
}

export { ProductsContext, ProductsProvider }