const kanji_container = document.getElementById("kanji_container");


const fetch_list = async name => {
    const url = `https://kanjiapi.dev/v1/kanji/${name}`
    const res = await fetch(url);
    const lista = await res.json();
    // console.log(lista)
    const n_kanjis = lista.length;
    // console.log(n_kanjis);
    for (let i = 0; i < n_kanjis; i++) {
        await get_kanji(lista[i]);
    }
}

const get_kanji = async id => {
    const url = `https://kanjiapi.dev/v1/kanji/${id}`;
    const res = await fetch(url);
    const kanji = await res.json();
    console.log(kanji);
    create_kanji_card(kanji);
}

function create_kanji_card(kanji) {
    const kanji_div = document.createElement('div');
    kanji_div.classList.add('kanji');

    const kanjiHTML = `
        <div class="write">
            <h1>
                ${kanji.kanji}
               
            </h1>
            <p>
                ${kanji.heisig_en}
            </p>
        </div>
    `
    kanji_div.innerHTML = kanjiHTML;
    kanji_container.appendChild(kanji_div);
}

fetch_list("joyo");