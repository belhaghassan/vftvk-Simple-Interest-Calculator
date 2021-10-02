function compute()
{
    // Initialize input values
    var principal = document.getElementById("principal").value;
    var rate =document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Calculate interest from input values and retreive year.
    var interest = (principal * years * rate) / 100;
    var year = new Date().getFullYear() + parseInt(years);

    // Check to see if principal is less than positive 1
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    // Cast principal variable to number and add it to interest.
    principal = Number(principal);
    var amount = principal +  interest;

    // Assign each line in result to a variable for readability.
    var line1 = "\<br\>\<br\>If you deposit " + "<mark>" + principal + "</mark>,\<br\>";
    var line2 = "at an interest rate of " + "<mark>" + rate + "</mark>%.\<br\>";
    var line3 = "You will receive an amount of " + "<mark>" + amount + "</mark>,\<br\>";
    var line4 = "in the year " + "<mark>" + year + "</mark>.";

    // Modify html element "result" with the concatenation of new lines.
    document.getElementById("result").innerHTML=line1 + line2 + line3 + line4;

}

function updateRate()
{
    // Retreive and update range value next to Rate slider.
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
