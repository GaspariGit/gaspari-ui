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

It is possible to modify the library in /src folder. The /sandbox folder is where you can import components and use them, by running:

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
| Name | Description | Required |
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
| Name | Description | Required |
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
| Name | Description | Required |
| ---- | -------| --- | --- |
| value | Array of strings or numbers | Array of values, corresponding to id of the option. passed through v-model | false |
| options | Array of MultiCheckboxOptions | Options of the checkbox list. | true |

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
| Name | Description | Required |
| ---- | -------| --- | --- |
| value | string or number | String or number, corresponding to value of the option. passed through v-model | false |
| options | Array of RadioGroupOptions | Options of the radio list. | true |
    
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
## 6.5. CustomSelectModel
Classic Select.

```html
<custom-select label="Cliente" :options="clients" :selected="order.client"
                            placeholder="Seleziona un cliente"
                            disabled="false">
                        </custom-select>        
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
{
    value: 1,
    label: 'Giovanni'
}
```

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| options | Array of SelectOptions | Options of the Select. | true |
| label | string | Label of the Select. | false |
| name | string | Name of the Select. | true |
| selected | Model of the selected element | true |
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
| Name | Description | Required |
| ---- | -------| --- | --- |
| label | string | Label of the Select. | false |
| placeholder | string | placeholder | false |
| options | Array of SelectOptions | Options of the Select. | true |
| selectedOptions | array of strings or numbers | selected options for the select, passed trough v-model. | true |

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
<filterable-modal
    :isOpen="isOpenModalFilter"
    @closeModal="openCloseModalFilter"
    @filter="handleUpdatePaginationWithFilter"
    :filterables="filterables"
    baseApiPath="https://base.api.net"
/>

<custom-table
    :total="total"
    :perPage="perPage"
    :currentPage="currentPage"
    :from="from"
    title="Città"
    @changed-pagination="handleUpdatePagination"
    :loading="loadingPagination"
>
    <template v-slot:filters>
        <div class="flex">                  
            <div @click="openCloseModalFilter" class="flex items-center cursor-pointer">
                <div class="mr-2 bg-textGrey h-8 w-8 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FFFFFF" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                </div>
                <div class="font-medium text-customBlack">
                    Cerca
                </div>
            </div>                  
        </div>
    </template>

    <template v-slot:t-head>
        <th
            @click="handleUpdatePaginationWithOrder('name')" 
            class="cursor-pointer ordered"
            :class="setPaginationOrderClasses('name')"
        >
            Nome
        </th>
        <th 
            @click="handleUpdatePaginationWithOrder('cadastral_code')" 
            class="cursor-pointer ordered"
            :class="setPaginationOrderClasses('cadastral_code')"
        >
            cod. catastale
        </th>
        <th name="is_metropolitan_city">
            città metropolitana
        </th>
        <th name="istat_code_alpha">
            cod. istat (alpha)
        </th>
        <th name="province_name">
            provincia
        </th>
        <th name="region_name">
            regione
        </th>
        <th>
            &nbsp;
        </th>
    </template>

    <template v-slot:t-body>
        <tr v-for="(item, index) in results" :key="index">
            <td class="relative" :class="{recordActive : index === activeRecordIndex}">
                {{ item.properties.name }}
            </td>
            <td>
                {{ item.properties.cadastral_code }}
            </td>
            <td>
                {{ item.properties.is_metropolitan_city ? 'SI' : 'NO' }}
            </td>
            <td>
                {{ item.properties.istat_code_alpha }}
            </td>
            <td>
                {{ item.properties.province_name }}
            </td>
            <td>
                {{ item.properties.region_name }}
            </td>
            <td>
                <div class="flex items-center">
                    <div class="w-8 h-8 cursor-pointer rounded-full bg-textGrey  text-white flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFF" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                    </div>
                </div>
            </td>
        </tr>
    </template>
</custom-table>     
```

script part is like this:

``` html javascript typescript
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import CustomTable from "../../src/components/partials/CustomTable.vue";
import { usePagination } from "../../src/composables/usePagination";
import FilterableModal from "../../src/components/ui/FilterableModal.vue";
import CustomButton from "../../src/components/ui/CustomButton.vue";

