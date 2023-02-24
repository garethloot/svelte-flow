<script lang="ts">
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
          <div
            role="listitem"
            class="_3-collection-item w-dyn-item w-col w-col-4"
          >
            <a href="#" class="posts-image w-inline-block"
              ><img src={thumbnail} alt="" /></a
            >
            <div class="post-info-text">
              <a href="#" class="category-link" />
              <a href="#" class="post-title w-inline-block">
                <h3 class="h3">{title}</h3>
              </a>
              <div class="post-author-text cc-small-thumbnail">
                <div class="post-author cc-top-margin">{brand}</div>
                <a href="#" class="post-author" />
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/await}
