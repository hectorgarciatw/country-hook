const Country = ({ country }) => {
    // No data no show
    if (!country) {
        return null;
    }

    // No country
    if (!country.found) {
        return <div>not found...</div>;
    }

    // The data of the country
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
