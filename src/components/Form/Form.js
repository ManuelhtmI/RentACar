// BookForm.js

import React, { useState } from 'react';

function BookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Créer un nouvel objet livre
    const newBook = {
      id: Math.random(), // Générer un ID aléatoire (remplacer par une logique appropriée)
      title,
      author,
      genre
    };
    // Appeler la fonction onAddBook pour ajouter le nouveau livre
    onAddBook(newBook);
    // Réinitialiser les champs du formulaire après l'ajout du livre
    setTitle('');
    setAuthor('');
    setGenre('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Titre:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Auteur:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </label>
      <label>
        Genre:
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default BookForm;
