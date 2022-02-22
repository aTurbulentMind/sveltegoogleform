<script>
    const submitForm = async (data) => {
        const formData = new FormData(data.currentTarget);
        
        const res = await fetch("contact.json", {
            method: "POST",
            body: formData,
        });
    };
</script>


<body>
    <h1>Hello Friend</h1>

      <form on:submit|preventDefault={submitForm}>
    <div>
      <label for="">
        Name
        <input type="text" name="name" />
      </label>
    </div>
    <div>
      <label for="">
        Email
        <input type="email" name="email" />
      </label>
    </div>
    <div>
      <input type="submit" />
    </div>
  </form>
    
</body>


<style lang="scss">

    @import 'components';

    div{
        margin-bottom: 0.5em;
    }
   
</style>