import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{d as m}from"./define_docs_param-lmgaBKCF.js";import{d}from"./css-properties-CxNOGp8B.js";import{m as c,c as a}from"./index-CYx3wWH5.js";import"./index-yBjzXJbu.js";import"./class-name-k9bs-u1H.js";import"./globals.ctx-DOXvZQDb.js";import"./attribute-BU07dUZA.js";import"./findKey-D_Zca1Sl.js";import"./data-attribute-DHS3S8Jq.js";import"./data-attribute-CxYa4EAQ.js";import"./get-css-prop-values-MM-2vHZ3.js";import"./prefers-color-scheme-CjDR31Hv.js";import"./index-tvICUrOf.js";const E={title:"props/StyleProps",tags:["autodocs","new","version:1.0.0"],render:()=>o.jsx(o.Fragment,{})},e={tags:["!test","editor"],parameters:m({description:{story:"`style` prop with extended `CSSProperties` type to support custom properties. This is useful when composing component props"},source:{code:d`
            import type { StyleProps } from '@just-web/css'

            type MyCompProps = PropsWithChildren<StyleProps & OtherProps>

            const MyComponent = ({ style, children }: MyCompProps) => {
                return <div style={style}>{children}</div>
            }

            export default () => <MyComponent style={{ color: 'red' }}>Hello in red</MyComponent>
            `}})};var t,r,s;c(e,{availableImports:{"@just-web/css":a},code:(s=(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source)==null?void 0:s.code});var p,n,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!test', 'editor'],
  parameters: defineDocsParam({
    description: {
      story: '\`style\` prop with extended \`CSSProperties\` type to support custom properties. This is useful when composing component props'
    },
    source: {
      code: dedent\`
            import type { StyleProps } from '@just-web/css'

            type MyCompProps = PropsWithChildren<StyleProps & OtherProps>

            const MyComponent = ({ style, children }: MyCompProps) => {
                return <div style={style}>{children}</div>
            }

            export default () => <MyComponent style={{ color: 'red' }}>Hello in red</MyComponent>
            \`
    }
  })
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const b=["Example"];export{e as Example,b as __namedExportsOrder,E as default};
