
import React, { useState, createContext } from 'react';
import { getProductForHomePage , getProductDetai, search} from './ProductService';
export const ProductConText = createContext();
export const ProductConTextProvider = (props) => {
    const { children } = props;
    const [cart, setcart] = useState([])
    const onGetProductForHomePage = async () => {
        try {
            const res = await getProductForHomePage();
            if (res.error == false) {
                return res.data;
            }
        } catch (error) {
            console.log('Get Gia Tri Home', error);
        }
        return [];
    }

    const onGetProductDetai = async (id) => {
        try {
            const res = await getProductDetai(id);
            if (res.error == false) {
                return res.data;
            }
        } catch (error) {
            console.log('Get Gia Tri Detai ne', error);
        }
        return null;
    }

    const upDateCart = (product,quantity,price,checked) =>{
        let _cart=cart;
        
        if (_cart.length==0) {
            _cart.push({product,quantity,price,checked});
        } else {
            let check = _cart.filter(item => item.product._id == product._id);
            if (check.length==0) {
                _cart.push({product,quantity,price,checked});
            }else{
                if(quantity<=0){
                    _cart.filter(item => item.product._id != product._id)
                }
                _cart = cart.map(item=>{
                    if (item.product._id == product._id) {
                        item.quantity  = quantity;
                        item.checked = checked;
                    }
                    return item;
                })
            }
           
        }
        setcart(_cart);
    }
    const getCart= ()=> cart;

    const SaveCart = async()=>{
        try {
            let total=0;
            let products = [];
            for (let index = 0; index < cart.length; index++) {
                const element = cart[index];
                total += element.quantity * element.price;
                products.push({
                    product:element.product._id,
                    price:element.price,
                    quantity:element.quantity,
                })
            }
            await SaveCart({total,products});
            
        } catch (error) {
            console.log('Get Gia Tri save', error);
        }
        return null;
    }

    const onSearch = async(keyword)=>{
        try {
            const res =  await search(keyword);
            if (res.error == false) {
                return res.data;
            }setcart([...[]]);
        } catch (error) {
            console.log('Get Gia Tri Detai', error);
        }
        return [];
    }
    return (
        <ProductConText.Provider
            value={{
                cart,getCart,setcart,
                onGetProductForHomePage,onGetProductDetai,upDateCart,SaveCart,onSearch,
            }}
        >
            {children}
        </ProductConText.Provider>
    );
};


