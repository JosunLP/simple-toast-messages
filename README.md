# simple-toast-messages

[![npm version](https://badge.fury.io/js/simple-toast-messages.svg)](https://badge.fury.io/js/simple-toast-messages)
[![GitHub issues](https://img.shields.io/github/issues/josunlp/simple-toast-messages)](https://github.com/josunlp/simple-toast-messages/issues)
[![GitHub forks](https://img.shields.io/github/forks/josunlp/simple-toast-messages)](https://github.com/josunlp/simple-toast-messages/network)
[![GitHub stars](https://img.shields.io/github/stars/josunlp/simple-toast-messages)](https://github.com/josunlp/simple-toast-messages/stargazers)
[![GitHub license](https://img.shields.io/github/license/josunlp/simple-toast-messages)](https://github.com/josunlp/simple-toast-messages/blob/master/LICENSE)
![npm](https://img.shields.io/npm/dt/simple-toast-messages)
[![CodeFactor](https://www.codefactor.io/repository/github/josunlp/simple-toast-messages/badge)](https://www.codefactor.io/repository/github/josunlp/simple-toast-messages)
[![TypeScript](https://img.shields.io/badge/Developed%20in-TypeScript-blue?logo=typescript)](https://www.typescriptlang.org/)

A simple TypeScript package that builds up a messaging system.

## Installation

```bash
npm install simple-toast-messages
```

## Usage

```typescript
import SimpleToastMessages from 'simple-toast-messages';
import { SimpleToastMessages, stm, T } from 'simple-toast-messages';

const msg = SimpleToastMessages.getInstance();
msg.success(message, 1000);
msg.error(message);
msg.info(message, 2000);
msg.warning(message, 5000);
```

![Example](assets/images/example.png)

## License

[MIT](https://opensource.org/licenses/MIT)
