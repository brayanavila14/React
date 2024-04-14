import { useState } from 'react'
import confetti from 'canvas-confetti'
import Square from './components/Square'
import Modal from './components/ModalWinner'
import './App.css'

const App = () => {
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem('history')) || [Array(9).fill(null)])
  const [board, setBoard] = useState(JSON.parse(localStorage.getItem('board')) || Array(9).fill(null))
  const [isOpenModal, setIsOpenModal] = useState(JSON.parse(localStorage.getItem('isOpenModal')))
  const [isXNext, setIsXNext] = useState(JSON.parse(localStorage.getItem('isXNext')))
  const turn = isXNext ? 'X' : 'O'

  const handleClick = (index) => {
    if (calculateWinner(board) || board[index]) return
    const newBoard = [...board]
    newBoard[index] = turn
    setHistory([...history, newBoard])
    setBoard(newBoard)
    setIsXNext(!isXNext)
    localStorage.setItem('history', JSON.stringify([...history, newBoard]))
    localStorage.setItem('isXNext', JSON.stringify(!isXNext))
    localStorage.setItem('board', JSON.stringify(newBoard))
    localStorage.setItem('isOpenModal', JSON.stringify(false))
    if (calculateWinner(newBoard)) {
      confetti()
      setIsOpenModal(true)
      localStorage.setItem('isOpenModal', JSON.stringify(true))
    }
    if (newBoard.every((square) => square !== null)) {
      setIsOpenModal(true)
      localStorage.setItem('isOpenModal', JSON.stringify(true))
    }
  }
  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ]
    for (const line of lines) {
      const [a, b, c] = line
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }
    return null
  }
  const resetGame = () => {
    setHistory([Array(9).fill(null)])
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setIsOpenModal(false)
    localStorage.setItem('history', JSON.stringify([Array(9).fill(null)]))
    localStorage.setItem('isXNext', JSON.stringify(true))
    localStorage.setItem('board', JSON.stringify(Array(9).fill(null)))
    localStorage.setItem('isOpenModal', JSON.stringify(false))
  }
  return (
    <>
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <section className='game'>
          {board.map((_, index) => (
            <Square key={index} value={board[index]} onClick={() => handleClick(index)} />
          ))}
        </section>
        <section className='turn'>
          <h2>Next player: </h2>
          <Square value='X' isSelected={turn === 'X'} />
          <Square value='O' isSelected={turn === 'O'} />
        </section>
        <Modal isOpenModal={isOpenModal} board={board} resetGame={resetGame} calculateWinner={calculateWinner} />
      </main>
      <aside className='history'>
        <h1>History</h1>
        {
          history.map((_, index) => (
            <button key={index} onClick={() => {
              setBoard(history[index])
              setIsXNext(index % 2 === 0)
              setHistory(history.slice(0, index + 1))
              localStorage.setItem('history', JSON.stringify(history.slice(0, index + 1)))
              localStorage.setItem('isXNext', JSON.stringify(index % 2 === 0))
              localStorage.setItem('board', JSON.stringify(history[index]))
            }}>
            {index === 0 ? 'Start' : `Move #${index}`}
            </button>
          ))
        }
      </aside>
    </>
  )
}
export default App
