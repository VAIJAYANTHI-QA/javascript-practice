let frequency = "rarely";
let impact = "minor";
let bugTitle = "Bug Title: Checkout page crashes on applying coupon";
let P0 = "Severity: P0  - Blocker: Block release immediately";
let P1 = "Severity: P1  - Critical: Stop release immediately";
let P2 = "Severity: P2  - Major: Review and release";
let P3 = "Severity: P3  - Minor: Doesn't have much impact can release";
let P4 = "Severity: P4  - Low: Release is green";
if(frequency === "always" && impact  === "blocker")
{
    console.log(`${bugTitle}\nFrequency: ${frequency}\nImpact: ${impact}\n${P0}`);
}
else if(frequency === "always"&& impact === "major")
{
    console.log(`${bugTitle}\nFrequency: ${frequency}\nImpact: ${impact}\n${P1}`);
}
else if(frequency === "always"&& impact === "minor")
{
    console.log(`${bugTitle}\nFrequency: ${frequency}\nImpact: ${impact}\n${P2}`);
}
else if(frequency === "often"&& impact === "blocker")
{
    console.log(`${bugTitle}\nFrequency: ${frequency}\nImpact: ${impact}\n${P1}`);
}
else if(frequency === "often"&& impact === "major")
{
    console.log(`${bugTitle}\nFrequency: ${frequency}\nImpact: ${impact}\n${P2}`);
}
else if(frequency === "often"&& impact === "minor")
{
    console.log(`${bugTitle}\nFrequency: ${frequency}\nImpact: ${impact}\n${P3}`);
}
else if(frequency === "rarely"&& impact === "blocker")
{
    console.log(`${bugTitle}\nFrequency: ${frequency}\nImpact: ${impact}\n${P2}`);
}
else if(frequency === "rarely"&& impact === "major")
{
    console.log(`${bugTitle}\nFrequency: ${frequency}\nImpact: ${impact}\n${P3}`);
}
else if(frequency === "rarely"&& impact === "minor")
{
    console.log(`${bugTitle}\nFrequency: ${frequency}\nImpact: ${impact}\n${P4}`);
}