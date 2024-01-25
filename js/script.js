function meuEscopo() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");
  
    const pessoas = [];
  
    function recebeEventoForm(evento) {
        evento.preventDefault();
  
      const nome = form.querySelector(".nome").value;
      const nomeArtistico = form.querySelector(".nomeArtistico").value;
      const telefone = form.querySelector(".telefone").value;
      const dataNascimento = form.querySelector(".dataNascimento").value;
      const instagram = form.querySelector(".instagram").value;
      const tiktok = form.querySelector(".tiktok").value;
      const youtube = form.querySelector(".youtube").value;
      const cosJujutsu = form.querySelector(".cosJujutsu").value;
      const cosOutros = form.querySelector(".cosOutros").value;
  
      pessoas.push({
        nome: nome,
        nomeArtistico: nomeArtistico,
        telefone: telefone,
        dataNascimento: dataNascimento,
        instagram: instagram,
        tiktok: tiktok,
        youtube: youtube,
        cosJujutsu: cosJujutsu,
        cosOutros: cosOutros,
      });

      console.log(pessoas)
  
      resultado.innerHTML += `<p>
      <strong>Nome:</strong> ${nome}<br>
      <strong>Nome Artístico:</strong> ${nomeArtistico}<br>
      <strong>Telefone:</strong> ${telefone}<br>
      <strong>Data de Nascimento:</strong> ${dataNascimento}<br>
      <strong>Instagram:</strong> ${instagram}<br>
      <strong>TikTok:</strong> ${tiktok}<br>
      <strong>YouTube:</strong> ${youtube}<br>
      <strong>Cosplay Jujutsu:</strong> ${cosJujutsu}<br>
      <strong>Cosplay Outros:</strong> ${cosOutros}<br>
  </p>`;
    }
  
    form.addEventListener("submit", recebeEventoForm);

   

  };
  
  meuEscopo();