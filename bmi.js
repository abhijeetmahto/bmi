function cal()
{
    document.getElementById("res").innerHTML="";
    var height=parseFloat(document.getElementById("h").value);
    var weight=parseFloat(document.getElementById("w").value);
    if (height === "" || isNaN(height)) 
        document.getElementById("res").innerHTML = "Enter a valid Height!";
    else if (weight === "" || isNaN(weight)) 
        document.getElementById("res").innerHTML = "Enter a valid Weight!";
    else
    {

        var bmi = weight / (height * height);
        if(bmi<18.5)
        {
            document.getElementById("res").innerHTML='<b>UnderWeight :  '+bmi+'</b>';
        }
        else if(bmi >= 18.6 && bmi < 24.9)
        {
            document.getElementById("res").innerHTML='<b>Normal Range :  '+bmi+'</b>';
        }
        else if(bmi >= 25.0 && bmi < 29.9)
        {
            document.getElementById("res").innerHTML='<b>OverWeight :  '+bmi+'</b>';
        }
        else if(bmi>=30)
        {
            if(bmi >= 30.0 && bmi < 34.9)
            {
                document.getElementById("res").innerHTML='<b>Obese Class-1 :  '+bmi+'</b>';
            }
            else if(bmi>=35.0 && bmi < 39.9)
            {
                document.getElementById("res").innerHTML='<b>Obese Class-2 :  '+bmi+'</b>';
            }
            else
            {
                document.getElementById("res").innerHTML='<b>Obese Class-3 : '+bmi+'</b>';
            }
        }
    }
}