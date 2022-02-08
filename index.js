function calcular() {
    valor = document.getElementById('MXN').value;

    var precio = 0;
    var unidades = 0;
    var resultado = 0;
    var ganancias = 0;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })


    if (valor < 35000 || valor == null) {
        document.getElementById('MXN').value = "Inversión minima de 35,000 MXN"
        console.log('invalido')
    }
    else if (valor > 34999 && valor < 50000) {
        precio = 230;
        unidades = Math.round(valor / precio);
        resultado = 299 * unidades;
        ganancias = resultado - valor;

        document.getElementById('ctSerums').value = unidades;
        document.getElementById('PrecioVenta').value = precio;
        document.getElementById('ganancias').value = formatter.format(ganancias);
        document.getElementById('MXN').value = formatter.format(valor);
    }
    else if (valor > 49999 && valor < 60000) {
        precio = 220;
        unidades = Math.round(valor / precio);
        resultado = 299 * unidades;
        ganancias = resultado - valor;

        document.getElementById('ctSerums').value = unidades;
        document.getElementById('PrecioVenta').value = precio;
        document.getElementById('ganancias').value = formatter.format(ganancias);
        document.getElementById('MXN').value = formatter.format(valor);
    }
    else if (valor > 59999 && valor < 100000) {
        precio = 210;
        unidades = Math.round(valor / precio);
        resultado = 299 * unidades;
        ganancias = resultado - valor;

        document.getElementById('ctSerums').value = unidades;
        document.getElementById('PrecioVenta').value = precio;
        document.getElementById('ganancias').value = formatter.format(ganancias);
        document.getElementById('MXN').value = formatter.format(valor);
    }
    else if (valor > 99999 && valor < 130000) {
        precio = 200;
        unidades = Math.round(valor / precio);
        resultado = 299 * unidades;
        ganancias = resultado - valor;

        document.getElementById('ctSerums').value = unidades;
        document.getElementById('PrecioVenta').value = precio;
        document.getElementById('ganancias').value = formatter.format(ganancias);
        document.getElementById('MXN').value = formatter.format(valor);
    }
    else if (valor > 129999 && valor < 150000) {
        precio = 190;
        unidades = Math.round(valor / precio);
        resultado = 299 * unidades;
        ganancias = resultado - valor;

        document.getElementById('ctSerums').value = unidades;
        document.getElementById('PrecioVenta').value = precio;
        document.getElementById('ganancias').value = formatter.format(ganancias);
        document.getElementById('MXN').value = formatter.format(valor);
    }
    else if (valor > 149000 && valor < 200000) {
        precio = 180;
        unidades = Math.round(valor / precio);
        resultado = 299 * unidades;
        ganancias = resultado - valor;

        document.getElementById('ctSerums').value = unidades;
        document.getElementById('PrecioVenta').value = precio;
        document.getElementById('ganancias').value = formatter.format(ganancias);
        document.getElementById('MXN').value = formatter.format(valor);
    }

    else if (valor > 199999) {
        precio = 170;
        unidades = Math.round(valor / precio);
        resultado = 299 * unidades;
        ganancias = resultado - valor;

        document.getElementById('ctSerums').value = unidades;
        document.getElementById('PrecioVenta').value = precio;
        document.getElementById('ganancias').value = formatter.format(ganancias);
        document.getElementById('MXN').value = formatter.format(valor);
    }

}

// // Jquery Dependency

// $("input[data-type='currency']").on({
//     keyup: function() {
//       formatCurrency($(this));
//     },
//     blur: function() { 
//       formatCurrency($(this), "blur");
//     }
// });


// function formatNumber(n) {
//   // format number 1000000 to 1,234,567
//   return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
// }


// function formatCurrency(input, blur) {
//   // appends $ to value, validates decimal side
//   // and puts cursor back in right position.
  
//   // get input value
//   var input_val = input.val();
  
//   // don't validate empty input
//   if (input_val === "") { return; }
  
//   // original length
//   var original_len = input_val.length;

//   // initial caret position 
//   var caret_pos = input.prop("selectionStart");
    
//   // check for decimal
//   if (input_val.indexOf(".") >= 0) {

//     // get position of first decimal
//     // this prevents multiple decimals from
//     // being entered
//     var decimal_pos = input_val.indexOf(".");

//     // split number by decimal point
//     var left_side = input_val.substring(0, decimal_pos);
//     var right_side = input_val.substring(decimal_pos);

//     // add commas to left side of number
//     left_side = formatNumber(left_side);

//     // validate right side
//     right_side = formatNumber(right_side);
    
//     // On blur make sure 2 numbers after decimal
//     if (blur === "blur") {
//       right_side += "00";
//     }
    
//     // Limit decimal to only 2 digits
//     right_side = right_side.substring(0, 2);

//     // join number by .
//     input_val = "$" + left_side + "." + right_side;

//   } else {
//     // no decimal entered
//     // add commas to number
//     // remove all non-digits
//     input_val = formatNumber(input_val);
//     input_val = "$" + input_val;
    
//     // final formatting
//     if (blur === "blur") {
//       input_val += ".00";
//     }
//   }
  
//   // send updated string to input
//   input.val(input_val);

//   // put caret back in the right position
//   var updated_len = input_val.length;
//   caret_pos = updated_len - original_len + caret_pos;
//   input[0].setSelectionRange(caret_pos, caret_pos);
// }
