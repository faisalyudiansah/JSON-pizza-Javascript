$.ajax({
    url: 'data/pizza.json',
    success : result => {
        let data = result.menu
        let cards = ''
        data.forEach(i => {
            cards += showMenu(i)
        })

        $('#daftar-menu').html(cards)
    },
    error : err => {
        console.log(err)
        console.error(err)
    }
})

$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active')
    $(this).addClass('active')
    let category = $(this).html()
    let textinBody = `<h1>${category}</h1>`
    if(category == 'Home') {
        textinBody = `<h1>All Menu</h1>`
    }
    $('.textBody').html(textinBody)

    $.ajax({
        url : 'data/pizza.json',
        success : result => {
            let data = result.menu
            let cards = ''
            data.forEach(i => {
                if (i.kategori == category.toLowerCase()) {
                    cards += showMenu(i)
                } else if (category == 'Home') {
                    cards += showMenu(i)
                }
            })
            $('#daftar-menu').html(cards)
        }
    })
})

function showMenu(i) {
    return `<div class="col-md-4 my-3">
                <div class="card h-100">
                    <img src="img/menu/${i.gambar}" class="card-img-top" style="max-height: 350px;">
                    <div class="card-body">
                        <h5 class="card-title">${i.nama}</h5>
                        <p class="card-text">${i.deskripsi}</p>
                        <h5 class="card-title">Rp. ${i.harga}</h5>
                    </div>
                    <div class="button mb-3 mx-3">
                        <a href="#" class="btn btn-secondary mt-3" data-bs-toggle="modal" data-bs-target="#orderModal">Order Now!</a>
                    </div>
                </div>
            </div>`
}