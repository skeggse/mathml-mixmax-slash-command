Math Slash Command for Mixmax
=============================

This is an open source Mixmax Slash Command.

## Running locally

1. Install using `npm install`
2. Run using `npm start`

To locally simulate how Mixmax calls the typeahead URL (to return a JSON list containing the single rendered expression), run:

```
curl http://localhost:8080/typeahead?text=2%5E2
```

To locally simulate how Mixmax calls the resolver URL (to return an HTML snippet that goes in the email), run:

```
curl http://localhost:8080/resolver?text=2%5E2
```

## Integrating locally

Head to the [Integration tab](https://app.mixmax.com/dashboard/integrations) over at Mixmax, and click Add Slash Command. Possible configuration:

- Name: `Format Math`
- Command: `math`
- Parameter placeholder: `[Math]`
- Command Parameter Suggestions API URL: `http://localhost:8080/typeahead`
- Command Parameter Resolver API URL: `http://localhost:8080/resolver`

Then click Add Slash Command. Hop over to Gmail, hit compose, and try entering a math expression.

> /math 2^2

If you don't see anything rendered, or if you just see a little loading bar under the expression after you hit enter, check out the sdk docs page on [insecure content](http://sdk.mixmax.com/docs/chrome-insecure-content-https-request-blocked-when-developing-locally).
