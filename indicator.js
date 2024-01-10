
    document.addEventListener('DOMContentLoaded', function () {
        var label = document.getElementById('percentageLabel');
        var percentage = parseInt(label.innerText.split('/')[0]);
        var rule = document.styleSheets[0].cssRules[7];

        if (percentage === 10) {
            rule.style.top = '150px'; 
            rule.style.left = '0px'; 
        }
        if (percentage === 20) {
            rule.style.top = '10px'; 
            rule.style.left = '0px'; 
        }
        if (percentage === 30) {
            rule.style.top = '130px'; 
            rule.style.left = '5px'; 
        }
        if (percentage === 40) {
            rule.style.top = '50px'; 
            rule.style.left = '75px'; 
        }
        if (percentage === 50) {
            rule.style.top = '25px'; 
            rule.style.left = '160px'; 
        }
        if (percentage === 70) {
            rule.style.top = '25px'; 
            rule.style.left = '160px'; 
        }
        if (percentage === 100) {
            rule.style.top = '150px'; 
            rule.style.left = '350px'; 
        }
    });
