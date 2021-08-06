const books=[
    {
        ISBN: "123Book",
        title: "Tesla",
        pub_date: "2021-08-09",
        language: "en",
        num_page: 200,
        author: [1,2],
        publication: 1,
        category: ["tech","space","education"]
    }
]

const author=[
    {
        id: 1,
        name: "Nithish",
        books: ["123Books","234Books"]
    },
    {
        id: 2,
        name: "Elon Musk",
        books: ["123Books"]
    }
]

const publication= [
    {
        id: 1,
        name: "writex",
        books: ["123Books"]
    },
    {
        id: 2,
        name: "sitex",
        books: ["234Books"]
    }
] 


module.exports={books,author,publication};