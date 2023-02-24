<script lang="ts">
  import PostItem from './PostItem.svelte'
  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const json = await response.json()
    return json
  }
  const response = fetchProducts()
</script>

{#await response}
  <div>Loading...</div>
{:then result}
  {#each result.products as { title, thumbnail, brand }}
    <PostItem {title} image={thumbnail} {brand} />
  {/each}
{/await}
