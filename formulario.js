const form = document.getElementById('form');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const nomeCompleto = document.getElementById('nomeCompleto').value;
  const email = document.getElementById('email').value;
  const sexo = document.querySelector('input[name="sexo"]:checked').value;
  const nomePai = document.getElementById('nomePai').value;
  const nomeMae = document.getElementById('nomeMae').value;
  const endereco = document.getElementById('endereco').value;

  let dados = {};
  const dadosExistentes = localStorage.getItem('formularioDados');
  if (dadosExistentes) {
    dados = JSON.parse(dadosExistentes);
  }

  dados = {
    ...dados,
    nomeCompleto: nomeCompleto || dados.nomeCompleto,
    email: email || dados.email,
    sexo: sexo || dados.sexo,
    nomePai: nomePai || dados.nomePai,
    nomeMae: nomeMae || dados.nomeMae,
    endereco: endereco || dados.endereco,
  };

  localStorage.setItem('formularioDados', JSON.stringify(dados));
  addPeople(dados)
  resultado.innerHTML = 'Dados salvos com sucesso!';
});


const listPeoples = () => {
    const peoples = localStorage.getItem("peoples")
    if(peoples) {
        return JSON.parse(peoples)
    }

    return []
}

const addPeople = (people) => {
    const oldPeoples = listPeoples()

    const newPeoples = [...oldPeoples, people]
    
    localStorage.setItem("peoples", JSON.stringify(newPeoples))
    return newPeoples
}