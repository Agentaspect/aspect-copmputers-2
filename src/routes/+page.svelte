<script>
	import Box from "$lib/Box.svelte";
	import HeadingBox from "$lib/HeadingBox.svelte";
	import Hero from "$lib/hero.svelte";

</script>
<Hero/>

<section>
    <div class="outer bg-gradient-gray">
        <div class="inner auto-fit">
            <HeadingBox heading="Check out our products and pages!"/>
            <Box heading="About us" src="icons/icon-animation.svg"/>
            <Box heading="Business" src="icons/icon-business.svg"/>
            <Box heading="Products" src="icons/icon-programming.svg"/>
            <Box heading="Find our Channels" src="icons/icon-photography.svg"/>
            <Box heading="placeholder"src="icons/icon-design.svg" />
        </div>  
    </div>
</section>


<style>
    .inner {
        padding-block: 8rem;
    }
</style>