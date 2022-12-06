// mouse.js
import axios from 'axios';
import { ref } from 'vue'

interface ResponseSidebar {[propName: string]: any;}

// by convention, composable function names start with "use"
export function useSidebar() {
    const isOpenSidebar = ref<boolean>(false);
    const activeRecordIndex = ref<number | null>(null);
    const isLoadingSidebar = ref<boolean>(false);

    const sidebarData = ref<ResponseSidebar | null>(null);

    const openDetails = async (routeShow: string, index: number) => {        
        isOpenSidebar.value = true;
        activeRecordIndex.value = index;
        isLoadingSidebar.value = true;        
        
        await axios.get(routeShow) 
            .then((res) => {
                if(res.status === 200) {
                    sidebarData.value = res.data.data
                }
            })
            .catch(e => {
                console.log(e)
            })
        
        isLoadingSidebar.value = false;
    }

    const openSidebar = () => {
        isOpenSidebar.value = true;
    }

    const closeSidebar = () => {
        sidebarData.value = null;
        isOpenSidebar.value = false;
        activeRecordIndex.value = null;
    }

	return {
        openDetails,
        openSidebar,
        closeSidebar,
        activeRecordIndex,
        isOpenSidebar,
        isLoadingSidebar,
        sidebarData
	}
}