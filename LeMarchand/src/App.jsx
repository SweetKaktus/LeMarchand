import { useState } from 'react'

function App() {
  const ITEMS = [
    {category: "Armes", nom: "Epee en fer", rarete: "Commun", prix: "15 PO", stock: 18},
    {category: "Armes", nom: "Lance de jade", rarete: "Rare", prix: "750 PO", stock: 4},
    {category: "Armes", nom: "Sainte masse dorée", rarete: "Légendaire", prix: "2999 PO", stock: 0},
    {category: "Armures", nom: "Veste de maille", rarete: "Rare", prix: "450 PO", stock: 5},
    {category: "Armures", nom: "Casque de cuir enchanté", rarete: "Commun", prix: "80 PO", stock: 14},
    {category: "Armures", nom: "Gantelets éthérés", rarete: "Légendaire", prix: "4500 PO", stock: 0},
    {category: "Potions", nom: "Potion de soin", rarete: "Commun", prix: "5 PO", stock: 35},
    {category: "Potions", nom: "Potion de vitesse", rarete: "Rare", prix: "150 PO", stock: 12},
    {category: "Potions", nom: "Potion mutagène de vol", rarete: "OMEGA", prix: "999999 PO", stock: 1},
  ]

  // Je souhaite avoir le titre, en dessous duquel on trouvera une barre de recherche en dessous de laquelle on trouvera des
  // options de filtre, notamment par catégorie, je souhaite que les options de filtre se mettent à jour dynamiquement
  // en fonction du nombre de catégorie existante dans mon tableau.

  // Ensuite je veux un tableau avec la première ligne contenant :
  // NOM | RARETÉ | PRIX | STOCK
  // puis un entête de catégorie centré
  // puis les items
  // J'aimerai mettre des options de tri (mais il faut que je m'entraîne sur les algo de tris pour ça)

  // Côté design j'aimerai quelque chose qui se rapproche des RPGs, donc des tons plutôt marrons / beige pour rappeler le bois
  // et le papier
  // Le tableau doit être centré

  return (
    <>
      <h1>Le Marchand</h1>
      <Searchbar />
    </>
  )
}

export default App
