/**
 * 4y7w Implement a Interactive CLI Tool Controller
 *
 * This project aims to create a basic interactive CLI tool controller that accepts user inputs and performs actions accordingly.
 *
 * The controller should have the following features:
 * 1. Display a welcome message with available commands
 * 2. Accept user inputs (commands) and perform actions
 * 3. Handle invalid commands
 * 4. Provide a way to exit the program
 *
 * Commands:
 *  - help: display available commands
 *  - greet: greet the user with a personalized message
 *  - exit: exit the program
 *
 * Note: This is a basic implementation and can be extended to include more features and commands.
 */

import * as readline from 'readline';

interface Command {
  name: string;
  description: string;
  execute: (args: string[]) => void;
}

const commands: Command[] = [
  {
    name: 'help',
    description: 'Display available commands',
    execute: () => {
      console.log('Available commands:');
      commands.forEach((command) => {
        console.log(`  ${command.name}: ${command.description}`);
      });
    },
  },
  {
    name: 'greet',
    description: 'Greet the user with a personalized message',
    execute: (args: string[]) => {
      if (args.length > 0) {
        console.log(`Hello, ${args[0]}!`);
      } else {
        console.log('Please provide a name to greet.');
      }
    },
  },
  {
    name: 'exit',
    description: 'Exit the program',
    execute: () => {
      process.exit(0);
    },
  },
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const welcomeMessage = `Welcome to the Interactive CLI Tool Controller!
Type 'help' to display available commands, or 'exit' to quit.`;

console.log(welcomeMessage);

rl.setPrompt('> ');
rl.prompt();

rl.on('line', (input) => {
  const [command, ...args] = input.trim().split(' ');
  const foundCommand = commands.find((cmd) => cmd.name === command);

  if (foundCommand) {
    foundCommand.execute(args);
  } else {
    console.log(`Invalid command: ${command}. Type 'help' for available commands.`);
  }

  rl.prompt();
});