import postcss from 'https://deno.land/x/postcss/mod.js'
import custom_selector from 'https://esm.sh/postcss-custom-selectors?target=deno'

const css = await Deno.readTextFile("style-base.css")
// const result = await postcss([custom_selector]).process(css)
const result = await postcss([custom_selector()]).process(css)
await Deno.writeTextFile("style.css", result.content)
console.log("CSS updated")