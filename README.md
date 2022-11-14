# gaspari-ui
Library of components of the company

---
## Installation

```
npm install gaspari-ui
```
---

## Testing locally
After downloading the repository and running:
```
npm install
```

Is it possible to modify the library in /src folder. The /sandbox folder is where you can import components and use them, by running:

```
npm run dev
```
---
## Components

### 1. GenericInput
Generic input component for basic inputs(text, numbers, date).

```html
<generic-input
    type="text"
    placeholder="Aggiungi un placeholder"
    label="Lorem ipsum"	
    v-model="name"
/>
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| classes | string | List of classes that you want to add to the input | false |
| label | string | Label text of the input. | false |
| readOnly | boolean | Whether you want it to be read-only or not | false |
| $attrs | any? | All other attributes you want to specify | false | 



