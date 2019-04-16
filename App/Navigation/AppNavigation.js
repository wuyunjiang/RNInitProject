import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import LoginScreen from '../Containers/LoginScreen'
import PersonalScreen from '../Containers/PersonalScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import DrawerScreen from '../Components/Drawer'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  DrawerNav: {
    screen: createDrawerNavigator({
      TabNav: { 
        screen: createBottomTabNavigator({
          HomeScreen: { screen: HomeScreen },
          PersonalScreen: { screen: PersonalScreen },
        })
      },
    },{
      contentComponent: DrawerScreen,
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
