import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import JobList from "../pages/JobList";
import JobDetails from "../pages/JobDetails";

const router = createBrowserRouter([
  {
    path: '/careerhub/',
    element: <Mainlayout />,
    children: [
      {
        path: 'joblist',
        element: <JobList />
      },
      {
        path: 'joblist/:jobId',
        element: <JobDetails />
      }
    ]
  }
]);

export default router