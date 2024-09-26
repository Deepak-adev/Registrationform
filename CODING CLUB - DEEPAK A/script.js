function filterFunction() {
    const input = document.getElementById('dropdownInput');
    const filter = input.value.toLowerCase();
    const div = document.getElementById("dropdownList");
    const items = div.getElementsByClassName('dropdown-item');

    div.style.display = "block"; 

    for (let i = 0; i < items.length; i++) {
        const txtValue = items[i].textContent || items[i].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
    
    if (filter === "") {
        div.style.display = "none";
    }
}

window.onclick = function(event) {
    if (!event.target.matches('#dropdownInput')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    this.style.display = 'none';

    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'flex'; 
    successMessage.classList.add('fade-in');

    setTimeout(function() {
        const redirectMessage = document.getElementById('redirectMessage');
        redirectMessage.style.display = 'block'; 

        setTimeout(function() {
            window.location.href = "https://www.skillrack.com";
        }, 2000);
    }, 2000); 
});
