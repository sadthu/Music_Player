const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const app = {
    songs : [
        {
            Name: 'Gió',
            author: 'jack',
            path: './assets/list_song/Gio-Jank-8738046.mp3',
            image:'./assets/image/536dc591405fc70b6f4932eeb18337e8.jpg'
        },
        {
            Name: 'À lôi',
            author: 'Double2TMaseew',
            path: './assets/list_song/ALoi-Double2TMasew-10119691.mp3',
            image:'./assets/image/R-10382783-1496372484-5685.jpg'
        },
        {
            Name: 'Ngả ngả nghiêng',
            author: 'TrungIU',
            path: './assets/list_song/NgaNgaNghieng-TrunggIUVietNam-11225360.mp3',
            image:'./assets/image/3c94e7cffdbaa2b49a20056aa3c74027.jpg'
        },
        {
            Name: 'Ngày mai người ta lấy chồng',
            author: 'Thành Đạt',
            path: './assets/list_song/NgayMaiNguoiTaLayChong-ThanhDat-9466823.mp3',
            image:'./assets/image/1692690750438_6401.jpg'
        },
        {
            Name: 'Sao trời làm gió',
            author: 'Nal',
            path: './assets/list_song/SaoTroiLamGio-Nal-11053176.mp3',
            image:'./assets/image/1692690750438_640.jpg'
        },
        {
            Name: 'Sao trời làm gió',
            author: 'Nal',
            path: './assets/list_song/SaoTroiLamGio-Nal-11053176.mp3',
            image:'./assets/image/1692690750438_640.jpg'
        },
        {
            Name: 'Sao trời làm gió',
            author: 'Nal',
            path: './assets/list_song/SaoTroiLamGio-Nal-11053176.mp3',
            image:'./assets/image/1692690750438_640.jpg'
        },
        {
            Name: 'Sao trời làm gió',
            author: 'Nal',
            path: './assets/list_song/SaoTroiLamGio-Nal-11053176.mp3',
            image:'./assets/image/1692690750438_640.jpg'
        },
        {
            Name: 'Sao trời làm gió',
            author: 'Nal',
            path: './assets/list_song/SaoTroiLamGio-Nal-11053176.mp3',
            image:'./assets/image/1692690750438_640.jpg'
        },
        {
            Name: 'Sao trời làm gió',
            author: 'Nal',
            path: './assets/list_song/SaoTroiLamGio-Nal-11053176.mp3',
            image:'./assets/image/1692690750438_640.jpg'
        },
        {
            Name: 'Sao trời làm gió',
            author: 'Nal',
            path: './assets/list_song/SaoTroiLamGio-Nal-11053176.mp3',
            image:'./assets/image/1692690750438_640.jpg'
        },
        {
            Name: 'Sao trời làm gió',
            author: 'Nal',
            path: './assets/list_song/SaoTroiLamGio-Nal-11053176.mp3',
            image:'./assets/image/1692690750438_640.jpg'
        }
    ],

    render: function() {
        var listSong = $('.list_song')
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="song">
                <div class="thumb" style="background-image: url('${song.image}');"></div>
                <div class="body">
                    <h3 class="title">${song.Name}</h3>
                    <p class="author">${song.author}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                </div>
            `
        })
        listSong.innerHTML = htmls.join('')
    },

    handleEvents: function() {
        const cd = $('.cd')
        const cdWidth = cd.offsetWidth
        console.log(cdWidth)
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            console.log(scrollTop)
            const newCdWidth =  cdWidth - scrollTop
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth
            
        }
    },

    start: function() {
        this.handleEvents()
        this.render()
    }
}

app.start()