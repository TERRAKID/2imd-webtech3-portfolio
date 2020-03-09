class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }
  
  createElement(title){
    let newNote = document.createElement('div');
    newNote.setAttribute("class", "card");

    let newP =  document.createElement("p");
    newP.innerHTML = title;
    newNote.appendChild(newP);

    let newA = document.createElement("a");
    newA.setAttribute("class", "card-remove");
    newA.setAttribute("href", "#");
    newA.innerHTML = "Remove";
    newA.addEventListener('click', this.remove.bind(newNote));
    newNote.appendChild(newA);
    
    return newNote;
  }
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector(".notes").appendChild(this.element);
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify

    let notes = localStorage.getItem("notes");
    if (notes === null) {
      notes = [];
    } else {
      notes = JSON.parse(notes);
    }
    
    notes.push(this.title);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    this.remove();
  } 
}

class App {
  constructor() {

    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    document.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        e.preventDefault();
        this.btnAdd.click();
      }
    });
    // this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    
    // HINT🤩
    let text = document.querySelector("#txtAddNote").value;
    if (text) {
      let note = new Note(text);
      note.add();
      note.saveToStorage();
      this.reset();
    }
  }
  
  reset(){
    // this function should reset the form 
    document.querySelector("form").reset();
  }
  
}

let app = new App();