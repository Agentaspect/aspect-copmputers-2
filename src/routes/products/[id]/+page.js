export async function load({ fetch, params }) {
    const endpoint = "https://jsonplaceholder.typicode.com/posts/" + 1
       
    const response = await fetch(endpoint)
       
    const post = await response.json()
       
    return {post,}
   }
   