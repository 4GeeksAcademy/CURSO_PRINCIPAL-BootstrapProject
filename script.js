let buttonCuadricula = document.getElementById("buttonCuadricula");
let buttonIndividual = document.getElementById("buttonIndividual");


buttonCuadricula.addEventListener('click', function() {
    var distributionRule2 = document.getElementById("distributionRule2");
    distributionRule2.classList.remove('d-flex')
    distributionRule2.classList.add('d-none')

    var distributionRule1 = document.getElementById("distributionRule1");
    distributionRule1.classList.remove('d-none')
    distributionRule1.classList.add('d-flex');
});

buttonIndividual.addEventListener('click', function() {
    var  distributionRule1 = document.getElementById("distributionRule1");
    distributionRule1.classList.remove('d-flex')
    distributionRule1.classList.add('d-none')

    var distributionRule2 = document.getElementById("distributionRule2");
    distributionRule2.classList.remove('d-none')
    distributionRule2.classList.add('d-flex', 'flex-column');
});