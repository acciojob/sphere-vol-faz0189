document.getElementById("MyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let radius = document.getElementById("radius").value
    let volumeField = document.getElementById("volume");
    
    if (isNaN(radius) || radius < 0) {
        alert("Enter a valid non-negative number");
        volumeField.value = "NaN";
        return;
    }
    
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeField.value = volume.toFixed(4);
});
