import React from "react";

const Cover = ({ covers, cover, setCover }) => (
    <div className="field">
        <label className="field__label">Obrázek na obálce</label>

        <div className="field__swatch-group field__swatch-group--big" onChange={(e) => setCover(e.target.value)}>
            {covers.map(c =>
                <div className="field__swatch" key={c.value}>
                    <input type="radio" name="cover" id={`cover-${c.value}`} defaultChecked={c.value === cover} 
                    onChange={(e) => setCover(e.target.value)} value={c.value}/>
                    <label htmlFor={`cover-${c.value}`} className={`swatch--cover-${c.value}`} data-description={c.description}></label>
                </div>
            )}
        </div>

    </div>
);

export default Cover;