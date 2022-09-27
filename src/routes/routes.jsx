import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigation } from '@react-navidation/stack';

import Home from '../pages/Home';

const Stack = createStackNavigation();

export default function Navidation() {
    return (
        <NavigationContainer>
            <Stack.Navigator InitialRouteName='Home'>
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}