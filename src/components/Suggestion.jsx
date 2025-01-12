const Suggestion = () => {
  return (
    <div className="suggestionContent">
      <iframe
        style={{ width: '100%', height: '100vh', border: 'none' }}
        src="https://www.kotikokki.net/reseptit/?categoryAlias=maincourse&sortBy=published&currentPage=1"
      ></iframe>
    </div>
  )
}

export default Suggestion
