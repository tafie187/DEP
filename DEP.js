function checkElegibility() {
            let age= document.getElementById("age").value;
            if (age>=65){
                document.getElementById("output").innerHTML =
                "Congradulations you qualify for senior Discount";
            } else if (age >=18 && isMember.checked){
                document.getElementById("output").innerHTML =
                "Congradulation you are Eligible for Member Discount";
            } else {
                document.getElementById("output").innerHTML =
                "Sorry you are not Eligible For Discount";
            }
        }
        const form = document.getElementById("form");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
          });
