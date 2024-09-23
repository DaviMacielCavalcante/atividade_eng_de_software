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
    { title: 'Sonic', url: 'https://www.youtube.com/watch?v=TXPkr5HcvBs&pp=ygUHdHJhaWxlcg%3D%3D', sinopse: 'O filme segue as aventuras de Sonic enquanto ele tenta se adaptar à sua nova vida na Terra com seu recém-descoberto melhor amigo humano Tom Wachowski (James Marsden). Sonic e Tom unem forças para tentar impedir que o vilão Dr. Robotnik (Jim Carrey) capture Sonic e use seus poderes para dominar o mundo.' },
    { title: 'Minecraft', url: 'https://www.youtube.com/watch?v=1QmCrEajUQM&pp=ygUHdHJhaWxlcg%3D%3D', sinopse: 'A trama gira em torno de um grupo de amigos que são transportados para um mundo mágico feito de blocos, onde enfrentam desafios e descobrem habilidades únicas.' },
    { title: 'Rei Leão', url: 'https://www.youtube.com/watch?v=AiauV09fK1U&pp=ygUHdHJhaWxlcg%3D%3D', sinopse: 'Este desenho animado da Disney mostra as aventuras de um leão jovem de nome Simba, o herdeiro de seu pai, Mufasa. O tio malvado de Simba, Oscar, planeja roubar o trono de Mufasa atraindo pai e filho para uma emboscada. Simba consegue escapar e somente Mufasa morre. Com a ajuda de seus amigos,Timon e Pumba, ele reaparece como adulto para recuperar sua terra, que foi roubada por seu tio Oscar.' },
    { title: 'Arcane', url: 'https://www.youtube.com/watch?v=Ft_QrPGXWqc&pp=ygUHdHJhaWxlcg%3D%3D', sinopse: 'Em Piltover e Zaun, cidades gêmeas, mas rivais, duas irmãs lutam em lados opostos de uma guerra entre tecnologias mágicas e ideais divergentes. Veja tudo o que quiser. Hailee Steinfeld e Kevin Alejandro dão voz a esta série baseada no universo de "League of Legends", da Riot Games.' },
    { title: 'Branca de Neve', url: 'https://www.youtube.com/watch?v=TbiPcMCz0Ek&pp=ygUHdHJhaWxlcg%3D%3D', sinopse: 'A rainha malvada morre de ciúmes da beleza de Branca de Neve e manda mata-la. Logo, descobre que a jovem não morreu e está morando na floresta com sete amiguinhos. A princesa então é envenenada pela rainha e só o beijo de um príncipe pode salvá-la.' },
    { title: 'Sorria 2', url: 'https://www.youtube.com/watch?v=0HY6QFlBzUY&pp=ygUHdHJhaWxlcg%3D%3D', sinopse: 'A maldição do sorriso retorna para uma história inédita em Sorria 2. O longa acompanha a cantora pop Skye Riley (Naomi Scott) que quando está prestes a embarcar em uma turnê mundial começa a viver experiências aterrorizantes e inexplicáveis. Tomada pelo horror e pela pressão da fama, Skye é forçada a confrontar seu passado para retomar o controle de sua vida antes que seja tarde demais.' },
    { title: 'Motel Destino', url: 'https://www.youtube.com/watch?v=pBxd1MYB4Uc&pp=ygUHdHJhaWxlcg%3D%3D', sinopse: 'Heraldo precisa se livrar de uma dívida e tenta assaltar um banco, mas não é bem-sucedido em sua empreitada. Ele busca esconderijo em um motel de beira de estrada, onde conhece Dayana.' },
    { title: 'The Last of Us', url: 'https://www.youtube.com/watch?v=ObiBEgSaoqs&pp=ygUHdHJhaWxlcg%3D%3D', sinopse: 'Joel, um sobrevivente solitário e que perdeu sua filha adolescente no início do apocalipse, recebe a missão de levar para fora de uma zona de quarentena uma menina de 14 anos, chamada Ellie. A jovem é a única humana conhecida que é imune ao fungo e se torna a esperança de uma cura.' },
    { title: 'Mulan', sinopse: 'Mulan, uma jovem chinesa que não se encaixa na sociedade, teme que seu pai, um homem doente, seja convocado para lutar na guerra que se aproxima. A garota então se disfarça de homem e assume o posto de seu pai no exército chinês. Acompanhada por seu dragão Mushu, Mulan parte para a linha de batalha, faz amizade com os outros soldados e usa sua inteligência para ajudar a combater a invasão dos hunos enquanto luta para esconder sua verdadeira identidade.' }
  ];
  


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

  const filteredContents = contents.filter(content => 
    content.title.toLowerCase().startsWith(searchTerm.trim().toLowerCase())
);

return (
  
  <div className={styles.container}>
  <button onClick={() => navigate('/menuPrincipal')}>Menu Principal</button>
    <h1 className={styles.title}>Escolha o Conteúdo para Avaliar e Assistir</h1>
    
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
);
}

export default SelecaoConteudo;
