const inquirer = require("inquirer");
// need to be able to loop, but we can't use loops with asych defaults
const Animal = require("../lib/Anim");

const animal = new Animal("Stewart"); 
console.log(animal, animal.getName)

//recursion 
const loop = (n) => {
    if (n <= 0) return;
    console.log(n);
    loop(n - 1);

}
loop(10);


const promptLoop = (n) => {
    return inquirer
        .prompt({
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: ["Bark", "Exit"]
        })
        .then((answers) => {
            if (answers.choices === "Bark") {
                console.log("woof");
                return promptLoop();
            }
        });
};
promptLoop().then(() => {
    console.log("Finished looping");
});