import React ,{useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import UserNavigation from '../product/user/UserNavigationn';
import ProductNavigation from '../product/ProductNavigation';
import { UserContext } from './user/UserContext';
export default Navigation = () => {
    const {isLoggedIn }= useContext(UserContext);
    return (
        <NavigationContainer>
            {
                isLoggedIn == true?
                <ProductNavigation/>:
                <UserNavigation/>
            }
        </NavigationContainer>
    )
}

