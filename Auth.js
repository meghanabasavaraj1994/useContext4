import React, { useContext } from "react";
import AuthContext from "./AuthContext";

const Auth = () => {

const auth = useContext(AuthContext);
console.log(auth.status);
return (
	<div>
	<h1>Are you authenticated?</h1>
	{auth.status ?
<p>Yes</p>
:
<p>No</p>
}

	<button onClick={auth.login}>Click To Login</button>
	</div>
);
};
export default Auth;
