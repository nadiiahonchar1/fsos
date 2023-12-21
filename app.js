const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { program } = require("commander");

const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await books.getAll();
      return console.log(allBooks);
    case "getById":
      const oneBook = await books.getById(id);
      return console.log(oneBook);
    case "add":
      const newBook = await books.add({ title, author });
      return console.log(newBook);
    case "updateById":
      const updateBook = await books.updateById(id, { title, author });
      return console.log(updateBook);
    case "deleteById":
      const deleteBook = await books.deleteById(id);
      return console.log(deleteBook);
    default:
      return console.log("Unknown action");
  }
};
// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "e1Tpn_I3wBkLREY6wG0lb" });
// invokeAction({ action: "getById", id: "e1Tpn_I3wBkLREY6wG0lb777" });
// invokeAction({ action: "add", title: "Worm", author: "Jhon C. McCrae" });
// invokeAction({
//   action: "updateById",
//   id: "nvilLtZs1yxdjRUl_5p8P",
//   title: "Ward",
//   author: "Jhon C. McCrae",
// });
// invokeAction({
//   action: "deleteById",
//   id: "nvilLtZs1yxdjRUl_5p8P",
// });

// ===================================================================
// Консольний застосунок без використання додаткових пакетів.
// Користувач вводить команду, наприклад node app--action read,
// ми відстежуємо наявність ключа "--action" та передаємо параметри в функцію invokeAction

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }
// ===================================================================

// ===================================================================
// Консольний застосунок з використанням  пакету yargs
const arr = hideBin(process.argv);
const { argv } = yargs(arr);
console.log(argv);
invokeAction(argv);
// ===================================================================

// ===================================================================
// Консольний застосунок з використанням  пакету commander
