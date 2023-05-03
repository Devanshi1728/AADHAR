import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AadharCard from "./AadharCard";
import { useLocation, useNavigate } from "react-router-dom";

const UserForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialData = {
    email: "",
    password: "",
    role: location.state || "client",
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
    if (data) {
      await axios
        .post("http://localhost:8000/api/login", data)
        .then((res) => {
          if (res.data.admin) {
            navigate("/admin");
          }
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
    <div className="loginWrapper">
      <h2>Login here to view your AADHAR Card</h2>
      <div className="form">
        <div className="form-fields">
          <TextField
            required
            label="Email"
            type="email"
            onChange={handleChange}
            name="email"
            margin="dense"
            fullWidth
          />
          <TextField
            required
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={handleChange}
            name="password"
            margin="dense"
            fullWidth
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
    </div>
  );
};

export default UserForm;
