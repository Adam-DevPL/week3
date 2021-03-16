import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

const silver = '#bdc3c7';
const pumpkin = '#d35400';

function ButtonMod2({ icon, bgColor=silver, color=pumpkin, label='Click Me'}) {
    const styles = {
        width: 300,
        height: 50,
        fontSize: 20,
        background: bgColor,
        color: color
    };

    const iconShow = <FontAwesomeIcon icon={icon} />

    return (
        <div>
            <h3>Modyfikacja 2</h3>
            <button style={styles}>{iconShow} {label}</button>
        </div>
    );
}

export default ButtonMod2;