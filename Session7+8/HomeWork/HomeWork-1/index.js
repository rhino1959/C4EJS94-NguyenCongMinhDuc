let container = document.getElementById('list');
for (let i=0;i<3;i++) {
    container.insertAdjacentHTML('<position>', `<li>${i}</li>`)
}
