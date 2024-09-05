import { useState, useEffect } from "react";
import axios from "axios";

const useCountry = (name) => {
    const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/name";
    const [country, setCountry] = useState(null);

    useEffect(() => {
        if (!name) return;
        axios
            .get(`${baseUrl}/${name}`)
            .then((res) => {
                setCountry({ data: res.data, found: true });
            })
            .catch((error) => {
                setCountry({ found: false });
            });
    }, [name]);
    return country;
};

export default useCountry;
