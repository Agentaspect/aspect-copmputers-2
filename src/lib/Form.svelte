<form
  action="https://formspree.io/f/xoveknwq"
  method="POST"
>
    <div class="form-wrapper">
        <div class="form-item">
            <label for="First">First Name</label>
            <input 
            type="text"
            id="First"
            name="First" 
            placeholder="Enter your First name..."
            required/> 
        </div>
        <div class="form-item">
            <label for="Last">Last Name</label>
            <input 
            type="text"
            id="Last"
            name="Last" 
            placeholder="Enter your Last name..."
            required/> 
        </div>
        <div class="form-item">
            <label for="Email">Email</label>
            <input 
            type="email"
            id="email"
            name="email" 
            placeholder="Enter your Email address..."
            required/> 
        </div>
        <div class="form-item">
            <label for="Phone">Phone (Optional)</label>
            <input 
            type="tel"
            id="tel"
            name="tel" 
            placeholder="Enter Your Phone number..."
            /> 
        </div>
        <div class="form-item span-2">
            <label for="Message">Message</label>
            <textarea name="message" id="message" rows="10"></textarea>
          
        </div>
        <button type="submit" class="bg-blue white">Submit Message</button>
    </div>
</form>

<style>


.form-wrapper {
       max-width: 48rem;
       display: grid;
       grid-template-columns: 1fr 1fr;
       gap: 1.5rem;
       align-items: start;
    }
    .form-item {
        display: grid;
    }
    
    .span-2 {
        grid-column: span 2;
    }

    label {
        font-weight: 600;
    }

    input, textarea {
        padding: 1rem;
        font: inherit;
    }
    button {
        justify-self: start;
    }

    button:hover {
        background-image: var(--gradient-blue);
    }
</style>
