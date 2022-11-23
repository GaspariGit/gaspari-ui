# gaspari-ui
Library of components, written in Vue.js

&nbsp;
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

This library is meant to be used with Tailwindcss, so add also this style globally:
```js
import "gaspari-ui/dist/output.css";
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

The library uses Tailwindcss. So to compile it run:

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

&nbsp;
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

&nbsp;
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

&nbsp;
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

&nbsp;
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

&nbsp;
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
&nbsp;
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

&nbsp;
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

&nbsp;
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
&nbsp;
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

&nbsp;
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

&nbsp;
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


&nbsp;
## 12. Breadcrumbs
BreadCrumbs.

```html
<div class="mb-2 ml-1 ">
    <breadcrumbs :path_breadcrumbs="path_breadcrumbs" />
</div>				
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| path_breadcrumbs | Array of BreadcrumbInterface | Array that represents the path. | true |


#### Types:
1. BreadcrumbInterface:   

    ```
    {
        label : string,
	    path : string,
    }
    ```

&nbsp;

##  13. CustomTable
Table with pagination. This component uses "pagination" composable

```html
<custom-table
    :total="total"
    :perPage="perPage"	
    :currentPage="currentPage"
    :from="from"
    title="Ordini"	
    @changed-pagination="handleUpdatePagination"	
    :loading="loading"
>
    <template v-slot:filters>Filters</template>

    <template v-slot:t-head>
        <th>
            data
        </th>
        <th>
            cod. cliente
        </th>
        <th>
            cliente
        </th>
        <th>
            cod. ufficio
        </th>
        <th>
            email marketing
        </th>
        <th>
            agente
        </th>
        <th>
            stato
        </th>
        <th>
            &nbsp;
        </th>
    </template>
    <template v-slot:t-body>
        <tr v-for="(item, index) in 25" :key="index">
            <td>
                11/03/1998
            </td>
            <td>
                ODTC078
            </td>
            <td>
                Municipio di Cortenova
            </td>
            <td>
                UF6A1W
            </td>
            <td>
                NO
            </td>
            <td>
                Mario Rossi
            </td>
            <td>
                Inviato
            </td>
            <td>
                !
            </td>
        </tr>
    </template>
</custom-table>			
```

script part is like this:

``` html javascript
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { CustomTable } from "gaspari-ui";
import usePagination from "gaspari-ui/dist/types/composables/usePagination.d.ts";

export default defineComponent({
	name: 'HomeView',
	components: {
		CustomTable
	},
	setup() {
		const { 
			results,
			currentPage,
			perPage,
			total,
			from,
			updatePagination,
			loading
		} = usePagination();

		onMounted(async () => {
			await updatePagination('https://your-endpoint-get', {
				perPage: 50,
				currentPage: 1
			})
		})

		const handleUpdatePagination = (e) => {
			updatePagination('https://your-endpoint-get', e)
		};

		return {
			handleUpdatePagination,
			results,
			currentPage,
			perPage,
			total,
			from,
			loading
		}
	}
})
</script>
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| title | string | Title for the table. | false |
| total | number | Total records of the table. | true |
| currentPage | number | Current page of the table. | true |
| perPage | number | total records showed per page. | true |
| from | number | Current page of the table. | true |
| loading | boolean | If it is in loading state or not. | true |

#### Slots:
1. "filters": Space above the table where to put filters actions
2. "t-head": Inside <thead></thead> tag. Put the <th></th> for the table's headers
3. "t-body": Inside <tbody></tbody> tag. put table rows and table data.

&nbsp;
## 14. FormSeparator
Is an ``` <hr /> ``` tag  styled to be in FormContainer component.

```html
<form-separator />				
```

&nbsp;
## 15. FormContainer
Container for the forms.

```html
<form-container			
    title="Nuovo cliente"
    :path_breadcrumbs="[
        {
            label: 'Home',
            path: {
                name: 'home'
            }
        },
        {
            label: 'Anagrafiche',							
        },
        {
            label: 'Clienti',	
            path: {
                name: 'anagraphics.clients.index'
            }						
        },
        {
            label: 'Nuovo cliente',							
        }
    ]"
>
    <template v-slot:form-buttons-top>
        <div class="flex my-6 ml-1">
            <custom-button
                label="Salva"
                styleType="primary-outline"
                size="default"
            />

            <div class="ml-5">
                <custom-button
                    label="Chiudi"
                    styleType="primary-outline"
                    size="default"
                />
            </div>
        </div>						
    </template>	

    <template v-slot:form-content>
        <div class="grid grid-cols-12 gap-6">
            <div class="col-span-6">
                <generic-input
                    type="text"
                    placeholder="Inserisci codice cliente"
                    label="Codice Cliente"	
                    v-model="formData.customer_code"
                />
            </div>
            <div class="col-span-6">
                <generic-input
                    type="text"
                    placeholder="Inserisci codice fatturazione cliente"
                    label="Codice fatturazione cliente"	
                    v-model="formData.invoice_code"
                />
            </div>

            <div class="col-span-6">
                <generic-input
                    type="text"
                    placeholder="Inserisci codice cliente"
                    label="Codice Cliente"	
                    v-model="formData.customer_code"
                />
            </div>
            <div class="col-span-6">
                <generic-input
                    type="text"
                    placeholder="Inserisci codice fatturazione cliente"
                    label="Codice fatturazione cliente"	
                    v-model="formData.invoice_code"
                />
            </div>
        </div>
    </template>
</form-container>				
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| path_breadcrumbs | Array of BreadcrumbInterface. If not specified is not displayed.  | Array that represents the path. | false |
| title | string | Title of the form. If not specified is not displayed. | false |

#### Types:
1. BreadcrumbInterface:   

    ```
    {
        label : string,
	    path : string,
    }
    ```
#### Slots:
1. "form-buttons-top": Above the form
2. "form-buttons-top": Below the form
3. "form-content": Inside the form


&nbsp;
## 16. HeaderNavigation
Navigation menu styled.

```html
<header-navigation 
    :menuStructure="menuStructure"
/>	
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| menuStructure | Array of ListItem. | Array that represents the menu structure. | true |

#### Types:
1. ListItem:   

    ```
    {
        id? : string | number
        href? : string
        label : string
        children: Array<ListItem>
    }
    ```

For the elements where children is not an empty array, it is not possible specify the href.
This navigation is ment to have only two levels.

&nbsp;
# Layouts
## 1. LayoutBase
Base Layout.

```html
<layout-base
    :menuStructure="menuStructureList"
>		
    <!-- Layout Content -->
    <template v-slot:layout-content>
        
        <form-container title="Nuovo ordine">
            <template v-slot:form-content>
                Contenuto form.
            </template>
        </form-container>

    </template>
</layout-base>
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| menuStructure | Array of ListItem. | Array that represents the menu structure. | true |

#### Types:
1. ListItem:   

    ```
    {
        id? : string | number
        href? : string
        label : string
        children: Array<ListItem>
    }
    ```

For the elements where children is not an empty array, it is not possible specify the href.
This navigation is ment to have only two levels.

#### Slots:
1. "layout-content": Inside layout

&nbsp;
# Composables
List of composables to use with components:

1. **usePagination**: composable that handle all the process of updating data for CustomTable component. See [CustomTable](#13-customtable) for the usage.