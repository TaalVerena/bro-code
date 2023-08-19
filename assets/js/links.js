function goToSection () {
  const groups = document.getElementById('groups');
  const meetUps = document.getElementById('meetups');
  const aboutUs = document.getElementById('about-us');
  groups.addEventListener('click', function () {
    window.location = 'index.html#groups';
  })
  meetUps.addEventListener('click', function () {
    window.location = 'index.html#meetups';
  })
  aboutUs.addEventListener('click', function () {
    window.location = 'index.html#about-us';
  })
}
goToSection();