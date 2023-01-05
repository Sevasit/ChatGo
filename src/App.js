import React from "react";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const styles = {
  appContainer: `max-w-[728px] mx-auto text-center rounded-md`,
  background: `flex flex-col h-[90vh] bg-slate-200 mt-10 shadow-xl relative rounded-md`,
};

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className={styles.appContainer}>
      <section className={styles.background}>
        {/*Navbar*/}
        <Navbar />
        {/*Chat*/}
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
