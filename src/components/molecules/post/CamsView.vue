<template>
  <div class="m-post f-cams-view">
    <div class="f-py-2 f-text-center">
      <span class="f-text-28">
        {{ title }}
      </span>
      <div class="a-date">
        {{ date.format('DD-MM-YYYY') }}
      </div>
    </div>
    <div class="a-img f-cams-view" :style="`background-image: url('${img}');`"></div>
  </div>
</template>

<script>
export default {
  name: 'm-post-cams-view',
  props: {
    img: {type: String, required: true},
    title: {type: String, required: true},
    date: {type: Object, required: true},
  },
}
</script>