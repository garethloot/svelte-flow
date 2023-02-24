<script lang="ts">
  export let count: number = 0
  const increment = () => {
    count = Number(count) + 1
  }
</script>

<svelte:options tag="my-counter" />

<button on:click={increment}>
  count is {count}
</button>
