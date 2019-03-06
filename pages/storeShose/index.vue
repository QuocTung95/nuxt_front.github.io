<template>
    <div class="contaner" id="space-top">
            <div id="toggleMenu-button" @click="toggleMenu()">
              <!-- <i @click="toggleMenu()" class="el-icon-menu"></i> -->
              <!-- <ion-icon @click="toggleMenu()" name="menu"></ion-icon> -->
              <img src="../../static/images/logo/menu-alt-128.png" alt="">
            </div>
      <div class="store">

        <leftSide id="leftSide" class="leftSide" />
              <!-- Phần thân show sản phẩm -->
        <div class="sideContaner contanerRight" id="rightside">

          <!-- sorting product by price -->
          <div class="flex-end" id="sortPrice">
            <div class="center-on-page">


              
              <div  class="select">
                <select name="slct" id="slct" @change="sortProducts($event)">
                  <option   v-for ="(direction , index ) in directions" :key="index"
                  
                  :label = "direction.name"
                  :value="direction.value">
                  </option>
                </select>
              </div> 
              
             </div>

          </div>
          <!-- frame product -->
          <div id="wrap-product-card" class="clearfix">
            <!-- menu toggle mobile -->

            
            <div v-for="(i, index) in products" :key="index" class="product-card" >
            <el-card :body-style="{ padding: '5px' }" shadow="hover">
              <!-- Phần sale % -->
                <div v-if="i.sale_off" class="sale-off"><p class="sale-off-text">{{i.sale_off}}</p></div>
            <!-- phần ảnh -->
              <div class="image-product">
                <nuxt-link :to="'./detailProduct/' + i.id">
                  <img :src="`/images/detailProduct/${i.image}/${i.image}`" alt="">
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
                      <div class="price">{{i.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}}VNĐ 
                        <span v-if="i.old_price">{{i.old_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}} VNĐ</span> 
                      </div>
                      <!-- <div>{{i.gender}}</div> -->
                      
                      <button v-if="isAdmin" @click="deleteProduct(i.id , index)" class="btn-blue main-color space-text">Delete</button>
                  </div>
            </el-card>
          </div>
          </div>

        </div>
      </div>

        

 
</div>

</template>
<script>
import host from "../../host/hostserver"
import axios from 'axios'

import leftSide from "../../components/leftSideMenu"



