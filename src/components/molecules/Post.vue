<template>
  <div>
    <div>
      <img :src="img" :alt="title">
    </div>
    <div>
      <div>
        {{ title }}
      </div>
      <div>
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-post",
  props: {
    img: {type: String, required: true},
    title: {type: String, required: true},
    message: {type: String, required: true},
  },
}
</script>