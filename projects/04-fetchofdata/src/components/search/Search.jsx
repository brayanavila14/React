import "./Search.css";
import PropTypes from "prop-types";
import { useState, useEffect } from 'react';

export default function Search({ setPokemonDetails }) {
    const [search, setSearch] = useState('');
    const [checkSearch, setCheckSearch] = useState(false);
    const url = `https://pokeapi.co/api/v2/pokemon/${search}`;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setPokemonDetails([result]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        if (checkSearch && search==='') {
            fetchData();
            setCheckSearch(false);
        }
        }, [checkSearch, setPokemonDetails, search, url]);

    return (
        <div className="search">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => setCheckSearch(true)}>Search</button>
        </div>
    );
}

Search.propTypes = {
    setPokemonDetails: PropTypes.func.isRequired,
};