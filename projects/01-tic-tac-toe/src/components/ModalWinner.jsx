import Modal from 'react-modal'
import PropTypes from 'prop-types'
const ModalWinner = ({ isOpenModal, board, resetGame, calculateWinner }) => {
    return (
        <Modal
            isOpen={isOpenModal}
            contentLabel='Winner Modal'
            className='winner'
        >
            <div className='text'>
                <h2>{calculateWinner(board) ? `Winner: ${calculateWinner(board)}` : 'Draw'}</h2>
                <button onClick={resetGame}>Play Again</button>
            </div>
        </Modal>
    )

}
ModalWinner.propTypes = {
    isOpenModal: PropTypes.bool.isRequired,
    board: PropTypes.array.isRequired,
    resetGame: PropTypes.func.isRequired,
    calculateWinner: PropTypes.func.isRequired,
}
export default ModalWinner