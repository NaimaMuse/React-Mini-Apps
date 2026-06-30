import { useState } from "react";

// Import your images
import candidateAImg from "../img/image 2.jpg";
import candidateBImg from "../img/image 1.jpg";
import candidateCImg from "../img/images.jpg";

function Voting() {
  const [candidateA, setCandidateA] = useState(0);
  const [candidateB, setCandidateB] = useState(0);
  const [candidateC, setCandidateC] = useState(0);

  const [totalVotes, setTotalVotes] = useState(0);
  const [history, setHistory] = useState([]);

  function voteCandidate(name) {
    const currentTime = new Date().toLocaleString();

    if (name === "Candidate A") {
      setCandidateA(candidateA + 1);
    } else if (name === "Candidate B") {
      setCandidateB(candidateB + 1);
    } else {
      setCandidateC(candidateC + 1);
    }

    setTotalVotes(totalVotes + 1);

    setHistory([
      ...history,
      {
        candidate: name,
        time: currentTime,
      },
    ]);
  }

  function resetElection() {
    setCandidateA(0);
    setCandidateB(0);
    setCandidateC(0);
    setTotalVotes(0);
    setHistory([]);
  }

  return (
    <div className="voting-page">

      <div className="voting-header">
        <h1>🗳️ Voting System</h1>
        <p>Choose your preferred candidate</p>
      </div>

      <div className="candidate-container">

        {/* Candidate A */}

        <div className="candidate-card">

          <img
            src={candidateAImg}
            alt="Candidate A"
            className="candidate-image"
          />

          <h2>Candidate A</h2>

          <p className="party">Unity Party</p>

          <div className="vote-count">
            {candidateA} Votes
          </div>

          <button
            className="vote-btn"
            onClick={() => voteCandidate("Candidate A")}
          >
            Vote
          </button>

        </div>

        {/* Candidate B */}

        <div className="candidate-card">

          <img
            src={candidateBImg}
            alt="Candidate B"
            className="candidate-image"
          />

          <h2>Candidate B</h2>

          <p className="party">Justice Party</p>

          <div className="vote-count">
            {candidateB} Votes
          </div>

          <button
            className="vote-btn"
            onClick={() => voteCandidate("Candidate B")}
          >
            Vote
          </button>

        </div>

        {/* Candidate C */}

        <div className="candidate-card">

          <img
            src={candidateCImg}
            alt="Candidate C"
            className="candidate-image"
          />

          <h2>Candidate C</h2>

          <p className="party">Progress Party</p>

          <div className="vote-count">
            {candidateC} Votes
          </div>

          <button
            className="vote-btn"
            onClick={() => voteCandidate("Candidate C")}
          >
            Vote
          </button>

        </div>

      </div>

      {/* Summary */}

      <div className="vote-summary">

        <div className="summary-card">
          <h3>Total Votes</h3>
          <h1>{totalVotes}</h1>
        </div>

        <button
          className="reset-election"
          onClick={resetElection}
        >
          Reset Election
        </button>

      </div>

      {/* Vote History */}

      <div className="history-card">

        <div className="history-header">
          <h2>Vote History</h2>
        </div>

        {history.length === 0 ? (
          <p className="no-history">
            No votes have been recorded yet.
          </p>
        ) : (
          <table className="history-table">

            <thead>

              <tr>
                <th>#</th>
                <th>Candidate</th>
                <th>Date & Time</th>
              </tr>

            </thead>

            <tbody>

              {history.map((item, index) => (

                <tr key={index}>

                  <td>{index + 1}</td>

                  <td>{item.candidate}</td>

                  <td>{item.time}</td>

                </tr>

              ))}

            </tbody>

          </table>
        )}

      </div>

    </div>
  );
}

export default Voting;