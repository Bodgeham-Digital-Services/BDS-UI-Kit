# Bodgeham Design System (BDS) UI Kit

## [Live Demo](https://ui-kit.bodgeham-on-wye-gov.uk/)

Bodgeham Design System UI Kit is a collection of Vue 3 components designed to help build services for the Bodgeham Digital Services. It follows GDS-inspired patterns and uses CSS custom properties (tokens) for styling.

This system is based on [GOV.UK Bootstrap](https://cjscommonplatform.github.io/govuk_bootstrap/), which combines GOV.UK Elements and the Bootstrap framework.

## Features

- **Vue 3 Support**: Built with Vue 3 and Composition API.
- **Design Tokens**: Flexible styling using CSS variables.
- **Accessible**: Built with accessibility in mind, following common design patterns.
- **Modular**: Import only what you need, or use as a Vue plugin.

## Installation

### From GitHub

```bash
npm install bodgeham-digital-services/BDS-UI-Kit
```

### Via package.json

Add the following to your `dependencies`:

```json
"dependencies": {
  "bds-ui-kit": "github:bodgeham-digital-services/BDS-UI-Kit"
}
```

## Setup

### As a Vue Plugin

The simplest way to use BDS UI Kit is as a Vue plugin. This handles the import of base styles and tokens.

```javascript
// main.js
import { createApp } from 'vue';
import { createBdsUiKit } from 'bds-ui-kit';
import 'bds-ui-kit/style.css'; // If using the built version
import App from './App.vue';

const app = createApp(App);
app.use(createBdsUiKit());
app.mount('#app');
```

## Usage

### Using Components

You can import and use components individually in your Vue files:

```vue
<script setup>
import { Button, FormGroup, TextInput, Heading } from 'bds-ui-kit';
</script>

<template>
  <Heading :level="1">My Page</Heading>
  
  <FormGroup id="name" label="Full name">
    <TextInput id="name" v-model="name" />
  </FormGroup>
  
  <Button @click="submit">Submit</Button>
</template>
```

### Using Design Tokens Only

If you only want to use the CSS custom properties (colors, spacing, etc.) without the Vue components:

```css
/* Import just the design tokens */
@import 'bds-ui-kit/tokens';

/* Use variables in your own CSS */
.my-custom-element {
  color: var(--govuk-colour-blue);
  font-family: var(--govuk-font-family);
  padding: var(--govuk-spacing-4);
}
```

## Components

The UI Kit is organized into Atoms, Molecules, and Layout components:

### Atoms
- `Button`, `Tag`, `TextInput`, `TextArea`, `Select`, `Checkbox`, `Heading`, `BodyText`, `BackLink`, `Link`, `InsetText`, `VisuallyHidden`.

### Molecules
- `FormGroup`, `ErrorSummary`, `NotificationBanner`, `SummaryList`, `SummaryCard`, `Panel`, `Table`.

### Layout
- `Container`, `MainWrapper`, `GridRow`, `GridColumn`, `Header`, `HeaderNavItem`, `Footer`.

## Development

### Scripts

- `npm run dev`: Start the development environment (lives in the `/dev` folder).
- `npm run build`: Build the library for production.
- `npm run preview`: Preview the production build.

## License

MIT
