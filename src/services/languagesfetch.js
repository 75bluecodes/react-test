
//Fetches all the languages

export const languages = async () => {
    const res = await fetch('http://localhost:4000/languages');

    return res.json()
}

//Fetches language by id

export const language = async ({params}) => {
    const {id} = params
    const res = await fetch('http://localhost:4000/languages/' + id);

    return res.json()
}