document.addEventListener("DOMContentLoaded", function (event) {
    var selectPages = document.querySelector('.selectPages');
    //var formPages = document.querySelector('.formPages');

    selectPages.addEventListener('change', (event) => {
        //formPages.submit();
        alert(`Numero de productos por página: ${event.target.value}`);
    });
});