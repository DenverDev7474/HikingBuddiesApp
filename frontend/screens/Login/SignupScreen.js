import AuthContent from "../../components/AuthContent";
import { useRegisterUserMutation } from "../../common/services/user.service";
import { Alert } from "react-native";
import { useEffect, useState } from "react";
import LoadingOverlay from "../../components/LoadingOverlay";

const SignupScreen = ({ navigation }) => {
  const [registerUser, {data, isLoading, isSuccess, error}] = useRegisterUserMutation();

  const signUpHandler = async ({
    username,
    firstName,
    lastName,
    city,
    confirmEmail,
    email,
    confirmPassword,
    password,
  }) => {
    const result = await registerUser({
      username,
      firstName,
      lastName,
      city,
      confirmEmail,
      email,
      confirmPassword,
      password,
    });
  
    if (isSuccess) {
      console.log('success')
      return navigation.replace('Login');
    } else if (result.error) {
      if (result.error.data.error.includes('E11000') || result.error.data.error.includes('A user with the given username is already registered')) {
        Alert.alert(
          'Signup Error',
          'Username or email already exists.',
          [{text: 'OK'}],
        );
      } else {
        Alert.alert(
          'Signup Error',
          error.message,
          [{text: 'OK'}],
        );
      }
    }
  };
  

  return (
    <>
      {isLoading && <LoadingOverlay /> || 
      <AuthContent
      isLogin={false || isSuccess}
      onSubmit={signUpHandler}
      />
      }
    </>
  );
};

export default SignupScreen;
