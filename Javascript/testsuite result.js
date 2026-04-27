let testresults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
let pass=0, fail=0, skip=0;
let total = testresults.length
for(i=0; i<total; i++)
{
    if(testresults[i]==="pass")
    {
        pass++;
    
         
    }
    else if(testresults[i]==="fail")
    {
        fail++;
         
    }
    else
    {
        skip++;
         
    }  
}
let passrate = pass/total*100 
let verdict;
if(fail===0)
{
    verdict  = "ready for release";
}
else if(fail<=2)
{
    verdict = "Minor failures. Review before release.";

}
else
{
     verdict = "Block release.";

}

console.log(`Total Tests : ${total} Passed: ${pass} Failed: ${fail} Skipped: ${skip} Pass Rate: ${passrate.toFixed(2)}% VERDICT: ${verdict}`);