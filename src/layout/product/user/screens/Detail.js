import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, ToastAndroid } from 'react-native';
import PagerView from 'react-native-pager-view'
import { ProductContext } from '../ProductContext';

const PartialView = (props) => {
    const {product} = props;
    const { price, size, quantity, madein, _id } = product;
    const { updateCart, cart} = useContext(ProductContext);

    const getQuantity = () => {
        if(cart.length ==0){
            return 0;
        }
        let item = cart.filter(i => i.product._id == _id);
        if (item.length > 0){
            return item[0].quantity;
        }
        return 0;
    }

    const [number, setNumber] = useState(getQuantity());

    const onNumberChange = (isAdd) => {
        if (isAdd == true) {
            setNumber(number + 1);
        } else if (isAdd == false && number >= 1) {
            setNumber(number - 1);
        }
    }

    // const { cart, updateCart } = useContext(ProductContext);
    

    const onUpdateCart = () =>{
        updateCart(product, number, price, true);
        ToastAndroid.show('Cập nhật giỏ hàng thành công',ToastAndroid.BOTTOM );
    }

    return (
        <>
            <View style={styles.productContainerInfo}>
                <Text style={styles.productPrice}>{price} VNĐ</Text>
                <Text style={styles.productTitle}>Chi tiết sản phẩm</Text>
                <View style={styles.productDetail}>
                    <Text style={styles.productDetailText}>Kích cỡ</Text>
                    <Text style={styles.productDetailText}>{size}</Text>
                </View>
                <View style={styles.productDetail}>
                    <Text style={styles.productDetailText}>Xuất xứ</Text>
                    <Text style={styles.productDetailText}>{madein}</Text>
                </View>
                <View style={styles.productDetail}>
                    <Text style={styles.productDetailText}>Tình trạng</Text>
                    <Text style={styles.productDetailText}> Còn {quantity} Sản phẩm</Text>
                </View>
            </View>
            <View style={styles.cartDetail}>
                <View style={styles.cartquantity}>
                    <Text style={styles.cartquantityText}>Đã chọn {number} sản phẩm</Text>
                    <View style={styles.cartquantityAction}>
                        <Text onPress={() => onNumberChange(false)} style={styles.removeAction}>-</Text>
                        <Text style={styles.bangAction}>{number}</Text>
                        <Text onPress={() => onNumberChange(true)} style={styles.addAction}>+</Text>
                    </View>
                </View>
                <View style={styles.cartTotal}>
                    <Text style={styles.cartText}>Tạm tính</Text>
                    <Text style={styles.cartbang}>{number * price} đ</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable onPress={onUpdateCart} style={[styles.button, number > 0 ? styles.buttonColor : null]}>
                    <Text style={styles.buttonChon}>Chọn mua</Text>
                </Pressable>
            </View>
        </>
    )
}
const Detail = (props) => {
    const { navigation, route: { params: { id } } } = props;
    
    const [product, setProduct] = useState(null);

    const { onGetProductDetail, updateCart, cart } = useContext(ProductContext);

    useEffect(async () => {
        const res = await onGetProductDetail(id);
        setProduct(res);
        return () => {
            res;
        };
    }, []);

    if (!product) {
        return (<></>)
    }

    const { name, images, price, size, quantity, madein, _id } = product;
 
    
    return (
        <View style={styles.container}>
            <View style={styles.productNameContainer}>
                <Text style={styles.productName}>{name}</Text>
            </View>
            <View style={styles.productContainerImage}>
                <PagerView style={styles.productImagePager} initialPage={0} orientation='horizontal'>
                    {
                        images.map(img =>
                            <Image key={Math.random()}
                                source={{ uri: img }}
                                style={styles.productImage}
                                resizeMode='cover'
                            />
                        )
                    }
                </PagerView>
            </View>
            <PartialView product = {product} />
        </View>
    );
};

export default Detail;

const styles = StyleSheet.create({
    buttonColor: {
        backgroundColor: '#007537',
    },
    buttonChon: {
        fontSize: 16,
        color: 'white',
        textTransform: 'uppercase',
    },
    button: {
        backgroundColor: '#ABABAB',
        borderRadius: 8,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        paddingHorizontal: 24,
        height: 50,
        marginTop: 16,
    },
    cartbang: {
        marginTop: 8,
        textAlign: 'right',
        fontSize: 24,
        fontWeight: '500',
    },
    cartText: {
        color: 'black',
        opacity: 0.6,
    },
    cartTotal: {

    },
    addAction: {
        borderRadius: 5,
        borderWidth: 0.5,
        width: 27.5,
        height: 27.5,
        textAlign: 'center',
        lineHeight: 25.5,
        color: 'black',

    },
    bangAction: {

    },
    removeAction: {
        borderRadius: 5,
        borderWidth: 0.5,
        width: 27.5,
        height: 27.5,
        textAlign: 'center',
        lineHeight: 25.5,
        color: 'black',
    },
    cartquantityAction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    cartquantityText: {
        fontSize: 14,
        opacity: 0.6,
    },
    cartquantity: {

    },
    cartDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    productDetailText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#3A3A3A',
    },
    productDetail: {
        borderBottomColor: '#221F1F',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    productTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#3A3A3A',
        marginTop: 15,
        borderBottomColor: '#221F1F',
        borderBottomWidth: 0.5,
    },
    productPrice: {
        fontSize: 24,
        fontWeight: '500',
        color: '#007537',
    },
    productContainerInfo: {
        paddingHorizontal: 48,
        paddingVertical: 32,

    },
    productImage: {
        width: '100%',
        height: '100%'
    },
    productImagePager: {
        flex: 1,
    },
    productContainerImage: {
        width: '100%',
        height: 270,

    },
    productName: {
        fontSize: 16,
        fontWeight: '500',
    },
    productNameContainer: {
        alignItems: 'center',
        height: 55,
        justifyContent: 'center'
    },
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
    },
})
