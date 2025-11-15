import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from './pages/main-page.jsx';
import ResumePage from './pages/resume-page.jsx';
import ProjectPage from './pages/project-page.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/projects" element={<ProjectPage />} />
            </Routes>
            <footer className="fixed bottom-2 right-2 bg-base-200 p-3 rounded-lg text-sm">
                <p>This website was made by Ayden Coleman</p>
                <p>This website was last updated 11/14/2025</p>
            </footer>
        </Router>
    )
}

export default App;