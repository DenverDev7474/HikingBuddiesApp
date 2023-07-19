import AuthContent from '../../components/AuthContent';
import {useEffect} from 'react';
import {useLoginUserMutation} from '../../common/services/user.service';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LoadingOverlay from '../../components/LoadingOverlay';

const LoginScreen = () => {
  const [loginUser, {data, error, isLoading, isSuccess}] = useLoginUserMutation();
  const navigation = useNavigation();

  console.log('isLoading', isLoading);

const handleLogin = ({username, password}) => {
  loginUser({username, password});
};


  useEffect(() => {
    if (isSuccess) {
      console.log('isSuccess', isSuccess);
      return navigation.replace('Main');
    } else if (error) {
      console.log('error', error);
      Alert.alert(
        'Login Error',
        error.message,
        [{text: 'OK'}],
      );
    }
  }, [isSuccess, error, data]);



  return (
    <>   
      { isLoading && <LoadingOverlay /> ||
      <AuthContent 
        isLogin={true}
        onSubmit={handleLogin}
      />
      }
    </>
  );
}

export default LoginScreen;
