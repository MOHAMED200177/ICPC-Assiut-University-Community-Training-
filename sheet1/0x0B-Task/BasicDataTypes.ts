import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    const [i, ll, c, f, d] = input.split(' ');
    console.log(parseInt(i));
    console.log(BigInt(ll));
    console.log(c);
    console.log(parseFloat(f).toFixed(2));
    console.log(parseFloat(d).toFixed(5));
    rl.close();
});
