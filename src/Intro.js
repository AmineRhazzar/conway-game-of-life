import React, { useRef, useState } from "react";
import App from "./App";

const Intro = (props) => {
    const intro = useRef(null);
    const [hideIntro, setHideIntro] = useState(false);

    

    return (
        <>
            {hideIntro ? (
                <App />
            ) : (
                <div className="intro" ref={intro}>
                    <h1>John Conway's Game Of Life</h1>
                    <p>
                        The Game of Life, also known simply as Life, is a
                        cellular automaton devised by the British mathematician
                        John Horton Conway in 1970. It is a zero-player game,
                        meaning that its evolution is determined by its initial
                        state, requiring no further input. One interacts with
                        the Game of Life by creating an initial configuration
                        and observing how it evolves.
                    </p>
                    <a
                        className="read-more"
                        href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
                    >
                        [Read More Here]
                    </a>
                    <p>
                        Start by creating an initial state yourself (by clicking
                        on the "cells" to turn them on and off) or choosing one
                        of the pre-built ones
                    </p>
                    <p>
                        You can also set the speed of the animation to your
                        likings.
                        <br />A lower value means greater speed.
                    </p>
                    <p>Reset everything by clearing the board</p>
                        <button className="start" onClick={() => {
                            setHideIntro(true);
                    }}>Start</button>
                </div>
            )}
        </>
    );
};

export default Intro;
