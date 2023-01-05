import React from "react";
import Navbar from "./components/Navbar";
// import { auth } from "./firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

const styles = {
  appContainer: `max-w-[728px] mx-auto text-center rounded-md`,
  background: `flex flex-col h-[90vh] bg-slate-200 mt-10 shadow-xl relative rounded-md`,
};

function App() {
  return (
    <div className={styles.appContainer}>
      <section className={styles.background}>
        {/*Navbar*/}
        <Navbar />
        {/*Chat*/}
      </section>
    </div>
  );
}

export default App;
