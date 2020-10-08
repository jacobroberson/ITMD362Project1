function BeginSurvey{
    var n = document.getElementById("name").value;
    var a = document.getElementById("CWID").value;
    var h = document.getElementById("housing").value;
    if (!(n || a || h)) {
        alert("Warning: Please ensure you entered all the requested information");
    } 
}