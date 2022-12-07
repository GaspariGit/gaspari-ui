export function usePageMeta() {    
    const setPageTitle = (title : string) => {
        document.title = title; 
    }

	return {
        setPageTitle
	}
}