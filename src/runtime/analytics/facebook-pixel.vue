<script lang="ts" setup>
import { useRuntimeConfig } from '#imports'

const faceookPixelProps = defineProps({
  standardEvent: { type: String, required: true },
  // { name: string, value: string }
  customData: { type: Array, default: [] }
})

const env = useRuntimeConfig()
const vMId = env.facebookPixel.id

let qs = `id=${vMId}&ev=${faceookPixelProps.standardEvent}`
if (faceookPixelProps.customData.length > 0) {
  qs += '&' + faceookPixelProps.customData
    .map(({ name, value }: { name: string, value: string }) => `cd[${name}]=${value}`)
    .join('&')
}
</script>

<template>
  <img
    :src="'https://www.facebook.com/tr?' + qs"
    height="1"
    width="1"
    style="display:none"
 />
</template>
