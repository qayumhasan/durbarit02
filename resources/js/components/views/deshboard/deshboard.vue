<template>
<section id="user">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="user_photo">
                        <div class="user_img">
                            <img :src="'public/images/user/' + getProfile.image" alt="image">
                        </div>
                        <div class="user_name">
                            <h5>{{getProfile.name}}</h5>
                            <span>{{getProfile.email}}</span>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                        <a class="nav-link active" id="v-pills-deshboard-tab" data-toggle="pill" href="#v-pills-deshboard"
                            role="tab" aria-selected="true"><i class="fas fa-user"></i>
                            Deshboard</a>
                            
                        <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile"
                            role="tab" aria-selected="false"><i class="fas fa-bell"></i>
                            Profile</a>

                        <a class="nav-link" id="v-pills-favourite-tab" data-toggle="pill" href="#v-pills-favourite"
                            role="tab" aria-selected="false"><i
                                class="fas fa-heart"></i> Favourite</a>
                                
                        <a class="nav-link" id="v-pills-download-tab" data-toggle="pill" href="#v-pills-download"
                            role="tab" aria-selected="false"><i
                                class="fas fa-download"></i> Download</a>
                                
                        <a class="nav-link" id="v-pills-fund-tab" data-toggle="pill" href="#v-pills-fund" role="tab"
                             aria-selected="false"><i class="fas fa-money-check-alt"></i>
                            Add Fund</a>
                            
                        <a class="nav-link" id="v-pills-invoice-tab" data-toggle="pill" href="#v-pills-invoice"
                            role="tab"  aria-selected="false"><i
                                class="fas fa-receipt"></i> My Invoice</a>
                                
                        <a class="nav-link" id="v-pills-transaction-tab" data-toggle="pill" href="#v-pills-transaction"
                            role="tab" aria-selected="false"><i
                                class="fab fa-typo3"></i> Transaction</a>
                                
                        <a class="nav-link" id="v-pills-support-tab" data-toggle="pill" href="#v-pills-support"
                            role="tab" aria-selected="false"><i
                                class="fab fa-artstation"></i> Support</a>
                                
                        <a @click="userLogout" class="nav-link" id="v-pills-logout-tab" data-toggle="pill" href="#v-pills-logout"
                            role="tab" aria-selected="false"><i
                                class="fas fa-power-off"></i> Logout</a>

                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="section_right_header">
                        <h3>Account Information</h3>
                        <div class="section_content">

                            <div class="tab-content" id="v-pills-tabContent">
                                <div class="tab-pane fade show active" id="v-pills-deshboard" role="tabpanel">
                                    <div class="deshboard_part">
                                        <div class="row">
                                            <div class="col-sm-4 text-center">
                                                <div class="box1">
                                                    <i class="fas fa-shopping-basket"></i>
                                                    <h4
                                                        style="font-size: 20px; font-weight: 600;text-transform: capitalize;margin-bottom: 14px;">
                                                        Subscription</h4>
                                                    <p style="font-size: 16px;">05</p>

                                                </div>
                                            </div>
                                            <div class="col-sm-4 text-center">
                                                <div class="box2">
                                                    <i class="fas fa-download"></i>
                                                    <h4
                                                        style="font-size: 20px; font-weight: 600;text-transform: capitalize;margin-bottom: 14px;">
                                                        Purchased</h4>
                                                    <p style="font-size: 16px;">10</p>

                                                </div>
                                            </div>
                                            <div class="col-sm-4 text-center">
                                                <div class="box3">
                                                    <i class="fas fa-download"></i>
                                                    <h4
                                                        style="font-size: 20px; font-weight: 600;text-transform: capitalize;margin-bottom: 14px;">
                                                        Purchased</h4>
                                                    <p style="font-size: 16px;">18</p>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                    >
                                    <MyProfile :profile="getProfile"></MyProfile>
                                    


                                </div>

                                <div class="tab-pane fade" id="v-pills-favourite" role="tabpanel"
                                    >
                                    <div class="favourite_part">
                                        <h3 style="font-size: 22px;text-transform: capitalize;font-weight: 600;">My
                                            Favourite</h3>
                                        <div class="tran_box">
                                            <h4 style="font-size: 16px;text-transform: capitalize;margin-top: 40px;">You
                                                did not purchase any item from our Market yet!</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-download" role="tabpanel"
                                    >
                                    <div class="download_part">
                                        <h3 style="font-size: 22px;text-transform: capitalize;font-weight: 600;">My
                                            Download</h3>
                                        <div class="tran_box">
                                            <h4 style="font-size: 16px;text-transform: capitalize;margin-top: 40px;">You
                                                did not purchase any item from our Market yet!</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-fund" role="tabpanel"
                                   >
                                    <div class="fund_part">
                                        <div class="row">
                                            <div class="col-sm-4 text-left">
                                                <div class="balance">
                                                    <h4
                                                        style="font-size: 18px; font-weight: 600;text-transform: capitalize;margin-bottom: 14px;">
                                                        Your Balance</h4>
                                                    <p style="font-size: 14px;">You have <span
                                                            class="badge-primary">0.00 USD</span> in your account</p>
                                                    <div class="bala_link">
                                                        <a href="#">Add Fund</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 text-left">
                                                <div class="cart">
                                                    <h4
                                                        style="font-size: 18px; font-weight: 600;text-transform: capitalize;margin-bottom: 14px;">
                                                        Your Cart</h4>
                                                    <p style="font-size: 14px;">You have 1 Cart in your item</p>
                                                    <div class="cart_link">
                                                        <a href="#">View Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 text-left">
                                                <div class="coupon">
                                                    <h4
                                                        style="font-size: 18px; font-weight: 600;text-transform: capitalize;margin-bottom: 14px;">
                                                        Your Coupon</h4>
                                                    <p style="font-size: 14px;">Lorem ipsum dolor sit,</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="deposit">
                                                    <h3
                                                        style="font-size: 22px;text-transform: capitalize;font-weight: 600;">
                                                        Deposit</h3>
                                                    <div class="depo_form">
                                                        <form >

                                                            <div class="form-group">

                                                                <select id="inputState" class="form-control">
                                                                    <option selected>Select Deposite Method</option>
                                                                    <option>Card</option>
                                                                </select>
                                                            </div>

                                                            <div class="input-group">

                                                                <input type="text" class="form-control"
                                                                    placeholder="Amount">
                                                                <div class="input-group-prepend">
                                                                    <div class="input-group-text">USD</div>
                                                                </div>
                                                            </div>

                                                            <div class="form-group"
                                                                style="margin-bottom: 30px;margin-top: 30px;">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox"
                                                                        id="gridCheck" required="">
                                                                    <label class="form-check-label strong"
                                                                        for="gridCheck" style="color: red;">
                                                                        Lorem ipsum dolor, sit amet consectetur
                                                                        adipisicing.
                                                                    </label>
                                                                </div>
                                                            </div>

                                                            <button type="submit"
                                                                class="btn-tsk-outline btn-block">Deposit
                                                                Preview</button>


                                                        </form>




                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="tab-pane fade" id="v-pills-invoice" role="tabpanel"
                                   >
                                    <div class="invoice_part">
                                        <h3 style="font-size: 22px;text-transform: capitalize;font-weight: 600;">My
                                            Invoice</h3>
                                        <div class="tran_box">
                                            <h4 style="font-size: 16px;text-transform: capitalize;margin-top: 40px;">No
                                                Transaction Yet!</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-transaction" role="tabpanel"
                                    >
                                    <div class="tran_part">
                                        <h3 style="font-size: 22px;text-transform: capitalize;font-weight: 600;">
                                            Transaction</h3>
                                        <div class="tran_box">
                                            <h4 style="font-size: 16px;text-transform: capitalize;margin-top: 40px;">No
                                                Invoice Yet!</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-support" role="tabpanel"
                                    >
                                    <div class="support_part">
                                        <div>
                                            <h3 class="float-left" style="font-size: 16px;text-transform: capitalize;">
                                                Support Tickets</h3>
                                            <a href="#" target="_blank" class="btn-durbar float-right">Open Ticket</a>
                                        </div>

                                        <div class="tsk-content-block section-bg-1 margin-top-30 text-center">
                                            <h4 style="display: inline-block; margin-top: 40px;margin-top: 55px;
                                        font-size: 20px;
                                        font-weight: 600;">No Support Ticket Yet!</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>    
</template>
<script>
import MyProfile from './myprofile'
export default {
    name:"DeshboardComponent",
    mounted(){
        if(localStorage.getItem('token') == null){
            this.$router.push('/login');
        }
         return this.$store.dispatch("customarProfile");


    },
    methods:{
        userLogout(){
             window.axios.defaults.headers.common['Authorization'] ='Bearer ' +localStorage.getItem('token'); 
            localStorage.removeItem("token");
            this.$router.push('/login');
            this.$eventBus.$emit('checkuser', 'no')

            //   axios.get('/logout')
            //     .then((response)=>{
                    
            //         console.log(response)  
            //         this.$router.push('/login');
            //     })
             
        }
    },
    components:{
        MyProfile
    },
    computed:{
        getProfile(){
            return this.$store.getters.getProfile;
        }
    }

}
</script>