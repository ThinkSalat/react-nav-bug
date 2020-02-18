import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './src/Home';
import Profile from './src/Profile';
import Bill from './src/Bill';

export const screens = {
	Home,
	Profile,
	Bill,
}






const MainNavigator = createStackNavigator(
  screens,
	{
		// headerMode: 'none',
		initialRouteName: 'Home'
	}
);

const AppNavigator = createAppContainer(MainNavigator)

export default AppNavigator;
