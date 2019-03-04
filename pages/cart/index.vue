  <template>

  <div id="cart">

    <div class="infor-cart" style="width: 70%">
          <ul class="clearfix child-center-row">
            <li><ion-icon name="paper-plane"></ion-icon> Miễn phí vận chuyển đơn trên 200.000 VNĐ</li>
            <li><ion-icon name="swap"></ion-icon>Đổi trả hàng trong 30 ngày</li>
            <li><ion-icon name="happy"></ion-icon>Shop có hơn 8000 sản phẩm</li>
        </ul>
    </div>


    <div v-if="allProductInCart == false">

        <div>
          <el-row>
            <el-col class="child-center" :span="16">
              <h3 class="empty-cart-title">GIỎ HÀNG CỦA BẠN TRỐNG</h3>
              <img src="../../static/images/logo/emptycart.png" alt="">
              <p>Giỏ hàng của bạn hiện tại đang trống, hãy tiếp tục tìm sản phẩm cho mình</p>
              <p style="margin-bottom:20px;">Hãy đăng nhập để mua hàng dễ hơn</p>
                  <nuxt-link to="./storeShose">
                <button style="height: 45px;" class="main-button">QUAY LẠI SHOP <i class="el-icon-back"></i></button>
                </nuxt-link>
            </el-col>
            <el-col class="get-help" :span="8">
              <h3>GIÚP ĐỠ</h3>
                <p>Khi nào nhận được hàng?</p>
                <p>Chính sách đổi trả</p>
                <p>Dùng voucher như nào?</p>
                <p style="height: 45px;">Tôi muốn trở thành cộng tác viên?</p>

                <h3 style="height: 45px;">CÁC PHƯƠNG THỨC THANH TOÁN</h3>
                <img src="../../static/images/logo/payment-method.png" alt="">

            </el-col>
          </el-row>
        </div>
    </div>

    <div v-else class="contain-cart clearfix">
      <div class="wrap-product-in-cart item-in-wrap">
        <el-row v-for="(i, index) in allProductInCart" :key="index" :gutter="20">
          <!-- Hình ảnh -->
              <el-col :span="8">
                <el-card class="card-img " :body-style="{ padding: '5px' }" shadow="hover">
                  <div>
                    <img :src="`/images/detailProduct/${i.image}/${i.image}`" alt="">
                  </div>
                </el-card>
            </el-col>


            <el-col class="info-cart" :span="12">
              <div class="name-product-in-cart">{{i.name}}</div>
              <span v-if="i.type_id==1">Thương hiệu : Converse</span>
              <span v-if="i.type_id==2">Thương hiệu : Nike</span>
              <span v-if="i.type_id==3">Thương hiệu : Biti's</span>
              <span v-if="i.type_id==4">Thương hiệu : Adias</span>
              <br><br>
              <span>Giới tính : {{i.gender}}</span>
              <br>
              <span v-if="i.sale"> Giảm giá : {{i.sale}}</span>
              <br>
              <el-input-number size="mini" v-model="numInCart" @change="handleChange" :min="1" :max="10"></el-input-number>
              <br>
            </el-col>

                        <!-- Các opnton sửa xóa -->
            <el-col class="cart-option" :span="4">
              <h4 class="price-cart">{{i.price}} VNĐ</h4>
              <!-- <div class="check-pay">
                <el-checkbox v-model="checked"></el-checkbox>
              </div> -->

              <div class="delete-in-cart">
                <i class="el-icon-error"></i>
              </div>

              <!-- <div class="move-to-wishlist">
                <ion-icon name="heart-empty"></ion-icon>
              </div> -->
              
            </el-col>
        </el-row>
        

      </div>

      <!-- Phần trả tiền -->
      <div class="total-pay item-in-wrap">
        <div class="summary">THÔNG TIN THANH TOÁN</div>
        <div class="check-pay-row">Tổng sản phẩm</div>
        <div class="check-pay-row">VAT</div>
        <div class="check-pay-row">Phí giao hàng</div>
        <div class="check-pay-row">Tổng</div>
        <div class="promo-code">Bạn có mã code?</div>
        <div class="clearfix child-center-row space-bettwen">
          <div class="pro-code"><el-input placeholder="Please input" v-model="promoCode"></el-input></div>
          <div class="apply"><button class="main-button">Áp dụng</button></div>
        </div>
        <div class="checkout">
          <div class="checkout-button"><button class="main-button">THANH TOÁN</button></div>
        </div>
        <div class="help-info">Thông tin</div>
        <div class="help-checkout">
          <ul class="clearfix">
            <li>Chính sách đổi trả?</li>
            <li>Khi nào tôi nhận được hàng</li>
            <li>Tôi muốn trở thành cộng tác viên</li>
          </ul>
        </div>

        <div style="padding-bottom: 30px;">
                <h3 style="height: 45px;">CÁC PHƯƠNG THỨC THANH TOÁN</h3>
                <img src="../../static/images/logo/payment-method.png" alt="">
        </div>



      </div>





  

    </div>

  </div>
  </template>

  <script>
  import axios from 'axios'
  export default {
      data() {
        return {
          checked : true,
          numInCart : 1,
          promoCode : ''
        }
      },
    computed : {
      user_id () {
        return this.$store.state.user_id
      },
      allProductInCart () {
        return this.$store.state.cart.allProductInCart.slice(1)
      },
      sub_image () {
        return this.allProductInCart.sub_image
      }
    },
    mounted (){
      console.log(this.allProductInCart == false);
    },

      methods: {
        
      },
  }
  </script>

  <style>
  #cart {
    padding: 70px 0px 0px 0px;
  }
      .infor-cart ul li {
    width: auto;
    white-space: normal;
    text-align: left;
    text-decoration: none;
    text-transform: uppercase;
    line-height: 14px;
    font-weight: 400;
    font-size: 12px;
    font-family: AdineuePRO,Helvetica,Arial,sans-serif;
    color: #363738;
    list-style: none;
    float: left;
    padding: 0px 1%;
}
.empty-cart-tittle {
      font-family: AdineuePRO,Helvetica,Verdana,sans-serif;
    font-style: normal;
    font-weight: 600;
}
.item-in-wrap {
  float: left;
}
.wrap-product-in-cart {
  width: 70%;
  padding: 0px 20px;
  margin-top: 35px;
}
.contain-cart {
  /* width: 70%; */
}
.total-pay {
  width: 26%;
  padding-left: 30px;
  border-left: 1px solid #cacaca;
  background-color: #e5e5e5;
  height: 100%;
    transform: translateY(-60px);
    margin-left: 4%;
}
.get-help p {
  text-decoration: underline;
  line-height: 23px;
}
.get-help p:hover {
  background-color: black;
  color: #fff;
  cursor: pointer;
}
.name-product-in-cart {
    font-size: 1.83333em;
    font-weight: normal;
    padding-bottom: 1.41667em;
}
.card-img {
  width: 70%;
  
}
.card-img img {
  width: 100%;
}
.info-cart {
  padding-left: 20px;

}
.info-cart span {
  width:  5em;
  color: #666;
}
.cart-option {
  position: relative;
}
.price-cart {
  position: absolute;
  left:  0;
}

