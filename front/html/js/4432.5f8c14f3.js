"use strict";(self["webpackChunks021"]=self["webpackChunks021"]||[]).push([[4432],{4432:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search"},[t("Card",[t("Row",{attrs:{gutter:16}},[t("Form",{ref:"searchForm",attrs:{model:e.searchForm,inline:"","label-width":0}},[t("Form-item",{attrs:{label:""}},[t("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"角色名称",clearable:""},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),t("Form-item",{attrs:{label:""}},[t("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"角色描述",clearable:""},model:{value:e.searchForm.description,callback:function(t){e.$set(e.searchForm,"description",t)},expression:"searchForm.description"}})],1),t("Form-item",{attrs:{label:""}},[t("Button",{attrs:{type:"success",ghost:"",shape:"circle",size:"small",icon:"md-refresh"},on:{click:e.init}},[e._v("搜索")]),t("Divider",{attrs:{type:"vertical"}}),t("Button",{attrs:{type:"primary",ghost:"",shape:"circle",size:"small",icon:"md-add",disabled:!e.$route.meta.permTypes.includes("delete")},on:{click:e.addRoleFx}},[e._v("添加角色")])],1)],1)],1),t("Divider",{attrs:{dashed:""}}),t("Row",{attrs:{gutter:16}},[t("Table",{ref:"table",attrs:{loading:e.loading,border:"",stripe:"",size:"small",columns:e.columns,data:e.data,sortable:"custom"},on:{"on-sort-change":e.changeSort}})],1),t("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[t("Page",{attrs:{current:e.searchForm.pageNumber,total:e.total,"page-size":e.searchForm.pageSize,"page-size-opts":[15,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1),t("Modal",{attrs:{title:e.modalTitle,mask:!1,draggable:"","ok-text":"保存角色数据"},on:{"on-ok":e.submitRole,"on-cancel":e.cancelRole},model:{value:e.roleModalVisible,callback:function(t){e.roleModalVisible=t},expression:"roleModalVisible"}},[t("Form",{ref:"roleForm",attrs:{model:e.roleForm,"label-width":80,rules:e.roleFormValidate}},[t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:"角色名称",prop:"name"}},[t("Input",{attrs:{placeholder:"角色的名称,建议以ROLR_开头..."},model:{value:e.roleForm.name,callback:function(t){e.$set(e.roleForm,"name",t)},expression:"roleForm.name"}})],1),t("FormItem",{attrs:{label:"备注",prop:"description"}},[t("Input",{model:{value:e.roleForm.description,callback:function(t){e.$set(e.roleForm,"description",t)},expression:"roleForm.description"}})],1)],1)],1)],1)],1),t("Modal",{attrs:{title:e.modalTitle,mask:!1,draggable:"","ok-text":"保存菜单权限"},on:{"on-ok":e.submitPermEdit,"on-cancel":e.cancelPermEdit},model:{value:e.permModalVisible,callback:function(t){e.permModalVisible=t},expression:"permModalVisible"}},[t("Row",{attrs:{gutter:16}},[t("Col",{staticStyle:{"max-height":"500px","overflow-y":"scroll"},attrs:{span:"24"}},[t("Tree",{ref:"tree",attrs:{data:e.permData,"show-checkbox":"",render:e.renderContent,"check-strictly":!0}}),e.treeLoading?t("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)],1)],1)],1)},r=[],l=s(7184);const o=e=>(0,l.A_)("/role/getAllByPage",e),a=e=>(0,l.j0)("/role/save",e),n=e=>(0,l.j0)("/role/edit",e),d=e=>(0,l.A_)("/permission/getAllList",e),c=e=>(0,l.j0)("/role/delByIds",e),m=e=>(0,l.j0)("/role/setDefault",e),h=e=>(0,l.j0)("/role/editRolePerm",e);var p=s(7792);const u={name:"role",data(){return{loading:!0,treeLoading:!0,submitPermLoading:!1,modalType:0,roleModalVisible:!1,permModalVisible:!1,modalTitle:"",roleForm:{name:"",description:""},roleFormValidate:{name:[{required:!0,message:"角色名称不能为空",trigger:"blur"}]},submitLoading:!1,columns:[{type:"index",width:60,align:"center"},{title:"角色名称",key:"name",minWidth:150,sortable:!0},{title:"备注",key:"description",minWidth:260,sortable:!0},{title:"创建时间",key:"createTime",minWidth:170,sortable:!0,sortType:"desc"},{title:"创建人",key:"createBy",minWidth:170,sortable:!0,sortType:"desc"},{title:"更新时间",key:"updateTime",minWidth:170,sortable:!0},{title:"最后更新人",key:"updateBy",minWidth:170,sortable:!0},{title:"操作",key:"action",align:"center",fixed:"right",width:380,render:(e,t)=>{var s=this;return e("div",[e("Button",{props:{type:"success",size:"small",ghost:!0,shape:"circle",icon:"ios-brush",disabled:!(s.$route.meta.permTypes&&s.$route.meta.permTypes.includes("enable"))},style:{marginRight:"5px"},on:{click:()=>{this.editPerm(t.row)}}},"菜单权限"),e("Button",{props:{type:t.row.defaultRole?"primary":"info",size:"small",ghost:!0,shape:"circle",icon:"ios-browsers"},style:{marginRight:"5px"},on:{click:()=>{t.row.defaultRole?this.cancelDefault(t.row):this.setDefault(t.row)}}},t.row.defaultRole?"取消默认":"设为默认"),e("Button",{props:{type:"warning",size:"small",ghost:!0,shape:"circle",icon:"md-color-wand",disabled:!(s.$route.meta.permTypes&&s.$route.meta.permTypes.includes("edit"))},style:{marginRight:"5px"},on:{click:()=>{this.edit(t.row)}}},"编辑"),e("Button",{props:{type:"error",size:"small",ghost:!0,shape:"circle",icon:"ios-undo",disabled:!(s.$route.meta.permTypes&&s.$route.meta.permTypes.includes("delete"))},on:{click:()=>{this.remove(t.row)}}},"删除")])}}],data:[],total:0,permData:[],editRolePermId:"",searchForm:{pageNumber:1,pageSize:15,sort:"createTime",order:"desc"}}},methods:{init(){this.getRoleList(),this.getPermList()},renderContent(e,{root:t,node:s,data:i}){let r="";return r=0==i.level?"ios-navigate":1==i.level?"md-list-box":2==i.level?"md-list":3==i.level?"md-radio-button-on":"md-radio-button-off",e("span",{style:{display:"inline-block",cursor:"pointer"},on:{click:()=>{i.checked=!i.checked}}},[e("span",[e("Icon",{props:{type:r,size:"16"},style:{"margin-right":"8px","margin-bottom":"3px"}}),e("span",i.title)])])},changePage(e){this.searchForm.pageNumber=e,this.getRoleList()},changePageSize(e){this.searchForm.pageSize=e,this.getRoleList()},changeSort(e){this.searchForm.sort=e.key,this.searchForm.order=e.order,"normal"===e.order&&(this.searchForm.order=""),this.getRoleList()},getRoleList(){this.loading=!0,o(this.searchForm).then((e=>{this.loading=!1,e.success&&(this.data=e.result.records,this.total=e.result.total)}))},getPermList(){this.treeLoading=!0,d().then((e=>{e.success&&(this.deleteDisableNode(e.result),this.permData=e.result,this.treeLoading=!1),this.treeLoading=!1}))},deleteDisableNode(e){let t=this;e.forEach((function(e){-1==e.status&&(e.title="[已禁用] "+e.title,e.disabled=!0),e.children&&e.children.length>0&&t.deleteDisableNode(e.children)}))},cancelRole(){this.roleModalVisible=!1},submitRole(){this.$refs.roleForm.validate((e=>{e&&(0==this.modalType?(this.submitLoading=!0,a(this.roleForm).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.getRoleList(),this.roleModalVisible=!1)}))):(this.submitLoading=!0,delete this.roleForm.permissions,n(this.roleForm).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.getRoleList(),this.roleModalVisible=!1)}))))}))},addRoleFx(){this.modalType=0,this.modalTitle="添加角色",this.$refs.roleForm.resetFields(),delete this.roleForm.id,this.roleModalVisible=!0},edit(e){this.modalType=1,this.modalTitle="编辑角色",this.$refs.roleForm.resetFields();for(let i in e)null==e[i]&&(e[i]="");let t=JSON.stringify(e),s=JSON.parse(t);this.roleForm=s,this.roleModalVisible=!0},remove(e){this.$Modal.confirm({title:"确认删除",content:"您确认要删除角色 "+e.name+" ?",loading:!0,onOk:()=>{c({ids:e.id}).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("删除成功"),this.getRoleList())}))}})},setDefault(e){this.$Modal.confirm({title:"确认设置",content:"您确认要设置所选的 "+e.name+" 为注册用户默认角色?",loading:!0,onOk:()=>{let t={id:e.id,isDefault:!0};m(t).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.getRoleList())}))}})},cancelDefault(e){this.$Modal.confirm({title:"确认取消",content:"您确认要取消所选的 "+e.name+" 角色为默认?",loading:!0,onOk:()=>{let t={id:e.id,isDefault:!1};m(t).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.getRoleList())}))}})},editPerm(e){this.editRolePermId=e.id,this.modalTitle=e.name+" 菜单权限修改";let t=e.permissions;this.treeLoading?this.$Message.warning("菜单权限数据加载中，请稍后点击查看"):(this.checkPermTree(this.permData,t),this.permModalVisible=!0)},checkPermTree(e,t){let s=this;e.forEach((function(e){s.hasPerm(e,t)&&-1!=e.status?e.checked=!0:e.checked=!1,e.children&&e.children.length>0&&s.checkPermTree(e.children,t)}))},hasPerm(e,t){let s=!1;for(let i=0;i<t.length;i++)if(e.id==t[i].permissionId){s=!0;break}return!!s},selectedTreeAll(e,t){let s=this;e.forEach((function(e){e.checked=t,e.children&&e.children.length>0&&s.selectedTreeAll(e.children,t)}))},submitPermEdit(){this.submitPermLoading=!0;let e="",t=this.$refs.tree.getCheckedNodes();t.forEach((function(t){e+=t.id+","})),e=e.substring(0,e.length-1),h({roleId:this.editRolePermId,permIds:e}).then((e=>{this.submitPermLoading=!1,e.success&&(this.$Message.success("操作成功"),this.$store.commit("setAdded",!1),p.ZP.initRouter(this),this.getRoleList(),this.permModalVisible=!1)}))},cancelPermEdit(){this.permModalVisible=!1}},mounted(){this.init()}},g=u;var b=s(1001),f=(0,b.Z)(g,i,r,!1,null,null,null);const y=f.exports}}]);