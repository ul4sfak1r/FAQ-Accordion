const questionsWrapper = document.querySelector('.questions-wrapper');

questionsWrapper.addEventListener('click', (event) => {

    if (event.target.classList.contains('clickable')) {
    	const plusIcon = event.target;
        const article = event.target.closest('article'); 
        const paragraph = article.querySelector('p');
        const articleWrapper = event.target.closest('.article-wrapper');
        
        if (articleWrapper.querySelector('img').src.includes('icon-plus.svg')) {

        	paragraph.classList.remove('hidden');
			articleWrapper.querySelector('img').src = "icon-minus.svg";


        } else {

        	paragraph.classList.add('hidden');
        	articleWrapper.querySelector('img').src = "icon-plus.svg";
            
        }
        
    }
});