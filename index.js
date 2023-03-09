function LoadData() {
    let tableBody = document.getElementById('loadData');
    const savedData = JSON.parse(localStorage.getItem('user-entries')) || [];
    tableBody.innerHTML = "";
    for(let i of savedData) {
        let ele = document.createElement('tr');
        Object.keys(i).forEach((k) => {
            let tdata = document.createElement('td');
            tdata.innerText = i[k]
            ele.append(tdata);
        })
        tableBody.append(ele);
    }
}

LoadData();

let dobInp = document.querySelector('input[name=dob]');
const dateNow = new Date();
dobInp.setAttribute('max', `${dateNow.getUTCFullYear() - 18}-${(dateNow.getUTCMonth() + 1).toString().padStart(2, '0')}-${dateNow.getUTCDate().toString().padStart(2, '0')}`)
dobInp.setAttribute('min', `${dateNow.getUTCFullYear() - 55}-${(dateNow.getUTCMonth() + 1).toString().padStart(2, '0')}-${dateNow.getUTCDate().toString().padStart(2, '0')}`)

function addToLocalStorage(event) {
    event.preventDefault();
    const form = document.querySelector('form');
    const formData = new FormData(form);

    const savedData = JSON.parse(localStorage.getItem('user-entries')) || [];

    savedData.push({
        "name": formData.get('name'),
        "email": formData.get('email'),
        "password": formData.get('password'),
        "dob": formData.get('dob'),
        "terms": formData.get('terms') === 'on',
    });

    localStorage.setItem('user-entries', JSON.stringify(savedData));
    LoadData();
}
