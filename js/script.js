
const getData = () =>{
    
    const chapter = document.getElementById('chapterInput').value;
    const verse = document.getElementById('verseInput').value;

    const apiUrl = `https://vedicscriptures.github.io/slok/${chapter}/${verse}/`;
    if (chapter && verse) {
    
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
                const printslok = document.getElementById('slok');
                printslok.innerHTML = `
                    <h2><span>Chapter:</span> ${data.chapter}</h2>
                    <p><span>Verse: </span>${data.verse}</p>
                    <p>author: ${data.tej.author}</p>
                    <p>Slok: ${data.slok}</p>
                    <p><transliteration: ${data.transliteration}</p>
                    <p>Hindi translation: ${data.tej.ht}</p>
                `;
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('slok').innerHTML = '<p style="color: red;">Error fetching the slok. Please try again later.</p>';
            });
    } else {
        document.getElementById('slok').innerHTML = '<p style="color: red;">Please enter both chapter and verse numbers.</p>';
    }
}




