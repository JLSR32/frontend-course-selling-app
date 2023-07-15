import { Button, Card, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Course() {
  let { courseId } = useParams();

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

  let course;

  for (var i = 0; i < courses.length; i++) {
    if (courses[i].id == courseId) {
      course = courses[i];
    }
  }

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CourseCard course={course} />
      <UpdateCard courses={courses} course={course} setCourses={setCourses} />
    </div>
  );
}

function CourseCard(props) {
  const course = props.course;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          border: "2px solid black",
          margin: 10,
          width: 300,
          minHeight: 200,
        }}
      >
        <Typography textAlign={"center"} varient="h6">
          {course.title}
        </Typography>
        <Typography textAlign={"center"} varient="subtitle1">
          {" "}
          {course.description}
        </Typography>
        <img src={course.imageLink} style={{ width: 300 }}></img>
      </Card>
    </div>
  );
}

function UpdateCard(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const course = props.course;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant="outlined" style={{ width: 400, padding: 20 }}>
        <Typography>Update Course Details</Typography>
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
            setDescription(e.target.value);
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
            fetch("http://localhost:3000/admin/courses/" + course.id, {
              method: "PUT",
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
            }).then((res) => {
              res.json().then((data) => {
                let updatedCourses = [];
                for (let i = 0; i < props.courses.length; i++) {
                  if (props.courses[i].id == course.id) {
                    updatedCourses.push({
                      id: course.id,
                      title: title,
                      description: description,
                      imageLink: imageLink,
                    });
                  } else {
                    updatedCourses.push(props.courses[i]);
                  }
                }
                props.setCourses(updatedCourses);
              });
            });
          }}
        >
          Update Course
        </Button>
      </Card>
    </div>
  );
}

export default Course;
 //1:25