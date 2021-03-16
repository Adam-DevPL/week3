const styles = {
    margin: 0
}

function EmployeeDetails ({ age, city, job}) {
    return (
        <div>
            <p style={styles}>Age: {age}</p>
            <p style={styles}>City: {city}</p>
            <p style={styles}>Job: {job}</p>
        </div>
    );
}

export default EmployeeDetails;