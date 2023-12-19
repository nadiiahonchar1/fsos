const fs = require("fs/promises");
const path = require("path");

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

module.exports = {
  getAll,
  getById,
};
