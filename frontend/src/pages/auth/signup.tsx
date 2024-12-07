import AuthCard from "../../components/Auth/AuthCard";
import AuthForm from "../../components/Auth/AuthForm";
import AuthPage from "../../components/Auth/AuthPage";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <AuthPage>
      <AuthCard>
        <AuthForm
          id="signup"
          onSwitchForm={() => navigate("/signin")}
          onSubmitForm={() => {}}
        />
      </AuthCard>
    </AuthPage>
  );
};

export default Signup;
