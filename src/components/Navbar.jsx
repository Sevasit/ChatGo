import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Signin from "./Signin";
import Logout from "./Logout";

const styles = {
  nav: `rounded-t-md bg-emerald-700 h-20 flex justify-between items-center p-5`,
  logo: `font-bold text-white text-2xl uppercase tracking-widest  `,
};

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={styles.nav}>
      <h1 className={styles.logo}>chatgo</h1>
      {user ? <Logout /> : <Signin />}
    </div>
  );
};

export default Navbar;
