
function getDataIndonesia() {
    fetch('https://data.covid19.go.id/public/api/update.json', { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data)

        let positif = data.update.penambahan.jumlah_positif
        let sembuh = data.update.penambahan.jumlah_sembuh
        let meninggal = data.update.penambahan.jumlah_meninggal
        
        document.getElementById("data-positif").innerHTML = positif
        document.getElementById("data-sembuh").innerHTML = sembuh
        document.getElementById("data-meninggal").innerHTML = meninggal  
    })
    .catch(err => {
        console.log(err)
    });
}

function getDataProvinsi() {

    let dataProvinsi = "<tr><th>Provinsi</th><th>Positif</th><th>Sembuh</th><th>Meninggal</th></tr>"
    fetch('https://data.covid19.go.id/public/api/prov.json', { 
        method: 'GET',
    })
    .then((response) => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        data.list_data.forEach(function(item) {
            dataProvinsi += '<tr>'
            dataProvinsi += '<td>'+ item.key + '</td>'
            dataProvinsi += '<td>'+ item.penambahan.positif + '</td>'
            dataProvinsi += '<td>'+ item.penambahan.sembuh + '</td>'
            dataProvinsi += '<td>'+ item.penambahan.meninggal + '</td>'
            dataProvinsi += '</tr>'
        })

        document.getElementById("table-provinsi").innerHTML = dataProvinsi
    })
    .catch((err)=> {
        console.log(err)
    });
}