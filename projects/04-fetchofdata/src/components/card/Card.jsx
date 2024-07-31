import "./Card.css";
import PropTypes from "prop-types";

export default function Card({ pokemon }) {
    const name = pokemon.name;
    const weight = pokemon.weight;
    const height = pokemon.height;
    const abilities = pokemon.abilities.map((ability) => ability.ability.name).join(", ");
    const moves = pokemon.moves.slice(0, 5).map((move) => move.move.name).join(", ");

    return (
        <div className="card">
            <h2>{name}</h2>
            <p>Weight: {weight}</p>
            <p>Height: {height}</p>
            <p>Abilities: {abilities}</p>
            <p>Moves: {moves}</p>
        </div>
    );
}

Card.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        weight: PropTypes.number,
        height: PropTypes.number,
        abilities: PropTypes.arrayOf(
            PropTypes.shape({
                ability: PropTypes.shape({
                    name: PropTypes.string,
                }),
            })
        ),
        moves: PropTypes.arrayOf(
            PropTypes.shape({
                move: PropTypes.shape({
                    name: PropTypes.string,
                }),
            })
        ),
    })
};