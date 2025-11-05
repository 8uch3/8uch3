document.getElementById('submitBtn').addEventListener('click', () => {
    const accessKey = document.getElementById('accessKey').value;
    const correctKey = '9973'; // Remplacez par la clé que vous voulez utiliser

    if (accessKey === correctKey) {
        alert('Access Granted!');
        window.location.href = 'https://www.ecoledirecte.com/login'; // Remplacez par l'URL de la page à accéder
    } else {
        alert('Access Denied. Try again.');
    }

    const correctKey = 'work'; // Remplacez par la clé que vous voulez utiliser

    if (accessKey === correctKey) {
        alert('Access Granted!');
        window.location.href = 'work.html'; // Remplacez par l'URL de la page à accéder
    } else {
        alert('Access Denied. Try again.');
    }
});

