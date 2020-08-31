function openSignUPForm(e) {
  const modalContainer = document.getElementsByClassName("modal");
  (modalContainer[0].style.display == 'block') ? modalContainer[0].style.display = 'none' :
    modalContainer[0].style.display = 'block';
}