import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import LogoV2 from "../ui/LogoV2";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: flex-start;
  padding-top: 10%;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <LogoV2 />
      <Heading as="h4">Log In To Your Account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
