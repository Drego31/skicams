<template>
  <t-page class="p-skicams">
    <m-post-cams-view
      v-for="view in listOfViews"
      v-bind="view"
    />
  </t-page>
</template>

<script>
import TPage from '../templates/Page'
import moment from 'moment'
import Image from '../../assets/logo.png'
import MPostCamsView from '../molecules/post/CamsView'

export default {
  name: 'p-skicams',
  components: {MPostCamsView, TPage},
  data: () => ({
    listOfViews: [
      {img: Image, title: 'xxx', date: moment()},
      {img: Image, title: 'xxx2', date: moment()},
    ]
  }),
}
</script>