fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then(response => response.json())
.then(data => {
    console.log(data);
    let title = document.querySelector('.title');
    title.innerText += ' ' +  data.title;
    let src = document.querySelector('.image');
    src.src = 'https://apod.nasa.gov/apod/image/2006/SarsCov2_Niaid_960.jpg';
    src.alt += ' ' +  data.title;
    let expl = document.querySelector('.explanation');
    expl.innerText += ' ' +  data.explanation;
    let mt = document.querySelector('.media_type');
    mt.innerText += ' ' +  data.media_type;
    let cr = document.querySelector('#copyright');
    if (data.copyright) {
        cr.innerText += ' ' + data.copyright;
    } else cr.innerText = '';
    let td = document.querySelector('.date');
    td.innerText += ' ' + data.date;
});