.delete-in-cart {
    color: #e5e5e5;
    font-size: 20px;
    position: absolute;
    top: 0px;
    right: 0px;
}
.delete-in-cart:hover {
  color: #000;
  cursor: pointer;
}
.check-pay, .move-to-wishlist {
  position: absolute;
  right: 0;
  top: 30px;
}
.move-to-wishlist {
  top: 60px;
}
.check-pay-row {
  border-bottom: 1px solid #cacaca;
  padding: 1.66667em 0;
      font-family: "Arial",serif;
    text-transform: uppercase;
    font-size: .83333em;
}
.summary {
  font-weight: normal;
    font-size: 1.41667em;
    padding-bottom: 1.66667em;
    margin-bottom: 1.66667em;
    margin-top: 1.25em;
}
.pro-code {
  width: 48%;
}
.pro-code input {
  height: 28px;
}
.apply button {
  min-height: 33px;
  line-height: 30px;
  margin: 0;
  height: 33px;
  background-color: #9a0000;
}
.promo-code {
      padding: 1.66667em 0;
}
.checkout-button button {
  width: 96%;
}
.help-info{
  text-transform: uppercase;
    border-bottom: 3px solid #000;
    font-weight: normal;
    font-size: 1.41667em;
    padding-bottom: 1.66667em;
    margin-bottom: 1.66667em;
    margin-top: 1.25em;
}
.help-checkout ul{
  list-style: none;
}
.help-checkout ul li {
  color : #666;
  width: 100%;
  justify-content: flex-start;
    list-style: none;
  font-size: .81667em;
    font-family: "Arial",serif;
    vertical-align: baseline;
    padding: 4px;
}
.help-checkout ul li:hover {
      color: #000;
      cursor: pointer;
}


</style>
