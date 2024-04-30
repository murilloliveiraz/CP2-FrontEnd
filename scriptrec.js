function recommendFood() {
    const wineType = document.getElementById('wine').value;
    let recommendedFood;
    let foodImage;
  
    switch (wineType) {
      case 'branco':
        recommendedFood = 'Peixe grelhado com legumes';
        foodImage = 'https://static.itdg.com.br/images/1200-630/ab06c7215fdddbfab6c23f52f242e50d/151293-original.jpg';
        break;
      case 'tinto':
        recommendedFood = 'Bife com batatas rústicas';
        foodImage = 'https://img.cybercook.com.br/receitas/39/bife-acebolado-com-batata-rustica-pratico.jpeg';
        break;
      case 'rosé':
        recommendedFood = 'Salada de verão com frango';
        foodImage = 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3209790:1648470963/salada%20com%20frango.jpg?f=4x3&$p$f=77054a6';
        break;
      default:
        recommendedFood = 'Escolha um tipo de vinho válido';
        break;
    }
  
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `
      <p>Recomendamos: ${recommendedFood}</p>
      <img src="${foodImage}" alt="${recommendedFood}" style="max-width: 100%;">
    `;
  }