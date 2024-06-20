import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { useAuthStore } from '../stores/AuthStore';

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  const { session, user } = useAuthStore();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!user && !session ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      ) : (
        <Stack.Screen name="Profile" component={ProfileScreen} />
      )}
    </Stack.Navigator>
  );
}
