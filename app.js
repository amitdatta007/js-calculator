const inputField = document.getElementById('input-field');
const buttons = document.querySelectorAll('.btn-cal');


buttons.forEach((item) => {
    item.addEventListener('click', (e) =>{
        const clicked = e.target;
        if(clicked.id === 'clear'){
            inputField.value = '';
        } else if(clicked.id === 'backspace'){
            inputField.value = inputField.value.substring(0, inputField.value.length -1);
        } else if(inputField.value !== '' && clicked.id === 'equal'){
            inputField.value = eval(inputField.value);
        } else if(inputField.value === '' && clicked.id === 'equal'){
            inputField.value = 'empty!';
            setTimeout(() => {
                inputField.value = '';
            }, 3000);
        } else{
            inputField.value = inputField.value + clicked.innerHTML;
        };
    });
});