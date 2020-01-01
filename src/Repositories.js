import React, { useState, useEffect } from 'react';

export default function Repositories() {
	// component state
	const [repositories, setRepositories] = useState([]);

	// equivalent to componentDidMount
	useEffect(async () => {
		const response = await fetch("https://api.github.com/users/erickTrettel/repos");

		const data = await response.json();

		setRepositories(data);
	}, []);

	// similar to componentDidUpdate
	// triggered on repositories change
	useEffect(() => {
		const filtered = repositories.filter(repo => repo.favorite);

		document.title = `Você tem ${filtered.length} favoritos`;
	}, [repositories]);

	const handleFavorite = id => {
		const newRepositories = repositories.map(repo => {
			return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
		});

		setRepositories(newRepositories);
	}

	return (
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>
					{repo.name}
					{repo.favorite && <span>(Favorito)</span>}
					<button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
				</li>
      ))}
    </ul>
  );
}