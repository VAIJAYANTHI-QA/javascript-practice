let http_status_code = 400; //variable declaration and initialization
switch(http_status_code) //switch expression
{
    case 200: // case value assignment
        {
            console.log(`Status Code : ${http_status_code} :PASS - OK: Request successful`);
            break;
        }
    case 201:
        {
            console.log(`Status Code : ${http_status_code} :PASS - Created: Resource created successfully`);
            break;
        }
    case 301:
        {
            console.log(`Status Code : ${http_status_code} :WARNING - Moved Permanently: URL has changed`);
            break;
        }    
    case 400:
        {
            console.log(`Status Code : ${http_status_code} :FAIL - Bad Request: Check request payload`);
            break;
        }
    case 401:
        {
            console.log(`Status Code : ${http_status_code} :FAIL - Unauthorized: Check auth token`);
            break;
        }
   case 403:
        {
            console.log(`Status Code : ${http_status_code} :FAIL - Forbidden: Insufficient permissions`);
            break;
        }
    case 404:
        {
            console.log(`Status Code : ${http_status_code} :FAIL - Not Found: Check endpoint URL`);
            break;
        }
    case 500:
        {
            console.log(`Status Code : ${http_status_code} - Internal Server Error: Backend issue`);
            break;
        }
    default: //deafult will print if it is not in range or invalid input
    {
       console.log(`Status Code : ${http_status_code}  Result :UNKNOWN - Unhandled status code`);
       break;
    }
}

