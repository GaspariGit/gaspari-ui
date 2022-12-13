<template>	
    <div @mouseover="onMouseOver" @mouseleave="onMouseLeave" class="inline-flex flex-col relative cursor-pointer">
        <slot name="target"></slot>
        <Transition>
            <div 
                v-show="hovered" 
                :style="`background-color: ${backroundColor}; --background-color: ${backroundColor}; --max-width: ${maxWidth}px`" 
                class="absolute w-max z-50 p-3 shadow cursor-auto rounded-lg text-white text-sm" 
                :class="getClassPosition()"                
            >
                <slot name="content"></slot>
            </div>
        </Transition>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, Transition } from "vue";

type position = 'top' | 'left' | 'bottom' | 'right';

export default defineComponent({
    name: 'CustomTooltip',
    components: {
        Transition,
    },
    props: {
        position: {
            type: String as PropType<position>,
            default: 'top' 
        },
        backroundColor: {
            type: String as PropType<string>,
            default: '#000000'
        },
        maxWidth: {
            type: Number as PropType<number>,
            default: 250
        }
    },
    setup(props) {

        const hovered = ref<boolean>(false);
        const onMouseOver = () => { hovered.value = true }
        const onMouseLeave = () => { hovered.value = false }

        const getClassPosition = () => {
            let className = 'tooltip-';
            return className + props.position;
        }

        return {
            onMouseOver,
            getClassPosition,
            onMouseLeave,
            hovered
        }
    }
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.12s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(calc(-100% + 3px));
}

.tooltip-top {
    top: 0;
    left: 50%;    
    transform: translate(-50%, calc(-100% - 10px));
    max-width: var(--max-width);
}

.tooltip-bottom {
    bottom: 0;
    left: 50%;    
    transform: translate(-50%, calc(100% + 10px));
    max-width: var(--max-width);
}

.tooltip-left {
    top: 50%;
    left: 0;    
    transform: translate(calc(-100% - 10px), -50%);
    max-width: var(--max-width);
}

.tooltip-right {
    top: 50%;
    right: 0;    
    transform: translate(calc(100% + 10px), -50%);
    max-width: var(--max-width);
}

.tooltip-bottom::after,
.tooltip-right::after,
.tooltip-top::after,
.tooltip-left::after {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid var(--background-color); 
}

.tooltip-left::after {
    top: 50%;
    right: 0;
    transform: rotate(90deg) translate(-50%, calc(-100% - 3px));
}

.tooltip-bottom::after {
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
}

.tooltip-right::after {
    top: 50%;
    left: 0;
    transform: rotate(-90deg) translate(50%, calc(-100% - 3px));
}

.tooltip-top::after {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 75%) rotate(180deg);
}
</style>