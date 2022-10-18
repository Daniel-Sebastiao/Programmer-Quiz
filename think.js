// Imports
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner'




let playerName;

// Await Time
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome(){
    let raibowTitle = chalkAnimation.rainbow('Quem quer ser Milionário?\n');


    await sleep();
    raibowTitle.stop();

    console.log(`
        ${chalk.bgBlue('Como Jogar')}
        Olá o Meu Nome é ${chalk.bgGray('Watson🤖')} e irei verificar suas respostas.
        Se errar alguma pergunta você será ${chalk.bgRedBright('☠Morto💀')}
        Então já sabe responda todas questões de forma correta...
    `);
}

await welcome();

async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'Qual é o Seu nome?',
        default(){
            return 'Player';
        }
    });
    playerName = answers.player_name;
}
await askName();

async function question1() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'Qual é a data de criação do JavaScript\n\n',
        choices: [
            'May 2rd, 1995',
            'Nov 24th, 1995',
            'Dec 4th, 1995',
            'Dec 17th, 1996'
        ],
    });
    return handleAnswer(answers.question_1 == 'Dec 4th, 1995');
}
await question1();

async function question2() {
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'Qual foi a Empresa que Criou a Internet\n\n',
        choices: [
            'Microsoft',
            'Darpa',
            'Arpanet',
            'Ecma'
        ],
    });
    return handleAnswer(answers.question_2 == 'Darpa');
}
await question2();

async function question3() {
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: 'Como Chama o Primeiro Navegador da História\n\n',
        choices: [
            'Mozilla',
            'Netscape',
            'Chrome',
            'Yandex'
        ],
    });
    return handleAnswer(answers.question_3 == 'Netscape');
}
await question3();

async function question4() {
    const answers = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message: 'Qual dos seguintes motores pertence ao Safari\n\n',
        choices: [
            'V4',
            'Nitro',
            'Chakra',
            'SpeedMonkey'
        ],
    });
    return handleAnswer(answers.question_4 == 'Nitro');
}
await question4();

async function question5() {
    const answers = await inquirer.prompt({
        name: 'question_5',
        type: 'list',
        message: 'O que significa BIOS\n\n',
        choices: [
            'Better inside outside shadow',
            'Bank init other side',
            'Basic Input output system',
            'Basicly Input output system'
        ],
    });
    return handleAnswer(answers.question_5 == 'Basic Input output system');
}
await question5();


async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if(isCorrect) {
        spinner.success({ text: `Bom Trabalho ${chalk.bgMagenta(playerName)}.` });
    }else{
        spinner.error({ text: `💀Game over, Você morreu💀 ${playerName}` });
        process.exit(1);
   }
}

 function winner() {
        console.clear();
        const msg = `Parabéns, ${String(playerName).split(" ")[0]}! \n 1.000.000 Kz`;

        figlet(msg, (err, data) => {
            console.log(gradient.pastel.multiline(data));
        });
    }
winner();

