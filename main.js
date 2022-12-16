
let btnCategories = document.getElementById(`selectCategory`)
let categoriesBtns = document.getElementById(`categoryJokes`)

btnCategories.onclick = () => {
    jokesValue()

    if (categoriesBtns.style.display === `none`) {
        categoriesBtns.style.display = `flex`
    } else {
        categoriesBtns.style.display = `none`
    }
}

let jokes = document.getElementById(`jokes`)

const jokesValue = () => {
    axios
        .get(`https://api.chucknorris.io/jokes/categories`)
        .then(response => {
            let categories = response.data

            categoriesBtns.innerHTML = ``

            categories.forEach(cat => {

                let btnCat = document.createElement("button")
                btnCat.innerText = `${cat}`
                categoriesBtns.appendChild(btnCat)

                btnCat.onclick = () => {
                    selectCat(`${cat}`)
                }

            })

            const selectCat = (category) => {
                axios
                    .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
                    .then(response => {

                        let cat = response.data

                        let joke = cat

                        jokes.innerHTML = ``
                        jokes.innerHTML = joke.value
                        jokes.style.display = "block"

                        // let img = document.getElementById(`chukImg`)

                        // img.innerHTML = ``
                        // img.innerHTML = `<img src="${joke.icon_url}" alt="The wonderful image of Chuck Norris does not load " id="chukImg">`
                        // console.log(joke.icon_url);
                    })
            }
        })
}

let randomBtn = document.getElementById(`randomBtn`)

randomBtn.onclick = () => {
    axios
        .get(`https://api.chucknorris.io/jokes/random`)
        .then(response => {
            let randomJoke = response.data

            jokes.innerHTML = ``
            jokes.innerHTML = randomJoke.value
            jokes.style.display = "block"
        })
}
