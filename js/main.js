const btn = document.querySelector('.btn');
const id_tag = document.querySelector('.advice-id');
const advice = document.querySelector('.advice');

function onBtnClick(){
    fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
        .then(resp => resp.json())
        .then(jsonData => {
            id_tag.innerText = 'advice #' + jsonData['slip']['id'];
            advice.innerText = '"' + jsonData['slip']['advice'] + '"';
        });
    
}

btn.addEventListener('click', onBtnClick);

onBtnClick();