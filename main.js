const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const PLAYER_STORAGE_KEY = 'PLAYER'

const header = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const btnRepeat = $('.btn-repeat')
const btnPrev = $('.btn-prev')
const btnPlayPause = $('.btn-playpause')
const btnNext = $('.btn-next')
const btnRandom = $('.btn-random')
const progress = $('#progress')
const listSongNode = $('.list_song')

// properties: lấy giá trị; events: xử lý sự kiện xảy ra; method; xử lý các hành động của người dùng

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom : false,
    isRepeat: false,

    // lấy data từ localStorage
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},

    // đưa data lên localStorage
    setConfig: function(key, value) {
        this.config[key] = value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },

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
                <div class="song" data-index=${index}>
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

    // Định nghĩa thuộc tính cho object (object.defineProperty)
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong',{
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },

    handleEvents: function() { 
        const _this = this
        const cdWidth = cd.offsetWidth

        const cdThumbAnimate = cdThumb.animate([
            {transform: "rotate(360deg)" }
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause()

        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth =  cdWidth - scrollTop
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth   
        }

        btnPlayPause.onclick = function () {
            if (_this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }

        audio.onplay = function() {
            _this.isPlaying = true
            btnPlayPause.classList.add('playing')
            cdThumbAnimate.play()
        }

        audio.onpause = function() {
            _this.isPlaying = false
            btnPlayPause.classList.remove('playing')
            cdThumbAnimate.pause()
        }

        audio.ontimeupdate = function() {
            if(audio.duration) {
                const percentProgress = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = percentProgress
            }
        }

        progress.oninput = function(e) {
            const seekTime = Math.floor(e.target.value * audio.duration / 100)
            audio.currentTime = seekTime
        }

        btnNext.onclick =  function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.nextSong()
            }
            audio.play()
        }

        btnPrev.onclick =  function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.prevSong()
            }
            audio.play()
        }

        btnRandom.onclick = function() {
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom)
            btnRandom.classList.toggle('active', _this.isRandom)
        }

        btnRepeat.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat', _this.isRepeat)
            btnRepeat.classList.toggle('active', _this.isRepeat)
        }

        listSongNode.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)') // chọn node song không có active
            const optionNode =  e.target.closest('.option')
            if (songNode || optionNode) {
                //xử lý khi click vào node song không active
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.activeSong()
                    audio.play()
                }

                //xử lý khi click vào node option
                if(optionNode) {

                }
            }

        }

        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play()
            } else {
                btnNext.click()
            }
        }
    },

    loadCurrentSong: function() {
        header.innerHTML = this.currentSong.Name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },

    loadConfig: function() {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },

    nextSong: function() {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
        this.activeSong()
        this.scrollToActiveSong()
    },

    prevSong: function() {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
        this.activeSong()
        this.scrollToActiveSong()
    },

    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
        this.activeSong()
        this.scrollToActiveSong()
    },

    activeSong: function() {
        const nodeSongs = $$('.song')
        nodeSongs.forEach(function(nodeSong) {
            const indexSong = Number(nodeSong.dataset.index)
            if(indexSong === app.currentIndex) {
                nodeSong.classList.add('active')
            } else {
                nodeSong.classList.remove('active')
            }
        })
    },

    scrollToActiveSong: function() {
        const songActive = $('.song.active')
        songActive.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    },

    start: function() {
        this.loadConfig()
        this.defineProperties()
        this.handleEvents()
        this.loadCurrentSong()
        this.render()
        this.activeSong()
        btnRandom.classList.toggle('active', this.isRandom)
        btnRepeat.classList.toggle('active', this.isRepeat)
    }
}

app.start()