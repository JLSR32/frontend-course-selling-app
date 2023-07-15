import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        if (data.username) {
          setUserEmail(data.username);
        }
      });
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4,
      }}
    >
      <div>
        <Typography variant="h6">Coursera</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 10 }}>
          <Button
            variant={"contained"}
            onClick={() => {
              // window.location = "/signup"
              navigate("/signup");
            }}
          >
            Sign Up
          </Button>
        </div>
        <div>
          <Button
            variant={"contained"}
            onClick={() => {
              // window.location = "/signin"
              navigate("/signin");
            }}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
