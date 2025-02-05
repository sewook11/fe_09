// script.js (초기 스크립트: DOMContentLoaded 이벤트 등록)
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            if (this.id === 'clear') {
                display.value = '';
            } else if (this.id === 'equals') {
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                } 
            }else {
                display.value += value;
            }
        });
    });

});