import { Formik } from 'formik';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import {
  VStack,
  Center,
  FormControl,
  Heading,
  Input,
  Button,
  Flex,
  Box,
  TextArea,
} from 'native-base';

export function CreatePostScreen() {
  const navigation = useNavigation();

  const createTask = (newTask) => {
    add(newTask);
    navigation.navigate('Post');
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Título precisa de no mínimo 2 letras')
      .max(24, 'Título muito grande')
      .required('Obrigatório'),
    description: Yup.string()
      .min(8, 'Descrição precisa de no mínimo 8 letras')
      .max(60, 'Descrição muito grande'),
    content: Yup.string()
      .min(8, 'Conteudo precisa ter no mínimo 8 letras')
      .max(100, 'Você chegou no limite de caracteres')
      .required('Obrigatório'),
  });

  return (
    <Flex safeArea>
      <Center h={'full'}>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="coolGray.800">
            Novo Post
          </Heading>
          <Formik
            validationSchema={validationSchema}
            initialValues={{ title: '', description: '', content: '' }}
            onSubmit={(values, { resetForm }) => {
              createTask(values);
              resetForm(this.initialValues);
            }}>
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
            }) => (
              <VStack mb="11" mt="5" space={3}>
                <FormControl isRequired isInvalid={errors.title ? true : false}>
                  <FormControl.Label>Título </FormControl.Label>
                  <Input
                    name="title"
                    type="text"
                    onChangeText={handleChange('title')}
                    onBlur={handleBlur('title')}
                    touched={touched.title}
                    error={errors.title}
                    value={values.title}
                  />

                  {errors.title && touched.title ? (
                    <FormControl.ErrorMessage>
                      {errors.title}
                    </FormControl.ErrorMessage>
                  ) : null}
                </FormControl>

                <FormControl isInvalid={errors.description ? true : false}>
                  <FormControl.Label>Descrição</FormControl.Label>
                  <Input
                    name="description"
                    type="text"
                    onChangeText={handleChange('description')}
                    onBlur={handleBlur('description')}
                    value={values.description}
                    touched={touched.description}
                    error={errors.description}
                  />

                  {errors.description && touched.description ? (
                    <FormControl.ErrorMessage>
                      {errors.description}
                    </FormControl.ErrorMessage>
                  ) : null}
                </FormControl>

                <FormControl
                  isRequired
                  isInvalid={errors.content ? true : false}>
                  <FormControl.Label>Conteúdo</FormControl.Label>
                  <TextArea
                    name="content"
                    type="text"
                    onChangeText={handleChange('content')}
                    onBlur={handleBlur('content')}
                    value={values.content}
                    touched={touched.content}
                    error={errors.content}
                  />

                  {errors.content && touched.content ? (
                    <FormControl.ErrorMessage>
                      {errors.content}
                    </FormControl.ErrorMessage>
                  ) : null}
                </FormControl>

                <Button
                  type="submit"
                  mt="2"
                  colorScheme="purple"
                  onPress={handleSubmit}>
                  Criar
                </Button>
              </VStack>
            )}
          </Formik>
        </Box>
      </Center>
    </Flex>
  );
}
