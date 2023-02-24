<script lang="ts">
  export let title
  export let brand
  export let image
  export let href = '#'
  export let brandHref = '#'
</script>

<div role="listitem" class="_3-collection-item w-dyn-item w-col w-col-4">
  <a {href} class="posts-image w-inline-block"><img src={image} alt="" /></a>
  <div class="post-info-text">
    <a {href} class="category-link" />
    <a {href} class="post-title w-inline-block">
      <h3 class="h3">{title}</h3>
    </a>
    <div class="post-author-text cc-small-thumbnail">
      <div class="post-author cc-top-margin">{brand}</div>
      <a href={brandHref} class="post-author" />
    </div>
  </div>
</div>
