import React from 'react';

const StatusMessage = ({ winner, IsXNext, squares }) => {
  const noMovesLeft = squares.every(squareValue => squareValue != null);
  const nextPlayer = IsXNext ? 'X' : 'O';
  const statusMessage = winner
    ? `Winner is ${winner} `
    : `Next Player is ${nextPlayer}`;

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <React.Fragment>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </React.Fragment>
      );
    }

    if (!winner && noMovesLeft) {
      return (
        <>
          <span className="text-orange">O</span>and{' '}
          <span className="text-green">X</span>tied{' '}
        </>
      );
    }

    if (!winner && !noMovesLeft) {
      return (
        <>
          Next Player is{' '}
          <span className={IsXNext ? 'text-green' : 'text-orange'}>
            {' '}
            {nextPlayer}
          </span>
        </>
      );
    }
    return null;
  };

  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};

export default StatusMessage;
