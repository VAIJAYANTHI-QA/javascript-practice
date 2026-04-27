 let i=1;
let randomvalue;
let MAX_ATTEMPTS = 5;
do{
   randomvalue = Math.random();

    if(randomvalue>0.6)
    {
        console.log(`Attempt ${i}: ✅ SUCCESS (Response 200 OK) API call PASSED after ${i} attempt(s)`);
        break;    
    }
    else
    {
        console.log(`Attempt ${i}: ❌ FAILED (Timeout/Error)`);
    }
i++;
}
while(i<=MAX_ATTEMPTS)

