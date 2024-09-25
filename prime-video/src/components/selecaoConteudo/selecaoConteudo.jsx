import React, { useState } from 'react';
import styles from './selecaoConteudo.module.css';
import { useNavigate } from 'react-router-dom';

const SelecaoConteudo = () => {
  const [ratings, setRatings] = useState({});
  const [publishedRatings, setPublishedRatings] = useState({}); // Armazena avaliações publicadas
  const [searchTerm, setSearchTerm] = useState('');
  
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();
  const contents = [
    { title: 'Sonic', category: 'Aventura', url: 'https://www.youtube.com/watch?v=TXPkr5HcvBs&pp=ygUHdHJhaWxlcg%3D%3D' },
    { title: 'Minecraft', category: 'Fantasia', url: 'https://www.youtube.com/watch?v=1QmCrEajUQM&pp=ygUHdHJhaWxlcg%3D%3D' },
    { title: 'Rei Leão', category: 'Animação', url: 'https://www.youtube.com/watch?v=AiauV09fK1U&pp=ygUHdHJhaWxlcg%3D%3D' },
    { title: 'Arcane', category: 'Ficção Científica', url: 'https://www.youtube.com/watch?v=Ft_QrPGXWqc&pp=ygUHdHJhaWxlcg%3D%3D' },
    { title: 'Branca de Neve', category: 'Clássico', url: 'https://www.youtube.com/watch?v=TbiPcMCz0Ek&pp=ygUHdHJhaWxlcg%3D%3D' },
    { title: 'Sorria 2', category: 'Terror', url: 'https://www.youtube.com/watch?v=0HY6QFlBzUY&pp=ygUHdHJhaWxlcg%3D%3D' },
    { title: 'Motel Destino', category: 'Suspense', url: 'https://www.youtube.com/watch?v=pBxd1MYB4Uc&pp=ygUHdHJhaWxlcg%3D%3D' },
    { title: 'The Last of Us', category: 'Drama', url: 'https://www.youtube.com/watch?v=ObiBEgSaoqs&pp=ygUHdHJhaWxlcg%3D%3D' },
    { title: 'Mulan', category: 'Ação', url: null }
  ];
  
  const [showCategories, setShowCategories] = useState(false); // Controla exibição das categorias
  const [selectedCategory, setSelectedCategory] = useState(''); // Filtra categoria selecionada

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Define a categoria selecionada
    setShowCategories(false); // Fecha o menu de categorias após seleção
  };
  
  const handleRatingChange = (title, value) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [title]: value
    }));
  };

  const handlePublishRating = (title) => {
    const rating = ratings[title];
    if (!rating) return;

    setPublishedRatings(prevPublishedRatings => {
      const existingRatings = prevPublishedRatings[title] || [];
      return {
        ...prevPublishedRatings,
        [title]: [...existingRatings, parseInt(rating)]
      };
    });
  };


  const getAverageRating = (title) => {
    const ratings = publishedRatings[title] || [];
    if (ratings.length === 0) return 0;
    const total = ratings.reduce((acc, rating) => acc + rating, 0);
    return (total / ratings.length).toFixed(1);
  };

  const handleButtonClick = (content) => {
    if (!content.url) {
      showCustomError('Estamos com problemas para carregar este conteúdo. Tente mais tarde.');
    } else {
      window.open(content.url, '_blank');
    }
  };

  const showCustomError = (message) => {
    const notification = document.createElement('div');
    notification.className = styles.customNotification;
    notification.innerText = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 5000);
  };

  const filteredContents = contents.filter(content => {
    const matchesSearchTerm = content.title.toLowerCase().startsWith(searchTerm.trim().toLowerCase());
    const matchesCategory = selectedCategory ? content.category === selectedCategory : true;
    return matchesSearchTerm && matchesCategory;
  });

return (
  
  <div className={styles.container}>
  <button onClick={() => navigate('/menuPrincipal')}>Menu Principal</button>
  <h1 className={styles.title}>Escolha o Conteúdo para Avaliar e Assistir</h1>
  
  <button onClick={() => setShowCategories(!showCategories)}>
    Categorias
  </button>
  {showCategories && (
    <div className={styles.categories}>
      <button onClick={() => setSelectedCategory('Ação')}>Ação</button>
      <button onClick={() => setSelectedCategory('Aventura')}>Aventura</button>
      <button onClick={() => setSelectedCategory('Drama')}>Drama</button>
      <button onClick={() => setSelectedCategory('Animação')}>Animação</button>
      <button onClick={() => setSelectedCategory('Terror')}>Terror</button>
      <button onClick={() => setSelectedCategory('Suspense')}>Suspense</button>
      <button onClick={() => setSelectedCategory('')}>Todos</button> {/* Para remover o filtro de categoria */}
    </div>
  )}

  {/* Barra de Pesquisa */}
  <input
    type="text"
    className={styles.searchBar}
    placeholder="Pesquise o título do filme"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  <div className={styles.cardsContainer}>
    {filteredContents.length === 0 ? (
      <p className={styles.noContentMessage}>Conteúdo indisponível</p>
    ) : (
      filteredContents.map((content, index) => (
        <div key={index} className={styles.card}>
          <h3>{content.title}</h3>
          <p>Categoria: {content.category}</p>
          <p>Média de Avaliação: {getAverageRating(content.title)}</p>
          <div className={styles.rating}>
            <label htmlFor={`rating-${index}`}>Estrelas:</label>
            <select
              id={`rating-${index}`}
              value={ratings[content.title] || 0}
              onChange={(e) => handleRatingChange(content.title, e.target.value)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button className={styles.watchButton} onClick={() => handleButtonClick(content)}>
            Assistir
          </button>
          <button className={styles.publishButton} onClick={() => handlePublishRating(content.title)}>
            Avaliar
          </button>
        </div>
      ))
    )}
  </div>
</div>
)
}

export default SelecaoConteudo;
