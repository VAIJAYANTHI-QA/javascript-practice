let environment = "prod";
let baseUrl;
let apiKey;
let timeout;
let description;

switch (environment) {
  case "dev":
    baseUrl = "https://dev-api.testingacademy.com";
    apiKey = "dev_key_xxxx-xxxx";
    timeout = 5000;
    description = "Development - local testing";
    break;

  case "staging":
    baseUrl = "https://staging-api.testingacademy.com";
    apiKey = "stg_key_xxxx-xxxx";
    timeout = 8000;
    description = "Staging - Pre-production mirror";
    break;

  case "qa":
    baseUrl = "https://qa-api.testingacademy.com";
    apiKey = "qa_key_xxxx-xxxx";
    timeout = 7000;
    description = "QA - Testing environment";
    break;

  case "production":
  case "prod":
    baseUrl = "https://api.testingacademy.com";
    apiKey = "prod_key_xxxx-xxxx";
    timeout = 10000;
    description = "Production - Live environment";
    break;

  default:
    baseUrl = "Unknown";
    apiKey = "Unknown";
    timeout = 0;
    description = "Invalid environment";
}

console.log(
  `Environment: ${environment.toUpperCase()}\nBase URL: ${baseUrl}\nAPI Key: ${apiKey}\nTimeout: ${timeout}ms\nDescription: ${description}`
);