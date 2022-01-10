document.addEventListener("DOMContentLoaded", function(event) {

    var errMessage = document.getElementById('errMessage');
    var form = document.querySelector('form');
    var inputsValidation = document.querySelectorAll('.requiredInput');
    var invalidMessages = document.querySelectorAll('.invalid-feedback');
    var recordReferenceM = document.getElementById('recordReferenceM');
    var isbn13M = document.getElementById('isbn13M');
    var eanM = document.getElementById('eanM');
    var publishingDateM = document.getElementById('publishingDateM');

    function displayMessages(input, recordReferenceM, eanM, isbn13M, publishingDateM) {
        if (input.getAttribute('name') === "recordReference") {
            recordReferenceM.setAttribute("style", "display: block");
        }
        else if (input.getAttribute('name') === "ean") {
            eanM.setAttribute("style", "display: block");
        }
        else if (input.getAttribute('name') === "isbn13") {
            isbn13M.setAttribute("style", "display: block");
        }
        else if (input.getAttribute('name') === "publishingDate") {
            publishingDateM.setAttribute("style", "display: block");
        }
    }

    function hiddeMessages(input, recordReferenceM, eanM, isbn13M, publishingDateM) {
        if (input.getAttribute('name') === "recordReference") {
            recordReferenceM.setAttribute("style", "display: none");
        }
        else if (input.getAttribute('name') === "ean") {
            eanM.setAttribute("style", "display: none");
        }
        else if (input.getAttribute('name') === "isbn13") {
            isbn13M.setAttribute("style", "display: none");
        }
        else if (input.getAttribute('name') === "publishingDate") {
            publishingDateM.setAttribute("style", "display: none");
        }
    }

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

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //Para que los datos enviados no aparezcan en la ruta
        errMessage.setAttribute("style", "visibility: visible; display: block;");
        inputsValidation.forEach((input) => {
            if (input.value === "") {
                failInput(input);
            }
            input.addEventListener('change', () => {
                if (input.value !== "") {
                    correctInput(input);
                }
                else {
                    failInput(input);
                }
            });
        });
        
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
                
                form.addEventListener('submit', () => {
                    inputsValidation.forEach((input) => {
                        if (input.value === "") {
                            failInput(input);
                            displayMessages(input, recordReferenceM, eanM, isbn13M, publishingDateM);
                        }
                        input.addEventListener('keyup', () => {
                            if (input.value !== "") {
                                correctInput(input);
                                hiddeMessages(input, recordReferenceM, eanM, isbn13M, publishingDateM);
                            }
                            else {
                                failInput(input);
                                displayMessages(input, recordReferenceM, eanM, isbn13M, publishingDateM);
                            }
                        });
                    });
                });
            });
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