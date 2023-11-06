import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import JobList from "./pages/JobList";
import Employers2 from "./pages/Employers2";
import Tests2 from "./pages/Tests2";
import Assessment2 from "./pages/Assessment2";
import JobDetail2 from "./pages/JobDetail2";
import Homepage2 from "./pages/Homepage2";
import Employers from "./pages/Employers";
import Tests from "./pages/Tests";
import Assessment from "./pages/Assessment";
import JobDetail from "./pages/JobDetail";
import JobList1 from "./pages/JobList1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/job-list2":
        title = "";
        metaDescription = "";
        break;
      case "/employers2":
        title = "";
        metaDescription = "";
        break;
      case "/tests2":
        title = "";
        metaDescription = "";
        break;
      case "/assessment2":
        title = "";
        metaDescription = "";
        break;
      case "/job-detail2":
        title = "";
        metaDescription = "";
        break;
      case "/homepage2":
        title = "";
        metaDescription = "";
        break;
      case "/employers":
        title = "";
        metaDescription = "";
        break;
      case "/tests":
        title = "";
        metaDescription = "";
        break;
      case "/assessment":
        title = "";
        metaDescription = "";
        break;
      case "/job-detail":
        title = "";
        metaDescription = "";
        break;
      case "/job-list":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/job-list2" element={<JobList />} />
      <Route path="/employers2" element={<Employers2 />} />
      <Route path="/tests2" element={<Tests2 />} />
      <Route path="/assessment2" element={<Assessment2 />} />
      <Route path="/job-detail2" element={<JobDetail2 />} />
      <Route path="/homepage2" element={<Homepage2 />} />
      <Route path="/employers" element={<Employers />} />
      <Route path="/tests" element={<Tests />} />
      <Route path="/assessment" element={<Assessment />} />
      <Route path="/job-detail" element={<JobDetail />} />
      <Route path="/job-list" element={<JobList1 />} />
    </Routes>
  );
}
export default App;
