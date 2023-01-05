import React from "react";
import { auth } from "../firebase";

const styles = {
  button:
    "border border-stone-900 bg-white px-4 py-1 font-medium hover:bg-emerald-200 rounded-md transition duration-300",
};

const Logout = () => {
  const signOut = () => {
    signOut(auth);
  };

  return (
    <button onClick={() => auth.signOut()} className={styles.button}>
      Logout
    </button>
  );
};

export default Logout;
