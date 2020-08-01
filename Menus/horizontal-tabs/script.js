let firstTab = document.querySelector('.tablinks');
firstTab.click();


function openCity(e, city) {
  let tabs = document.querySelectorAll(".tabcontent");

  tabs.forEach(tab => {
    tab.style.display = 'none';
  })

  let buttons = document.querySelectorAll(".tablinks");
  buttons.forEach(button => {
    button.classList.remove('active');
  })

  e.target.classList.add('active');
  
  let tab = '';
  tab = document.getElementById(city);

  if (tab) {
    tab.style.display = 'block';
  }
}