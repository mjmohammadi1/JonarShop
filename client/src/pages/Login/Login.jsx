import { useState, useEffect } from "react";
import { login } from "../../redux/stateApiRequests";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
  Error,
} from "./styles";

const Login = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  const location = useLocation().state;
  const targetPage = location.from.pathname;
  const dispatch = useDispatch();

  const handleUserInput = (input, type) => {
    return type === "username" ? setUsername(input) : setPassword(input);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    login(dispatch, {
      username,
      password,
    });
  };
  useEffect(() => {
    currentUser && props.history.push(`${targetPage}`);
  }, [currentUser]);

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder='username'
            onChange={(event) =>
              handleUserInput(event.target.value, "username")
            }
          />
          <Input
            placeholder='password'
            type='password'
            onChange={(event) =>
              handleUserInput(event.target.value, "password")
            }
          />
          <Button onClick={(event) => handleLogin(event)} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
