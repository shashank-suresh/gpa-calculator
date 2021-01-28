var container = document.getElementById("main");
var init_btn = document.getElementById("btn1");
var init_inp = document.getElementById("subs");

function subjects() {
    // Getting the number of subjects
    var n = document.getElementById("subs").value;

    // Clearing the initial input field and button
    container.innerHTML = '';

    // Creating a pattern for number validation
    var nums = /^[0-9]+$/

    // Validating input
    if (n.match(nums)) {
        // Creating 'n' input fields
        for (i = 0; i < n; i++) {
            container.appendChild(document.createTextNode("Subject Marks: "));
            var marks = document.createElement("input");
            marks.type = "text";
            marks.id = "mark" + i;
            marks.class = "markinp"
            marks.placeholder = "Enter your marks"
            container.appendChild(marks);
            container.appendChild(document.createElement("br"));
        }
        
        // Creating a submit button
        container.appendChild(document.createElement("br"));
        var btnSub = document.createElement("button");
        var subtext = document.createTextNode("Submit");
        btnSub.type = "submit";
        btnSub.name = "submit";
        btnSub.id = "btn2";
        btnSub.onclick = function() {calc(n); btnSub.disabled = true;};
        btnSub.appendChild(subtext);
        container.appendChild(btnSub);

        // Creating a Go Back button
        var btnRes = document.createElement("button");
        var restext = document.createTextNode("Go back");
        btnRes.type = "reset";
        btnRes.name = "reset";
        btnRes.id = "btn3";
        btnRes.onclick = function() {location.reload()}
        btnRes.appendChild(restext);
        container.appendChild(btnRes);
    } else {
        // Displaying the error message upon invalid input
        var invalidInput = document.createTextNode("Please refresh the page and enter a number!");
        container.appendChild(invalidInput);
    }
}

// Calculate grades for each subject
function calc(n) {
    var sum = 0;
    var total = n;
    for (i = 0; i < n; i++) {
        var inp = document.getElementById("mark" + i);
        var mark = inp.value;
        var para = document.createElement("p");
        para.id = "p" + i;
        console.log(mark);

        if ((parseFloat(mark) > 100) || (parseFloat(mark) < 0) || (mark == '')) {
            console.log("Invalid number")
            var grade = document.createTextNode("Please enter a valid mark");
            total = total-1;
        } else {
            switch (parseInt((mark/10))*10) {
                case 100:
                case 90:
                    console.log("S");
                    var grade = document.createTextNode("S");
                    sum += 10;
                    break;
                case 80:
                    console.log("A")
                    var grade = document.createTextNode("A");
                    sum += 9;
                    break;
                case 70:
                    console.log("B")
                    var grade = document.createTextNode("B");
                    sum += 8;
                    break;
                case 60:
                    console.log("C")
                    var grade = document.createTextNode("C");
                    sum += 7;
                    break;
                case 50:
                    console.log("D")
                    var grade = document.createTextNode("D");
                    sum += 6;
                    break;
                case 40:
                    console.log("E")
                    var grade = document.createTextNode("E");
                    sum += 5;
                    break;
                case 30:
                case 20:
                case 10:
                case 0:
                    console.log(mark);
                    console.log("F")
                    var grade = document.createTextNode("F");
                    sum += 4;
                    break;
                default:
                    console.log("Invalid number")
                    var grade = document.createTextNode("Please enter a valid mark");
                    total = total-1;
                    break;
            }
        }

        para.appendChild(grade);
        container.appendChild(para);
        console.log(sum);
    }

    var avg = sum / total;
    console.log(avg);
    var gpa = document.createElement("p");
    var gpatext = document.createTextNode("Your GPA, excluding any invalid input, is: " + avg);
    gpa.appendChild(gpatext);
    container.appendChild(gpa);

    location.href = "#p0";
}