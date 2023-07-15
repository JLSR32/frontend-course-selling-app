import { Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setCourses(data.courses);
      });
    });
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "warp", justifyContent: "center" }}
    >
      {courses.map((course) => {
        return <Course course={course} />;
      })}
    </div>
  );
}

function Course(props) {
  return (
    <Card
      style={{
        border: "2px solid black",
        margin: 10,
        width: 300,
        minHeight: 200,
      }}
    >
      <Typography textAlign={"center"} varient="h6">
        {props.course.title}
      </Typography>
      <Typography textAlign={"center"} varient="subtitle1">
        {" "}
        {props.course.description}
      </Typography>
      <img src={props.course.imageLink} style={{ width: 300 }}></img>
    </Card>
  );
}

export default Courses;
