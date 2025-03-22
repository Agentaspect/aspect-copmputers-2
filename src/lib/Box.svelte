<script>
    let{
        heading,
        src,
        description ="test words",
        href,
    }=$props()
</script>
<div class="flow bg-gradient-black">
    <img {src} alt="">
    <h3>{heading}</h3>
    <p>{description}</p>
    <a {href}>read more &raquo;</a>
</div>

<style>
    div {
        position: relative;
        padding: 2rem;
        border-radius: 1rem;
        font-size: 1.125rem;
    }


    img {
        position: absolute;
        max-width: 3.5rem;
        top: -1.5rem;
    }
    a {
        display: inline-block;
        font-weight: bold;
    }
</style>