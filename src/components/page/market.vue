<template>
  <div class="content">
    <all_categories></all_categories>
  </div>
</template>

<script>
import All_categories from "../other/all_categories";
export default {
  name: "market",
  components: {All_categories},
  props:['list'],
}
</script>
<style scoped lang="scss">
.content {
  width: 100%;
}
</style>
