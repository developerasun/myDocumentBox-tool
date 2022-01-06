import LoggedIn from "./login";
import LoggedOut from "./logout";

function LoginControl(props) {
    const isLoggedIn = props.isLoggedIn;

    return (isLoggedIn ?<LoggedIn username="Jake"/>:<LoggedOut guest="guest"/>);
}

export default LoginControl;