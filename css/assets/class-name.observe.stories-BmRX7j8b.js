import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{u as n,e as i}from"./index-Ba_wKnRg.js";import{r as l}from"./index-tvICUrOf.js";import{o as u}from"./class-name-k9bs-u1H.js";import{L as h}from"./log-panel-CxuVPIAx.js";import{T as m}from"./toggle-attribute-button-DukOkvN5.js";import"./index-yBjzXJbu.js";import"./globals.ctx-DOXvZQDb.js";import"./attribute-BU07dUZA.js";import"./findKey-D_Zca1Sl.js";const R={title:"theme/observeThemeByClassName",tags:["autodocs","new","version:1.0.0"]},o={render:()=>{const[e,t]=l.useState([]);return l.useEffect(()=>{const a=u({themes:{light:"light",dark:"dark"},handler:r=>t(c=>[...c,`theme: ${r===void 0?"(undefined)":r}`])});return()=>a.disconnect()},[]),s.jsxs("div",{className:"font-sans",children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsx(m,{attribute:"class",values:["light","dark"]})}),s.jsx(h,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e,step:t})=>{const a=e.getByRole("button",{name:"Toggle class"});await t("undefined -> light",async()=>{await n.click(a),await i(e.getByText("theme: light")).toBeInTheDocument()}),await t("light -> dark",async()=>{await n.click(a),await i(e.getByText("theme: dark")).toBeInTheDocument()}),await t("dark -> undefined",async()=>{await n.click(a),await i(e.getByText("theme: (undefined)")).toBeInTheDocument()})}},g={render:()=>{const[e,t]=l.useState([]);return l.useEffect(()=>{const a=u({themes:{light:"light-theme",dark:"dark-theme"},handler:r=>t(c=>[...c,`theme: ${r===void 0?"(undefined)":r}`])});return()=>a.disconnect()},[]),s.jsxs("div",{className:"font-sans",children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsx(m,{attribute:"class",values:["light-theme","dark-theme"]})}),s.jsx(h,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e,step:t})=>{const a=e.getByRole("button",{name:"Toggle class"});await t("undefined -> light",async()=>{await n.click(a),await i(e.getByText("theme: light")).toBeInTheDocument()}),await t("light -> dark",async()=>{await n.click(a),await i(e.getByText("theme: dark")).toBeInTheDocument()}),await t("dark -> undefined",async()=>{await n.click(a),await i(e.getByText("theme: (undefined)")).toBeInTheDocument()})}},d={render:()=>{const[e,t]=l.useState([]);return l.useEffect(()=>{const a=u({themes:{light:"light",dark:"dark"},handler:r=>t(c=>[...c,`theme: ${r}`]),defaultTheme:"light"});return()=>a.disconnect()},[]),s.jsxs("div",{className:"font-sans",children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsx(m,{attribute:"class",values:["light","dark"]})}),s.jsx(h,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e,step:t})=>{const a=e.getByRole("button",{name:"Toggle class"});await t("null -> light",async()=>{await n.click(a),await i(e.getByText("theme: light")).toBeInTheDocument()}),await t("light -> dark",async()=>{await n.click(a),await i(e.getByText("theme: dark")).toBeInTheDocument()}),await t("dark -> light (default)",async()=>{await n.click(a),await i(e.getAllByText("theme: light").length).toBe(2)})}};var v,p,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeThemeByClassName({
        themes: {
          light: 'light',
          dark: 'dark'
        },
        handler: value => setLog(prev => [...prev, \`theme: \${value === undefined ? '(undefined)' : value}\`])
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleAttributeButton attribute="class" values={['light', 'dark']} />
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle class'
    });
    await step('undefined -> light', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: light')).toBeInTheDocument();
    });
    await step('light -> dark', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: dark')).toBeInTheDocument();
    });
    await step('dark -> undefined', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: (undefined)')).toBeInTheDocument();
    });
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var w,b,y;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeThemeByClassName({
        themes: {
          light: 'light-theme',
          dark: 'dark-theme'
        },
        handler: value => setLog(prev => [...prev, \`theme: \${value === undefined ? '(undefined)' : value}\`])
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleAttributeButton attribute="class" values={['light-theme', 'dark-theme']} />
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle class'
    });
    await step('undefined -> light', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: light')).toBeInTheDocument();
    });
    await step('light -> dark', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: dark')).toBeInTheDocument();
    });
    await step('dark -> undefined', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: (undefined)')).toBeInTheDocument();
    });
  }
}`,...(y=(b=g.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,k,T;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeThemeByClassName({
        themes: {
          light: 'light',
          dark: 'dark'
        },
        handler: value => setLog(prev => [...prev, \`theme: \${value}\`]),
        defaultTheme: 'light'
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleAttributeButton attribute="class" values={['light', 'dark']} />
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle class'
    });
    await step('null -> light', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: light')).toBeInTheDocument();
    });
    await step('light -> dark', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: dark')).toBeInTheDocument();
    });
    await step('dark -> light (default)', async () => {
      await userEvent.click(btn);
      await expect(canvas.getAllByText('theme: light').length).toBe(2);
    });
  }
}`,...(T=(k=d.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const $=["BasicUsage","WithDifferentAttributeValues","WithDefaultTheme"];export{o as BasicUsage,d as WithDefaultTheme,g as WithDifferentAttributeValues,$ as __namedExportsOrder,R as default};
