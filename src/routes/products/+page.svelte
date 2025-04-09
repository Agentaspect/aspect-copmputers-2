<script>
    import Title from "$lib/Title.svelte";

    export let data;
</script>

 <Title name="Products" />
<!-- {data} -->
<section>
    <div class="outer">
       <div class="inner auto-fit">
           {#each data.posts as post}
           <div class="flow">
               <h2><a href="/Products/{post.id}">{post.title}</a></h2>
               <p>{post.body}</p>
           </div>
           {/each}
       </div>
   </div>
   </section>