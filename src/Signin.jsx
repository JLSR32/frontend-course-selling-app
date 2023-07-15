import { Card, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant={"h6"}>Welcome Back</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            fullWidth={true}
            label="Email"
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            fullWidth={true}
            label="Password"
            variant="outlined"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <Button
            variant={"contained"}
            size={"large"}
            onClick={() => {
              fetch("http://localhost:3000/admin/login", {
                method: "POST",
                headers: {
                  username: email,
                  password: password,
                  "Content-type": "application/json",
                },
              });
            }}
          >
            Sign In
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signin;
