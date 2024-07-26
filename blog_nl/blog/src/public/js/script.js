const btnDelete = document.querySelectorAll('.btn-delete');
const modalDelete = document.getElementById('deleteModal');

btnDelete.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        modalDelete.classList.remove('hidden');
    });
});

function closeModal() {
    const modalDelete = document.getElementById('deleteModal');
    modalDelete.classList.add('hidden')
}

