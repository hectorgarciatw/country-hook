import { useState, useEffect } from "react";
import axios from "axios";

const useResource = (baseUrl, endpoint) => {
    const [resource, setResource] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!endpoint) return; // Si no hay endpoint, no hacer la solicitud

        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/${endpoint}`);
                setResource(response.data);
                setError(null); // Limpiar cualquier error previo si la solicitud fue exitosa
            } catch (err) {
                setResource(null);
                setError("Resource not found");
            }
        };

        fetchData();
    }, [baseUrl, endpoint]);

    return { resource, error };
};

export default useResource;
