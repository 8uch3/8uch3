document.getElementById('submitBtn').addEventListener('click', () => {
  const accessKey = document.getElementById('accessKey').value;

  if (accessKey === '9973') {
    alert('Access Granted!');
    window.location.href = 'https://www.ecoledirecte.com/login';
  } else if (accessKey === 'work') {
    alert('Access Granted!');
    window.location.href = 'work.html';
  } else {
    alert('Access Denied. Try again.');
  }
});
