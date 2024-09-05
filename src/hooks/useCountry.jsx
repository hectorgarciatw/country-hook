import useResource from "./useResource";

const useCountry = (name) => {
    const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/name";
    const { resource, error } = useResource(baseUrl, name);

    if (error) {
        return { found: false };
    }

    if (resource) {
        return { data: resource, found: true };
    }

    return null;
};

export default useCountry;
