import GoogleButton from "react-google-button";

import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";

const googleSingin = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const Signin = () => {
  return (
    <div>
      <GoogleButton onClick={googleSingin} />
    </div>
  );
};

export default Signin;
