const questionsWrapper = document.querySelector('.questions-wrapper');

questionsWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('clickable')) {

        const clickedIcon = event.target;
        const article = clickedIcon.closest('article'); 
        const paragraph = article.querySelector('p');
        const articleWrapper = clickedIcon.closest('.article-wrapper');
        const imgElement = articleWrapper.querySelector('img');

        if (imgElement.src.includes('icon-plus.svg')) {

            paragraph.classList.remove('hidden');
            imgElement.src = "icon-minus.svg";

        } else {

            paragraph.classList.add('hidden');
            imgElement.src = "icon-plus.svg";
            
        }
    }
});
