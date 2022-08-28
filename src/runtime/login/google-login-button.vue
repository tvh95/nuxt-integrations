<script lang="ts" setup>
import { useRuntimeConfig } from '#imports'

const env = useRuntimeConfig()
const vMClientId = env.clientId

defineProps({
  loginUri: { type: String, required: true },
  autoPrompt: { type: Boolean, default: false },
  type: { type: String, default: 'standard' },
  size: { type: String, default: 'large' },
  theme: { type: String, default: 'outline' },
  text: { type: String, default: 'sign_in_with' },
  shape: { type: String, default: 'rectangular' },
  logoAlignment: { type: String, default: 'left' },
  callback: { type: Function, required: true }
})
</script>

<template>
  <div>
    <div
      id="g_id_onload"
      :data-client_id="vMClientId"
      :data-login_uri="loginUri"
      :data-auto_prompt="autoPrompt"
    />
    <div
      class="g_id_signin"
      :data-type="type"
      :data-size="size"
      :data-theme="theme"
      :data-text="text"
      :data-shape="shape"
      :data-logo_alignment="logoAlignment"
      :data-callback="callback"
    />
  </div>
</template>
