# Add new components

For some modules that may be referenced in multiple places, it is recommended to refine them into components. These components generally have the following characteristics:

- Only responsible for a relatively independent, stable function
- No separate routing configuration
- It may be purely static or it may contain its own state, but it does not involve vuex's data flow and is only controlled by parameters passed by the parent component (usually a page).

---

Let's take a simple static component as an example. Suppose your app often needs to display images. These images are fixed in width, have a gray background and a certain padding, and have text descriptions, like the following:
![Sample Image](https://gw.alipayobjects.com/zos/rmsportal/vcRltFiKfHBHFrUcsTtW.png)
You can do this with a component that has a default style and can receive the parameters passed by the parent component for display.

## Create new files in components

Create a new folder named after the component name under `src/components`. The first letter should be capitalized, and the naming should reflect the function of the component. In this example we call it `ImageWrapper`. Add js files and style files (if needed) under this folder, named `index.js` and `index.less`.

> By default, when you use a component, it looks for objects of exports in `index.js`. If your component is more complex, you can split it into multiple files, and unify exports in `index.js`, just like:

> ```js
> // MainComponent.js
> export default ({ ... }) => (...)
> 
> // SubComponent1.js
> export default ({ ... }) => (...)
> 
> // SubComponent2.js
> export default ({ ... }) => (...)
> 
> // index.js
> import MainComponent from './MainComponent'
> import SubComponent1 from './SubComponent1'
> import SubComponent2 from './SubComponent2'
> 
> MainComponent.SubComponent1 = SubComponent1
> MainComponent.SubComponent2 = SubComponent2
> export default MainComponent
> ```

Your code is probably like this:
```vue
<template>
	<div class="image-wrapper">
		<img class="img" :src="src" :alt="desc" />
        <!-- If the user who uses the component does not use a slot, the default is to output the desc property by div.desc. -->
		<slot name="desc">
			<div class="desc" v-if="desc">{{ desc }}</div>
		</slot>
	</div>
</template>

<script>
export default {
    name: 'ImageWrapper',
    props: {
        src: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            default: null
        }
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="less" scoped>
@import '@/components/index.less';

.image-wrapper {
  padding: 0 20px 8px;
  background: #f2f4f5;
  width: 400px;
  margin: 0 auto;
  text-align: center;
  
  .img {
      vertical-align: middle;
      max-width: calc(100% - 32px);
      margin: 2.4em 1em;
      box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
  }
  
  .desc {
      font-size: 1em;
      color: #000;
  }
}
</style>
```
At this point, the component is built.



## Usage

Where you need to use this component, pass in the parameters according to the API defined by the component. Don't forget to introduce it first.

```vue
<template>
	<!-- common usage -->
	<image-wrapper :src="imageSrc" :desc="context"></image-wrapper>
	
	<!-- use slot -->
	<image-wrapper :src="imageSrc">
		<span slot="desc">{{ context }}</span>
	</image-wrapper>
</template>

<script>
import ImageWrapper from '@/components/ImageWrapper';  // '@' represents the relative path of the source file

export default {
	// introduce the component
	components: {
        ImageWrapper
	},
    data () {
        return {
            context: 'Example Image',
        	imageSrc: 'https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png'
        }
    }
}
</script>
```
