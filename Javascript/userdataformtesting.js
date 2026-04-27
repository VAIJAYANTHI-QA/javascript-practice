const users = 8;
var status;
const roles = ["admin", "editor", "viewer", "tester", "manager"];

for(let i=1; i<=users; i++)
{
    let role = roles[(i - 1) % 5];
    let padid = i.toString().padStart(4, "0");
    status = (i % 3 === 0) ? "Inactive" : "Active" ;
    console.log(`USR-${padid} | TestUser_${i} | testuser${i}@testingacademy.com | ${role} | ${status} `)
}

