// Used for scanning user input.
var prompt = require("prompt-sync")();

// End the program once this is false,
// used in the while loop below so that it loops
// until the user says to stop
var isRunning = true;

// Keep allowing the user to perform cross products until they say to stop
while (isRunning) {
    // Enter each component of the first vector
    console.log("\nInput each component of the first vector.");
    var ax = prompt();
    var ay = prompt();
    var az = prompt();

    // Enter each component of the second vector
    console.log("\nInput each component of the second vector.");
    var bx = prompt();
    var by = prompt();
    var bz = prompt();

    // Print the cross product
    crossProduct(ax, ay, az, bx, by, bz);

    // If the user enters "-1", end the program by setting `isRunning` to false,
    // which stops the while loop. If the user enters anything else or nothing,
    // continue the while loop.
    console.log("\nPress \"enter\" to do another cross product or \"-1\" to stop.");
    var ans = prompt();
    if (ans == -1) {
        isRunning = false;
    }
}

/**
 * Prints the cross product of two vectors
 * @param {*} x1 x component of the first vector
 * @param {*} y1 y component of the first vector
 * @param {*} z1 z component of the first vector
 * @param {*} x2 x component of the second vector
 * @param {*} y2 y component of the second vector
 * @param {*} z2 z component of the second vector
 */
function crossProduct(x1, y1, z1, x2, y2, z2) {
    // Initialize vars for the x, y, and z components of the cross product
    var x;
    var y;
    var z;

    // Calculate the x, y, and z components of the corss product
    x = (y1*z2)-(z1*y2);
    y = (z1*x2)-(x1*z2);
    z = (x1*y2)-(y1*x2);

    // Print the cross product
    console.log("\n(" + x + ", " + y + ", " + z + ")\n");
}