async function getNews() {

    const keyword =
        document.getElementById("category").value;

    const container =
        document.getElementById("news-container");

    container.innerHTML =
        "<h2>Loading berita...</h2>";

    try {

        const response = await fetch(
            `https://api.spaceflightnewsapi.net/v4/articles/?search=${keyword}&limit=12`
        );

        const data = await response.json();

        container.innerHTML = "";

        if(data.results.length === 0){
            container.innerHTML =
                "<h2>Berita tidak ditemukan</h2>";
            return;
        }

        data.results.forEach(article => {

            container.innerHTML += `
            <div class="news-card">

                <img src="${article.image_url}"
                     alt="gambar berita">

                <div class="news-content">

                    <h3>${article.title}</h3>

                    <p>
                    ${article.summary.substring(0,150)}...
                    </p>

                    <a href="${article.url}"
                       target="_blank">
                       Baca Selengkapnya
                    </a>

                </div>

            </div>
            `;
        });

    } catch(error){

        container.innerHTML =
            "<h2>Gagal mengambil data.</h2>";
    }
}

getNews();