import AuthForm from "../../components/Auth/AuthForm";
import AuthCard from "../../components/Auth/AuthCard";
import AuthPage from "../../components/Auth/AuthPage";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <AuthPage>
      <AuthCard>
        <AuthForm
          id="signin"
          onSwitchForm={() => navigate("/signup")}
          onSubmitForm={() => {}}
        />
      </AuthCard>
    </AuthPage>
  );
};

export default Signin;
