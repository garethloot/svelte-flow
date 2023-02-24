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
  <div class="posts-wrapper">
    <div class="posts-collection-list-wrapper w-dyn-list">
      <div
        data-w-id="56790bf8-d103-7ca9-e653-899a2f1bc2cb"
        style="opacity: 1;"
        role="list"
        class="posts-collection-list w-dyn-items w-row"
      >
        {#each result.products as { title, thumbnail, brand }}
          <PostItem {title} image={thumbnail} {brand} />
        {/each}
      </div>
    </div>
  </div>
{/await}
