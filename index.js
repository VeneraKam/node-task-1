/* [{"title":"Hello","id":"1634833738358"},{"title":"FromConsole","id":"1634833761863"}] */
const yargs = require("yargs");
const pkg = require("./package.json");
const { addNote, printNotes, remove } = require("./notes.controller");

yargs.version(pkg.version);

yargs.command({
  command: "add",
  describe: "Add new note to list",
  builder: {
    title: {
      type: "string",
      describe: "Note title",
      demandOption: true
    }
  },
  handler({ title }) {
    addNote(title);
  }
});

yargs.command({
  command: "list",
  describe: "Print all notes",
  async handler() {
    printNotes();
  }
});

yargs.command({
  command: "remove",
  describe: "Remove element note from list",
  builder: {
    id: {
      type: "string",
      describe: "id",
      demandOption: true
    }
  },
  handler({id}) {
    remove(id);
  }
});

yargs.parse();
