import React from "react";

export const JokeCard = (props) => {
    const {setup, punchline} = props.joke;
    return (
        <div className="joke-card">
            <h1 className="joke-card__header">How's this joke?</h1>
            <p className="joke-card__setup">{setup}</p>
            <p className="joke-card__punchline">{punchline}</p>

        </div>
    )
}