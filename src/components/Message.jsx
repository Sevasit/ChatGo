import React from "react";
import { auth } from "../firebase";

const styles = {
  container:
    "flex items-center shadow-xl m-6 py-2 px-3 rounded-tl-full rounded-tr-full ",
  name: "absolute mt-[-4rem] text-gray-800 text-xs",
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

const Message = (props) => {
  const messageClass =
    props.message.uid === auth.currentUser.uid
      ? `${styles.sent}`
      : `${styles.received}`;

  return (
    <div>
      <div className={`${styles.container} ${messageClass}`}>
        <p className={styles.name}>{props.message.name}</p>
        <p>{props.message.text}</p>
      </div>
    </div>
  );
};

export default Message;
