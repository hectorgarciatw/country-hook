const Country = ({ country }) => {
    if (!country) {
        return null;
    }

    if (!country.found) {
        return <div>not found...</div>;
    }

    const countryData = country.data;

    return (
        <div>
            <h3>{countryData.name.common}</h3>
            <div>capital: {countryData.capital[0]}</div>
            <div>population: {countryData.population}</div>
            <img src={countryData.flags.png} height="100" alt={`flag of ${countryData.name.common}`} />
        </div>
    );
};

export default Country;
