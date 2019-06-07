<template>
  <t-page class="p-contact">
    <div class="f-flex-1"></div>

    <div class="m-post f-contact">
      <div class="m-content f-post">
        <div class="f-pb-5">
          <a-input label="Name" required/>
          <a-input label="Email" required/>
        </div>
        <a-input class="f-mt-5" label="Message"/>
        <div class="f-text-right f-py-3">
          <a-button>
            Send
          </a-button>
        </div>
      </div>
    </div>

    <div class="f-flex-1"></div>
  </t-page>
</template>

<script>

import TPage from '../templates/Page'
import AInput from '../atoms/Input'
import AButton from '../atoms/Button'

export default {
  name: 'p-contact',
  components: {AButton, AInput, TPage},
}
</script>