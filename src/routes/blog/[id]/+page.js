export async function load({fetch, params}) {
    // const endpoint = 'https://jsonplaceholder.typicode.com/posts/' + params.id
    const endpoint =
        'https://public-api.wordpress.com/wp/v2/sites/aspectcomputers3.wordpress.com/posts'

    const response = await fetch(endpoint)
    const post = await response.json()

    return {
        post,
    }
}