const users = [
    {
        ism: "Omadbek",
        fam: "Toxtasinov",
        phone: "+998902205136",
        email: "toxtasinovomadbek054@gmail.com",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.forbes.ru%2Ffiles%2Fprofile%2Fsteve_jobs.jpg__1584098747__37025.jpg&imgrefurl=https%3A%2F%2Fwww.forbes.ru%2Fprofile%2F394951-stiv-dzhobs-steve-jobs&tbnid=TTWlIDwt0ggHMM&vet=12ahUKEwiM9eHYptH6AhVxwosKHcc4DXsQMyg4egQIARBE..i&docid=JU5zzNIBfrz7PM&w=900&h=566&q=steve%20jobs&ved=2ahUKEwiM9eHYptH6AhVxwosKHcc4DXsQMyg4egQIARBE"
    },
    {
        ism: "Saydullo",
        fam: "Ergashev",
        phone: "+998911740482",
        email: "ergashev@gmail.com",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.forbes.ru%2Ffiles%2Fprofile%2Fsteve_jobs.jpg__1584098747__37025.jpg&imgrefurl=https%3A%2F%2Fwww.forbes.ru%2Fprofile%2F394951-stiv-dzhobs-steve-jobs&tbnid=TTWlIDwt0ggHMM&vet=12ahUKEwiM9eHYptH6AhVxwosKHcc4DXsQMyg4egQIARBE..i&docid=JU5zzNIBfrz7PM&w=900&h=566&q=steve%20jobs&ved=2ahUKEwiM9eHYptH6AhVxwosKHcc4DXsQMyg4egQIARBE"
    },
    {
        ism: "Kamoliddin",
        fam: "Nazrullayev",
        phone: "+998954561221",
        email: "kamoldin@gmail.com",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.forbes.ru%2Ffiles%2Fprofile%2Fsteve_jobs.jpg__1584098747__37025.jpg&imgrefurl=https%3A%2F%2Fwww.forbes.ru%2Fprofile%2F394951-stiv-dzhobs-steve-jobs&tbnid=TTWlIDwt0ggHMM&vet=12ahUKEwiM9eHYptH6AhVxwosKHcc4DXsQMyg4egQIARBE..i&docid=JU5zzNIBfrz7PM&w=900&h=566&q=steve%20jobs&ved=2ahUKEwiM9eHYptH6AhVxwosKHcc4DXsQMyg4egQIARBE"
    },
    {
        ism: "Hushnudbek",
        fam: "",
        phone: "+998996787887",
        email: "khushnud@gmail.com",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.forbes.ru%2Ffiles%2Fprofile%2Fsteve_jobs.jpg__1584098747__37025.jpg&imgrefurl=https%3A%2F%2Fwww.forbes.ru%2Fprofile%2F394951-stiv-dzhobs-steve-jobs&tbnid=TTWlIDwt0ggHMM&vet=12ahUKEwiM9eHYptH6AhVxwosKHcc4DXsQMyg4egQIARBE..i&docid=JU5zzNIBfrz7PM&w=900&h=566&q=steve%20jobs&ved=2ahUKEwiM9eHYptH6AhVxwosKHcc4DXsQMyg4egQIARBE"
    },
    {
        ism: "Hsanboy",
        fam: "Jumanov",
        phone: "+9983334444",
        email: "jumanov@gmail.com",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.forbes.ru%2Ffiles%2Fprofile%2Fsteve_jobs.jpg__1584098747__37025.jpg&imgrefurl=https%3A%2F%2Fwww.forbes.ru%2Fprofile%2F394951-stiv-dzhobs-steve-jobs&tbnid=TTWlIDwt0ggHMM&vet=12ahUKEwiM9eHYptH6AhVxwosKHcc4DXsQMyg4egQIARBE..i&docid=JU5zzNIBfrz7PM&w=900&h=566&q=steve%20jobs&ved=2ahUKEwiM9eHYptH6AhVxwosKHcc4DXsQMyg4egQIARBE"
    },
    {
        ism: "Abdurasul",
        fam: "Haydarov",
        phone: "+998334001274",
        email: "haydarov@gmail.com",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.forbes.ru%2Ffiles%2Fprofile%2Fsteve_jobs.jpg__1584098747__37025.jpg&imgrefurl=https%3A%2F%2Fwww.forbes.ru%2Fprofile%2F394951-stiv-dzhobs-steve-jobs&tbnid=TTWlIDwt0ggHMM&vet=12ahUKEwiM9eHYptH6AhVxwosKHcc4DXsQMyg4egQIARBE..i&docid=JU5zzNIBfrz7PM&w=900&h=566&q=steve%20jobs&ved=2ahUKEwiM9eHYptH6AhVxwosKHcc4DXsQMyg4egQIARBE"
    },
    {
        ism: "Ozodbek",
        fam: "Turgunboyev",
        phone: "+998234234563",
        email: "turgunboyev@gmail.com",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.forbes.ru%2Ffiles%2Fprofile%2Fsteve_jobs.jpg__1584098747__37025.jpg&imgrefurl=https%3A%2F%2Fwww.forbes.ru%2Fprofile%2F394951-stiv-dzhobs-steve-jobs&tbnid=TTWlIDwt0ggHMM&vet=12ahUKEwiM9eHYptH6AhVxwosKHcc4DXsQMyg4egQIARBE..i&docid=JU5zzNIBfrz7PM&w=900&h=566&q=steve%20jobs&ved=2ahUKEwiM9eHYptH6AhVxwosKHcc4DXsQMyg4egQIARBE"
    },
    {
        ism: "Eldorbek",
        fam: "Qobulov",
        phone: "+99890210452",
        email: "khabulov@gmail.com",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.forbes.ru%2Ffiles%2Fprofile%2Fsteve_jobs.jpg__1584098747__37025.jpg&imgrefurl=https%3A%2F%2Fwww.forbes.ru%2Fprofile%2F394951-stiv-dzhobs-steve-jobs&tbnid=TTWlIDwt0ggHMM&vet=12ahUKEwiM9eHYptH6AhVxwosKHcc4DXsQMyg4egQIARBE..i&docid=JU5zzNIBfrz7PM&w=900&h=566&q=steve%20jobs&ved=2ahUKEwiM9eHYptH6AhVxwosKHcc4DXsQMyg4egQIARBE"
    }
]
module.exports = users