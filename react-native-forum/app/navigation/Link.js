import * as Linking from 'expo-linking';

export const link = {
  prefixes: Linking.createURL('/'),
  config: {
    screens: {
      Auth: {
        screens: {
          Login: 'login',
          Register: 'register',
        },
      },
      App: {
        screens: {
          Posts: {
            screens: {
              PostListScreen: 'posts',
              CreatePostScreen: 'create',
            },
          },
        },
      },
    },
  },
};
