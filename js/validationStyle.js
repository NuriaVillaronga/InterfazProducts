document.addEventListener("DOMContentLoaded", function(event) {

    var errMessage = document.querySelector('.errMessage');
    var form = document.querySelector('form');
    var inputsValidation = document.querySelectorAll('.requiredInput');
    var invalidMessages = document.querySelectorAll('.invalid-feedback');

    function hiddeAllMessages(invalidMessages) {
        invalidMessages.forEach((invalidMessage) => {
            invalidMessage.setAttribute("style", "display: none;");
        });
    }

    function failInput(input) {
        input.setAttribute("style", "border-bottom: 1px solid red;");
    }

    function correctInput(input) {
        input.setAttribute("style", "border-bottom: 1px solid rgb(185, 185, 185);");
    }

    form.addEventListener('submit', () => {
        //e.preventDefault();
        
        inputsValidation.forEach((input) => {
            errMessage.setAttribute("style", "visibility: visible; display: block;");
            if (input.value === "") {
                failInput(input);
                document.getElementById(input.getAttribute("data-bs-target")).style.display="block";
            }
            input.addEventListener('keyup', () => {
                if (input.value !== "") {
                    correctInput(input);
                    document.getElementById(input.getAttribute("data-bs-target")).style.display="none";
                }
                else {
                    failInput(input);
                    document.getElementById(input.getAttribute("data-bs-target")).style.display="block";
                }
            });
        });
    });

    //Hay que hacer un evento para el reset porque sino, cuando pulses en reset no se eliminan los mensajes de error del input
    form.addEventListener('reset', () => {
        errMessage.setAttribute("style", "visibility: hidden; display: none;");
        
        inputsValidation.forEach((input) => {
            correctInput(input);
            
            input.addEventListener('change', () => {
                correctInput(input);
            });
            
            input.addEventListener('keyup', () => {
                correctInput(input);
                hiddeAllMessages(invalidMessages)
            });
            
            hiddeAllMessages(invalidMessages)
        });
    });

    (function () {
        'use strict';
        var forms = document.querySelectorAll('.needs-validation');

        Array.prototype.slice.call(forms).forEach(function(form) {
                form.addEventListener('submit', function(event) {
                        if (!form.checkValidity()) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated')
                    }, false)
        })
    })()

});