<script lang="ts">
import { defineComponent, PropType, onMounted } from 'vue';
export default defineComponent({
    name: 'CustomPageMeta',
    props: {
        title: {
            type: String as PropType<string>,
        }
    },
    setup(props) {
        onMounted(() => {
            if(props.title) {
                document.title = props.title;
            }
        })
    }
});
</script>