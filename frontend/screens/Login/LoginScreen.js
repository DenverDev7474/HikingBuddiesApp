import AuthContent from '../../components/AuthContent';
import {useState, useEffect} from 'react';
import {useLoginUserMutation} from '../../common/services/user.service';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function LoginScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginUser, {loading, error}] = useLoginUserMutation();
  const navigation = useNavigation();

  useEffect(() => {
    if (error) {
      Alert.alert(
        'Authentication failed',
        `Error: ${error.message}. Please try again.`,
      );
    } else if (isAuthenticated) {
      navigation.replace('Main');
    }
  }, [isAuthenticated, error]);

  const handleLogin = async ({username, password}) => {
    try {
      const loginResponse = await loginUser({username, password});
      console.log('loginResponse', loginResponse)
      if (loginResponse.data.user) {
        setIsAuthenticated(true);
      }
      return loginResponse;
    } catch (error) {
      return null;
    }
  };

  return (
    <>
      {loading && <LoadingOverlay message="Logging in..." />}
      <AuthContent isLogin onAuthenticate={handleLogin} />
    </>
  );
}

export default LoginScreen;
