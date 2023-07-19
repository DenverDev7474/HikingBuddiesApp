import { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import FlatButton from './FlatButton';
import AuthForm from './AuthForm';


function AuthContent({ isLogin, onSubmit }) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    username: false,
    firstName: false,
    lastName: false,
    city: false,
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  const switchAuthModeHandler = () => {
    if (isLogin) {
      navigation.replace('Signup');
    } else {
      navigation.replace('Login');
    }
  }

  const submitHandler = (credentials) => {
    let { username, firstName, lastName, city, email, confirmEmail, password, confirmPassword } = credentials;

    username = username.trim();
    firstName = firstName.trim();
    lastName = lastName.trim();
    city = city.trim();
    email = email.trim();
    password = password.trim();
    confirmEmail = confirmEmail.trim();
    confirmPassword = confirmPassword.trim();

    const usernameIsInvalid = username.length < 3;
    const firstNameIsInvalid = firstName.length < 2;
    const lastNameIsInvalid = lastName.length < 2;
    const cityIsInvalid = city.length < 2;
    const emailIsInvalid = email.length < 6;
    const passwordIsInvalid = password.length < 6;


    const emailIsValid = email.includes('@');
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (isLogin){
        if (usernameIsInvalid || passwordIsInvalid) {
          setCredentialsInvalid({
            username: usernameIsInvalid,
            password: passwordIsInvalid,
          });
        } 
        else {
            onSubmit({ username, password });
        }
    } else {
        if (usernameIsInvalid || firstNameIsInvalid || lastNameIsInvalid || cityIsInvalid || emailIsInvalid || passwordIsInvalid || !emailIsValid || !emailsAreEqual || !passwordsAreEqual) {
          setCredentialsInvalid({
            username: usernameIsInvalid,
            firstName: firstNameIsInvalid,
            lastName: lastNameIsInvalid,
            city: cityIsInvalid,
            email: emailIsInvalid,
            password: passwordIsInvalid,
            confirmEmail: !emailIsValid || !emailsAreEqual,
            confirmPassword: !passwordsAreEqual || (password === '' && confirmPassword === ''),
          });
        }
        else {
              onSubmit({ username, firstName, lastName, city, confirmEmail, email, password, confirmPassword });
        } 
    }
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? 'Create a new account' : 'Log in instead'}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#0068B0',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
});