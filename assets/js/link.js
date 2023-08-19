function goToSection () {
    const groups = document.getElementById('groups-link');
    const meetUps = document.getElementById('meetups-link');
    const aboutUs = document.getElementById('about-us-link');
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