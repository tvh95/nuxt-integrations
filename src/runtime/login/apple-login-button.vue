<script lang="ts" setup>
import { useAppleLogin } from './apple'
const appleLoginProps = defineProps({
  mode: { type: String, default: undefined },
  type: { type: String, default: undefined },
  color: { type: String, default: undefined },
  border: { type: String, default: undefined },
  borderRadius: { type: String, default: undefined },
  width: { type: String, default: undefined },
  height: { type: String, default: undefined },
  logoSize: { type: String, default: undefined },
  onSuccess: { type: Function, required: true },
  onFailed: { type: Function, required: true }
})

useAppleLogin()
  .then(({ setup }) => setup(
    appleLoginProps.onSuccess,
    appleLoginProps.onFailed
  ))
</script>

<template>
  <div
    id="appleid-signin"
    :data-mode="mode"
    :data-type="type"
    :data-color="color"
    :data-border="border"
    :data-border-radius="borderRadius"
    :data-width="width"
    :data-height="height"
    :data-logo-size="logoSize"
  />
</template>
