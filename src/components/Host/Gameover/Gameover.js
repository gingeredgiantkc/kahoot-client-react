import React from 'react';
import { socket } from '../../Global/Header';

export default function Gameover(props) {
  return (
    <div>
      <FinalRankings rankings={ props.finalRankings } totalNumberOfQuestions={ props.totalNumberOfQuestions } />
    </div>
  )
}

const FinalRankings = (props) => {

  const playerRankings = props.rankings.map((r, i) => (
    <div key={ i }>
      { r.rank } - { r.nickname } - { r.score } pts.
    </div>
  ))

  return (
    <div>
      { playerRankings }
    </div>
  )
}
