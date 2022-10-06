let books = [

   { id:1, name:'joz az kol', price:100},
   { id:2, name:'rig ravan', price:150},
   { id:3, name:'harche bada bad ', price:200},
] 


function addBooks (name, price, callback){

    let newBook={
        id:books.length + 1,
        name: name,
        price:price
    }

    setTimeout(function () {
        books.push(newBook)
        callback()
    }, 3000)

   

}

function logBooks(){
    console.log(books);
}
//  addbooks()
// logBooks()
 addBooks('tarikh', 'bio', logBooks)
