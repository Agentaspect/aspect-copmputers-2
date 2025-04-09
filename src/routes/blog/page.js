export async function load({fetch}) {
    const endpoint = "https://jsonplaceholder.typicode.com/posts"
    const responce = await fetch(endpoint)
    const posts = await responce.json()
    return {
        posts,
    }
}