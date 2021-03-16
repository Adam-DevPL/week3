import { useState } from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

function Card({ title, intro, showMore, content }) {
    const styles = {
        width: 200,
        display: 'inline-block',
        border: '1px solid #000',
        marginTop: 30,
        marginBottom: 100,
        padding: 10,

        arrowDown: {
            background: 'none',
            border: 'none',
            transform: 'rotate(0deg)',
            transition: 'transform 0.2s linear'
        },

        arrowDownOpen: {
            background: 'none',
            border: 'none',
            transform: 'rotate(180deg)',
            transition: 'transform 0.2s linear'
        }
    };
    console.log(!showMore);
    const [expanded, setExpanded] = useState( !{showMore} );

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }
    return (
        <div style={styles}>
            <h3>{title}</h3>
            <p>{intro}</p>
            <button style={expanded ? styles.arrowDown : styles.arrowDownOpen} onClick={handleExpandClick}><FontAwesomeIcon icon='angle-down' /></button>
            {expanded && <p>{content}</p>}
        </div>
    );
}

export default Card;