fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then(response => response.json())
.then(data => {
    console.log(data);
    let title = document.querySelector('.title');
    title.innerText += ' ' +  data.title;
    let mt = document.querySelector('.media_type');
    mt.innerText += ' ' +  data.media_type;
    if (data.media_type === 'video') {

        let frame = document.createElement('iframe')
        frame.src = data.url;
        let figure = document.querySelector('figure');
        figure.innerHTML = '';
        figure.appendChild(frame);
    }
    else {

        let src = document.querySelector('.image');
        src.src = data.url;
        src.alt += ' ' +  data.title;
    }

    let expl = document.querySelector('.explanation');
    expl.innerText += ' ' +  data.explanation;

    let cr = document.querySelector('#copyright');
    if (data.copyright) {
        cr.innerText += ' ' + data.copyright;
    } else cr.innerText = '';
    let td = document.querySelector('.date');
    td.innerText += ' ' + data.date;
});
