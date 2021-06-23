
    const headerXr = document.querySelector('header')

    new Promise((resolve, rejects) => {
        $.ajax({
            url: './head.html',
            type: 'get',
            success(data) {
                resolve(data)
            }
        })
    }).then(data => {
        const nav = document.createElement('nav')
        nav.innerHTML = data
        headerXr.appendChild(nav)
        return new Promise((resolve, rejects) => {
            $.ajax({
                url: './headBox.html',
                type: 'get',
                success(data) {
                    resolve(data)
                }
            })
        })
    }).then(data => {
        const div = document.createElement('div')
        div.innerHTML = data
        headerXr.appendChild(div)
        const script = document.createElement('script')
        script.src = './js/xQ.js'
        document.body.appendChild(script)
        return new Promise((resolve,rejects) => {
            $.ajax({
                url: './footer.html',
                type: 'get',
                success(data) {
                    resolve(data)
                }
            })
        })
    }).then(data=>{
        const footerDiv = document.createElement('div')
        footerDiv.innerHTML = data;
        document.body.appendChild(footerDiv)
    })





