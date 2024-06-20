import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthNavigator } from './AuthNavigator';
import { PostNav, CreatePostNav } from './AppNavigator';
import Link from './Link';
import { MaterialIcons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

function RootNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'rgb(255, 149, 57)',
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="App"
        component={PostNav}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="forum" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="New"
        component={CreatePostNav}
        options={{
          tabBarIcon: ({ color }) => (
             <MaterialIcons name="add-circle" size={24}  color={color}/>
          ),
        }}
      />
      <Tabs.Screen 
      name="Auth" 
      component={AuthNavigator} 
      options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-box" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

export function Navigation() {
  return (
    <NavigationContainer linking={Link}>
      <RootNavigator />
    </NavigationContainer>
  );
}
