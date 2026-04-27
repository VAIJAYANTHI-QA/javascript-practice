let isPresent = true, isDisplayed = true, isEnabled = false ;
let status, severity, action;
severity = !isPresent
               ? "CRITICAL"
               :(!isDisplayed || !isEnabled)
               ?"WARNING"
               :"OK";
if(isPresent && isDisplayed && isEnabled)
{
    status = "READY";
    action = "Element is ready for interaction.";
 
}
else if(isPresent && isDisplayed && !isEnabled)
{
    status = "DISABLED";
    action = "Element is visible but disabled. Wait for enable state or check ";

}
else if(isPresent && !isDisplayed) // isPresent means element exists (true)
//!isDisplayed means NOT displayed / hidden
// no need to write === true because boolean true is checked directly
// this condition means: element is present but hidden
{
    status = "HIDDEN"; 
    action = "Element is present but hidden. Check visibility or wait for render.";           

}
else if(!isPresent)
{
    status = "NOT FOUND"; 
    action = "Element is not present. Verify locator or wait for the element to appear.";

}

console.log(`Status: ${status}\nSeverity: ${severity}\nAction: ${action}`);