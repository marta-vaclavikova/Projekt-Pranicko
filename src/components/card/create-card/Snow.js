import React from "react";

const Snow = ({ snows, snow, setSnow }) => (
    <div className="field">
        <label className="field__label ">Sníh na pozadí</label>

        <div className="field__radio-group" onChange={(e) => setSnow(e.target.value)}>
            {snows.map(s =>
                <div className="field__radio" key={s.value}>
                    <input type="radio" name="snow" id={`snow-${s.value}`} defaultChecked={snow === s.value}
                    onChange={(e) => setSnow(e.target.value)} value={s.value} />
                    <label htmlFor={`snow-${s.value}`}>{s.description}</label>
                </div>
            )}
        </div>
    </div>

);

export default Snow;