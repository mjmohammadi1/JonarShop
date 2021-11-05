import { useState } from "react";
import { login } from "../../redux/stateApiRequests";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect } from "react";

const Login = (props) => {
  const user = useSelector((state) => state.user.currentUser);

  const location = useLocation().state;
  const targetPage = location.from.pathname;
  const history = useHistory();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleUserInput = (input, type) => {
    if (type === "username") {
      return setUsername(input);
    } else {
      return setPassword(input);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    login(dispatch, {
      username,
      password,
    });
  };

  useEffect(() => {
    if (user?.isAdmin) {
      props.history.push(`${targetPage}`);
    }
  }, [user]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        placeholder='username'
        onChange={(event) => handleUserInput(event.target.value, "username")}
      />
      <input
        placeholder='password'
        type='password'
        onChange={(event) => handleUserInput(event.target.value, "password")}
      />
      <button
        onClick={(event) => handleLogin(event)}
        style={{ padding: 10, width: 100 }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
