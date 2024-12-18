// function showInfo(desk) {
//     const infoText = document.getElementById('info-text');
//     const deskInfo = document.getElementById('desk-info');
  
//     if (desk === 'canteen') {
//       infoText.textContent = "The canteen desk is located near the campus canteen. Open from 9:00 AM to 5:00 PM.";
//     } else if (desk === 'admin') {
//       infoText.textContent = "The admin desk is located near the admin office. Open from 9:00 AM to 5:00 PM.";
//     }
  
//     deskInfo.classList.remove('hidden');
//   }
  
//   function closeInfo() {
//     document.getElementById('desk-info').classList.add('hidden');
//   }
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
  firebase.auth().signOut()
    .then(() => {
      alert('Logged out successfully!');
      window.location.href = 'login.html';
    })
    .catch((error) => {
      alert(error.message);
    });
});
  