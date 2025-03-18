function showSolution(id) {
    let solution = document.getElementById(id);
    solution.style.display = solution.style.display === "none" ? "block" : "none";
}

function normalizeQuery(query) {
    return query
        .replace(/\s+/g, " ")   // Replace multiple spaces with a single space
        .replace(/\s*([(),=])\s*/g, "$1") // Remove spaces around special characters
        .trim()                 // Trim leading/trailing spaces
        .toLowerCase();         // Convert to lowercase
}

function checkQuery() {
    let query = document.getElementById("sqlQuery").value;
    let resultBox = document.getElementById("resultBox");

    const correctAnswers = [
        "select * from students where roll_number=103;",
        "select * from students where age=16;",
        "select * from students where subject in ('science','computer sci');",
        "select * from students where hobby='chess';",
        "select * from students where age>15;",
        "select * from students where hobby like '%d%';",
        "select * from students where name like 'p%';",
        "select * from students where name like '%a';",
        "select * from students where name ilike '%gupta%';"
    ].map(normalizeQuery); // Normalize correct answers

    if (correctAnswers.includes(normalizeQuery(query))) {
        resultBox.innerHTML = "✅ Correct! Your SQL query is right.";
    } else {
        resultBox.innerHTML = "❌ Incorrect. Try again!";
    }
    resultBox.style.display = "block";
}
