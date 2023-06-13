function contar(a) {
    if(a=="hola")
    {
        var apariciones = 1;
    }
    else
    {
    apariciones = a.split(' ').length;  
    }
    return apariciones;
  }
  export default contar;
  