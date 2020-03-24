document.addEventListener('DOMContentLoaded', () => {
  console.log('connected')

  fetch('http://localhost:3000/birds')
  .then(r => r.json())
  .then(text => console.log(text))

})
