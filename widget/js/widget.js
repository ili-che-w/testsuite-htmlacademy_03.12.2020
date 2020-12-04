class Widget {
    constructor(id, data) {
        this.frame = document.getElementById(id)
        this.data = data
        this.dateTimeOpts = {
            year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'long',
            hour: 'numeric', minute: 'numeric', second: 'numeric'          
        }

        this.frame.innerHTML = this.renderData()

        document.querySelector('.news__toggle').addEventListener('click', e => {
            e.target.classList.toggle('news__toggle--open')
        })
        document.querySelectorAll('.news-line__link').forEach(link => {
            link.addEventListener('click', e => {
                e.target.parentElement.parentElement.classList.remove('news-line--not-read')
            })
        })
    }

    renderData() {
        const renderLine = line => {
            let isNotRead = (!line.read) ? 'news-line--not-read' : ''
            let output = `<tr><td class="news-line ${isNotRead}">
                <h4 class="news-line__title">${line.title}</h4>
                <div class="news-line__info">
                    <span class="news-line__author">${line.author}</span>
                    <span class="news-line__datetime">${line.dateTime.toLocaleString('en-US', this.dateTimeOpts)}</span>
                </div>
                <div class="news-line__link"><a href="${line.href}" target="_blank">Details</a></div>
            </td></tr>`
            return output
        }

        let content = this.data.map(elem => renderLine(elem)).join('')

        return `<div class="news"><span class="news__toggle">${this.data.length}</span>
            <h3 class="news__title">News Feed</h3>
            <table class="table news__body"><tbody>
                ${content}
            </tbody></table>
        </div>`
    }
}


const widget = new Widget('widget', [
        {title: 'Lorem Ipsum Dolor Sit Amet', author: 'Consectetur Adipiscing', dateTime: new Date(2020, 0, 1), href: 'https://example.com', read: true},
        {title: 'Lorem Ipsum Dolor Sit', author: 'Amet Consectetur', dateTime: new Date(2020, 1, 1), href: 'https://example.com', read: false},
        {title: 'Lorem Ipsum Dolor Sit Amet Consectetur', author: 'Adipiscing Elit', dateTime: new Date(2020, 2, 1), href: 'https://example.com', read: false},
    ])
