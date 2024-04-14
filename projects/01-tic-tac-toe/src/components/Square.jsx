import PropTypes from 'prop-types';
const Square = ({ value, onClick, isSelected }) => {
    const className = isSelected ? 'square is-selected' : 'square';
    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
}
Square.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    isSelected: PropTypes.bool,
}
export default Square;