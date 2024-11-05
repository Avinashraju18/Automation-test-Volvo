const args = process.argv
  .slice(2)
  .map(arg => arg.split("="))
  .reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

if (!args.landscape || !["devVolvo", "testVolvo"].includes(args.landscape)) {
  console.error("No valid landscape specified");
  throw new Error("No valid landscape specified");
}

console.log("args =", args);
console.log("landscape =", args.landscape);

// Export the args object
module.exports = { args };
