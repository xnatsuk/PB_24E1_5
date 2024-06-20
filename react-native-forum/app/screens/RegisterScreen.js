import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Heading,
  Icon,
  Input,
  VStack,
  HStack,
  Link,
  Text
} from 'native-base';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {useAuthStore} from '../stores/AuthStore';
import { MaterialIcons } from '@expo/vector-icons';

export function RegisterScreen() {
  const { register } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation()
  

  const handleRegister = async () => {
    setLoading(true);
    register(email, password, username)
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
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            Bem Vindo(a)!
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: 'warmGray.200',
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs">
            Realize seu cadastro para continuar.
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
            </FormControl>
            <FormControl>
              <FormControl.Label>Nome de Usuário</FormControl.Label>
              <Input
                type="text"
                value={username}
                onChangeText={setUsername}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="account-circle" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
              />
            </FormControl>
            <Button
              mt="2"
              colorScheme="purple"
              onPress={() => handleRegister()}
              leftIcon={
                <Icon as={<MaterialIcons name="person-add" />} size={5} ml="2" />
              }
              isLoading={loading}>
              Pronto
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600">
                Já tenho uma conta.{' '}
              </Text>
              <Link
                  onPress={()=> navigation.navigate('Login')}
                _text={{
                  color: 'orange.500',
                  fontWeight: 'medium',
                  fontSize: 'sm',
                }}>
                Entrar
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </Flex>
  );
}
