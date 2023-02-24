import React, { useReducer, useState } from "react";
import { Navigation } from "../layouts/navigation";
import { Main } from "../layouts/main";
import { Typography } from "../components/Typography";
import { Button } from "../components/button";

const ARTIFACTS = {
    X: (
        <svg height="100%" viewBox="0 0 128 128" className="text-gray-900">
            <path
                stroke="rgb(84, 84, 84)"
                strokeWidth={24}
                d="M16,16L112,112"
            />
            <path
                stroke="rgb(84, 84, 84)"
                strokeWidth={24}
                d="M112,16L16,112"
            />
        </svg>
    ),
    O: (
        <svg width={40} viewBox="0 0 128 128" className="text-indigo-900">
            <path
                stroke="rgb(242, 235, 211)"
                strokeDasharray={301.635}
                strokeDashoffset={0}
                d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16"
            />
        </svg>
    ),
};

const WINNING_SEQUENCES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

type Players = {
    firstPlayer?: string;
    secondPlayer?: string;
};

type Piece = {
    player?: string;
    value: React.ReactNode;
    reveal: boolean;
};

const TicTacToe = (): React.ReactElement => {
    const [currentPlayer, setCurrentPlayer] = useState<string | undefined>(
        "Mauro"
    );

    const [pieces, setPieces] = useState<Piece[]>(
        new Array(9).fill({
            player: undefined,
            value: undefined,
            reveal: false,
        })
    );

    const [players, setPlayers] = useReducer(
        (prev: Players, next: Partial<Players>) => ({ ...prev, ...next }),
        {
            firstPlayer: "Mauro",
            secondPlayer: "Bruna",
        }
    );

    const onHandleChange = (
        event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
    ): void => {
        const { name, value } = event.target;
        setPlayers({ ...players, [name]: value });
    };

    const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = (
        event
    ): void => {
        event.preventDefault();

        console.log("Start the Game!");
        setCurrentPlayer(players.firstPlayer);
    };

    const onMove = (pos: number): void => {
        if (!pieces[0].reveal) {
            setPieces((prev) => {
                const shallow = prev;
                shallow[pos] = {
                    reveal: true,
                    player: currentPlayer,
                    value: ARTIFACTS.X,
                };

                return {...prev, ...shallow};
            });
        }
    };

    console.log(pieces);

    return (
        <>
            <Navigation />
            <Main>
                <div className="flex justify-between items-center">
                    <Typography size="h1">Tic-Tac-Toe Game</Typography>
                </div>
                <form
                    onSubmit={onHandleSubmit}
                    className="flex flex-col gap-4 mb-4"
                >
                    <div>
                        <label
                            htmlFor="firstPlayer"
                            className="block my-1 text-sm font-medium text-gray-700"
                        >
                            First Player
                        </label>
                        <input
                            id="firstPlayer"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                            type="text"
                            placeholder="Name of player..."
                            value={players.firstPlayer}
                            onChange={onHandleChange}
                            name="firstPlayer"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="secondPlayer"
                            className="block my-1 text-sm font-medium text-gray-700"
                        >
                            Second Player
                        </label>
                        <input
                            id="secondPlayer"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                            type="text"
                            placeholder="Name of player..."
                            value={players.secondPlayer}
                            onChange={onHandleChange}
                            name="secondPlayer"
                            required
                        />
                    </div>
                    <Button size="lg" className="justify-center" type="submit">
                        Start Game
                    </Button>
                </form>

                <p className="my-2">
                    Player: <strong>{currentPlayer}</strong>
                </p>
                <div className="grid grid-cols-3">
                    {Object.values(pieces).map(({ value }, key) => (
                        <div
                            key={key}
                            className="border border-1 flex items-center justify-center h-40"
                            onClick={() => onMove(key)}
                        >
                            {value}
                        </div>
                    ))}
                </div>
            </Main>
        </>
    );
};

export default TicTacToe;
