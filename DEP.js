
const checkbox = document.getElementById("myCheckbox");

            checkbox.addEventListener("change",function checkElegibility()) {
            let age= document.getElementById("age").value;
            if (age>=65){
                document.getElementById("output").innerHTML =
                "Congradulations you qualify for senior Discount";
            } else if (Number(age) >=18 && checkElegibility().checked){
                document.getElementById("output").innerHTML =
                "Congradulation you are Eligible for Member Discount";
            } else {
                document.getElementById("output").innerHTML =
                "Sorry you are not Eligible For Discount";
            }
            //prevent the default submission behavior, which is to refresh the page.
            event.preventDefault();
             
        }
