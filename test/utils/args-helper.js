// utils/args-helper.js
const args = process.argv.slice(2).reduce((acc, arg) => {
  const [key, value] = arg.split('=');
  acc[key] = value;
  return acc;
}, {});

if (!args.landscape || !['devVolvo', 'testVolvo'].includes(args.landscape)) {
  console.error("Error: Invalid or missing 'landscape' argument. Please specify a valid landscape ('devVolvo' or 'testVolvo').");
  process.exit(1); // exit with an error code
}

console.log("args =", args);
console.log("landscape =", args.landscape);

// Export the args object for use in other files
module.exports = { args };
