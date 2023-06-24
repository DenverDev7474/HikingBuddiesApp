import AuthContent from "../../components/AuthContent";
import { useRegisterUserMutation } from "../../common/services/user.service";
import LoadingOverlay from "../../components/LoadingOverlay";
import { useState } from "react";

const SignupScreen = ({ navigation }) => {
  const [isAuthenticating, setIsAuthenticating] = useState();
  const [updateUser, result] = useRegisterUserMutation();
  const [response, setResponse] = useState({});

  const signUpHandler = ({
    username,
    firstName,
    lastName,
    city,
    confirmEmail,
    email,
    confirmPassword,
    password,
  }) => {
    try {
      setIsAuthenticating(true);
      updateUser({
        username,
        firstName,
        lastName,
        city,
        confirmEmail,
        email,
        confirmPassword,
        password,
      });

      setResponse(response);
      setIsAuthenticating(false);
      return response;
    } catch (error) {
      console.log("HAS ERROR:", error);
    }
  };

  return <AuthContent onAuthenticate={signUpHandler} isLogin={false} />;
};

export default SignupScreen;
