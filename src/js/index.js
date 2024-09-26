// Открыть модальное окно
document.getElementById("modal-window-btn").addEventListener("click", function() {
    document.getElementById("my-modal-window").classList.add("open")
    document.getElementById("my-box").classList.add("open") //добавляет класс open к выбранному элементу
})

// Закрыть модальное окно
document.getElementById("close-modal-window").addEventListener("click", function() {
    document.getElementById("my-modal-window").classList.remove("open")
    document.getElementById("my-box").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal-window").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal-window .modal-window__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal-window").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

$('.kundastemen').click(function (e) {
    e.preventDefault();
    $('.modal-window-inside').addClass('discovered');
    });
  $('.closepovekunos').click(function (e) {
    e.preventDefault();
    $('.modal-window-inside').removeClass('discovered');
    });