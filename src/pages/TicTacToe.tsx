import React, { useState } from "react";
import { Navigation } from "../layouts/navigation";
import { Main } from "../layouts/main";
import { Typography } from "../components/Typography";
import { Button } from "../components/button";

const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function calculateWinner(squares: string[]) {
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}

const Square = ({ value, onSquareClick }): React.ReactElement => (
    <div
        className="p-12 text-center text-6xl border border-gray-500 cursor-pointer"
        onClick={onSquareClick}
    >
        {value || "-"}
    </div>
);

const Board = ({
    xIsNext,
    squares,
    onPlay,
}: {
    xIsNext: boolean;
    squares: string[];
    onPlay: (value: string[]) => void;
}): React.ReactElement => {
    const handleClick = (i: number) => {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    };

    const winner = calculateWinner(squares);

    return (
        <>
            <Typography size="h4">
                {winner
                    ? `Winner: ${winner}`
                    : `Next player: ${xIsNext ? "X" : "O"}`}
            </Typography>
            <div className="grid grid-cols-3 gap-4">
                <Square
                    value={squares[0]}
                    onSquareClick={() => handleClick(0)}
                />
                <Square
                    value={squares[1]}
                    onSquareClick={() => handleClick(1)}
                />
                <Square
                    value={squares[2]}
                    onSquareClick={() => handleClick(2)}
                />

                <Square
                    value={squares[3]}
                    onSquareClick={() => handleClick(3)}
                />
                <Square
                    value={squares[4]}
                    onSquareClick={() => handleClick(4)}
                />
                <Square
                    value={squares[5]}
                    onSquareClick={() => handleClick(5)}
                />

                <Square
                    value={squares[6]}
                    onSquareClick={() => handleClick(6)}
                />
                <Square
                    value={squares[7]}
                    onSquareClick={() => handleClick(7)}
                />
                <Square
                    value={squares[8]}
                    onSquareClick={() => handleClick(8)}
                />
            </div>
        </>
    );
};

const Game = (): React.ReactElement => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares: string[] = history[currentMove];

    const handlePlay = (nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    };

    const jumpTo = (nextMove) => {
        setCurrentMove(nextMove);
    };

    return (
        <>
            <div className="game-board">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div className="mt-12">
                <ul className="flex flex-col gap-2">
                    {history.map((squares, move) => (
                        <li key={move}>
                            <Button onClick={() => jumpTo(move)}>
                                {move > 0
                                    ? `Go to move #${move}`
                                    : "Go to game start"}
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const TicTacToe = () => (
    <>
        <Navigation />
        <Main>
            <Game />
        </Main>
    </>
);

export default TicTacToe;
