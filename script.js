const tabItems = document.quarySelectorAll('.tab-item');
const tabContentItems = document.quarySelectorAll('.tab-content-item');


function selectItem (e) {
removeBorder();
removeShow();
  this.classList.add('tab-border');


  const tabContentItem = document.quarySelectorAll(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}




function removeBorder () {
  tabItems.forEach(item => classList.remove('tab-border'))
}


function removeShow () {
  tabContentItems.forEach(item => classList.remove('show'))
}
tabItems.forEach(item => item.addEventListener('click',selectItem));