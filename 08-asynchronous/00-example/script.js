/* becode/javascript
 *
 * /10-asynchronous/00-example/script.js - 10.0: exemple d'asynchronicité
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

(() => {
    const setupIntervalMessage = (label, delay) => {
        let count = 0;

        return setInterval(() => console.log(`${label}:`, ++count), delay);
    };
    const setupMyIntervalMessage = (delay, message) => {
        setInterval(() => {
            console.log(message);
        }, delay);
    }

    let intervals = [];

    document.getElementById("run").addEventListener("click", () => {
        if (intervals.length) {
            intervals = intervals.filter(clearInterval);
            console.clear();
        }
        /*const myFunction = () => {
            console.log("my function has been called");
        }*/
        let i = 0;
        for (i = 0; i < 3; i++) {
            console.log("same");
        }

        setupMyIntervalMessage(2000, "hello");
        setupMyIntervalMessage(2500, "goodbye");
        //intervals.push(setupIntervalMessage("one", 1000));
        //intervals.push(setupIntervalMessage("two", 1333));
        // intervals.push(setupIntervalMessage("three", 2500));
        // intervals.push(setupIntervalMessage("four", 5000));
        //intervals.push(setupIntervalMessage("five", 10000));
    });
})();
