console.log("hi");

const theLibrary = [];


function Book(title, author, pageCount, beenRead){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.beenRead = beenRead;
}

Book.prototype.checkInfo = function() { return "\"" + this.title + "\" by " + this.author + ", " + 
this.pageCount + " pages, " + (this.beenRead ? "has been read" : "not read yet")};


function addBookToLibrary(book){
    theLibrary.push(book);
}


let testBook = new Book("The Jungle", "Some Socialist", 423, true);

console.log(testBook.checkInfo());

