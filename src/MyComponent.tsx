// src/MyComponent.tsx

import React from 'react';

// Définition des props avec des types stricts
type MyComponentProps = {
  title: string;   // Doit être une chaîne de caractères
  count: number;   // Doit être un nombre
};

// Composant fonctionnel avec des props typées
const MyComponent: React.FC<MyComponentProps> = ({ title, count }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
    </div>
  );
};

export default MyComponent;
