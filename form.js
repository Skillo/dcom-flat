document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('signup-form');
    var formData = new FormData(form);

    form.onsubmit = function(){
        this.preventDefault();
        var xhr = new XMLHttpRequest();
        xhr.open("POST", form.action, true);

        //Send the proper header information along with the request
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                window.location.href = 'thanks.html';
            }
        }
        xhr.send(formData);
        // xhr.send(new Int8Array());
        // xhr.send(document);

    }
});