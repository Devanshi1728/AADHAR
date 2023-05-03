import { Box, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { userSchema } from "../Schemas";

const AdminForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    homeAddress: "",
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState();

  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: userSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: async (values, action) => {
        if (values) {
          await axios
            .post("http://localhost:8000/api/aadhar", values)
            .then((res) => {
              if (res.data.success) {
                toast.success(res.data.message);
                setUserData(res.data.data);
              }
            })
            .catch((e) => {
              toast.error(e.response.data.message);
            });
        } else {
          toast.error("Add all required data");
        }
        action.resetForm();
      },
    });

  return (
    <Box
      sx={{
        width: "500px",
        maxWidth: "100%",
        justifyContent: "center",
        margin: "0 auto",
        padding: "30px",
        backgroundColor: "aliceblue",
      }}
    >
      <h2>Add User data</h2>
      <form onSubmit={handleSubmit} className="formWrapper">
        <TextField
          required
          label="FirstName"
          name="firstName"
          onChange={handleChange}
          value={values?.firstName}
          onBlur={handleBlur}
          fullWidth
          margin="normal"
        />
        {touched.firstName && errors.firstName !== "" ? (
          <p className="form-error">{errors.firstName}</p>
        ) : null}
        <TextField
          required
          label="LastName"
          name="lastName"
          onChange={handleChange}
          value={values?.lastName}
          onBlur={handleBlur}
          fullWidth
          margin="normal"
        />
        {touched.lastName && errors.lastName !== "" ? (
          <p className="form-error">{errors.lastName}</p>
        ) : null}
        <TextField
          required
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={values?.email}
          onBlur={handleBlur}
          fullWidth
          margin="normal"
        />
        {touched.email && errors.email !== "" ? (
          <p className="form-error">{errors.email}</p>
        ) : null}
        <TextField
          required
          label="Mobile"
          type="phone"
          name="phoneNumber"
          onChange={handleChange}
          value={values?.phoneNumber}
          onBlur={handleBlur}
          fullWidth
          margin="normal"
        />
        {touched.phoneNumber && errors.phoneNumber !== "" ? (
          <p className="form-error">{errors.phoneNumber}</p>
        ) : null}
        <TextField
          required
          label="Home Address"
          type="text"
          multiline
          name="homeAddress"
          onChange={handleChange}
          value={values?.homeAddress}
          onBlur={handleBlur}
          fullWidth
          margin="normal"
        />
        {touched.homeAddress && errors.homeAddress !== "" ? (
          <p className="form-error">{errors.homeAddress}</p>
        ) : null}
        <TextField
          required
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          autoComplete="current-password"
          value={values?.password}
          onBlur={handleBlur}
          fullWidth
          margin="normal"
        />
        {touched.password && errors.password !== "" ? (
          <p className="form-error">{errors.password}</p>
        ) : null}
        <Button variant="contained" type="submit" size="large">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default AdminForm;
