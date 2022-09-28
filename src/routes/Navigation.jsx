import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'

const Stack = createStackNavigator()

export default function Navidation() {
    return (
        <NavigationContainer>
            <Stack.Navigator InitialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}