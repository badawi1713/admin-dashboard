(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[18],{613:function(e,t,a){"use strict";a.r(t);var n=a(507),r=a.n(n),c=a(508),s=a(82),l=a(83),o=a(85),i=a(84),m=a(159),u=a(1),p=a.n(u),h=a(158),d=a(541),E=a(544),g=a.n(E),v=a(515),S=a(516),b=a(573),f=a(545),k=a(506),P=a(574),D=a(546),y=a(509),I=a.n(y),_=a(160),N=a.n(_),K=a(109);function x(){var e=Object(m.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: #20a8d8;\n"]);return x=function(){return e},e}var C=Object(K.css)(x());function O(e){var t=e.number,a=e.isp,n="/admin/isp/".concat(a.id);return p.a.createElement("tr",{key:a.id.toString()},p.a.createElement("th",{scope:"row"},t),p.a.createElement("td",null,a.isp_name),p.a.createElement("td",null,a.isp_email),p.a.createElement("td",null,a.isp_contact_number),p.a.createElement("td",null,a.isp_contact_person_name),p.a.createElement("td",null,a.sub_district),p.a.createElement("td",null,a.province),p.a.createElement("td",null,p.a.createElement(h.Link,{to:{pathname:n,isp_data:a}},"Detail")))}var w=localStorage.getItem("KEY_TOKEN"),T=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).headers=[{label:"Nama ISP",key:"isp_name"},{label:"Alamat ISP",key:"isp_address"},{label:"Email",key:"isp_email"},{label:"Contact Person",key:"isp_contact_person_name"},{label:"Nomor Telepon ISP",key:"isp_contact_number"},{label:"Provinsi",key:"province"},{label:"Kecamatan",key:"sub_district"},{label:"Kelurahan",key:"urbanVillage"},{label:"Kode Pos",key:"zip_code"}],n.componentDidMount=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getISPData();case 2:return e.next=4,n.getIspPaginationData();case 4:return e.next=6,n.getIspSearchData();case 6:case"end":return e.stop()}}),e)}))),n.handleSearchInput=function(e){e.preventDefault();var t=e.target.value;n.setState({searchQuery:t})},n.getIspSearchData=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isSearchLoading:!0}),e.prev=1,e.next=4,I.a.get("/api/v1/customer/search/isp?search=".concat(t),{headers:{token:w,SECRET:"secret"}});case 4:a=e.sent,n.setState({isSearchLoading:!1}),n.setState({ispSearchData:a.data.data}),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),n.setState({isLoading:!1}),401===e.t0.response.status&&(localStorage.removeItem("KEY_TOKEN"),n.props.history.push("/admin/unauthorized")),n.setState({isSearchLoading:!1});case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),n.getIspPaginationData=Object(c.a)(r.a.mark((function e(){var t,a,c,s,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:1,a=n.state.limit,c=localStorage.getItem("KEY_TOKEN"),e.prev=3,e.next=6,I.a.get("/api/v1/customer/ISPs?limit=".concat(a,"&page=").concat(t),{headers:{token:c,SECRET:"secret"}});case 6:s=e.sent,n.setState({ispPaginationData:s.data.data.rows}),n.setState({totalPages:s.data.data.count}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0),401===e.t0.response.status&&(localStorage.removeItem("KEY_TOKEN"),n.props.history.push("/admin/unauthorized"));case 15:case"end":return e.stop()}}),e,null,[[3,11]])}))),n.getISPData=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),t=localStorage.getItem("KEY_TOKEN"),e.prev=2,e.next=5,I.a.get("/api/v1/customer/ISP",{headers:{token:t,SECRET:"secret"}});case 5:a=e.sent,n.setState({isLoading:!1}),n.setState({ispData:a.data.data}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),401===e.t0.response.status&&(localStorage.removeItem("KEY_TOKEN"),n.props.history.push("/admin/unauthorized")),n.setState({isLoading:!1});case 15:case"end":return e.stop()}}),e,null,[[2,10]])}))),n.state={ispData:[],ispPaginationData:[],isLoading:!1,currentPage:1,totalPages:null,limit:50,searchQuery:"",ispSearchData:[],onSearch:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.ispData,n=t.ispPaginationData,r=t.ispSearchData,c=t.onSearch,s=this.state.ispData;return p.a.createElement("div",{className:"animated fadeIn"},this.state.isLoading?p.a.createElement("div",{className:"text-center"}," ",p.a.createElement(N.a,{css:C,size:20,color:"#20A8D8",loading:this.state.isLoading}),"Memuat Data ..."):p.a.createElement(v.a,null,p.a.createElement(S.a,null,p.a.createElement(b.a,null,p.a.createElement(f.a,null,p.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},p.a.createElement("b",null,"Data ISP Terdaftar"),this.state.ispData.length<1?null:p.a.createElement("div",{className:"card-header-actions"},p.a.createElement(d.CSVLink,{filename:"data_ISP_i-rural.csv",data:s,headers:this.headers},p.a.createElement(k.a,{className:"btn",color:"primary"},p.a.createElement("i",{className:"fa fa-download"}),"\xa0Unduh Data CSV"))))),p.a.createElement(P.a,null,p.a.createElement("div",{className:"mb-3"},p.a.createElement("input",{type:"text",name:"searchQuery",placeholder:"Pencarian",style:{width:"100%",padding:"5px"},onChange:function(t){var a=t.target.value.trim();if(/^\s/.test(a)||""===a)return e.setState({onSearch:!1}),!1;e.setState({onSearch:!0}),e.getIspSearchData(a.trim())}})),c?this.state.isSearchLoading?p.a.createElement("div",{className:"text-center"}," ",p.a.createElement(N.a,{css:C,size:20,color:"#20A8D8",loading:this.state.isLoading}),"Mencari Data ..."):r.length<1?p.a.createElement("p",null,"Data Tidak Ditemukan"):p.a.createElement(D.a,{striped:!0,responsive:!0,hover:!0},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",{scope:"col"},"No"),p.a.createElement("th",{scope:"col"},"Nama"),p.a.createElement("th",{scope:"col"},"Email"),p.a.createElement("th",{scope:"col"},"Nomor Telepon"),p.a.createElement("th",{scope:"col"},"Nomor KTP"),p.a.createElement("th",{scope:"col"},"Kelurahan"),p.a.createElement("th",{scope:"col"},"Provinsi"),p.a.createElement("th",{scope:"col"},"Aksi"))),p.a.createElement("tbody",null,r.map((function(e,t){return p.a.createElement(O,{number:t+1,key:t,isp:e})})))):this.state.ispData.length<1?p.a.createElement("p",null,"Data Kosong"):p.a.createElement("div",null,p.a.createElement(D.a,{striped:!0,responsive:!0,hover:!0},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",{scope:"col"},"No"),p.a.createElement("th",{scope:"col"},"Nama ISP"),p.a.createElement("th",{scope:"col"},"Email ISP"),p.a.createElement("th",{scope:"col"},"Nomor Telepon CP"),p.a.createElement("th",{scope:"col"},"Contact Person"),p.a.createElement("th",{scope:"col"},"Kecamatan"),p.a.createElement("th",{scope:"col"},"Provinsi"),p.a.createElement("th",{scope:"col"},"Aksi"))),p.a.createElement("tbody",null,n.map((function(e,t){return p.a.createElement(O,{number:t+1,key:t,isp:e})})))),p.a.createElement("div",null,p.a.createElement(g.a,{activePage:this.state.currentPage,totalItemsCount:a.length,itemsCountPerPage:this.state.limit,onChange:function(t){e.setState({currentPage:t}),e.getIspPaginationData(t)},itemClass:"page-item",linkClass:"page-link"}))))))))}}]),a}(u.Component);t.default=T}}]);
//# sourceMappingURL=18.7c78d900.chunk.js.map