# gaspari-ui
Library of components, written in Vue.js

---
## Installation

```
npm install gaspari-ui
```

Then import like this: 
```js
import { ComponentName } from "gaspari-ui";
```

Also add the styles in App.vue or in other place to be used globally on the project:
```js
import "gaspari-ui/dist/style.css"; 
```

If you are NOT using Tailwindcss in the parent project, then add also this style:
```js
import "gaspari-ui/dist/output.css";
```

Otherwise, you can skip this passage.

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

The library requires to use Tailwindcss (^3.2.4). So install it and run:

```
npx tailwindcss -i ./src/assets/input.css -o ./dist/output.css --watch
```

## Building
To release a new version of the library, you need first to build Vue:

```
npm run build
```
Secondly, run this command, to compile Tailwindcss styles:
```
npx tailwindcss -i ./src/assets/input.css -o ./dist/output.css
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
1. "slot-prepend"

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
```
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
```
['Luther','Ben', 'Vanya']
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| value | Array of strings or numbers | Array of values, corresponding to id of the option. passed through v-model | false |
| options | Array of MultiCheckboxOptions | Options of the checkbox list. | true |

#### Types:
1. MultiCheckboxOptions:   

    ```
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
```
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
```
'radio_1'
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| value | string or number | String or number, corresponding to value of the option. passed through v-model | false |
| options | Array of RadioGroupOptions | Options of the radio list. | true |

#### Types:
1. RadioGroupOptions:   

    ```
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
```
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
```
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

    ```
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
```
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
```
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

    ```
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
```
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

    ```
    {
        value: string | number,
        label: string
    }
    ```

## 9. CustomModal
Modal.

```html
<custom-modal
    :isOpen="isModalOpen"
    modalTitle="Inserisci nuovo"
    @closeModal="openCloseModal"
>
    <template v-slot:modal-body>
        Lorem ipsuctetur adipisicing elit. Quia excepturi voluptatum corrupti libero officia sed a officiis, accusamus ullam sunt magnam recusandae, repudiandae reprehenderit accusantium, autem eum sint unde quasi?
    </template>

    <template v-slot:modal-footer>
        <div style="margin-right: 15px;">
            <custom-button
                label="Chiudi"
                styleType="secondary-outline"
                @onClick="openCloseModal"
            />
        </div>
        <custom-button
            label="Inserisci"
            styleType="primary"
            @onClick="test"
        />
    </template>
</custom-modal>						
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| isOpen | boolean | If modal is open. | false |
| modalTitle | string | Title of the modal | false |
| withoutTitle | boolean | If modal has title or not | false |

#### Events:
1. @closeModal: emitted when click on "X" 

#### Slots:
1. "modal-body"
2. "modal-footer"

## 10. CustomLoader
Spinner for loading.

```html
<custom-loader
    :loading="loading"
    size="small"
/>			
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| loading | boolean | If loader is loading or not. | false |
| size | string | Size of loader. Alternatives: ['small', 'default', 'large']. Default: 'default'.  | false |

## 11. CustomButton
Button.

```html
<custom-button
    label="Apri modale"
    @onClick="openCloseModal"
/>					
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| label | string | Text inside button. | false |
| styleType | string | Style of the button. Alternatives: ['primary', 'primary-outline', 'secondary', 'secondary-outline']. Default: 'primary'. | false |
| size | string | Size of button. Alternatives: ['small', 'default', 'large']. Default: 'default'.  | false |
| disabled | boolean | If button is enabled or disabled | false |

#### Events:
1. @onClick: emitted when click

#### Slots:
1. "slot-left": on the left of button text
2. "slot-right": on the right of button text