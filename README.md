# simple-toast-messages

[![npm version](https://img.shields.io/npm/v/simple-toast-messages?style=for-the-badge)](https://www.npmjs.com/package/simple-toast-messages)
[![GitHub issues](https://img.shields.io/github/issues/josunlp/simple-toast-messages?style=for-the-badge)](https://github.com/josunlp/simple-toast-messages/issues)
[![GitHub forks](https://img.shields.io/github/forks/josunlp/simple-toast-messages?style=for-the-badge)](https://github.com/josunlp/simple-toast-messages/network)
[![GitHub stars](https://img.shields.io/github/stars/josunlp/simple-toast-messages?style=for-the-badge)](https://github.com/josunlp/simple-toast-messages/stargazers)
[![GitHub license](https://img.shields.io/github/license/josunlp/simple-toast-messages?style=for-the-badge)](https://github.com/josunlp/simple-toast-messages/blob/master/LICENSE)
![npm](https://img.shields.io/npm/dt/simple-toast-messages?style=for-the-badge)
[![CodeFactor](https://www.codefactor.io/repository/github/josunlp/simple-toast-messages/badge?style=for-the-badge)](https://www.codefactor.io/repository/github/josunlp/simple-toast-messages)
[![TypeScript](https://img.shields.io/badge/Developed%20in-TypeScript-blue?logo=typescript&style=for-the-badge)](https://www.typescriptlang.org/)

A simple TypeScript package that builds up a toast messaging system.

## Installation

```bash
npm install simple-toast-messages
```

## Usage

### Possible Imports

```typescript
// default import
import SimpleToastMessages from 'simple-toast-messages';

// named imports
import { SimpleToastMessages, stm, T, PositionEnum } from 'simple-toast-messages';
```

---

### Example

```typescript
// get the instance
const msg = SimpleToastMessages.getInstance();

// fire a success message with a timeout of 1 second and position top left
msg.success(message, {
  timeOut: 1000,
  position: PositionEnum.TOP_LEFT,
});

// fire a simple error message
msg.error(message);

// fire a info message with a timeout of 3 seconds and position bottom left
msg.info(message, {
  timeOut: 3000,
  position: PositionEnum.BOTTOM_LEFT,
  opacity: 0.8,
});

// fire a warning message with a timeout of 5 seconds and position bottom center
msg.warning(message, {
  timeOut: 5000,
  position: PositionEnum.BOTTOM_CENTER,
  opacity: 0.8,
});
```

![Example](assets/images/example-1.png)
![Example](assets/images/example-2.png)
![Example](assets/images/example-3.png)
![Example](assets/images/example-4.png)

## License

[MIT](https://opensource.org/licenses/MIT)