export default defineComponent({
    name: 'HomeView',
    components: {
        CustomTable,
        FilterableModal,
        CustomButton
    },
    setup() {
        // Gestione paginazione tabella
        const { 
            results,
            currentPage,
            perPage,
            total,
            from,
            filterables,
            loadingPagination,
            setFilterParams,
            setPaginationOrder,
            setPaginationOrderClasses,
            updatePagination,
        } = usePagination();

        const handleUpdatePagination = async (e) => {
            await updatePagination($base_api_url, e)
        };  

        onMounted(async () => {
            await handleUpdatePagination({
                perPage: 25,
                currentPage: 1
            })
        })
                
        const handleUpdatePaginationWithOrder = (columnName : string) => {
            setPaginationOrder(columnName);
            handleUpdatePagination({
                perPage: perPage.value,
                currentPage: currentPage.value
            })
        }

        const handleUpdatePaginationWithFilter = (filter) => {
            setFilterParams(filter);
            handleUpdatePagination({
                perPage: perPage.value,
                currentPage: currentPage.value
            })
        }

        const isOpenModalFilter = ref<boolean>(false);
        const openCloseModalFilter = () => {
            isOpenModalFilter.value = !isOpenModalFilter.value;
        }       
                        
        return {            
            // From usePagination
            results,
            currentPage,
            perPage,
            total,
            from,
            filterables,
            loadingPagination,
            setPaginationOrderClasses,

            // Internals for pagination
            handleUpdatePagination,
            handleUpdatePaginationWithOrder,
            handleUpdatePaginationWithFilter,

            // For opening modal Filter
            isOpenModalFilter,          
            openCloseModalFilter,                       
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

## 17. CustomSidebar
Sidebar.

```html
<custom-sidebar 
    @close-sidebar="closeSidebar"           
    :isOpen="isOpenSidebar"
    :loading="isLoadingSidebar"
    :title="sidebarData?.properties.name"
>                       
    <template v-slot:sidebar-content>
        <div v-if="sidebarData !== null">
            <div class="mb-2"><span class="font-semibold">Codice catastale:</span> {{ sidebarData.properties.cadastral_code }}</div>
            <div class="mb-2"><span class="font-semibold">Unità territoriale:</span> {{ sidebarData.properties.territorial_unit }}</div>
            <div class="mb-2"><span class="font-semibold">Città metropolitata:</span> {{ sidebarData.properties.is_metropolitan_city ? 'SI' : 'NO' }}</div>
            <div class="mb-2"><span class="font-semibold">Divisione geografica:</span> {{ sidebarData.properties.geographical_division }}</div>
            <div class="mb-2"><span class="font-semibold">Codice IPA:</span> {{ sidebarData.properties.ipaCode }}</div>
            <div class="mb-2"><span class="font-semibold">Codice ISTAT alfanumerico:</span> {{ sidebarData.properties.istat_code_alpha }}</div>
            <div class="mb-2"><span class="font-semibold">Codice ISTAT numerico:</span> {{ sidebarData.properties.istat_code_numeric }}</div>
            <div class="mb-2"><span class="font-semibold">Sigla:</span> {{ sidebarData.properties.plate_abbreviation }}</div>
            <div class="mb-2"><span class="font-semibold">Provincia:</span> {{ sidebarData.properties.province.name }}</div>
            <div class="mb-2"><span class="font-semibold">Regione:</span> {{ sidebarData.properties.region.name }}</div>

            <h5 class="mt-6 mb-3 text-xl font-bold text-black">Statistiche:</h5>
            <div class="mb-2"><span class="font-semibold">Zona altimetrica:</span> {{ sidebarData.statistics.altimetric_zone }}</div>
            <div class="mb-2"><span class="font-semibold">Altitudine:</span> {{ sidebarData.statistics.altitude }}</div>
            <div class="mb-2"><span class="font-semibold">Popolazione legale:</span> {{ sidebarData.statistics.legal_population }}</div>
            <div class="mb-2"><span class="font-semibold">Popolazione residente:</span> {{ sidebarData.statistics.resident_population }}</div>                  
        </div>
        <div v-else>Si è verificato un problema...</div>
    </template>
</custom-sidebar>   

<!-- As if it was in a v-for with his id and index  -->
<button @click="handleOpenDetails(item.id, index)">Open sidebar</button>
```

script part is like this:

``` html javascript typescript vue
<script lang="ts">
import { defineComponent } from "vue";
import { useSidebar } from "../../src/composables/useSidebar";
import CustomSidebar from "../../src/components/partials/CustomSidebar.vue";

export default defineComponent({
    name: 'HomeView',
    components: {
        CustomTable,
        CustomSidebar,
        FilterableModal,
        CustomButton
    },
    setup() {       
        // Gestione Sidebar
        const {
            openDetails,
            closeSidebar,
            activeRecordIndex,
            isOpenSidebar,
            isLoadingSidebar,
            sidebarData
        } = useSidebar();
        
        const handleOpenDetails = async (id: number, index: number) => {
            await openDetails('$base_path_api_resource' + id, index)
        }
                        
        return {                                        
            // From useSidebar          
            closeSidebar,
            activeRecordIndex,
            isOpenSidebar,
            isLoadingSidebar,
            sidebarData,
            
            // Internals for sidebar
            handleOpenDetails,
        }
    }
})
</script>
```

This components uses useSidebar composable and is meant to be used with CustomTable component. You can also use sidebar without binding it to a table or an api call. Check useSidebar composable and its methods.

#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| isOpen | boolean | Sidebar open or closed. | false |
| title | string | Sidebar title. | false |
| loading | boolean | If sidebar is loading data. | false |


#### Slots:
1. "sidebar-content": Inside sidebar

&nbsp;

## 18. ScrollToTop
scroll-to-top component.

```html
<scroll-to-top />
```

&nbsp;

## 19. CustomSearchInput
Search input custom.

```html
<custom-search-input 
    @onSearch="handleUpdatePaginationWithSearch"
/>
```
#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| Placeholder | string | placeholder. | false |

#### Events:
1. @onSearch: emitted when click search or enter. Returns the string.

&nbsp;

## 20. CustomTooltip
Tooltip that appears on hover of an element.

```html
<custom-tooltip position="bottom" backroundColor="#000000">
    <template v-slot:target>
        <span>Tooltip</span>                    
    </template>
    <template v-slot:content>
        <p class="text-black">Lorem ipsum dolor sit <a href="https:/google.com" class="underline" target="_blank">amet</a> consectetur adipisicing elit. Voluptates sed illum nisi rerum. Voluptatibus vitae libero dolor illum deserunt. Dicta itaque ratione ipsam quisquam vitae cum officia aperiam eveniet eius.</p>                   
    </template>
</custom-tooltip>
```
#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| position | string | position of tooltip. options are ["top", "right", "bottom", "left"]. Default is "top" | false |
| backgroundColor | string | Color of the background. Default is black. | false |
| maxWidth | number | max-width in pixels of the container. Default is 250. | false |

#### Slots:
1. target: The element target.
2. content: The content of the tooltip.

&nbsp;

## 21. CustomDatePicker
Date picker.

```html
<custom-date-picker
    label="Data inizio"
    :range="true"
    type="datetime"
    v-model:value="dateRange"
    resultType="formatted"  
/>    
```

It is possible as well to use this fomat:
```html
<custom-date-picker
    label="Data inizio"
    :range="true"
    type="datetime"
    resultType="original"
    @update="updateDateTime"
/>    
```

This component has different types of input & output data, depending on what
type of result do you want to obtain.
#### Props:
| Name | Type | Description | Required |
| ---- | -------| --- | --- |
| label | string | Label of the input | false |
| range | boolean | If the input has a range between two dates/times or not. Default is false. If the range is true, the component expects an array of input, and returns an array (if the "resultType" prop is "formatted") | false |
| type | string | The type of data you want to work with. Options are: ['time', 'date', 'datetime']. | false |
| resultType | string | The type of data you want the component to return. Options are: ['formatted', 'original']. Original returns an object with the original value, the formatted value and the type (date, time, datetime). Formatted options returns a string or an array of strings, in the format "yyyy-mm-dd H:i:s".| false |
| value | string or Array of strings | The value input of the component, passed also by v-model. Depending on the previous options i a string or an array: with "time" type the format is "22:12:00"; with "date" type the format is "2022-12-31"; with "datetime" format is "2022-12-31 23:59:59"| true |

#### Events:
1. update: when update of the value, if the prop "resultType" is "original".

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

2. **useSidebar**: composable that handle all the process of open, close, and load data for CustomSidebar component. See [CustomSidebar](#17-customsidebar) for the usage.


2. **usePageMeta**: composable that sets the title of the page. Use the function setPageTitle('example title') to set the title.
