import { Route, Routes } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ServicesPage from "pages/ServicesPage";
import NotFoundPage from "pages/NotFoundPage";
import TechnologyPage from "pages/TechnologyPage";
import AboutUsPage from "pages/AboutUsPage";

import { ProjectDetailPage } from "pages/ProjectDetailPage";
import { DiscussProjectPage } from "pages/DiscussProjectPage";

import "./assets/css/styles.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route exact path="/project/:id" element={<ProjectDetailPage />} />
        <Route exact path="/aboutus" element={<AboutUsPage />} />
        <Route exact path="/discuss-project" element={<DiscussProjectPage />} />
        <Route path="**" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
