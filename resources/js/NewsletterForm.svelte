{#if status === 'success'}
  <div>
    <h3 class="text-green heading mb-1">Success!</h3>
    <p class="text-sm text-gray-600 dark:text-gray-300">Thanks for subscribing, you'll receive a confirmation email shortly.</p>
  </div>
{:else}
  {#if status === 'error'}
    <div>
      <h3 class="text-red heading mb-1">Error!</h3>
      <p class="text-sm  text-gray-600 dark:text-gray-300">{message}</p>
    </div>
  {/if}

  <form class="flex justify-between" on:submit|preventDefault="{handleSubmit}">
    <input type="hidden" name="workspaceId" value="3" />
    <input type="email" required name="email" placeholder="Email" class="flex-1 w-0 bg-white dark:bg-dark border-r-0 rounded-r-none input" />
    <button type="submit" class="p-2 accent-button rounded-l-none whitespace-nowrap">Sign Up</button>
  </form>
{/if}

<script>
  let status;
  let message;
    
  async function handleSubmit(event) {
    const json = {};
    new FormData(event.target).forEach((value, key) => {
      json[key] = value;
    });
  
    const res = await fetch(
      'https://sendportal.ohseesoftware.com/api/subscription',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(json),
      }
    );
  
    if (res.ok) {
      status = 'success';
    } else {
      status = 'error';
      message = 'An error occurred while submitting the form.';

      try {
        const body = await res.json();
        message = body && body.message ? body.message : message;
      } catch (e) {
        // no op
      }
    }
  }
</script>