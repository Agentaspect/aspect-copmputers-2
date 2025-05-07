<script>
	import Box from "$lib/Box.svelte";
	import HeadingBox from "$lib/HeadingBox.svelte";
	import Hero from "$lib/hero.svelte";
    import Title from "$lib/Title.svelte";

</script>
<Title name="Home" />
<Hero/>

<section>
    <div class="outer bg-gradient-gray">
        <div class="inner auto-fit">
            <HeadingBox heading="Check out our products and pages!"/>
            <Box heading="About us" src="icons/icon-animation.svg" href="/about" description="Learn more"/>
            <Box heading="Business" src="icons/icon-business.svg" href="/blog" description="find our products"/>
            <Box heading="Products" src="icons/icon-programming.svg" href="https://pcpartpicker.com/list/" description="PC part picker"/>
            <Box heading="Find our Channels" src="icons/icon-photography.svg" href="https://www.youtube.com/@agent_aspect8295" description="Find our channels"/>
            <Box heading="Discord"src="icons/icon-design.svg"  href="https://discord.gg/y5PxMzPRff"  description="join the comunity" />
        </div>  
    </div>
</section>


<style>
    .inner {
        padding-block: 8rem;
    }
</style>