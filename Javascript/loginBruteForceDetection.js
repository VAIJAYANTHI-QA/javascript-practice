var strikes = 0; // global counter

const attempts = ["wrong", "wrong", "correct", "wrong", "correct"];
const MAX_STRIKES = 3;

let i = 0;
let locked = false;

do {

    // First priority -> if already locked
    if (locked === true) {
        console.log(`Attempt ${i + 1}: 🔒 ACCOUNT LOCKED - Rejected`);
    }

    // Second priority -> if login is correct
    else if (attempts[i] === "correct") {
        console.log(`Attempt ${i + 1}: ✅ LOGIN SUCCESS`);
        strikes = 0; // reset failed count
    }

    // Third priority -> wrong password
    else if (attempts[i] === "wrong") {

        strikes++;

        console.log(`Attempt ${i + 1}: ❌ FAILED - Strike ${strikes}/3`);

        if (strikes === MAX_STRIKES) {
            locked = true;
            console.log("🚨 ACCOUNT LOCKED");
        }
    }

    i++;

} while (i < attempts.length);