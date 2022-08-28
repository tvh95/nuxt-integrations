# Nuxt Module

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
---
##### Google
[Google Document](https://developers.google.com/identity/gsi/web/reference/html-reference#element_with_class_g_id_signin)
---
##### Facebook

---
##### Apple
[Apple Document](https://developer.apple.com/documentation/sign_in_with_apple/displaying_sign_in_with_apple_buttons_on_the_web)  
Example  
```
<AppleLogin
  :mode="left-align"
  :type="sign-in"
  :color="black"
  :border="false"
  :borderRadius="0"
  :width="100%"
  :height="100%"
  :logoSize="small"
  :onSuccess="<function to do after login success>"
  :onFailed="<function to do after login failed>"
/>
```  
Sample Value  
 - mode = 'center-align' | 'left-align' | 'logo-only'  
 - type = 'sign-in' | 'continue' | 'sign-up'  
 - color = 'black' | 'white'  
 - border = true | false  
 - border-radius = any number between 0 to 50
   - *\* default to 15*
 - width = any number between 130 to 375 or 100%
   - *\* default to 100%*
 - height = any number between 30 to 64 or 100%
   - *\* default to 100%*
 - logo-size = 'small' | 'medium' | 'large'
   - *\* logo-size only work with mode = 'left-align'*  
---
