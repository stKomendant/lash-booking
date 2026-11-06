import {createBrowserRouter, Navigate} from "react-router"
import CoursePage from "@/pages/course-page/coursePage"

export const router = createBrowserRouter([
     { path: "/course", element: <CoursePage /> },
  { path: "*", element: <Navigate to="/course" replace /> },
])
