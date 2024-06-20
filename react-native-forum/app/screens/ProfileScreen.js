import { MaterialIcons } from '@expo/vector-icons';
import {
  Box,
  Heading,
  Image,
  Text,
  Stack,
  Avatar,
  HStack,
  Icon,
} from 'native-base';

export function ProfileScreen() {
  return (
    <Box rounded="pill" w="100%" shadow={4} mx={{ base: 'auto', md: 0 }}>
      <Image
        h={64}
        roundedTop="pill"
        source={{
          uri: 'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148901163.jpg',
        }}
        alt="NativeBase Card"
      />
      <Stack p={4} space={2}>
        <Avatar
          source={{
            uri: 'https://via.placeholder.com',
          }}>
          <Avatar.Badge bg={'green.200'} />
        </Avatar>
        <Heading color="blueGray.700">Usuário</Heading>
        <HStack alignItems="end" space={5}>
          <Text color="blueGray.600">
            <Icon
              as={<MaterialIcons name="auto-awesome" />}
              size={4}
              mr="2"
              color="yellow.400"
            />
            Reputação:{' '}
            <Text bold color="purple.500">
              Legendary
            </Text>
          </Text>

          <Text color="blueGray.600">
            Pontuação:{' '}
            <Text bold color="purple.500">
              250
            </Text>
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
}
