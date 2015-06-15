# A-Welzijn MailTo

v1.0.5

### Hoe het te gebruiken

```javascript
"dependencies": {
	"awelzijn-mail-to": "latest"
 }
```
```javascript
var app = angular.module('yourApp', [
	'awelzijn.mailto'
]);
```

Deze directive gaat een url genereren met een `mailto:` link

```html
<a-welzijn-mail-to email-adres='ctrl.emailadres'></a-welzijn-mail-to>
```