document.addEventListener("DOMContentLoaded", function() {
    var inputContainers = document.querySelectorAll('.input-container');

    inputContainers.forEach(function(container) {
        var input = container.querySelector('input');
        var label = container.querySelector('label');

        input.addEventListener('focus', function() {
            label.classList.add('active-label');
        });

        input.addEventListener('blur', function() {
            if (input.value === '') {
                label.classList.remove('active-label');
            }
        });
    });
});
