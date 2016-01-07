Math Slash Command for Mixmax
=============================

This is an open source Mixmax Slash Command. See <http://sdk.mixmax.com/docs/tutorial-giphy-slash-command> for more information about how to use this example code in Mixmax.

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
