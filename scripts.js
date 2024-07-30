let myLibrary = [];

bookId = 0;

class Book{
    constructor(title, author, pages, readFlag){
        this.title= title;
        this.author = author
        this.pages = pages
        this.readFlag = readFlag
        this.id = bookId++
    }
}
const addBook = document.getElementById("addBook");
const container = document.getElementsByClassName("container")[0]
const modal = document.querySelector("dialog")
const closeButton = document.getElementById("close-button")
const submit = document.getElementById("submit-button")
const title = document.getElementById("title")
const author = document.getElementById("author")
const pages = document.getElementById("pages")
const check = document.getElementById("confirm")
const mesaj = document.getElementsByClassName("message")[0]

submit.addEventListener("click", function(e){
    e.preventDefault();
    lastTitle = title.value;
    lastAuthor = author.value;
    lastPagesNumbers = pages.value;
    if(check.checked){
        lastReadFlag = true
    }else{
        lastReadFlag = false;
    }
    addBookToLibrary(lastTitle, lastAuthor, lastPagesNumbers, lastReadFlag)
})

bike = new Book("Shimano", "some chinese guy", 57, true)
myLibrary.push(bike)
motor = new Book("Harley Davidson", "A biker", 32, false)
myLibrary.push(motor)
julius = new Book("Julius", "some chinese guy", 57, true)
myLibrary.push(julius)
caesar = new Book("Caesar", "A biker", 32, false)
myLibrary.push(caesar)
miguel = new Book("Miguel", "some chinese guy", 57, true)
myLibrary.push(miguel)
johnson = new Book("Johnson", "A biker", 32, false)
myLibrary.push(johnson)
christian = new Book("Christian", "some chinese guy", 57, true)
myLibrary.push(christian)
kyle = new Book("Kyle", "A biker", 32, false)
myLibrary.push(kyle)

reloadBooks()

addBook.addEventListener('click', () => {
    modal.showModal()
})

closeButton.addEventListener("click", () =>{
    modal.close();
    reloadBooks();
})

function reloadBooks() {
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    myLibrary.forEach(element => {
        const newDiv = document.createElement("div");
        newDiv.className = "card"
        const removeButton = document.createElement("button");
        removeButton.className= "rm-button"
        removeButton.textContent = "X"
        removeButton.addEventListener("click", () => {
            myLibrary = myLibrary.filter(el => el.id !== element.id);
            reloadBooks();
        });
        const removeContainer = document.createElement("div");
        removeContainer.className = "remove-container"
        removeContainer.appendChild(removeButton)
        newDiv.appendChild(removeContainer)
        const titleParagraph = document.createElement("p");
        titleParagraph.className = "title"
        titleParagraph.textContent= element.title
        newDiv.appendChild(titleParagraph)
        const authorParagraph = document.createElement("p");
        authorParagraph.className = "author"
        authorParagraph.textContent = "author: " + element.author
        newDiv.appendChild(authorParagraph)
        const pagesNumber = document.createElement("p");
        pagesNumber.className = "pages"
        pagesNumber.textContent = element.pages + " pages"
        const pagesContainer = document.createElement("div");
        pagesContainer.className = "pages-container"
        pagesContainer.appendChild(pagesNumber)
        newDiv.appendChild(pagesContainer)
        const readButton = document.createElement("button");
        readButton.className = "read-button"
        readButton.addEventListener("click", () =>{
            if(!element.readFlag){
                element.readFlag = true;
                readButton.style.backgroundColor = "#DAFFEF"
            }else{
                element.readFlag = false;
                readButton.style.backgroundColor = "#F5C3B5"
            }
        })
        if(element.readFlag){
            readButton.style.backgroundColor = "#DAFFEF"
        }else{
            readButton.style.backgroundColor = "#F5C3B5"
        }
        const readContainer = document.createElement("div");
        readContainer.className = "read-container"
        readContainer.appendChild(readButton)
        newDiv.appendChild(readContainer)
        container.appendChild(newDiv)
    })}

function addBookToLibrary(lastTitle, lastAuthor, lastPagesNumbers, lastReadFlag) {
    element = new Book(lastTitle, lastAuthor, lastPagesNumbers, lastReadFlag)
    myLibrary.push(element)
    reloadBooks();
}


//Write a function that loops through the array and displays each book on the page. 
//You can display them in some sort of table, or each on their own “card”. 
//It might help for now to manually add a few books to your array so you can see the display.