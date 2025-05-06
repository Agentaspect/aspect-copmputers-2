<script>
    import Title from "$lib/Title.svelte";
	import { json } from "@sveltejs/kit";

     export let data 
</script>

<Title name="Blog" />

<!-- {data.posts} -->

 <section>
    <div class="outer">
        <div class="inner auto-fit">
            {#each data.posts.posts as post}
            <div class="flow">
                <h2><a href="/blog/{post.slug}">{@html post.title}</a></h2>
                 <p>{@html post.excerpt}</p> 
            </div>
            {/each}
        </div>
    </div>
</section> 