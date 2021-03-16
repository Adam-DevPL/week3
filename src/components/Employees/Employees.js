import { useState } from 'react';
import { EmployeeDetails } from '.';
import data from '../data';
import Employee from './Employee';

const styles = {
    marginBottom: 50,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    leftColumn: {
        textAlign: 'right'
    },
    rightColumn: {
        textAlign: 'left',
        paddingLeft: 10
    }
}

function Employees() {
    const [details, setDetails] = useState();

    return (
        <div style={styles}>
            <section style={styles.leftColumn}>
                {data.map((elem) => (
                    <span key={`employee-${elem.id}`} onClick={() => setDetails(elem)}><Employee firstName={elem.firstName} surname={elem.surname} /></span>
                ))}
            </section>
            <section style={styles.rightColumn}>
                {details ?
                    <EmployeeDetails age={details.age} city={details.city} job={details.job}/>  : null}
            </section>
        </div>
    );
}

export default Employees;