import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './app/navigation/RootNavigator';
import { AuthProvider } from './app/context/AuthProvider';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
