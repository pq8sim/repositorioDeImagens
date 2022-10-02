import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Imagens from '../pages/Imagens';


const Stack = createStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator InitialRouteName='Home'>
                <Stack.Screen name="Home" component={Imagens} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}