export default function initFetchBiticoin(){}


//https//blockchain.info/ticher


const bitcoin = fetch(`https://blockchain.info/ticker`)
.then(r => r.json())
.then(resposta => {
    const btcPreco = document.querySelector(`.btc-preco`)
    btcPreco.innerText = ( 100 / resposta.BRL.sell).toFixed(4)
})
.catch(erro => {
    console.log(Error(erro));
})



