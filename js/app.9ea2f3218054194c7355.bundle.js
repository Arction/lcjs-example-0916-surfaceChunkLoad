(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const o=a(377),l=a(613),{lightningChart:n,LUT:r,PalettedFill:s,emptyLine:i,LegendBoxBuilders:d,ColorShadingStyles:h,regularColorSteps:m,Themes:u}=o,{createWaterDropDataGenerator:c}=l,w=1e3,p=n({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).Chart3D({theme:u[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}),g=p.getTheme(),S=p.addSurfaceGridSeries({columns:2e3,rows:2e3}).setColorShadingStyle(new h.Phong).setFillStyle(new s({lookUpProperty:"y",lut:new r({interpolate:!1,steps:m(0,75,g.examples.coldHotColorPalette)})})).setWireframeStyle(i);p.addLegendBox(d.HorizontalLegendBox).add(p).setAutoDispose({type:"max-width",maxWidth:.8}),(async()=>{const e=[];for(let t=0;t<2e3;t+=w)for(let a=0;a<2e3;a+=w)e.push({column:t,row:a});p.setTitle(`Loading data in chunks ... (0 / ${e.length})`);for(let t=0;t<e.length;t+=1){const a=e[t],o=(e,t)=>e+Math.random()*(t-e),l=Math.round(o(1,5)),n=new Array(l).fill(0).map((e=>({rowNormalized:o(0,1),columnNormalized:o(0,1),amplitude:o(5,60)}))),r=await c().setColumns(w).setRows(w).setWaterDrops(n).generate();S.invalidateHeightMap({iColumn:a.column,iRow:a.row,values:r}),p.setTitle(`Loading data in chunks ... (${t+1} / ${e.length})`),await new Promise((e=>setTimeout(e,2e3)))}p.setTitle(`Surface Grid 2000x2000 (total ${4..toFixed(1)} million data points)`)})()}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);