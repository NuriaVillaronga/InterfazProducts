document.addEventListener("DOMContentLoaded", function (event) {
    var body = document.querySelector('body');
    var inputs = document.getElementsByTagName("input");
    var form = document.querySelector('form');
    var labels = document.querySelectorAll("label");

    body.addEventListener('keyup',
        () => {
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].value === "") {
                    document.getElementsByTagName("label")[i].style.visibility = 'hidden';
                }
                else {
                    document.getElementsByTagName("label")[i].style.visibility = 'visible';
                }
            }
        }
    );

    form.addEventListener('reset', () => {
        labels.forEach((label) => {
            label.setAttribute("style", "visibility: hidden;");
        });
    });
});