import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddCourse from "./AddCourse.jsx";
import Appbar from "./Appbar.jsx";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import Courses from "./Courses.jsx";
import Course from "./Course.jsx";

function App() {
  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}
    >
      <Router>
        <Appbar />
        <Routes>
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/course/:courseId" element={<Course />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
