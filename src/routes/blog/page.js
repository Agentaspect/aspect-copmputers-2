export async function load({ fetch }) {
 const endpoint = "https://dummyjson.com/posts"
    
 const response = await fetch(endpoint)
    
 const posts = await responce.json()
    
 return {posts,}
}
