import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <input type="email"></input>
      <input type="password"></input>
      <button>login</button>
      <Link to={"/sign-up"}>
        <button> sign-up</button>
      </Link>
    </div>
  );
};

export default Login;
