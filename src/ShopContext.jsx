import { createContext, useContext,  useEffect,  useReducer } from "react";
import shopReducer,{initialState} from "./shopReducer";

export const ShopContext = createContext(initialState);

export const ShopProvider =({ children })=>{
    const  [state , dispatch] =useReducer(shopReducer,initialState);


    useEffect(() => {
		localStorage.setItem(
			"cart_items",
			JSON.stringify({ total: state.total, products: state.products })
		);
	}, [state]);



    const calculateTotalPrice = (products)=>{
        let total =0;
        products.forEach((product)=>{
            total+=product.price * product.quantity;
        });

        dispatch({
            type: "CALCULATE_TOTAL_PRICE",
            payload: {
                total,
            },
    });
    };

    const addToCart = (product)=>{
        
        const productIndex=state.products.findIndex((P)=>P.id === product.id);

        let updatedProduct = [...state.products];
        if (productIndex === -1) {
			updatedProduct = [
				...updatedProduct,
				{
					...product,
					quantity: 1,
				},
			];
		} else {
			updatedProduct[productIndex] = {
				...updatedProduct[productIndex],
				quantity: updatedProduct[productIndex].quantity + 1,
			};
		}
calculateTotalPrice(updatedProduct);

        dispatch({
            type:"ADD_TO_CART",
            payload:{
                products:updatedProduct,
            },
        });
    };
    
    const updateProductQuantity = (product, newQuantity) => {
        const productIndex=state.products.findIndex((P)=>P.id === product.id);
        let updatedProduct = [...state.products];

        if (newQuantity <= 0 ){
            updatedProduct =updatedProduct.filter(
                (pro) => pro.id !==product.id );
        }else {
            updatedProduct[productIndex]= {
                ...updatedProduct[productIndex], 
                quantity:newQuantity,
            };
        }

        calculateTotalPrice(updatedProduct);
        dispatch({
            type:"UPDATE_PRODUCT_QUANTITY",
            payload:{
                products:updatedProduct
            }
        });
        
    
    };

    const removeFromCart = (product) => {
        const updateProduct = state.products.filter((pro) => pro.id !== product.id );
        calculateTotalPrice(updateProduct);
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                products:updateProduct
            }
        });
    };

    const clearCart = () =>{
        dispatch({
            type:"CLEAR_CART",
            payload:{}
        })
    } 

    const value ={
        products:state.products,
        total:state.total,
        addToCart,
        updateProductQuantity,
        removeFromCart,
        clearCart,
    };
    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>

};

const useShop =() => {
    const context = useContext(ShopContext);

    if (context === undefined){
        throw new Error("context must be inside shop context")

    }
    return context
}
export default useShop;