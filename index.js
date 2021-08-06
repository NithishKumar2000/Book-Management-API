const express=require('express');

const database=require("./database");

const booky=express();

booky.use(express.urlencoded());
booky.use(express.json());

booky.get("/",(req,res)=>{
    return res.json({book:database.books})
});

booky.get("/is/:isbn",(req,res)=>{
    const get_specific_book=database.books.filter(
        (book)=>book.ISBN===req.params.isbn
        );
    if(get_specific_book.length===0)
    {
        return res.json({error:`no book found in the isbn number ${req.params.isbn}`})
    }
    else 
    return res.json({book:get_specific_book});
});

booky.get("/c/:category",(req,res)=>{
    const get_specific_book= database.books.filter(
        (book)=>book.category.includes(req.params.category)
    );
    if(get_specific_book.length===0)
    {
        return res.json({eror:`no book found in category ${req.params.category}`})
    }

    return res.json({book: get_specific_book});

});

booky.get("/lan/:language",(req,res)=>{
    const get_book_language=database.books.filter(
        (book)=>book.language===req.params.language
    );
    if(get_book_language.length===0)
    {
        return res.json({error:`No result found on the language ${database.params.language}`})
    }

    return res.json({book: get_book_language});
})

booky.get('/auth',(req,res)=>{
    return res.json({author:database.author})
})

booky.get('/auth/:id',(req,res)=>{
    const get_specific_author=database.author.filter(
        (author)=>author.id===parseInt(req.params.id)
    );
    if(get_specific_author.length===0)
    {
        return res.json({error:`There is no author avaliable on the id ${req.params.id}` });
    }
    return res.json({author:get_specific_author});
});

booky.get('/ab/:books',(req,res)=>{
    const get_book_author=database.author.filter(
        (author)=>author.books.includes(req.params.books)
    );
    if(get_book_author.length===0)
    {
        return res.json({error:`No specific author has written the book ${req.params.books}`})
    }
    return res.json({author:get_book_author});
});

booky.get('/p',(req,res)=>{
    return res.json({publication:database.publication})
});

booky.get('/pub/:id',(req,res)=>{
    const get_publication_id=database.publication.filter(
        (publication)=>publication.id===parseInt(req.params.id)
    );
    if(get_publication_id.length===0)
    {
      return res.json({error:`there is no publication in the id ${req.params.id}`});
    }
    return res.json({publication:get_publication_id});
});

booky.get('/pb/:book',(req,res)=>{
    const get_book_publication=database.publication.filter(
        (publication)=>publication.books.includes(req.params.book)
    );
    if(get_book_publication.length===0)
    {
        return res.json({error:`The publication has not published the book ${req.params.book}`});
    }
    return res.json({publication:get_book_publication});
});

//POST

booky.post('/book/new',(req,res)=>{
    const new_book=req.body;
    database.books.push(new_book);
    return res.json({updated:database.books});
});

booky.post('/author/new',(req,res)=>{
    const new_author=req.body;
    database.author.push(new_author);
    return res.json({updated:database.author})
})

booky.post('/publication/new',(req,res)=>{
    const new_publication=req.body;
    database.publication.push(new_publication);
    return res.json({updated:database.publication});
})

booky.listen(3000,()=>{
    console.log("server is up and running in port 3000");
});