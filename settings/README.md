# Settings

In this README I will go through over every possible settings for the ConsentManager.

You can add any type of cookies to the ConsentManager using the settings.

## Positioning
1 - Left
2 - Top
3 - Right
4 - Bottom

## Define Cookies

```html
<script
  src="https://www.adrian-schauer.at/projects/consent-manager/consent-manager-v1.min.js"
>
  consentmanager.settings{
      "description" = "This website uses cookies to ensure you get the best experience on our website. By using our website you agree to our use of cookies.",
      "cookies" = {
        [
        "name": "",
        "description": "",
        "type": "",
        ],
        [
        "name": "",
        "description": "",
        "type": "",
        ],
        },
        "style" = {

        }
  }
</script>
```

# Example Cookie Settings

## Acknowledged Cookies

This type of cookie is used to just inform the user that you are using cookies.
To set the acknowledgedCookies
Here is an simple example to use the acknowledgedCookies:

```javascript
settings.acknowledgedCookies = {
  message: 'This website uses cookies to improve your experience.',
  button: 'Got it!'
```
