import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    const [X, Y] = input.split(' ').map(Number);

    console.log(`${X} + ${Y} = ${X + Y}`);
    console.log(`${X} * ${Y} = ${X * Y}`);
    console.log(`${X} - ${Y} = ${X - Y}`);

    rl.close();
});
