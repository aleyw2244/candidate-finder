import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import CandidateSearch from "./pages/CandidateSearch";
import PotentialCandidates from "./pages/SavedCandidates"; 
import NotFound from "./pages/ErrorPage"; 

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<CandidateSearch />} />
          <Route path="/potential" element={<PotentialCandidates />} /> {}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
