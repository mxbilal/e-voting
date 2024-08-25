import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import CalculatePage from "./Pages/Calculate";
import HomePage from "./pages";
import LayoutPage from "./pages/LayoutPage";

import "./App.css";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RegisteredVoters from "./pages/RegisterVotes.jsx";
import TotalVotes from "./pages/TotalVotes/TotalVotes.jsx";
import CandidateList from "./pages/Candidates";
import PollingStations from "./pages/PoliingStations";
import PollingStationDetail from "./pages/PolingStationDetail";
import VotesDetail from "./pages/VotesDetail";
import CandidateProfile from "./pages/CandidateProfile/ndex.jsx";
import WelcomeBack from "./pages/Welcome";
import VerifyVoter from "./pages/VerifyVoter";
import CheckVoter from "./pages/CheckVoter";
import Booth from "./pages/Booth";

const routes = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login/:name", element: <LoginPage /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "register-voters", element: <RegisteredVoters /> },
      { path: "total-votes", element: <TotalVotes /> },
      { path: "candidates", element: <CandidateList /> },
      { path: "poling-stations", element: <PollingStations /> },
      { path: "poling-station/:id", element: <PollingStationDetail /> },
      { path: "votes-detail", element: <VotesDetail /> },
      { path: "candidate-profile/:id", element: <CandidateProfile /> },

      { path: "welcome", element: <WelcomeBack /> },
      { path: "verify-voter", element: <VerifyVoter /> },
      { path: "check-voter/:cnic", element: <CheckVoter /> },
      { path: "booth", element: <Booth /> },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
