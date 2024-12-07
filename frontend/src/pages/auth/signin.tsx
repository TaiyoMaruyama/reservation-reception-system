import AuthForm from "../../components/Auth/AuthForm";
import AuthCard from "../../components/Auth/AuthCard";
import AuthPage from "../../components/Auth/AuthPage";

const Signin = () => {
  return (
    <AuthPage>
      <AuthCard>
        <AuthForm id="signin" />
      </AuthCard>
    </AuthPage>
  );
};

export default Signin;
