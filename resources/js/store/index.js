export default {

    state:{
        sliders:[],
        aboutus:[],
        services:[],
        chooseus:[],
        clientSay:[],
        ourclients:[],
        contact:[],
        logo:[],
        pages:[],
        categores:[],
        projects:[],
        qty:[],
        cartData:[],
        profile:[],
    },

    getters:{
        getSlider(state){
            return state.sliders
        },
        getAboutUs(state){
            return state.aboutus
        },
        getService(state){
            return state.services
        },
        getchoose(state){
            return state.chooseus
        },
        getClientSay(state){
            return state.clientSay
        },
        getOurClient(state){
            return state.ourclients
        },
        getContact(state){
            return state.contact
        },
        getlogo(state){
            return state.logo
        },
        getpage(state){
            return state.pages
        },
        getproject(state){
            return state.categores
        },
        getprojectdetails(state){
            return state.projects
        },
        getqty(state){
            return state.qty
        },
        getCartData(state){
            return state.cartData
        },
        getProfile(state){
            return state.profile
        }
    },

    actions:{

        totalCartdata(context){
            axios.get('/total/quantity')
                .then((response)=>{
                    
                    context.commit('allQuentity',response.data)
                    
                    
                    
                })
        },

        
        addtocart(context,cart){
            return new Promise((resolve,reject)=>{
                axios.post('/add/to/cart',{
                    product_id:cart.producId,
                    package_id:cart.packageId,
                    extr_price:cart.extraPrice,
                })
                    .then((response)=>{
                        
                        console.log(response);
                        resolve(response);
                        
                        
                        
                    })
                    .catch((error)=>{
                        reject(error);
                    })
            })
           
        },
     

        allSlider(context){
            axios.get('/slider')
                .then((response)=>{
                    
                    context.commit('allsliders',response.data.data)
                    
                    
                    
                })
        },
        allAboutUs(context){
            axios.get('/about-us')
                .then((response)=>{
                    context.commit('aboutus',response.data.data)
                })
        },
        allService(context){
            axios.get('/service')
                .then((response)=>{
                    context.commit('allService',response.data.data)
                    
                })
        },
        allChoose(context){
            axios.get('/choose-us')
                .then((response)=>{
                    context.commit('allChoose',response.data.data)
                    
                })
        },
        allClientSay(context){
            axios.get('/clientsay')
                .then((response)=>{
                    context.commit('allClientSay',response.data.data)
                    
                })
        },
        allOurClient(context){
            axios.get('/partners')
                .then((response)=>{
                    
                    context.commit('allOurClient',response.data.data)
                    
                })
        },
        allContact(context){
            axios.get('/contact')
                .then((response)=>{
                    // console.log(response.data.data)
                    context.commit('allContact',response.data.data)
                    
                })
        },

        allLogo(context){
            axios.get('/logos')
                .then((response)=>{
                    context.commit('allLogo',response.data.data)
                    
                })
        },
        allPages(context){
            axios.get('/pages')
                .then((response)=>{
                    // console.log(response.data.data) 
                    context.commit('allPage',response.data.data)
                    
                })
        },
        allProject(context){
            axios.get('/categores')
                .then((response)=>{
                                
                    context.commit('allProject',response.data.data)
                    
                })
        },
        allProjectDetails(context){
            axios.get('/projects')
                .then((response)=>{
                                
                    context.commit('allProjectDetails',response.data.data)
                    
                })
        },
        allCartData(context){
            axios.get('/cart/data')
                .then((response)=>{
                                
                    context.commit('allCartData',response.data)
                    
                })
        },
        cartDataDelete(context,id){
            return new Promise((resolve,reject)=>{
            axios.get('/cart/data/delete/'+id)
                .then((response)=>{
                              
                    resolve(response);
                })
            })
        },
        customarProfile(context,id){
            return new Promise((resolve,reject)=>{
            axios.post('/auth/me?token='+localStorage.getItem('token') )
                .then((response)=>{
                    context.commit('allcustomarInfo',response.data)
                    
                    resolve(response);
                })
                
            })
        },
       
        
    },
    
    mutations:{


        allsliders(state,data){
            return state.sliders =data
        },
        aboutus(state,data){
            return state.aboutus =data
        },
        allService(state,data){
            return state.services =data
        },
        allChoose(state,data){
            return state.chooseus =data
        },
        allClientSay(state,data){
            return state.clientSay =data
        },
        allOurClient(state,data){
            return state.ourclients =data
        },
        allContact(state,data){
            return state.contact =data
        },
        allLogo(state,data){
            return state.logo =data
        },
        allPage(state,data){
            return state.pages =data
        },
        allProject(state,data){
            return state.categores =data
        },
        allProjectDetails(state,data){
            return state.projects =data
        },
        allQuentity(state,data){
            return state.qty =data
        },
        allCartData(state,data){
            return state.cartData =data
        },
        allcustomarInfo(state,data){
            return state.profile =data
        },


    }
}