export default {
    components : {
        leftSide
    },
    async asyncData  ({store}){
      let  {data}  = await axios.get(`${host.name}/brands`)
      store.dispatch('brands', data.response)
    },
    
    async fetch ({ store }) {
    let  {data}  = await axios.get(`${host.name}/products`)
    store.dispatch('products', data.response)
  },
    computed: {

      products (){
        return this.$store.state.products
      },
      id_productInCart () {
        return this.$store.state.cart.id_productInCart
      },
      user_id (){
        return this.$store.state.user_id
    }

  },
    mounted(){
      this.handleScroll()
    },
    data() {
        return {
            ishidden : false,
            isfixed: false,
            isAdmin : false,
            value: '',
            directions : [
              {name : 'Giá tăng dần' , value : 'DESC'},
              {name : 'Giá giảm dần' , value : 'ASC'},

            ]
        }
    },
    methods: {
    async sortProducts(event) {
      try {
        const data = await this.$axios.$get(`${host.name}/sortproducts/${event.target.value}`)
        this.$store.dispatch('products', data.response)
      } catch (error) {
        throw Error(error.message)
      }
    },
    toggleMenu(){
    let leftSide = document.getElementById("leftSide");
    leftSide.classList.toggle("toggle-menu");
    let wrapProductCard = document.getElementById("wrap-product-card")
    wrapProductCard.classList.toggle("toggle-wrap-product-card")

    let toggleMenuButton = document.getElementById("toggleMenu-button")
    toggleMenuButton.classList.toggle("toggleMenu-button-move")

    },
      handleScroll (){
        let lastScrollTop = 0;
        // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
        window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
          let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
          if (st > lastScrollTop){
              // downscroll code
              this.ishidden = true;
          } else {
              // upscroll code

              this.ishidden = false;
          }
          lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        });
      },
    async deleteProduct(id, index) {
            try {
        const response = await this.$axios.$delete(`${host.name}/product/delete/${id}`)
        this.$store.dispatch('deleteProduct', index)
        this.$message({
            type: 'success',
            message: 'Success'
        });
      } catch (error) {
        throw Error(error.message)
      }
    },
    async addToCart(id, index){
      this.$store.dispatch('cart/addProductToCart', `${id}`)
      try {
        const response = await this.$axios.$put(`${host.name}/cart/${this.user_id}`, {
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

    }
}
</script>
<style>
.store{
  padding-top: 30px;
}
.store .isfixed {
  position: relative;
}
    .contaner{
      /* padding-top: 50px */
    }
    .product-card{
    float: left;
    width: 25%;
    padding: 5px 5px;
    position: relative;
    height: 440px;

    }
    .product-card:hover .add-to-cart {
      display: block;
    }

    .product-card img {
      width: 100%;
    }
    .leftSide{
      float: left;
      padding-top: 85px;
    }
    .add-to-cart-store{
    display: block;
    padding: 8px 3px;
    /* background: rgba(255,255,255,0.9); */
    transition: background 0.2s;
    color: #373d54;
    border: none;
    text-transform: uppercase;
    text-align: center;
    position: absolute;
    background-color: #ffecf0;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    display: none;
    }
    .add-to-cart:hover {
    background: #373d54;
    color: #fff;
    }
    .sale-off{
    width: 75px;
    height: 57px;
    position: absolute;
    background: url('../../static/images/background/sale-sticker.png');
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
      /* background: linear-gradient(-45deg, #EC65B7 0%,#05E0D8 100%); */
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
.hiddenSort {
  display: none!important;
}
#sortPrice {
  margin-bottom: 25px;
}
.el-card {
  height: 100%;
}
#toggleMenu-button {
  display: none;
}
.icon-option-product::after {
      content: "";
    display: block;
    clear: both;
}
.icon-option-product {
      display: flex;
    flex-direction: column;
}
.icon-option-product li {
    width: 30px;
    height: 30px;
    margin-top: 10px;
}
.icon-option-product li ion-icon:hover {
  color: #a07171
}
.icon-option-product li ion-icon {
  color: black;
}
.sale-off-text {
      height: 15px;
    position: absolute;
    top: 26%;
    left: 26%;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #2c3e50;
  background-image: none;
}
/* Custom Select */
.select {
  position: relative;
  display: block;
  width: 20em;
  height: 3em;
  line-height: 3;
  background: #2c3e50;
  overflow: hidden;
  border-radius: .25em;
}
select {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 0 0 .5em;
  color: #fff;
  cursor: pointer;
}
select::-ms-expand {
  display: none;
}
/* Arrow */
.select::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 1em;
  background: #34495e;
  pointer-events: none;
}
/* Transition */
.select:hover::after {
  color: #f39c12;
}
.select::after {
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
}
    @media (max-width: 992px) {
      .product-card{
      width: 50%;
      height: 450px;
    }
    }
    @media (max-width: 768px) {
      /* .product-card{
      width: 50%;
      /* height:421px; */
    /* } */ 
    .leftSide {
      position: fixed;
      top: 70px;
      left: -200px;
    }
    #toggleMenu-button {
      font-size: 14px;
      position: fixed;
      width: 30px;
      top: 70px;
      left: 5px;
      display: block;
      z-index: 3;
    }
    #toggleMenu-button img {
      width: 100%;
    }
    #toggleMenu-button.toggleMenu-button-move {
      left: 205px;
      animation-name: toggleMenu-button-move;
      animation-duration: 1s;
    }
    @keyframes toggleMenu-button-move {
      0%   {left: 5px;} 
      100% {left: 205px;} 
    }
    .toggle-menu {
      left: 0;
      animation-name: tonglemenu;
      animation-duration: 1s;
    }
    @keyframes tonglemenu {
      0%   {left: -200px;} 
      100% {left: 0px;} 
    }
    #rightside {
      padding-left:30px;
      overflow: hidden;
    }
    .toggle-wrap-product-card{
      animation-name: toggle-wrap-product-card;
      animation-duration: 1s;
      transform: translateX(200px)
    }
    @keyframes toggle-wrap-product-card {
      0%   {transform: translateX(0px)} 
      100% {transform: translateX(200px)} 
    }
    .store{
  padding-top: 0px;
}
    }
</style>