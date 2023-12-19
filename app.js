const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await books.getAll();
      return console.log(allBooks);
    case "getById":
      const oneBook = await books.getById(id);
      return console.log(oneBook);
  }
};
invokeAction({ action: "read" });
invokeAction({ action: "getById", id: "e1Tpn_I3wBkLREY6wG0lb" });
invokeAction({ action: "getById", id: "e1Tpn_I3wBkLREY6wG0lb777" });
