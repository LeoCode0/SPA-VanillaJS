const Character = () => {
    const view = `
    <div class="Characters-inner">
        <article class="Characters-card">
            <img src="image" alt="Name"/>
            <h2>Name</h2>
        </article>
        <article class="Characters-card">
            <h3>Episodios: </h3>
            <h3>Status: </h3>
            <h3>Species: </h3>
            <h3>Gender: </h3>
            <h3>Origin: </h3>
            <h3>Last location: </h3>
        </article>
    </div>
    `
    return view
}

export default Character