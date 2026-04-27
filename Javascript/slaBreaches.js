let responseTimes = [120, 230, 450, 510, 180, 620];
let slaBreached = 0;
let i=0;
const SLA_LIMIT = 500;
let minResponse = responseTimes[0];
let maxResponse = responseTimes[0];
let totalRequest = responseTimes.length;
let sum =0;
while(i<totalRequest)
{
    if(responseTimes[i] > maxResponse)
    {
        maxResponse = responseTimes[i];
        
    }
     if(responseTimes[i] < minResponse)
    {
        minResponse = responseTimes[i];
        
    }
    if (responseTimes[i]>SLA_LIMIT)
    {
        slaBreached += 1;

    }
    sum += responseTimes[i];
    i++;
}
let slaviolation = slaBreached>0 ? "❌ SLA VIOLATED" : "✅ SLA MET" ;
let average = sum/totalRequest;
let slaBreachedPercentage = slaBreached/totalRequest*100;

console.log(`Total Requests: ${totalRequest}\nMin Response: ${minResponse}ms\nMax Response: ${maxResponse}ms\nAverage Response: ${average.toFixed(2)}ms\nSLA Breaches:${slaBreached} (${slaBreachedPercentage.toFixed(2)})%\nOverall Status: ${slaviolation}`);
