"use client";

import React, { useState } from 'react';
import ResultPage from './ResultPage';

interface Team {
  name: string;
  logo: string;
}

const teams: Team[] = [
  { name: 'Arsenal', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/arsenal.football-logos.cc.png' },
  { name: 'Aston Villa', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/aston-villa.football-logos.cc.png' },
  { name: 'Bournemouth', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/bournemouth.football-logos.cc.png' },
  { name: 'Brentford', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/brentford.football-logos.cc.png' },
  { name: 'Brighton & Hove Albion', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/brighton.football-logos.cc.png' },
  { name: 'Burnley', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/burnley.football-logos.cc.png' },
  { name: 'Chelsea', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/chelsea.football-logos.cc.png' },
  { name: 'Crystal Palace', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/crystal-palace.football-logos.cc.png' },
  { name: 'Everton', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/everton.football-logos.cc.png' },
  { name: 'Fulham', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/fulham.football-logos.cc.png' },
  { name: 'Leeds United', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/leeds-united.football-logos.cc.png' },
  { name: 'Liverpool', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/liverpool.football-logos.cc.png' },
  { name: 'Manchester City', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/manchester-city.football-logos.cc.png' },
  { name: 'Manchester United', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/manchester-united.football-logos.cc.png' },
  { name: 'Newcastle United', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/newcastle.football-logos.cc.png' },
  { name: 'Nottingham Forest', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/nottingham-forest.football-logos.cc.png' },
  { name: 'Sunderland', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/sunderland.football-logos.cc.png' },
  { name: 'Tottenham Hotspur', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/tottenham.football-logos.cc.png' },
  { name: 'West Ham United', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/west-ham.football-logos.cc.png' },
  { name: 'Wolverhampton Wanderers', logo: '/logo/english-premier-league-2025-2026.football-logos.cc/1500x1500/wolves.football-logos.cc.png' },
];


const Page: React.FC = () => {
  const [homeTeam, setHomeTeam] = useState<Team | null>(null);
  const [awayTeam, setAwayTeam] = useState<Team | null>(null);
  const [matchTime, setMatchTime] = useState('');
  const [matchDay, setMatchDay] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [homeWinPercentage, setHomeWinPercentage] = useState(0); // Add this for the result page

  const handleHomeTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTeam = teams.find((team) => team.name === event.target.value);
    setHomeTeam(selectedTeam || null);
  };

  const handleAwayTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTeam = teams.find((team) => team.name === event.target.value);
    setAwayTeam(selectedTeam || null);
  };

  const handleMatchTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMatchTime(event.target.value);
  };

  const handleMatchDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMatchDay(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (homeTeam?.name === awayTeam?.name) {
      alert('Please select different teams for home and away');
      return;
    }
    // More realistic prediction: 20-80 range (simulating competitive matches)
    const randomPercentage = Math.floor(Math.random() * 61) + 20;
    setHomeWinPercentage(randomPercentage);
    setShowResult(true);
  };

  if (showResult) {
    return (
      <ResultPage
        setShowResult={setShowResult}
        homeTeam={homeTeam?.name || ''}
        awayTeam={awayTeam?.name || ''}
        matchTime={matchTime}
        matchDay={matchDay}
        homeWinPercentage={homeWinPercentage}
        homeTeamLogo={homeTeam ? homeTeam.logo : ""}
        awayTeamLogo={awayTeam ? awayTeam.logo : ""}
      />
    );
  }

  const TeamSelector = ({ title, value, onChange, selectedTeamName }: { title: string, value: Team | null, onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void, selectedTeamName?: string }) => {
    const availableTeams = selectedTeamName
      ? teams.filter(team => team.name !== selectedTeamName)
      : teams;

    return (
      <div className='flex flex-col items-center gap-8'>
        <h3 className='font-bold text-purple-950'>{title}</h3>
        <div className='w-40 h-40'>
          <img src={value?.logo} className='w-full h-full'/>
        </div>
        <select
          className="w-full border border-gray-400 rounded px-3 py-2  text-black"
          onChange={onChange}
          value={value?.name || ''}
        >
          <option value="" className='text-slate-400'>Select a team</option>
          {availableTeams.map((team) => (
            <option key={team.name} value={team.name}>
              {team.name}
            </option>
          ))}
        </select>
      </div>
    )
  }

  const PredictorFormMain = () => {
    // Generate times from 11:30 to 23:30 in 30-minute intervals
    const matchTimes = Array.from({ length: 25 }, (_, i) => {
      const totalMinutes = 11.5 * 60 + i * 30;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = Math.floor(totalMinutes % 60);
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    });

    return (
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-purple-950 font-bold">Match Time</h3>
        <div className="flex flex-col gap-4 w-full text-center">
          <input
            type="text"
            placeholder="Search or type time"
            list="matchTimesList"
            className="w-full border border-gray-400 rounded px-3 py-2 text-black"
            onChange={handleMatchTimeChange}
            value={matchTime}
          />
          <datalist id="matchTimesList">
            {matchTimes.map((time) => (
              <option key={time} value={time} />
            ))}
          </datalist>
          <h3 className="text-purple-950 font-bold">Match Day</h3>
          <select
            className="w-full border border-gray-400 rounded px-3 py-2  text-black"
            onChange={handleMatchDayChange}
            value={matchDay}
          >
            <option value="">Select a day</option>
            {['Saturday',
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',].map(
              (day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              )
            )}
          </select>
        </div>
        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-3 px-6 rounded text-lg disabled:bg-purple-400 disabled:hover:cursor-default hover:cursor-pointer"
          disabled={!homeTeam || !awayTeam || !matchTime || !matchDay}
        >
          Predict
        </button>
      </div>
    )
  }

  return (
    <div className=" flex flex-col items-center h-screen w-screen bg-gray-100">
      <div className='flex items-center w-full bg-purple-950 p-4'>
      <img src="/logo/Priemier league logo image.png" alt="Premier League Logo" className="h-10 w-10 mr-2" />
        <h1 className="text-xl font-bold text-white text-center">
          Premier League
        </h1>
        <p> - Fantasy Predictor</p>
      </div>
      <div className='flex flex-col items-center w-full'>
        <h2 className="text-purple-950 font-bold p-4 text-xl">Match Predictor</h2>
        <form
          onSubmit={handleSubmit}
          className="flex w-full px-20 justify-between max-sm:px-4">
          {/* Home Team */}
          <TeamSelector title={"HOME TEAM"} value={homeTeam} onChange={handleHomeTeamChange} selectedTeamName={awayTeam?.name} />

          {/* Match Time and Day and Submit*/}
          <PredictorFormMain />

          {/* Away Team */}
          <TeamSelector title="AWAY TEAM" value={awayTeam} onChange={handleAwayTeamChange} selectedTeamName={homeTeam?.name} />
        </form>
      </div>

    </div>
  );
};

export default Page;
