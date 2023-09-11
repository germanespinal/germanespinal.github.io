function calcularPropina() {
    const totalCuenta = parseFloat(document.getElementById("total").value);
    const porcentajePropina = parseFloat(document.getElementById("percentage").value);
    
    if (isNaN(totalCuenta) || isNaN(porcentajePropina)) {
      alert("Por favor, ingrese valores válidos.");
      return;
    }
    
    const propina = (totalCuenta * porcentajePropina) / 100;
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerText = `Propina: $${propina.toFixed(2)}`;
  }
  