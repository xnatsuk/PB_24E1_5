import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Button, Link } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { PostListScreen } from '../screens/PostListScreen';
import { PostDetailScreen } from '../screens/PostDetailScreen';
import { CreatePostScreen } from '../screens/CreatePostScreen';

const CreatePostStack = createNativeStackNavigator();
export const CreatePostNav = () => {
  return (
    <CreatePostStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      
      <CreatePostStack.Screen name="CreatePost" component={CreatePostScreen} />
    </CreatePostStack.Navigator>
  );
};

const PostStack = createNativeStackNavigator();
export const PostNav = () => {
  return (
    <PostStack.Navigator
      initialRouteName="Post"
      screenOptions={{
        headerShown: false,
      }}>
      <PostStack.Screen name="PostList" component={PostListScreen} />
      <PostStack.Screen name="PostDetail" component={PostDetailScreen} />
    </PostStack.Navigator>
  );
};
