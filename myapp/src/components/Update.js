import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Ubdate() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState(null);
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
  }, []);
  const updateData = () => {
    axios
      .update(`https://62d3e34acd960e45d44f7ccf.mockapi.io/fakeAPI/${id}`, {
        firstName,
        lastName,
      })
      .then((res) => {
        console.log(res);
        navigate("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        placeholder="firstName"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      ></input>
      <input
        placeholder="lastName"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      ></input>
      <button onClick={updateData}>LogIn</button>
    </div>
  );
}

export default Ubdate;