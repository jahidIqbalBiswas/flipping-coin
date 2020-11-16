var start = document.querySelector('.start')
var or = document.querySelector('.or')
var tails = document.querySelector('.tails')
var head = document.querySelector('.head')
var option = document.querySelector('.select')
var alert = document.querySelector('.myAlert')
var coin = document.querySelector('.coin')
start.addEventListener('click', function() {
    option.classList.remove('d-none')
    coin.classList.add('coin-animate')
        // tails.style.display = 'inline-block'
        // head.style.display = 'inline-block'
        // or.style.display = 'inline-block'
})
var a = 1
while (a <= 1) {
    var rand = Math.round(Math.random() * 1)
    head.addEventListener('click', function() {
        this.style.background = 'green'
        this.style.width = '100%'
            // this.innerText = 'Selected'
            // tails.classList.add('disabled')
        tails.style.display = 'none'
        or.style.display = 'none'
        alert.innerText = 'You are selected \'HEAD\''
        start.innerHTML = 'Reset'
        start.setAttribute('class', 'btn btn-danger btn-lg')
        start.addEventListener('click', function() {
            location.reload();
        })
        if (this.value == rand) {
            coin.classList.remove('coin-animate')
            coin.setAttribute('style', 'background:green;text-align:center;display:flex;align-items:center;justify-content:center')
            coin.innerHTML = '<h4 class="text-light">HEAD</h4>'
            this.innerText = 'WINNER'
            alert.innerText = 'Congratulation! You are win'
        } else {
            coin.classList.remove('coin-animate')
            coin.setAttribute('style', 'background:#3c465f;text-align:center;display:flex;align-items:center;justify-content:center')
            coin.innerHTML = '<h4 class="text-white">TAILS</h4>'
            this.innerText = 'LOSER'
            this.style.background = '#3c465f'
            alert.innerText = 'So sad! please try again'
        }
    })
    tails.addEventListener('click', function() {
        this.style.background = 'orangered'
        this.style.color = '#fff'
        tails.style.width = '100%'
            // this.innerText = 'Selected'
            // head.classList.add('disabled')
        head.style.display = 'none'
        or.style.display = 'none'
        alert.innerText = 'You are selected \'TAILS\''
        start.setAttribute('class', 'btn btn-danger btn-lg')
        start.innerHTML = 'Reset'
        start.addEventListener('click', function() {
            location.reload();
        })
        if (this.value == rand) {
            coin.classList.remove('coin-animate')
            coin.setAttribute('style', 'background:orangered;text-align:center;display:flex;align-items:center;justify-content:center')
            coin.innerHTML = '<h4 class="text-white">TAILS</h4>'
            this.innerText = 'WINNER'
            alert.innerText = 'Congratulation! You are win'

        } else {
            coin.classList.remove('coin-animate')
            coin.setAttribute('style', 'background: #138496;text-align:center;display:flex;align-items:center;justify-content:center')
            coin.innerHTML = '<h4 class="text-light">HEAD</h4>'
            this.innerText = 'LOSER'
            this.style.background = '#138496'
            alert.innerText = 'So sad! please try again'
        }
    })

    a++
}