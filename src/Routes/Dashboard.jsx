import React, { useState } from "react";

function Dashboard() {
  const [yourName, setYourName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [runsScored, setRunsScored] = useState("");
  const [ballsPlayed, setBallsPlayed] = useState("");
  const [_4Scored, set4Scored] = useState("");
  const [_6scored, set6Scored] = useState("");

  const handleYourName = (e) => setYourName(e.target.value);

  const handleUserName = (e) => setUserName(e.target.value);

  const handlePassword = (e) => setPassword(e.target.value);

  const handlePlayerName = (e) => setPlayerName(e.target.value);

  const handleRun = (e) => setRunsScored(e.target.value);

  const handleBalls = (e) => setBallsPlayed(e.target.value);

  const handle4 = (e) => set4Scored(e.target.value);

  const handle6 = (e) => set6Scored(e.target.value);

  const handleSubmit = (e) => {
    if (yourName.match(/[a-zA-Z]/)) e.preventDefault();
  };

  return (
    <div className="py-5 space-y-4">
      <h1 className="mx-auto w-fit font-bold text-3xl text-emerald-600">
        Contribute with Us
      </h1>
      <form className="w-fit mx-auto space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded-lg px-2 w-full"
          onChange={handleYourName}
          value={yourName}
          required
        />
        <input
          type="email"
          placeholder="username"
          className="border rounded-lg px-2"
          onChange={handleUserName}
          value={userName}
          required
        />
        <input
          type="password"
          placeholder="password"
          className="border rounded-lg px-2"
          onChange={handlePassword}
          value={password}
          required
        />
        <input
          type="text"
          placeholder="Player Name"
          className="border rounded-lg px-2 w-full"
          onChange={handlePlayerName}
          value={playerName}
          required
        />
        <div className="space-x-5">
          <input
            type="text"
            placeholder="Runs Scored"
            className="border rounded-lg px-2"
            onChange={handleRun}
            value={runsScored}
            required
          />
          <input
            type="text"
            placeholder="Balls Played"
            className="border rounded-lg px-2"
            onChange={handleBalls}
            value={ballsPlayed}
            required
          />
        </div>
        <div className="space-x-5">
          <input
            type="text"
            placeholder="4s Scored"
            className="border rounded-lg px-2"
            onChange={handle4}
            value={_4Scored}
            required
          />
          <input
            type="text"
            placeholder="6s Scored"
            className="border rounded-lg px-2"
            onChange={handle6}
            value={_6scored}
            required
          />
        </div>
        <input
          type="button"
          value="Submit"
          onClick={handleSubmit}
          className=" border rounded-lg border-emerald-600 py-1 px-2 text-emerald-600 hover:bg-emerald-600 hover:text-white hover:font-semibold mx-48"
        />
      </form>
    </div>
  );
}

export default Dashboard;
