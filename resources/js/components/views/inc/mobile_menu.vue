<template>

    

    <section id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn">&times;</a>
        <div class="mobile_menu_content">
            <ul>
                <li> <router-link class="closemenu"  to="/">Home</router-link></li>
              
                
                <li>
                    <a data-toggle="collapse" href="#collapseExample2" role="button">Services</a>
                    <div class="collapse" id="collapseExample2">
                        <div class="card card-body mobile_sub_menu">
                            <ul>
                                <li v-for="(service,index) in getservice" :key="index"><router-link  :to="{ path: '/service/'+service.id}"><i class="fas fa-circle"></i> {{service.name}}</router-link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li> <router-link class="closemenu" :to="{ name: 'teams' }">Our Team</router-link></li>
                <li><router-link class="closemenu" to="products">Products</router-link></li>
                <li><router-link class="closemenu" :to="{ name: 'career' }">Career</router-link></li>
                <li><router-link class="closemenu" :to="{ name: 'contact-us' }">Contact Us</router-link></li>
                <li><router-link class="closemenu" to="/login"><i class="fas fa-user"></i> Login</router-link></li>
                <li><router-link class="closemenu" to="/login"><i class="fas fa-sign-in-alt"></i> Sign Up</router-link></li>
            </ul>
        </div>
    </section>
</template>
<script>

export default {
    name:'MobileMenuComponent',

    mounted(){

        this.$store.dispatch("allProject");

        
               
    },
    computed:{
       
   
        getservice() {
      return this.$store.getters.getproject;
    },
    }

   



}
</script>