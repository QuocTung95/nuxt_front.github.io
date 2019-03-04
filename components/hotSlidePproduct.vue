<template>
  <div class="block fitheight space-section-top ">
    <h3>HOT TREND</h3>
    <el-carousel indicator-position="outside" class="wrap-hot-product fitheight">
      <el-carousel-item  class="fitheight" v-for="item in 4" :key="item">
        <div class="product-in-face clearfix fitheight" >
          <div class="item fitheight" v-for="(i , index) in hotProducts" :key="index">

            <el-card shadow="hover" :body-style="{ padding: '0px' }" class="fitheight">
                                        <!-- Phần sale % -->
                <div v-if="i.sale_off" class="sale-off">{{i.sale_off}}</div>
                            <!-- phần ảnh -->
              <div class="image-product child-center">
                <nuxt-link :to="'./detailProduct/' + i.id">
                  <img style="width:80%;" class="fitheight" :src="`/images/detailProduct/${i.image}/${i.image}`" alt="">
                </nuxt-link>
                <p>
                  <ul class="icon-option-product">
                    <li><ion-icon @click="addToCart(i.id)" name="cart"></ion-icon></li>
                    <li><ion-icon name="heart-empty"></ion-icon></li>
                    <li>
                      <nuxt-link :to="'./detailProduct/' + i.id">
                        <ion-icon name="information-circle-outline"></ion-icon>
                      </nuxt-link>
                    </li>
                    
                  </ul>
                </p>
              </div>

                            <!-- Phần text, price -->
                  <div style="padding: 14px;">
                    <div>{{i.name}}</div>
                    <!-- <div>{{i.description.slice(0,50)}}...</div> -->
                      <div class="price">{{i.price}}VNĐ 
                        <span v-if="i.old_price">{{i.old_price}} VNĐ</span> 
                      </div>
                      <!-- <div>{{i.gender}}</div> -->
                      
                      <button v-if="isAdmin" @click="deleteHotProduct(i.id , index)" class="btn-blue main-color space-text">Delete</button>
                  </div>
            </el-card>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  computed : {
      hotProducts () {
        return this.$store.state.hotProducts
      },
      id_productInCart () {
        return this.$store.state.cart.id_productInCart
      },
      user_id (){
        return this.$store.state.user_id
    }
  },
  data() {
    return {
      isAdmin : false,
      	hotProduct : [
					{name : '162050_shot1.jpg'},
					{name : '162054_standard.jpg'},
					{name : '162058_standard.jpg'},
          {name : '162060_standard.jpg'},
          {name : '162054_standard.jpg'},
				]
    }
  },
  methods: {
        async addToCart(id, index){
      this.$store.dispatch('cart/addProductToCart', `${id}`)
      try {
        const response = await this.$axios.$put(`http://localhost:8080/cart/${this.user_id}`, {
          product_id : this.id_productInCart.map(i => Number(i))
        })
        if(response){
            this.$message({
            type: 'success',
            message: 'Success'
        });
        }
      } catch (error) {
        throw Error(error.message)
      }
    },
    async deleteHotProduct(id, index) {
      try {
        const response = await this.$axios.$delete(`http://localhost:8080/product/delete/${id}`)
        this.$store.dispatch('deleteHotProduct', index)

            this.$message({
            type: 'success',
            message: 'Success'
        });
      } catch (error) {
        throw Error(error.message)
      }
    },
  },
}
</script>

<style scoped>
.block {
  height: 100%;
  padding: 0px 15px;
}
.wrap-hot-product {
  height: 100%;
}
  .product-in-face{
  }
  .item {
    float: left;
    width: 20%;
    padding: 5px;
  }
  .product-in-face .item img {
    height: 150px;
  }
  .wrap-hot-product .el-carousel__container{
    height: 100%;
  }
  .wrap-hot-product .el-carousel__item {
    background-color: white!important;
  }

      .sale-off{
    width: 50px;
    height: 40px;
    position: absolute;
    background: url('/images/background/salse-tamplate.png');
    background-size: cover;
    padding: 0;
    line-height: 31px;
    font-weight: 500;
    z-index: 1;
    color: #fff;
    font-size: 13px;
    text-align: center;
    }

        .image-product:hover .sale-off {
      opacity: 0.85;
      background: linear-gradient(-45deg, #EC65B7 0%,#05E0D8 100%);
      transition: opacity 0.35s;
    }


    .image-product{
      position: relative;
      overflow: hidden;
    }
    .image-product p {
    text-align: right;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0 1.5em 7% 0;
    }
    
    .image-product p ul li {
      	opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(0,50px,0);
    transform: translate3d(0,50px,0);
    color: black ;
    font-size: 40px;
    }
    .image-product:hover {
          /* background: linear-gradient(-45deg, #EC65B7 0%,#05E0D8 100%); */
          transition: opacity 0.35s;
    }
    .image-product:hover img {
        opacity: 0.85;
        transition: opacity 0.35s;
    }
    .image-product p ul li {
      	opacity: 0;
      -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
      transition: opacity 0.35s, transform 0.35s;
      -webkit-transform: translate3d(0,50px,0);
      transform: translate3d(0,50px,0);
      list-style: none;

    }
  .image-product:hover p ul li {
	opacity: 1;
	-webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  cursor: pointer;

  }

.image-product:hover p ul li:nth-child(3) {
	-webkit-transition-delay: 0.05s;
	transition-delay: 0.05s;
}

.image-product:hover p ul li:nth-child(2) {
	-webkit-transition-delay: 0.1s;
	transition-delay: 0.1s;
}

.image-product:hover p ul li:first-child  {
	-webkit-transition-delay: 0.15s;
	transition-delay: 0.15s;
}
.image-product img {
  width: 100%;
}
.image-product a {
  text-align: center;
}
.price {
      font-size: 13px;
    color: #242424;
    font-weight: 500;
    padding: 10px 0 0;
    text-align: left;
}
.price span {
      font-size: 11px;
    color: #a2a2a2;
    text-decoration: line-through;
    text-align: left;
    font-weight: 300;
}
</style>
