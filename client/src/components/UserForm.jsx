import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AadharCard from "./AadharCard";

const UserForm = () => {
  const initialData = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialData);
  const [userData, setUserData] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    const userRecord = JSON.parse(localStorage.getItem("user"));
    setUserData(userRecord);
  }, []);

  const handleSubmit = async () => {
    console.log("data in use form-", data);
    if (data) {
      await axios
        .post("http://localhost:8000/api/login", data)
        .then((res) => {
          if (res.data.success) {
            setUserData(res.data.data);
            localStorage.setItem("user", JSON.stringify(res.data.data));
          }
        })
        .catch((e) => {
          toast.error(e.response.data.error);
        });
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <h3>Login here to view your AADHAR Card</h3>
      <div className="form">
        <div className="form-fields">
          <TextField
            required
            label="Email"
            type="email"
            onChange={handleChange}
            name="email"
            margin="dense"
          />
          <TextField
            required
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={handleChange}
            name="password"
            margin="dense"
          />
        </div>
        <Button
          variant="contained"
          onClick={handleSubmit}
          className="submitBtn"
        >
          Login
        </Button>
      </div>
      {userData && <AadharCard data={userData} />}
    </>
  );
};

export default UserForm;
