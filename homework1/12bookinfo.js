// 12. Create a Book class with properties title,
//  author, and year. Add a method to display information about the book using template literals.

class book{
    constructor(title,author,year){
        this.title=title
        this.author=author
        this.year=year
    }
    display(){
        console.log(`title:${this.title} author:${this.author} year:${this.year}`)
    }
}
const book1=new book("moana","someone","2022")
book1.display()