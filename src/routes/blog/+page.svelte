<script>
    import Title from "$lib/Title.svelte";
	import { json } from "@sveltejs/kit";

     export let data 
</script>

<Title name="Blog" />



<section>
    <div class="outer">
        <div class="inner auto-fit">
            {#each data.posts.posts as post}
            <div class="flow">
                <h2><a href="/blog/{post.id}">{post.title}</a></h2>
                <p>{post.body}</p>
            </div>
            {/each}
        </div>
    </div>
</section>