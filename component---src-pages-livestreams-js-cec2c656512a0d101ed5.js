"use strict";(self.webpackChunkicn_australia=self.webpackChunkicn_australia||[]).push([[630],{2365:function(e,i,t){t.r(i),t.d(i,{default:function(){return d}});var o=t(6835),r=t(6462),n=t(6540),l=t(7528),a=t(4810),s=t(853);var c=e=>{let{filterType:i}=e;const t=(0,a.GR)("2951577257").allContentfulVideo.nodes.map((e=>{var i,t,o;return{id:e.id,title:e.title,description:null===(i=e.description)||void 0===i?void 0:i.description,thumbnail:null!==(t=e.thumbnail)&&void 0!==t&&t.file.url?"https:"+e.thumbnail.file.url:"/images/default-placeholder.webp",slug:null===(o=e.video)||void 0===o?void 0:o.url,completed:e.completed,startTime:e.startTime,link:e.link}})).filter((e=>!(!i.upcoming||e.completed)||!(!i.complete||!e.completed)));return(0,s.Y)(o.xA,{columns:[1,2,3],gap:4,sx:{marginY:4},children:t.map((e=>(0,s.FD)(o.az,{sx:{position:"relative",borderRadius:4,overflow:"hidden",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",transition:"transform 0.2s ease-in-out","&:hover":{transform:"translateY(-4px)"}},children:[(0,s.Y)(o._V,{src:e.thumbnail,alt:e.title,sx:{width:"100%",height:"auto",aspectRatio:"16/9",objectFit:"cover"}}),(0,s.FD)(o.az,{sx:{padding:3},children:[(0,s.Y)(o.DZ,{as:"h3",sx:{fontSize:2,marginY:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.title}),i.upcoming&&!e.completed?(0,s.FD)(s.FK,{children:[(0,s.FD)(o.EY,{sx:{fontSize:1,color:"gray.600",fontWeight:"bold"},children:["Starts at: ",e.startTime]}),e.link&&(0,s.Y)(o.N_,{href:e.link,target:"_blank",sx:{display:"block",marginTop:2,color:"blue",textDecoration:"underline"},children:"Watch Now"})]}):i.complete&&e.completed?(0,s.Y)(o.EY,{sx:{fontSize:1,color:"gray.600",overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"},children:e.description}):null]})]},e.id)))})};function d(){const e=(0,r.useLocation)(),i=new URLSearchParams(e.search),{0:t,1:a}=(0,n.useState)(i.has("upcoming")||!i.has("complete")&&!i.has("upcoming")),{0:d,1:p}=(0,n.useState)(i.has("complete")||!i.has("complete")&&!i.has("upcoming"));return(0,n.useEffect)((()=>{t||d||a(!0)}),[t,d]),(0,s.FD)(s.FK,{children:[(0,s.Y)(l.A,{title:"Livestreams",description:"Watch ICN Australia livestreams and videos"}),(0,s.FD)(o.az,{sx:{padding:4},children:[(0,s.Y)(o.DZ,{as:"h1",sx:{mb:4},children:"Livestreams"}),(0,s.FD)(o.so,{sx:{justifyContent:"center",gap:3,mb:4},children:[(0,s.Y)(o.$n,{onClick:()=>a(!t),sx:{backgroundColor:t?"primary":"#bbb",color:"white",padding:"14px 28px",borderRadius:"8px",cursor:"pointer",fontSize:"16px",fontWeight:"bold",transition:"background-color 0.3s ease-in-out","&:hover":{backgroundColor:t?"primary":"#999"}},children:"Upcoming"}),(0,s.Y)(o.$n,{onClick:()=>p(!d),sx:{backgroundColor:d?"primary":"#bbb",color:"white",padding:"14px 28px",borderRadius:"8px",cursor:"pointer",fontSize:"16px",fontWeight:"bold",transition:"background-color 0.3s ease-in-out","&:hover":{backgroundColor:d?"primary":"#999"}},children:"Completed"})]}),(0,s.Y)(c,{filterType:{upcoming:t,complete:d}})]})]})}}}]);
//# sourceMappingURL=component---src-pages-livestreams-js-cec2c656512a0d101ed5.js.map