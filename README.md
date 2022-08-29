# simple-status-messages

[![npm version](https://badge.fury.io/js/simple-status-messages.svg)](https://badge.fury.io/js/simple-status-messages)
[![GitHub issues](https://img.shields.io/github/issues/josunlp/simple-status-messages)](https://github.com/josunlp/simple-status-messages/issues)
[![GitHub forks](https://img.shields.io/github/forks/josunlp/simple-status-messages)](https://github.com/josunlp/simple-status-messages/network)
[![GitHub stars](https://img.shields.io/github/stars/josunlp/simple-status-messages)](https://github.com/josunlp/simple-status-messages/stargazers)
[![GitHub license](https://img.shields.io/github/license/josunlp/simple-status-messages)](https://github.com/josunlp/simple-status-messages/blob/master/LICENSE)
![npm](https://img.shields.io/npm/dt/simple-status-messages)
[![CodeFactor](https://www.codefactor.io/repository/github/josunlp/simple-status-messages/badge)](https://www.codefactor.io/repository/github/josunlp/simple-status-messages)
[![TypeScript](https://img.shields.io/badge/Developed%20in-TypeScript-blue?logo=typescript)](https://www.typescriptlang.org/)

A simple TypeScript package that builds up a messaging system.

## Installation

```npm install simple-status-messages```

## Usage

```typescript
import SimplyStatusMessages from 'simple-status-messages';
import { SimplyStatusMessages, ssm, M } from 'simple-status-messages';

const msg = SimplyStatusMessages.getInstance();
msg.success('Lorem ipsum is simply dummy text ');
msg.error('Lorem ipsum is simply dummy text ');
msg.info('Lorem ipsum is simply dummy text ');
msg.warning('Lorem ipsum is simply dummy text ');
```

![Example](assets/images/example.png)

## License

[MIT](https://opensource.org/licenses/MIT)
