import React, { useState } from "react";
import Header from "../header/Header";
import './create-card.css';
import configuration from './../../configuration.js';
import Background from "./create-card/Background";
import Color from "./create-card/Color";
import Cover from "./create-card/Cover";
import Music from "./create-card/Music";
import Snow from "./create-card/Snow";
import CardDone from "./CardDone";
import Menu from "../menu/Menu";

const CreateCard = () => {

    const [background, setBackground] = useState('red');
    const [color, setColor] = useState('red');
    const [cover, setCover] = useState('gifts');
    const [snow, setSnow] = useState(0);
    const [music, setMusic] = useState('jingle-bells');
    const [text, setText] = useState('');
    const [sender, setSender] = useState('');
    const [code, setCode] = useState(null);
    const [error, setError] = useState(null);

    const canSubmit = sender.length > 0 && text.length > 0;

    const reset = () => {
        setCode(null);
        setBackground('red');
        setColor('red');
        setSnow(0);
        setMusic('jingle-bells');
        setText('');
        setSender('');
        setError(null);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const request = {
            background: background,
            color: color,
            cover: cover,
            music: music,
            snow: snow,
            text: text,
            sender: sender
        }

        fetch('https://xmas-api.itgirls.cz/cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
            .then(response => response.json())
            .then(data => {
                // v proměnné data má odpověď ze serveru
                // a mohu si s ní dělat, co potřebuji
                console.log(data);
                if (data.success) {
                    setCode(data.data.id);
                } else {
                    setError(data.errors);
                }
            })
    }

    return (
        <>
            <Menu/>
            <Header title={code ? "Přáníčko je připravené" : "Vytvořit přáníčko"} />

            <main className="content">

                {!code && <div className="box">
                    <div className="box__inside">

                        <form className="configurator" onSubmit={handleSubmit}>

                            {error && <div className="error">{error.map(e => <p>{e}</p>)}</div>}

                            <Background backgrounds={configuration.backgrounds} setBackground={setBackground} background={background} />

                            <Color colors={configuration.colors} color={color} setColor={setColor} />

                            <Cover covers={configuration.covers} cover={cover} setCover={setCover} />

                            <Snow snows={configuration.snow} snow={snow} setSnow={setSnow} />

                            <Music musics={configuration.music} music={music} setMusic={setMusic} />

                            <div className="field">
                                <label className="field__label" htmlFor="text">Text uvnitř přáníčka</label>
                                <textarea className="field__input" name="text" id="text" rows="3" maxLength="100" autoComplete="off"
                                    value={text} onChange={(e) => setText(e.target.value)}
                                ></textarea>
                                <p className="field__description">Zbývá <strong>{text.length}</strong>/100 znaků.</p>
                            </div>

                            <div className="field">
                                <label className="field__label" htmlFor="sender">Odesílatel (podpis)</label>
                                <input className="field__input" type="text" name="sender" id="sender" rows="3" maxLength="20"
                                    autoComplete="off" value={sender} onChange={(e) => setSender(e.target.value)} />
                            </div>

                            <button type="submit" className="button button--big mt-30" disabled={!canSubmit}>Uložit přáníčko</button>

                        </form>

                    </div>
                </div>
                }
                {code && <CardDone code={code} reset={reset} />}

            </main>
        </>
    );
};

export default CreateCard;