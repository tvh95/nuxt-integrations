<template>
  <div>
    <p>Nuxt module playground!</p>
    <br>
    <button @click="fbLogin">
      FB login
    </button>
    <!-- <AppleLoginButton /> -->
    <!-- <p>{{googleLogin}}</p>
    <div ref="googleButton" /> -->
    <!-- <GoogleLoginButton /> -->
    <!-- <div id="g_id_onload"
        data-client_id="896447910152-6ssm7uihfukntmsj7l5ugb6v0aob4ssd.apps.googleusercontent.com"
        data-login_uri="http://localhost:3000"
        data-auto_prompt="false">
    </div>
    <div class="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left">
    </div> -->
  </div>
</template>

<script setup>
// let facebookLogin
// const googleButton = ref()
// const googleLogin = ref()
onMounted(async () => {
  // await useAppleLogin()
  // const gl = await useGoogleLogin(true)
  // gl.renderButton((x) => {
  //   googleLogin.value = x
  // }, googleButton.value, {})
  // await apiReady.ready()
  // googleLogin.value = true
  // console.log('x', googleLogin.value)
  // facebookLogin = useFacebookLogin()
  // console.log(apiReady, googleLogin.value)
})
function fbLogin () {
  // if (!facebookLogin) { return }
  // facebookLogin.getAccessToken()
}
</script>
