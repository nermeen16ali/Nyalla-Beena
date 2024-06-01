var fileInputs = document.querySelectorAll('.upload-product-img');
const companyLogoParent = document.querySelector(".companyLogo");

fileInputs.forEach(function(input){
    input.addEventListener("change", function() {
        const file = this.files[0];
        const reader = new FileReader();
      
        reader.onload = function(e) {
            var img = input.previousElementSibling.querySelector('img');
            img.src = e.target.result;
            img.classList.remove('d-none');
            img.classList.add('img-fluid');
            input.innerHTML = '';
        };
      
        reader.readAsDataURL(file);
    });
})