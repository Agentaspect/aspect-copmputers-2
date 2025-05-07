<section>
    <div class="outer">
        <div class="img"> 
            <img src="/comp1.jpg" alt="comp" class="flow">
            <div class="inner">
                <div class="hero-content bg-blue white flow">
                    <h1>Power, Speed, Innovation, Reliability.</h1>
                    <p class="white">Build your perfect PC with ease. Whether you're a beginner or a pro, we can help you every step of the way.</p>
                    <a href="/contact" class="button bg-gradient-purple white"> Get Started</a>
                </div>
            </div>
        </div>    
    </div>
</section>

<style>
    /* Ensure the outer container takes up the full viewport */
    .outer {
        height: 100vh; /* Full height of the viewport */
        width: 100%; /* Full width */
        overflow: hidden; /* Prevent scrolling */
    }

    /* Make the image cover the entire container */
    .img {
        position: relative; /* Set the parent container to relative */
        height: 100%; /* Full height */
        width: 100%; /* Full width */
    }

    .img img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%; /* Make the image stretch to fit the width */
        height: 100%; /* Make the image stretch to fit the height */
        object-fit: cover; /* Ensure the image covers the container without distortion */
    }

    /* Center the hero-content on top of the image */
    .hero-content {
        position: absolute; /* Position the hero-content absolutely */
        top: 50%; /* Center vertically */
        left: 20%; /* Center horizontally */
        transform: translate(-50%, -50%); /* Adjust for centering */
        max-width: 32rem;
        padding: 3rem;
        border-radius: 1rem;
        background: rgba(0, 0, 0, 0.5); /* Optional: Add a semi-transparent background */
        color: white; /* Ensure text is visible */
        text-align: center; /* Center text */
    }

    .inner {
        height: 100%; /* Ensure the inner container fills the parent */
    }
</style>