<template>
    <div class="profile_part">
                                        <h3 style="font-size: 22px;text-transform: capitalize;font-weight: 600;">My
                                            Profile</h3>
                                        <div class="profile_box">
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <div class="bottom-tab-content-inner">
                                                        <div class="tsk-content-block section-bg-1 margin-top-30">

                                                            <form class="tsk-login-form">
                                                               
                                                                
                                                                <div class="form-group">

                                                                    <div class="row">
                                                                        <div class="col-md-4">

                                                                            <div class="fileinput fileinput-new "
                                                                                data-provides="fileinput">
                                                                                <div class="fileinput-new thumbnail"
                                                                                    style="width: 200px; height: 200px;"
                                                                                    data-trigger="fileinput">
                                                                                    <img style="width: 200px"
                                                                                        :src="'public/images/user/' + profile.image"
                                                                                        alt="...">
                                                                                        {{profile.image}}
                                                                                </div>
                                                                                <div class="fileinput-preview fileinput-exists thumbnail"
                                                                                    style="max-width: 200px; max-height: 200px">
                                                                                </div>

                                                                                <div class="img-input-div">
                                                                                    <span class="btn btn-info btn-file">
                                                                                        <!-- <span
                                                                                            class="fileinput-new bold uppercase"><i
                                                                                                class="fa fa-file-image-o"></i>
                                                                                            Select image</span> -->
                                                                                        <!-- <span
                                                                                            class="fileinput-exists bold uppercase"><i
                                                                                                class="fa fa-edit"></i>
                                                                                            Change</span> -->
                                                                                        <input type="file" name="image"
                                                                                            accept="image/*">
                                                                                    </span>
                                                                                    <!-- <button type="button"
                                                                                        class="btn btn-danger fileinput-exists bold uppercase"
                                                                                        data-dismiss="fileinput"><i
                                                                                            class="fa fa-trash"></i>
                                                                                        Remove</button> -->
                                                                                </div>

                                                                                <code>jpg Image Only. </code>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-7 offset-md-1">
                                                                            <!-- <p>Username: <strong>zamanovi23</strong>
                                                                            </p>
                                                                            <p>E-mail:
                                                                                <strong>inimra716@gamil.com</strong>
                                                                            </p>
                                                                            <p>Phone: <strong>01685-208379</strong> </p>
                                                                            <p>Country : <strong>Bangladesh</strong>
                                                                            </p>
                                                                            <p>Balance : <strong>0.00 USD</strong> </p> -->
                                                                            <table class="table">
                                                                               
                                                                                <tbody>
                                                                                  <tr>
                                                                                    
                                                                                    <td class="tb"><b>Username:</b></td>
                                                                                    <td>{{profile.name}}</td>
                                                                                   
                                                                                  </tr>
                                                                                  <tr>
                                                                                   
                                                                                    <td class="tb"><b>E-mail:</b></td>
                                                                                    <td>{{profile.email}}</td>
                                                                                    
                                                                                  </tr>
                                                                                  <tr>
                                                                                  
                                                                                    <td v-if="profile.phone" class="tb"><b>Phone:</b></td>
                                                                                    <td v-if="profile.phone">{{profile.phone}}</td>
                                                                                    
                                                                                  </tr>
                                                                                  <tr>
                                                                                  
                                                                                    <td class="tb"><b>Country :</b></td>
                                                                                    <td>Bangladesh</td>
                                                                                    
                                                                                  </tr>
                                                                                  <tr>
                                                                                  
                                                                                    <td class="tb"><b>Balance : </b></td>
                                                                                    <td>$100 USD</td>
                                                                                    
                                                                                  </tr>
                                                                                </tbody>
                                                                              </table>
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                                <div class="form-group">
                                                                    <label>Full Name</label>
                                                                    <input type="text" name="fname" :value="profile.name"
                                                                        class="form-control" placeholder="Full Name">
                                                                </div>

                                                                <div class="form-group">
                                                                    <label>Address</label>
                                                                    <input type="text" name="address" value=""
                                                                        class="form-control"
                                                                        placeholder="Enter Address">
                                                                </div>
                                                                <div class="form-group">
                                                                    <label>City </label>
                                                                    <input type="text" name="city" value=""
                                                                        class="form-control" placeholder="Enter City">
                                                                </div>
                                                                <div class="form-group">
                                                                    <label>Zip Code</label>
                                                                    <input type="text" name="zip_code" value=""
                                                                        class="form-control"
                                                                        placeholder="Enter Zip code">
                                                                </div>

                                                                <button type="submit"
                                                                    class="btn-tsk-outline btn-block">Update</button>
                                                            </form>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
</template>
<script>
export default {
    name:'MyProfileComponent',
    props:['profile']
    
}
</script>