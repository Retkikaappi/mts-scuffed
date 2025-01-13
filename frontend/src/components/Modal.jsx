const PrizeModal = ({ modal, setModal, recipes }) => {
  const show = modal ? { display: '' } : { display: 'none' }
  const url = recipes[modal].picture

  return (
    <div className="modal" style={show}>
      <h2>
        Tänään olisi ruoaksi:{' '}
        <span style={{ fontWeight: 'bold' }}>{recipes[modal].name}</span>
      </h2>
      <img src={url} />
      <button onClick={() => setModal(null)}>Koita uudestaan</button>
    </div>
  )
}

export default PrizeModal
