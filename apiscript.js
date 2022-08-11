
// fetch API stuff

// using promise chaining
// function fetchData() {
//     fetch('https://reqres.in/api/users')
//     .then(res => {
//         if (!res.ok){
//             throw Error('error!!')
//         }
//         return res.json()
//     })
//     .then(data => {
//         console.log(data.data)
//         const html = data.data.map(user => {
//             return `
//             <h2>${user.first_name}</h2>
//             <img src="${user.avatar}">
//             <p>Email: ${user.email}</p>
//             `
//         }).join('')
//         console.log(html)
//         document.getElementById('people-div').insertAdjacentHTML('afterbegin', `${html}`)
//     })
//     .catch(error => console.log(error))
// }

// converted to async syntax
async function fetchData() {
    let res = await fetch('https://reqres.in/api/users')
    if (!res.ok){
        throw Error('error!!')
    }
    let data = await res.json()
    console.log(data)
    const html = data.data.map(user => {
        return `
        <h2>${user.first_name}</h2>
        <img src="${user.avatar}">
        <p>Email: ${user.email}</p>
        `
    }).join('')
    console.log(html)
    document.getElementById('people-div').insertAdjacentHTML('afterbegin', `${html}`)
}

fetchData()