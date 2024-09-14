import React from 'react';
import styles from './selecaoConteudo.module.css';

const SelecaoConteudo = () => {
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
    }, 10000);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Escolha o Conteúdo para Reproduzir</h1>
      <ul>
        {contents.map((content, index) => (
          <li key={index}>
            <button onClick={() => handleButtonClick(content)}>
              {content.title}
            </button>
            <div className={styles.tooltip}>
              {content.sinopse}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelecaoConteudo;