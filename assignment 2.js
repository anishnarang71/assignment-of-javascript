<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>js intro</title>
</head>
<body>
    <script>
        var num1=11;
        var num2=7;
        res1=num1+num2;//arithmetic operator
        res2=num1-num2;//arithmetic operator
        res3=num1*num2;//arithmetic operator
        res4=num1/num2;//arithmetic operator
        res5=num1%num2;//arithmetic operator
        console.log(res1);
        console.log(res2);
        console.log(res3);
        console.log(res4);
        console.log(res5);
        num1+=num2;//Assignment operator
        console.log(num1);
        num1-=num2;//assignment operator result will be 11 as num1 was changed to 18 in previous line
        console.log(num1);
        //similarly there are other assignment operator like *=,/= and %=
        console.log(num1==num2);//comparison operator
        console.log(num1!=num2);//comparison operator
        console.log(num1<num2);//comparison operator
        console.log(num1>num2);//comparison operator
        console.log(num1===num2);//identity operator
        console.log(num1!==num2);//identity operator
        console.log(num1==num2 && num1>num2);//comparison operator
        console.log(num1!=num2||num1<num2);//comparison operator
        console.log(num1++);//unary operator
        //if else statement
        if(num1===num2){
            console.log("both numbers are same");
        }
        
        else
            console.log("both numbers are not same");
        
         </script>
    
</body>
</html>