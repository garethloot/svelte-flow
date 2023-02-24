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
  <div class="w-dyn-list">
    <div role="list" class="collection-wrap w-dyn-items">
      {#each result.products as product}
        <div role="listitem" class="collection-item w-dyn-item">
          <a
            data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D"
            style="background-image:url({product.thumbnail})"
            href="/product/unbelievable"
            class="product-image-wrap w-inline-block"
            ><div class="product-description">
              <div class="product-name-text">{product.title}</div>
              <div
                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                class="product-price-text"
              >
                {product.price} USD
              </div>
            </div></a
          >
        </div>
      {/each}
    </div>
  </div>
{/await}
