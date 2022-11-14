# gaspari-ui
Library of components of the company, written in Vue.js

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
# Components

## 1. GenericInput
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
| $attrs | any | All other attributes you want to specify | false | 

#### Slots:
1. "slot-price"

    ```html
    <generic-input
        type="number"
        placeholder="Aggiungi prezzo"
        label="Prezzo"	
        max="100"	
        v-model="price"
    >
        <template v-slot:prepend>
            <div class="slot-price">€</div>
        </template>
    </generic-input>
    ```


## 2. CustomTextArea

```html
<custom-text-area
    label="ratataaa"
    placeholder="Aldo un placeholdert"
    disabled			
/>
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| classes | string | List of classes that you want to add to the input | false |
| label | string | Label text of the input. | false |

## 3. CustomCheckbox
Checkbox for single use.

```html
<custom-checkbox
    label="select"
    v-model:checked="selected"	
    :disabled="true"
/>
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| disabled | boolean | If checkbox is disabled. | false |
| label | string | Label of checkbox. | true |
| name | string | Name for the input. | false |
| checked | string | If the checkbox is checked. | false |

## 4. CustomMultiCheckbox
Checkbox for multiple selection.

```html
<custom-multi-checkbox
    :options="options"
    v-model:value="heroes"				
/>
```

options:
```json
[
    { label: "Luther", id: 'Luther' },
    { label: "Diego", id: 2 },
    { label: "Allison", id: 3 },
    { label: "Klaus", id: 4 },
    { label: "Five", id: 5 },
    { label: "Ben", id: 'Ben' },
    { label: "Vanya", id: 'Vanya' },
]
```

heroes:
```json
['Luther','Ben', 'Vanya']
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| value | Array of strings or numbers | Array of values, corresponding to id of the option. passed through v-model | false |
| options | Array of MultiCheckboxOptions | Options of the checkbox list. | true |

#### Types:
1. MultiCheckboxOptions:   

    ```json
    {
        id : string | number;
        label : string;
    }
    ```

## 5. CustomRadioGroup
Radio group for multiple exlusive options.

```html
<custom-radio-group
    :options="options"
    v-model:value="selectedRadioValue"
/>
```

options:
```json
[
    {
        id: 'input_444',
        label: 'Radio 1',
        value: 'radio_1',
        name: 'radio_group',						
        disabled: true
    },
    {
        id: 'input_445',
        label: 'Radio 2',
        value: 'radio_2',
        name: 'radio_group',
    }
]
```

selectedRadioValue:
```json
'radio_1'
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| value | string or number | String or number, corresponding to value of the option. passed through v-model | false |
| options | Array of RadioGroupOptions | Options of the radio list. | true |

#### Types:
1. RadioGroupOptions:   

    ```json
    {
        id: any;
        label : string;
        name : string;
        value : string | number;
        disabled? : boolean;
    }
    ```

## 6. CustomSelect
Classic Select.

```html
<custom-select
    name="custom_select"
    label="Seleziona"
    :options="options"
    v-model:value="selected"
/>			
```

options:
```json
[
    {
        value: 1,
        label: 'Giovanni'
    },
    {
        value: 2,
        label: 'Mario'
    },
    {
        value: 3,
        label: 'Andrea'
    },
]
```

selected:
```json
1
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| options | Array of SelectOptions | Options of the Select. | true |
| label | string | Label of the Select. | false |
| name | string | Name of the Select. | true |
| value | string or number or null | Value of the selected option, passed trough v-model. | false |
| placeholder | string | placeholder | false |
| disabled | boolean | enabled/disabled | false |

#### Types:
1. SelectOptions:   

    ```json
    {
        value: string | number,
        label: string
    }
    ```
   
## 7. CustomMultiSelect
Multi Select.

```html
<custom-multi-select
    label="Seleziona"
    placeholder="Seleziona opzione"
    :options="options"
    v-model:selectedOptions="selectedMultiSelectOptions"
/>					
```

options:
```json
[
    {
        label: 'Opzione 1',
        value: 1
    },
    {
        label: 'Opzione 2',
        value: 2
    },
    {
        label: 'Opzione 3',
        value: 3
    },
]
```

selectedMultiSelectOptions:
```json
[1, 2]
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| label | string | Label of the Select. | false |
| placeholder | string | placeholder | false |
| options | Array of SelectOptions | Options of the Select. | true |
| selectedOptions | array of strings or numbers | selected options for the select, passed trough v-model. | true |
#### Types:
1. SelectOptions:   

    ```json
    {
        value: string | number,
        label: string
    }
    ```


## 8. CustomMultiSelectAsync
Multi Select with search feature.

```html
<custom-multi-select-async
    label="Seleziona"
    placeholder="Seleziona opzione"
    v-model:selectedOptions="selectedMultiSelectAsyncOptions"
    optionsSearchRoute="http://localhost:8000/data"
/>							
```

selectedMultiSelectAsyncOptions:
```json
[
    {
        label: 'Opzione 1',
        value: 1
    },
    {
        label: 'Opzione 2',
        value: 2
    },
    {
        label: 'Opzione 3',
        value: 3
    },
]
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| label | string | Label of the Select. | false |
| placeholder | string | placeholder | false |
| optionsSearchRoute | string | route that returns the searched objects | true |
| selectedOptions | array of SelectOptions | selected options for the select, passed trough v-model. | true |

#### Types:
1. SelectOptions:   

    ```json
    {
        value: string | number,
        label: string
    }
    ```