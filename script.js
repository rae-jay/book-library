console.log("hi");

const theLibrary = [];


function Book(title, author, genre, pageCount, beenRead){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.beenRead = beenRead;
}


function addBookToLibrary(book){
    theLibrary.push(book);
}


//this is for test purposes
Book.prototype.checkInfo = function() { return "\"" + this.title + "\" by " + this.author + ", " + 
this.pageCount + " pages, " + (this.beenRead ? "has been read" : "not read yet")};



const colorLibrary = {
    "Fantasy" : "rgb(161, 9, 92)",
    "Science Fiction" : "rgb(23, 163, 151)",
    "Horror" : "rgb(46, 37, 159)",
    "Romance" : "rgb(227, 106, 106)",
    "Thriller" : "rgb(36, 130, 177)",
    "Historical" : "rgb(189, 146, 44)",
    "Mystery" : "rgb(122, 43, 191)",
    "Adventure" : "rgb(165, 42, 42)",
    "Graphic Novel" : "rgb(83, 177, 83)",
    "Children's" : "rgb(199, 110, 30)",
    "Non-Fiction" : "rgb(101, 125, 215)",
    "Other Fiction" : "rgb(50,50,50)",
}




// -----

const addButton = document.querySelector(".addBookButton");
const bookForm = document.querySelector(".bookForm");
const hideFormButton = document.querySelector(".hideFormButton");
const submitButton = document.querySelector(".submitButton");
const bookGrid = document.querySelector(".bookGrid")

const newBTitle = document.getElementById("newTitle");
const newBAuthor = document.getElementById("newAuthor");
const newBPages = document.getElementById("newPages");
const newBRead = document.getElementById("newBeenRead");
const newBGenre = document.getElementById("newGenre");


// let libCheckBtn = createDocObject("button", "", "library", bookGrid);
// libCheckBtn.addEventListener("click", () => {
//     console.log(theLibrary);
// })

// -----


function openForm(){
    addButton.style.display = "none";
    bookForm.style.display = "grid";
}

function closeForm(){
    bookForm.style.display = "none";
    addButton.style.display = "block";

    // i wasn't going to do this here BUT i don't want to add a reset button
    // but rn there's not a good quick way to clear, so this is how i guess
    bookForm.reset();
}


function submitForm(){
    const newBook = new Book(newBTitle.value, newBAuthor.value, newBGenre.value, newBPages.value, newBRead.checked);
    addBookToLibrary(newBook);
    createBookCard(newBook);
}



function createBookCard(newBook){
    const nCard = createDocObject("div", "bookCard", "", bookGrid)

    nCard.style["border-color"] = colorLibrary[newBook.genre];


    createDocObject("h3", "card1", ("\"" + newBook.title + "\""), nCard);
    createDocObject("div", "card2", newBook.author, nCard);

    const row3 = createDocObject("div", "card3", "", nCard);
    createDocObject("div", "", newBook.genre, row3);
    createDocObject("div", "", (newBook.pageCount + " pages"), row3);

    // the image still needs to be made into a button
    // const readImage = createDocObject("img", "card4", "", nCard);
    // readImage.src = "graphics/circle-outline.svg";

    const row4 = createDocObject("div", "card4", "", nCard);

    const removeButton = createDocObject("button", "removeButton", "Remove", row4)
    removeButton.type = "button";
    removeButton.addEventListener("click", () => {
        theLibrary.splice(theLibrary.indexOf(newBook), 1);
        nCard.remove();
    })


    const readImage = createDocObject("button", "isReadButton", "", row4);
    readImage.type = "button";

    if(newBook.beenRead == true){
        readImage.style.backgroundImage = "url(graphics/circle-slice-8.svg)";
    }
    else{
        readImage.style.backgroundImage = "url(graphics/circle-outline.svg)";
    }

    readImage.addEventListener("click", () => {
        if(newBook.beenRead == true){
            newBook.beenRead = false;
            readImage.style.backgroundImage = "url(graphics/circle-outline.svg)";
        }
        else{
            newBook.beenRead = true;
            readImage.style.backgroundImage = "url(graphics/circle-slice-8.svg)";
        }
    })

    
    closeForm();

}

function createDocObject(element, className, textC, parentOb){
    const newOb = document.createElement(element);

    if(className != "") { newOb.className = className };
    if(textC != "") {newOb.textContent = textC};

    parentOb.appendChild(newOb);

    return newOb;
}



addButton.addEventListener("click", () => openForm())

hideFormButton.addEventListener("click", () => closeForm())




let testBook = new Book("Example Title of Book", "Author Authorman", "Science Fiction", 254, false);

addBookToLibrary(testBook);
createBookCard(testBook);

testBook = new Book("The Jungle", "Upton Sinclair", "Historical", 423, true);
// console.log(testBook.checkInfo());

addBookToLibrary(testBook);
createBookCard(testBook);




// then the library removal thing
// (also the actual instructions do want me to do the 'been read' toggle thing which i forgot wasn't just a
// bad decision that i made, it DOES want me to store that info properly)

//i also don't think the in-site creator actually MAKES a book for the library?
//and i should fold those systems together in a way that makes sense...



// let genreColoring = ["Fantasy", "Science Fiction", "Horror", "Romance", "Thriller", "Historical", 
// "Mystery", "Adventure", "Graphic Novel", "Children's", "Non-Fiction", "Other Fiction"]

// for(let i = 0; i < genreColoring.length; i++){
//     let genreBook = new Book("Example", "Guy", genreColoring[i], 37, false);
//     addBookToLibrary(genreBook);
//     createBookCard(genreBook);
// }


/*
"Fantasy"
"Science Fiction"
"Horror"
"Romance"
"Thriller"
"Historical"
"Mystery"
"Adventure"
"Graphic Novel"
"Children's"
"Non-Fiction"
"Other Fiction"   */
