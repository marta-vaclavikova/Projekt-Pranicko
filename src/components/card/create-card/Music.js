import React from "react";

const Music = ({ musics, music, setMusic }) => (

    <div className="field">
        <label className="field__label">Hudba</label>

        <div className="field__radio-group" onChange={(e) => setMusic(e.target.value)}>
            {musics.map(m =>
                <div className="field__radio" key={m.value}>
                    <input type="radio" name="music" id={`music-${m.value}`} defaultChecked={music === m.value} 
                    onChange={(e) => setMusic(e.target.value)} value={m.value}/>
                    <label htmlFor={`music-${m.value}`}>{m.description}</label>
                </div>
            )}
        </div>
    </div>
);

export default Music;