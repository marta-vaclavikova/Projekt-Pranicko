import React, { useState } from "react";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import './pickup-card.css';
import { useNavigate } from 'react-router-dom';

const PickupCard = () => {
    const navigate = useNavigate();
    const [code,setCode] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        navigate(`/card/${code}`);
    }
    return (
        <>
            <Menu/>
            <Header title="Vyzvednout přáníčko"/>

            <main className="content">

                <form className="pickup" autoComplete="off" onSubmit={onSubmit}>
                    <label htmlFor="pickup-code" className="pickup__label">Zadej šestimístný kód přáníčka</label>

                    <div className="box shadow mb-30">
                        <div className="box__inside pt-0 pb-0">

                            <input id="pickup-code" className="pickup__code" type="text" maxLength="6" autoComplete="off"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}/>

                        </div>
                    </div>

                    <button className="button button--big">Vyzvednout přáníčko</button>

                </form>

            </main>
        </>
    );
}

export default PickupCard;