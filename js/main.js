btn = document.getElementById('btnpro')
part3 = document.getElementById('super')

afin_card = document.getElementById('afin_card')

btn.addEventListener('click', function() {
    part3.scrollIntoView({ 
    behavior: 'smooth', // Плавная прокрутка
    block: 'start'      // Прокрутить до начала элемента
  });
});



afin_card.addEventListener('click', function() {
    window.open('https://google.com', '_blank');



})