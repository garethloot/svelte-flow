<script lang="ts">
  export let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button class="button cc-white-button w-inline-block" on:click={increment}>
  count is {count}
</button>
