const access_key = '585509563b8577229b455369328bba94';
let endpoint = 'live';
 
const getPrice = async () => {
    const result = await fetch(`http://api.coinlayer.com/api/${endpoint}?access_key=${access_key}`);
    let response = await result.json();
    console.log(response)
    console.log(response.rates)
    show(response);
}

const DOM_Elements = {
    price_list : '.price-list'
}

const create_list = (id, name) => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}"> ${name} </a> ` 
    document.querySelector(DOM_Elements.price_list).insertAdjacentHTML('beforeend', html)
}

function show(response) {
    let tab =
        `<tr>
            <th>Coin</th>
            <th>Price</th>
        </tr>`;
    Object.keys(response.rates).forEach(key => {
        tab += `<tr>
        <td>${key}</td>
        <td>${response.rates[key]}</td>
        </tr>`
    })

    document.getElementById("price-display").innerHTML = tab;
}



