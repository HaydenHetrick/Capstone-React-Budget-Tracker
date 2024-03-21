import React, { useRef } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Home() {
  const messageRef = useRef();
  const ref = collection(firestore,"messages");

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    let data = {
      message: messageRef.current.value,
    };

    try {
      await addDoc(ref, data);
      console.log("Document successfully written!");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSave}>
        <label>Enter Message:</label>
        <input type="text" ref={messageRef} />
        <button type='submit' className='btn btn-primary'>Save</button>
      </form>
    </div>
  );
}
