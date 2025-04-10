function toggleAbout() {
  const about = document.getElementById('about');
  const card = document.getElementById('profileCard');

  if (about.style.display === 'flex') {
    about.style.display = 'none';
    card.classList.remove('expanded');
  } else {
    about.style.display = 'flex';
    card.classList.add('expanded');
  }
}
