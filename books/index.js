const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const booksPath = path.join(__dirname, "books.json");

const getAll = async () => {
  const data = await fs.readFile(booksPath, "utf-8");
  return JSON.parse(data);
};

const getById = async (id) => {
  const books = await getAll();
  const result = books.find((item) => item.id === id);
  return result || null;
};

const add = async (data) => {
  const books = await getAll();
  const newBook = { id: nanoid(), ...data };
  books.push(newBook);
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
  return newBook;
};

module.exports = {
  getAll,
  getById,
  add,
};
