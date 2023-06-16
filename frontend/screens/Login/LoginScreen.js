import AuthContent from "../../components/AuthContent";
import { useState } from "react";
import { useLoginUserMutation } from "../../common/services/user.service";
import LoadingOverlay from "../../components/LoadingOverlay";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [loginUser] = useLoginUserMutation();

  async function loginHandler({ username, password }) {
    try {
      const payload = await loginUser({ username, password });
      console.log("payload", payload);
      return payload;
    } catch (error) {
      console.log("rejected", error);
      Alert.alert(
        "Authentication failed Error",
        "Please check your username and password and try again."
      );
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Loggin you in" />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
