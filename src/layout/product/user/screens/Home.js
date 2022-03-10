import React,{useContext,useEffect,useState} from 'react'
import { StyleSheet, Text, View, Image, FlatList,Pressable} from 'react-native'
import { ProductConText } from '../../ProductConText';
export const Home = (props) => {
    const { navigation } = props;
    const { onGetProductForHomePage } = useContext(ProductConText);
    const [data, setData] = useState([]);
    
    const [isLoading, setisLoading] = useState(false);
    useEffect(async () => {
        setisLoading(true);
        const res = await onGetProductForHomePage();
        setData(res);
        setisLoading(false);
        return () => {
            res;
        };
    }, []);
    const renderItem = ({ item }) => {
        const { name, products } = item;
        
    return (
        <View style={styles.containerProduct}>
        <Text style={styles.nameProduct}>{name}</Text>
        <View style={styles.productsContainer}>
            {
                products.map(pro => {
                    
                    return (
                        
                        <Pressable onPress={() => navigation.navigate('HomeStack', {id: pro._id})} style={styles.product} key={pro._id}>
                            <View style={styles.productsImageContainer} >
                                <Image style={styles.productImage} resizeMethod='auto'
                                    source={{ uri: pro.images[0] }} />
                            </View>
                            <View style={styles.productNameContainer}>
                                <Text numberOfLines={1} style={styles.productName}>{pro.name}</Text>
                            </View>
                            <View style={styles.productPriceContainer}>
                                <Text  style={styles.productName}>Xuất Xứ : {pro.madein}</Text>
                            </View>
                            <View style={styles.productPriceContainer}>
                                <Text style={styles.productPrice}>{pro.price} VND</Text>
                            </View>

                        </Pressable>
                    )
                })
            }
        </View>
    </View>
    )
}
const renderHeader = () => {
    return (
        <View style={styles.imageContainer}>
            <Image style={styles.image} resizeMethod='auto'
                source={require('../../../../img/brhome.png')} />
        </View>
    )
}
return (
    <View style={styles.container}>
         {
                isLoading == true ?
                <Text style={{alignItems:'center',justifyContent:'center',textAlign:'center',marginTop:400,fontSize:30}}>Loading...</Text>
                :
                <FlatList data={data} 
                renderItem={renderItem}
                keyExtractor={item => item._id}
                ListHeaderComponent={renderHeader} />
            }
    </View>
)
}

const styles = StyleSheet.create({
    nameProduct: {
        marginTop:20,
        fontSize: 24,
        fontWeight: '600',
        color: '#221F1F',
    },
    productPrice: {
        color: '#007537',
        fontSize: 17,
        fontWeight: '600'
    },
    productPriceContainer: {

    },
    productName: {
        fontSize: 16,
        color: '#221F1F',
        fontWeight: '600',
    },
    productNameContainer: {
        marginTop: 4,
    },
    containerProduct: {
        paddingHorizontal: 24,
    },
    productImage: {
        width: 100,
        height: 100,

    },
    productsImageContainer: {
        height: 134,
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        justifyContent: 'center'
    },
    product: {
        width: '46%',
        marginTop: 20,
    },
    productsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: '100%',
        height: 350,
    },
    container: {
        width: '100%',
        height: '100%',
        flexGrow: 1,
        backgroundColor: 'white',
    },
})

