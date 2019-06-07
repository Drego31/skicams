<template>
  <t-page class="p-contact">
    <div class="m-post f-contact">
      <div>
        <div class="f-pb-3">
          <div>
            <a-input/>
          </div>
          <div>
            <a-input/>
          </div>
        </div>
        <div>
          <a-input/>
        </div>
        <div>
          <a-button>
            Send
          </a-button>
        </div>
      </div>
    </div>
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