import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import LoginScreen from '../Containers/LoginScreen'
import PersonalScreen from '../Containers/PersonalScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  TabNav: { 
    screen: createBottomTabNavigator({
      HomeScreen: HomeScreen,
      PersonalScreen: PersonalScreen,
    })
  },
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
