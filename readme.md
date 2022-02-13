# Dynamic filter

A proof of concept for allow user able to set up and custom filter workflow from
UI.

## System requirements

- Deno 1.18.2 or higher
- Velociraptor 1.4.0 or higher

## Scripts

```
# Start
vr start
```

## Limitation

- User can't create exactly new workflow by himself. Must be request Developer
  create its.
- Filter will be single responsibility, No mulit-condition.
- Unknown value on data store. Developer will be blind that him don't cleary to
  know what any value in data store.
