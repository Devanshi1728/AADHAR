import "./App.css";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AdminForm from "./components/AdminForm";
import UserForm from "./components/UserForm";
import { Toaster } from "react-hot-toast";

function App() {
  const [role, setRole] = React.useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  return (
    <>
      <Toaster />
      <div>
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 200, marginBottom: "40px" }}
        >
          <InputLabel id="demo-simple-select-standard-label">
            Login as{" "}
          </InputLabel>
          <Select
            id="demo-simple-select-standard"
            value={role}
            onChange={handleChange}
            label="Role"
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </Select>
        </FormControl>
        {role === "admin" ? <AdminForm /> : <UserForm />}
      </div>
    </>
  );
}

export default App;
