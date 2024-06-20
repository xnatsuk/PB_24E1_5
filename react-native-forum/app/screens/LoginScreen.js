import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Text,
  VStack,
} from 'native-base';

import { useState } from 'react';
import { useAuthStore } from '../stores/AuthStore';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export function LoginScreen() {
  const { login } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation()

  const handleLogin = async () => {
    setLoading(true);
    login(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Flex safeArea>
      <Center h={'full'}>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="coolGray.800">
            Olá!
          </Heading>
          <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
            Faça login para continuar.
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                value={email}
                onChangeText={setEmail}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="mail" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Senha</FormControl.Label>
              <Input
                type="password"
                value={password}
                onChangeText={setPassword}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="lock" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
              />
              <Link
                _text={{
                  fontSize: 'xs',
                  fontWeight: '500',
                  color: 'orange.500',
                }}
                alignSelf="flex-end"
                mt="1">
                Esqueceu a senha?
              </Link>
            </FormControl>
            <Button
              mt="2"
              colorScheme="purple"
              onPress={() => handleLogin()}
              leftIcon={
                <Icon as={<MaterialIcons name="login" />} size={5} ml="2" />
              }
              isLoading={loading}>
              Entrar
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600">
                Não possui conta?{' '}
              </Text>
              <Link
                  onPress={()=> navigation.navigate('Register')}
                _text={{
                  color: 'orange.500',
                  fontWeight: 'medium',
                  fontSize: 'sm',
                }}>
                Cadastrar
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </Flex>
  );
}
