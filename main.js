const form = document.getElementById('form-agenda')
const nomes = []
const telefones = []

let linhas = ''
form.addEventListener('submit', function (e) {
  e.preventDefault()

  adicionaLinha()
  atualizaTabela()
})

function adicionaLinha() {
  const inputNomeCompleto = document.getElementById('nome-completo')
  const inputTelefone = document.getElementById('telefone')

  if (nomes.includes(inputNomeCompleto.value)) {
    alert(`O nome: ${inputNomeCompleto.value} já foi inserido.`)
  } else {
    nomes.push(inputNomeCompleto.value)
    telefones.push(parseInt(inputTelefone.value))

    let linha = '<tr>'
    linha += `<td>${inputNomeCompleto.value}</td>`
    linha += `<td>${inputTelefone.value}</td>`
    linha += '</tr>'
    linhas += linha
  }

  inputNomeCompleto.value = ''
  inputTelefone.value = ''
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody')
  corpoTabela.innerHTML = linhas
}
