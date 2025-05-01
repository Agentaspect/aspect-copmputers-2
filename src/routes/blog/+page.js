export async function load({fetch}) {
    // const endpoint = 'https://jsonplaceholder.typicode.com/posts'
    const endpoint =
        'https://public-api.wordpress.com/wp/v2/sites/aspectcomputers3.wordpress.com/posts'
    const response = await fetch(endpoint)
    const posts = await response.json()

    return {
        posts,
    }
}

