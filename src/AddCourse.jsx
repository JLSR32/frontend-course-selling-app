import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");
  const [imageLink, setImageLink] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant="outlined" style={{ width: 400, padding: 20 }}>
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          fullWidth={true}
          label="Title"
          varient="outlined"
        />
        <br />
        <br />
        <TextField
          onChange={(e) => {
            setDiscription(e.target.value);
          }}
          fullWidth={true}
          label="Description"
          varient="outlined"
        />
        <br />
        <br />
        <TextField
          onChange={(e) => {
            setImageLink(e.target.value);
          }}
          fullWidth={true}
          label="Image Link"
          varient="outlined"
        />
        <br />
        <Button
          variant={"contained"}
          size={"large"}
          onClick={() => {
            fetch("http://localhost:3000/admin/courses", {
              method: "POST",
              body: JSON.stringify({
                title: title,
                description: description,
                imageLink: imageLink,
                published: true,
              }),
              headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            });
          }}
        >
          Add Course
        </Button>
      </Card>
    </div>
  );
}

export default AddCourse;
