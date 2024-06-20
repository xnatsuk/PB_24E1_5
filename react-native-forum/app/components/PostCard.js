import {
  Box,
  Stack,
  Heading,
  Link,
  Text,
  HStack,
  Avatar,
  Flex,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function PostCard(props) {
  const {
    author,
    updated_at,
    created_at,
    title,
    description,
    likes,
    messageCount,
    avatar_url,
    id,
  } = props;

  const navigation = useNavigation()
  return (
    <Box p={5} rounded="xl" shadow={4} w="100%">
      <Stack space={6}>
        <HStack space={3} alignItems="center">
          <Avatar
            size={'sm'}
            source={{
              uri: avatar_url ?? 'https://via.placeholder.com/150',
            }}
          />
          <Text color="purple.600" fontWeight="md">
            Autor
          </Text>
        </HStack>

        <Stack space={3}>
          <Heading size="lg">
            <Link href={`post/${id}`} isUnderlined={false} color="orange.400" onPress={navigation.navigate('Post', {
              id
            })}>
              Titulo do Post
            </Link>
          </Heading>
          <Text color="coolGray.800" fontWeight="medium">
            Descricao do Post
          </Text>
        </Stack>

        <HStack
          justifyContent="space-between"
          alignItems="flex-end"
          flexShrink={1}>
          <Stack space={1}>
            <HStack space={3} alignItems="center" flexShrink={1}>
              <Text
                flexShrink={1}
                fontWeight="medium"
                color="coolGray.500"
                fontSize="xs">
                Criado: 10.04.2021
              </Text>
            </HStack>

            <HStack space={3} alignItems="center">
              <Text color="coolGray.500" fontWeight="medium" fontSize="xs">
                Editado: 10.04.2021
              </Text>
            </HStack>
          </Stack>
          <Stack direction="row" space={6}>
            <HStack space={1} alignItems="center">
              <MaterialIcons name="comment" size={24} color="black" />
              <Text>12</Text>
            </HStack>

            <HStack space={1} alignItems="center">
              <MaterialCommunityIcons
                name="heart-multiple"
                size={24}
                color="red"
              />
              <Text>135</Text>
            </HStack>
          </Stack>
        </HStack>
      </Stack>
      <HStack
        position="absolute"
        top={3}
        right={3}
        space={2}
        alignItems="center"></HStack>
    </Box>
  );
}
