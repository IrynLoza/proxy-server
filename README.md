## Description
This server help you working with GM API by providing consistent data

### Start project
Run:
```
npm start
```
Server will be running at `localhost:3000`

### Endpoints 
For test `id` - 1234 || 1235
GET `/vehicles/:id/battery` - get battery level
GET `/vehicles/:id` - get vehicle info
GET `/vehicles/:id/doors` - get security doors status
GET `/vehicles/:id/fuel` - get fuel level
POST `/vehicles/:id/engine` - start/stop engine
For test `body`:
```
{ action: START|STOP }
```

### Test 
Run:
```
npm test
```
### Lint
Run:
```
npm run lint
```