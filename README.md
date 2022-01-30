# CookieManager

This is going to be a js script that is fully customizable to add a CookieManager to your website.

## How do you add the CookieManager to your website?

```html
<div id="cookie-manager"></div>
<script
  src="https://www.adrian-schauer.at/projects/cookie-manager/cookie-manager-v1.min.js"
>
  //Settings
  settings = {
      title: "CookieManager",
      text: "This website uses cookies to ensure you get the best experience on our website. By using our website you agree to our use of cookies.",
      button: "Accept",
      button_link: "https://www.adrian-schauer.at/projects/cookie-manager/cookie-manager-v1.min.js",
      button_link_text: "Learn more",
      button_link_target: "_blank",
  // Addition for the CookieManager to your website
  bg: {
      type:"hex", // hex, rgb, rgba, hsl, hsla and even img for background.
      content: "#ffffff" // Background color. Default: #ffffff.
  },
  tc: {
      type:"hex", // hex, rgb, rgba, hsl, hsla
      content:"#000000" // Text color. Default: #000000.
  },
  //Button Settings
  bt: {
      type:"hex", // hex, rgb, rgba, hsl, hsla
      content:"#000000" // Button color. Default: #000000.
  },
  bt_hover: {
      type:"hex", // hex, rgb, rgba, hsl, hsla
      content:"#000000" // Button hover color. Default: #000000.
  },
  bt_active: {
      type:"hex", // hex, rgb, rgba, hsl, hsla
      content:"#000000" // Button active color. Default: #000000.
  },
  bt_text : {
      type:"hex", // hex, rgb, rgba, hsl, hsla
      content:"#000000" // Button text color. Default: #000000.
  },
  bt_text_hover : {
      type:"hex", // hex, rgb, rgba, hsl, hsla
      content:"#000000" // Button text hover color. Default: #000000.
  },
  bt_text_active : {
      type:"hex", // hex, rgb, rgba, hsl, hsla
      content:"#000000" // Button text active color. Default: #000000.
  },
  bt_border : {
      type:"hex", // hex, rgb, rgba, hsl, hsla
      content:"#000000" // Button border color. Default: #000000.
  },
  bt_border_hover : {
      type:"hex", // hex, rgb, rgba, hsl, hsla
      content:"#000000" // Button border hover color. Default: #000000.
  },
  bt_border_active : {
      type:"hex", // hex, rgb, rgba, hsl, hsla
      content:"#000000" // Button border active color. Default: #000000.
  }
  }
</script>
```
