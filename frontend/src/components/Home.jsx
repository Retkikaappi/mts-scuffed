import { useState } from 'react'
import { useRecipes } from '../contexts/recipeContext'
import { Wheel } from 'react-custom-roulette'
import PrizeModal from './Modal'

const Home = () => {
  const [modal, setModal] = useState(false)
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const { recipes, error, isLoading } = useRecipes()

  let data = []
  if (recipes) {
    data = recipes.map((ele) => ({ option: ele.name }))
  }

  const startSpin = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length)
      setPrizeNumber(newPrizeNumber)
      setMustSpin(!mustSpin)
    }
  }

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
        <div className="loader"></div>
      </div>
    )
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  if (!recipes) {
    return <div>No recipes</div>
  }

  return (
    <div className="content">
      <button onClick={startSpin} disabled={mustSpin} className="spin">
        Pyöritä
      </button>
      {modal && (
        <PrizeModal modal={modal} setModal={setModal} recipes={recipes} />
      )}
      <div className="spinner">
        <Wheel
          radiusLineWidth={'2'}
          outerBorderWidth={'2'}
          fontWeight={'normal'}
          fontSize={'18'}
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={['#2E2E2E', 'green']}
          textColors={['#ffffff']}
          onStopSpinning={() => {
            setModal(prizeNumber)
            setMustSpin(false)
          }}
        />
      </div>
    </div>
  )
}

export default Home
