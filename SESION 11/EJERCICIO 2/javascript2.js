function mayor(txtnum1,txtnum2,txtnum3){
    var xmayor, num1, num2, num3;
    xmayor = 0;
    num1 =parseInt(txtnum1);
    num2 =parseInt(txtnum2);
    num3 =parseInt(txtnum3);
    if(num1>xmayor){
        xmayor=num1;
    }
    if(num2>xmayor){
        xmayor=num2;
    }
    if(num3>xmayor){
        xmayor=num3;
    }
    alert('El número mayor es: '+xmayor);
}