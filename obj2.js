let livre = {
    titre: 'Crime et chatiment',
    auteur: 'F.M Dostoiveski',
    annee: 1967,
    detail: () => {
      let details = '';
      for (let propriete in livre) {
        if (typeof livre[propriete] !== 'function') {
          details = `${livre[propriete]} `;
        }
      }
      return details;
    },
  };
  
  console.log(livre.detail());
  