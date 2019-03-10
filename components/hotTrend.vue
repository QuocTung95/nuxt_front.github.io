<template>
    <div id="wrap-hot-trend">
        <div class="hot-product space-top">
            
            <el-row>
                <el-col :span="12" class="best-seller">
                  <!-- <nuxt-link to="./detailProduct/26">
                    <img src="../static/images/bestSeller/3.4_HP_NSW_AM_Dia_DT.jpg" alt="">
                  </nuxt-link>
                
                <h3>Nike Air Max Dia</h3> -->

               <!-- <nuxt-link to="./detailProduct/26"><button style="height: 45px;" class="main-button">Chi tiết <i style="transform: rotateY(180deg)!important;" class="el-icon-back"></i></button></nuxt-link>  -->
                
                  <nuxt-link  to="./detailProduct/26">
                    <img  src="../static/images/bestSeller/D-Homepage-Best-Of-The-Best-LTP-Page-1-S19_1.jpg" alt="">
                  </nuxt-link>
                
                <h3>Nike Air Max Dia</h3>

               <nuxt-link to="./detailProduct/27"><button style="height: 45px;" class="main-button">Chi tiết <i style="transform: rotateY(180deg)!important;" class="el-icon-back"></i></button></nuxt-link> 
                
                
                </el-col>


                <el-col :span="12" class="best-seller">
                <img src="../static/images/bestSeller/D-Homepage-Best-Of-The-Best-ATSAT-Page-1-S19.jpg" alt="">
                <h3>WOMENS COLLECTION</h3>
                <button style="height: 45px;" class="main-button">VÀO SHOP <i style="transform: rotateY(180deg)!important;" class="el-icon-back"></i></button>

                    <!-- <el-card  shadow="hover" :body-style="{ padding: '5px' }"> -->
                        <video autoplay loop >
                        <source src="https://www.adidas.com/5280/campaigns/adicolor/adicolor-1080-video.mp4" type="video/mp4">
                        </video>
                    <!-- </el-card> -->
                </el-col>

          </el-row>

            <h3 class="space-text title-discover">KHÁM PHÁ NHỮNG SẢN PHẨM MỚI NHẤT</h3>
            <div class="child-center">
                <nuxt-link to="./storeShose">
                <button style="height: 45px;" class="main-button">VÀO SHOP <i style="transform: rotateY(180deg)!important;" class="el-icon-back"></i></button>
                </nuxt-link>
            </div>


            <el-row>
              <el-col class="last-best-seller" :span="24">

                  <nuxt-link to="./detailProduct/26">
                    <img src="../static/images/bestSeller/3.4_HP_NSW_AM_Dia_DT.jpg" alt="">
                  </nuxt-link>
                
                <div class="child-center">
                                  <h3>Nike Air Max Dia</h3>

               <nuxt-link style="text-align: center;" to="./detailProduct/26"><button style="height: 45px;" class="main-button">Chi tiết <i style="transform: rotateY(180deg)!important;" class="el-icon-back"></i></button></nuxt-link> 
                </div>

                
                
              </el-col>


            </el-row>


        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#wrap-hot-trend{
  margin-top:25px;
  /* background-color: #ebddec9e; */
  background-image: linear-gradient(to bottom right, #0D47A1, #FFCDD2);
}
.hot-product {
    padding: 13px 15px;
}
  
  

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  .best-seller{
    padding: 5px;
    position: relative;
    /* height: 400px; */
  }
  .best-seller video {
    width: 100%;
  }
  .best-seller:hover img {
        background-color: rgba(0,0,0,.5)
  }
   .best-seller img{
     width: 100%;
     height: 100%;
   }
   .best-seller button{
    position: absolute;
    top: 57%;
    left: 14%;
    background-color: #071a7199
   }
   .best-seller button:hover{
     background-color: rgba(3, 15, 65, 0.7);
   }
   .last-best-seller a {
     width: 100%;
   }
   .last-best-seller img{
     width: 100%;
   }
   .best-seller h3{
    position: absolute;
    top: 40%;
    left: 5%;
    color: white;
   }
   .title-discover {
     text-align: center;
     margin-top: 20px;
   }
</style>