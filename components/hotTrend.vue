<template>
    <div id="wrap-hot-trend">
        <div class="hot-product space-top">
            
            <el-row>
                <el-col :span="12" class="best-seller">
                <img src="../static/images/bestSeller/3.4_HP_NSW_AM_Dia_DT.jpg" alt="">
                <h3>Nike Air Max Dia</h3>

                <button style="height: 45px;" class="main-button">Chi tiết <i style="transform: rotateY(180deg)!important;" class="el-icon-back"></i></button>
                </el-col>
                <el-col :span="12" class="best-seller">
                <img src="../static/images/bestSeller/D-Homepage-Best-Of-The-Best-ATSAT-Page-1-S19.jpg" alt="">
                <h3>WOMENS COLLECTION</h3>
                <button style="height: 45px;" class="main-button">VÀO SHOP <i style="transform: rotateY(180deg)!important;" class="el-icon-back"></i></button>
                </el-col>
            </el-row>

            <div style="text-align: center;" class="space-text">Khám phá những sản phẩm mới nhất</div>
            <div class="child-center">
                <nuxt-link to="./storeShose">
                <button style="height: 45px;" class="main-button">VÀO SHOP <i style="transform: rotateY(180deg)!important;" class="el-icon-back"></i></button>
                </nuxt-link>
            </div>
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
    height: 370px;
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
   .best-seller h3{
    position: absolute;
    top: 40%;
    left: 5%;
    color: white;
   }
</style>