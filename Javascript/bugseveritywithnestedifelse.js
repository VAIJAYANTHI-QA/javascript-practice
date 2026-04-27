let frequency = "rarely";
let impact = "minor";

let bugTitle = "Checkout page crashes on applying coupon";

let severity;

// Nested if-else based on frequency first
if (frequency === "always") {

    if (impact === "blocker") {
        severity = "P0 - Critical: Stop release immediately";
    }
    else if (impact === "major") {
        severity = "P1 - High: Fix before release";
    }
    else {
        severity = "P2 - Medium: Review before release";
    }

}
else if (frequency === "often") {

    if (impact === "blocker") {
        severity = "P1 - High: Fix before release";
    }
    else if (impact === "major") {
        severity = "P2 - Medium: Review before release";
    }
    else {
        severity = "P3 - Low: Can release with monitoring";
    }

}
else if (frequency === "rarely") {

    if (impact === "blocker") {
        severity = "P2 - Medium: Review before release";
    }
    else if (impact === "major") {
        severity = "P3 - Low: Can release with monitoring";
    }
    else {
        severity = "P4 - Very Low: Release is green";
    }

}
else {
    severity = "Invalid input";
}

console.log(`Bug Title: ${bugTitle}`);
console.log(`Frequency: ${frequency}`);
console.log(`Impact: ${impact}`);
console.log(`Severity: ${severity}`);