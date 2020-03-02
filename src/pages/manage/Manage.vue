<template>
  <div style="background-color:  #ddf5fb;">
    <header style="height: 80px;background: #0a0582">
      <div >
        <p style="text-align: center;padding-top: 30px;font-size: 32px;color: white">药品列表信息</p>
        <router-link to="/">
          <img src="./../../assets/images/home.png" style="position: absolute;top:32px;left: 1100px">
          <p style="color: white;font-size: 26px;text-align: right;position: absolute;top:38px;left: 1140px">返回首页</p>
        </router-link>
      </div>
    </header>

    <div style="margin-top:0px;height:56px;">
      <!--      <mt-search v-model="value"   @keyup.enter.native="search()" >-->
      <!--      </mt-search>-->
      <div class="container" style="margin-top: 40px;">
        <form action="" class="parent">
          <img src="./../../assets/images/scan.png"  style="position:absolute; left: 10px; top: 0px; height: 40px;width: 40px">
          <input type="text" v-model="MedicineName" class="search1" style="position:absolute; top: -5px; left: 70px;">
          <mt-button type="primary" @click="searchSubmit" class="search2" style="position:absolute; left: 750px; top: -5px;">搜索</mt-button>
        </form>
      </div>
    </div>
    <div id="app" class="changetable">
      <select @change="changeDevice()" v-model="tableName" style="background:#7ecef4;font-size: 20px;margin-right:20px; width :119px;height: 40px;position: absolute;left: 1140px;top: 118px">
        <option v-for="(table, index) in deviceList" :key="index" >{{table.tableName}}</option>
      </select>

    </div>
    <div style="float: left;background-color: #ddf5fb;">
      <div class="floor">
        <div class="floor1" style="padding-top: 50px;padding-left: 10px;line-height:54px;">第一层</div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="floor1" style="padding-top: 50px;padding-left: 10px;line-height:54px">第二层</div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="floor1" style="padding-top: 50px;padding-left: 10px;line-height:54px">第三层</div>
        <br>
        <br>
        <br>
        <br>
        <br>

        <div class="floor1" style="padding-top: 50px;padding-left: 10px;line-height:54px">第四层</div>
        <br>
        <br>
        <br>
        <br>
        <br>

        <div class="floor1" style="padding-top: 50px;padding-left: 10px;line-height:54px">第五层</div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="floor1" style="padding-top: 50px;padding-left: 10px;line-height:54px">第六层</div>
      </div>
      <div class="card">
        <div class="listItemList" >
          <div v-if="list11.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list11,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list11.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list11.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list11.Count}}
              </div>
              <div class="desc1" @click="addMedicine(11)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(11)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list12.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list12,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list12.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list12.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list12.Count}}
              </div>
              <div class="desc1" @click="addMedicine(12)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(12)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list13.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list13,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list13.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list13.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list13.Count}}
              </div>
              <div class="desc1" @click="addMedicine(13)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(13)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list14.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list14,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list14.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list14.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list14.Count}}
              </div>
              <div class="desc1" @click="addMedicine(14)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(14)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list21.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list21,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list21.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list21.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list21.Count}}
              </div>
              <div class="desc1" @click="addMedicine(21)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(21)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list22.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list22,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list22.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list22.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list22.Count}}
              </div>
              <div class="desc1" @click="addMedicine(22)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(22)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list23.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list23,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list23.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list23.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list23.Count}}
              </div>
              <div class="desc1" @click="addMedicine(23)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(23)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list24.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list24,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list24.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list24.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list24.Count}}
              </div>
              <div class="desc1" @click="addMedicine(24)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(24)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list31.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list31,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list31.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list31.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list31.Count}}
              </div>
              <div class="desc1" @click="addMedicine(31)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(31)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list32.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list32,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list32.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list32.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list32.Count}}
              </div>
              <div class="desc1" @click="addMedicine(32)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(32)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list33.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list33,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list33.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list33.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list33.Count}}
              </div>
              <div class="desc1" @click="addMedicine(33)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(33)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list34.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list34,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list34.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list34.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list34.Count}}
              </div>
              <div class="desc1" @click="addMedicine(34)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(34)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list41.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list41,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list41.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list41.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list41.Count}}
              </div>
              <div class="desc1" @click="addMedicine(41)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(41)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list42.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list42,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list42.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list42.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list42.Count}}
              </div>
              <div class="desc1" @click="addMedicine(42)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(42)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list43.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list43,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list43.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list43.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list43.Count}}
              </div>
              <div class="desc1" @click="addMedicine(43)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(43)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list44.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list44,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list44.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list44.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list44.Count}}
              </div>
              <div class="desc1" @click="addMedicine(44)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(44)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list51.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list51,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list51.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list51.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list51.Count}}
              </div>
              <div class="desc1" @click="addMedicine(51)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(51)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list52.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list52,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list52.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list52.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list52.Count}}
              </div>
              <div class="desc1" @click="addMedicine(52)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(52)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list53.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list53,

        }
                          }">
                <img v-bind:src= "list53.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list53.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list53.Count}}
              </div>
              <div class="desc1" @click="addMedicine(53)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(53)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list54.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list54,
        row:1,
        column:1
        }
                          }">
                <img v-bind:src= "list54.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list54.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list54.Count}}
              </div>
              <div class="desc1" @click="addMedicine(54)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(54)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list61.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list61,

        }
                          }">
                <img v-bind:src= "list61.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list61.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list61.Count}}
              </div>
              <div class="desc1" @click="addMedicine(61)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(61)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list62.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list62,

        }
                          }">
                <img v-bind:src= "list62.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list62.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list62.Count}}
              </div>
              <div class="desc1" @click="addMedicine(62)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(62)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list63.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list63,

        }
                          }">
                <img v-bind:src= "list63.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list63.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list63.Count}}
              </div>
              <div class="desc1" @click="addMedicine(63)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(63)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>
        <div class="listItemList" >
          <div v-if="list64.Id!=null">
            <div class="leftImgList">
              <router-link :to="{
        path: '/detail',
        query:{medicineInfo:list64,

        }
                          }">
                <img v-bind:src= "list64.Image">
              </router-link>
            </div>
            <div class="rightContentList">
              <!--        <div style=" color:black;font-size: large">药品名称</div>-->
              <!--        <div class="name" style=" color:black;font-size: medium;width: 130px">-->

              <!--          {{ item.name}}-->
              <!--        </div>-->
              <div class="desc">
                名称：{{list64.MedicineName}}
              </div>
              <div class="desc">
                数量:
                {{ list64.Count}}
              </div>
              <div class="desc1" @click="addMedicine(64)" ><i class="iconfont iconxiugai" style="font-size: 25px"></i></div>
            </div>
          </div>
          <div v-else>
            <p @click="addMedicine(64)" style="text-align: center;padding-top: 100px;font-size: 30px"><i class="iconfont icontianjiayiyao"></i><br>添加药品</p>
          </div>
        </div>

      </div>
    </div>
    <!--    <le-footer></le-footer>-->
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  import { Toast } from 'mint-ui';
  import { Search } from 'mint-ui';
  // import Footer from './pages/home/components/HomeFooter'

  export default {
    name: 'Manage',
    data () {

      return {
        title: this.$store.state.homeTitle,
        list:{},
        imei:'',
        medicineList: [],
        deviceList:[],
        name: '',
        MedicineName: '',
        mac: '',
        testData: '',
        list1: {
          image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577013039374&di=52f47099e988ad564cc46183a95b6af8&imgtype=0&src=http%3A%2F%2Fimg.yaopinnet.com%2Fimg500%2F201604%2F1964005109070416.jpg",
          name: '阿司匹林',
          intro: 13,
          show: '1',
          medicineId:'111111'
        },
        list2: {
          image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577610021&di=d3c578491ade5f27502eb09dc1dc8a13&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.yy960.com%2F2013%2F04%2F20130412095029.JPG",
          name: '感冒药',
          intro: 15
        },
        modal_loading: false,
        selectCurriculums: '',
        deviceName: [],
        devicceId:[],
        tableName:'',
        tableId:'',
        deviceInfo:'',
        IMEI:'',
        medicineInfo:'',
        medicineDetail:'',
        searchList:[],
        list11:{ },
        list12:{ },
        list13:{},
        list14:{},
        list21:{},
        list22:{},
        list23:{},
        list24:{},
        list31:{},
        list32:{},
        list33:{},
        list34:{},
        list41:{},
        list42:{},
        list43:{},
        list44:{},
        list51:{},
        list52:{},
        list53:{},
        list54:{},
        list61:{},
        list62:{},
        list63:{},
        list64:{},
      }
    },
    created(){
      this.$emit('footer', true);
      if (window.plus) {
        // 在这里调用5+ API
        this.imei = plus.device.imei
        console.log(this.imei)
      } else {// 兼容老版本的plusready事件
        document.addEventListener('plusready', function () {
          // 在这里调用5+ API
          // alert("设备身份码:" + plus.device.imei);
          this.imei = plus.device.imei
          console.log(this.imei)
        }, false);
      }
      this.tableName=localStorage.getItem('tableName');
      this.tableId=localStorage.getItem('tableId');
      var infos={
        IMEI: this.imei,
      };
      this.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/GetDeviceBuilding', infos).then(function (response) {
        if (response.data.Code >= 0) {
          this.deviceList=response.data.Data;
          if(this.tableId==null){
            this.tableId=this.deviceList[0].tableId;
          }
          // var that = this;
          // for (var i = 0; i < that.deviceList.length; i++)
          // that.deviceName = deviceList[i].tableName;
        }
      });
      var params = {
        IMEI: this.imei,
        tableId:this.tableId,
      };
      this.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/GetMedicineInfo', params).then(function (response) {
        if (response.data.Code >= 0) {

          this.medicineList = response.data.Data;
          var that=this;
          for (var i = 0; i < that.medicineList.length; i++) {
            if (that.medicineList[i].CabintId == 11) {
              that.list11 = that.medicineList[i];

            } else if (that.medicineList[i].CabintId == 12) {
              that.list12 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 13) {
              that.list13 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 14) {
              that.list14 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 21) {
              that.list21 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 22) {
              that.list22 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 23) {
              that.list23 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 24) {
              that.list24 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 31) {
              that.list31 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 32) {
              that.list32 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 33) {
              that.list33 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 34) {
              that.list34 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 41) {
              that.list41 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 42) {
              that.list42 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 43) {
              that.list43 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 44) {
              that.list44 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 51) {
              that.list51 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 52) {
              that.list52 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 53) {
              that.list53 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 54) {
              that.list54 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 61) {
              that.list61 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 62) {
              that.list62 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 63) {
              that.list63 = that.medicineList[i]
            } else if (that.medicineList[i].CabintId == 64) {
              that.list64 = that.medicineList[i]
            }
          }
        }
      })

      // this.fetchData();

    },
    beforeDestroy() {
      localStorage.setItem("tableName",this.tableName)
      localStorage.setItem("tableId",this.tableId)
    },

    methods: {
      getMedicineInfo(){
        var params = {
          IMEI: this.imei,
          tableId:this.tableId,
        };
        this.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/GetMedicineInfo', params).then(function (response) {
          console.log('返回结果'+response.data.Code)
          if (response.data.Code >= 0) {
            this.medicineList = response.data.Data;
            var that=this;
            that.list11.Id=null;
            that.list12.Id=null;
            that.list13.Id=null;
            that.list14.Id=null;
            that.list21.Id=null;
            that.list22.Id=null;
            that.list23.Id=null;
            that.list24.Id=null;
            that.list31.Id=null;
            that.list32.Id=null;
            that.list33.Id=null;
            that.list34.Id=null;
            that.list41.Id=null;
            that.list42.Id=null;
            that.list43.Id=null;
            that.list44.Id=null;
            that.list51.Id=null;
            that.list52.Id=null;
            that.list53.Id=null;
            that.list54.Id=null;
            that.list61.Id=null;
            that.list62.Id=null;
            that.list63.Id=null;
            that.list64.Id=null;

            for (var i = 0; i < that.medicineList.length; i++) {
              if (that.medicineList[i].CabintId == 11) {
                that.list11 = that.medicineList[i];
              } else if (that.medicineList[i].CabintId == 12) {
                that.list12 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 13) {
                that.list13 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 14) {
                that.list14 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 21) {
                that.list21 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 22) {
                that.list22 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 23) {
                that.list23 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 24) {
                that.list24 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 31) {
                that.list31 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 32) {
                that.list32 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 33) {
                that.list33 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 34) {
                that.list34 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 41) {
                that.list41 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 42) {
                that.list42 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 43) {
                that.list43 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 44) {
                that.list44 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 51) {
                that.list51 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 52) {
                that.list52 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 53) {
                that.list53 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 54) {
                that.list54 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 61) {
                that.list61 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 62) {
                that.list62 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 63) {
                that.list63 = that.medicineList[i]
              } else if (that.medicineList[i].CabintId == 64) {
                that.list64 = that.medicineList[i]
              }

            }

          }

        })
      },
      addMedicine(CabintId) {
        MessageBox.prompt('请扫码药品条码', {
          inputValue: '',
          confirmButtonText: '确认',
        }).then(({value, action}) => {
          var that = this;
          var params = {
            MedicineId: value,
            IMEI: that.imei,
          }
          that.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/DisplayMedicineInfo', params).then(function (response) {
            if (response.data.Code >= 0) {
              console.log('response'+JSON.stringify(response.data.Data))
              var medicineDetail=response.data.Data;
              var url=medicineDetail[0].Image

              // that.$toast({message: "添加成功", className: 'btn'});
              MessageBox.confirm('', {
                title: '药品信息',
                message: '<img style="width: 500px; height: 375px;" src="'+url+'" />' + '<br/>药品名称:'+medicineDetail[0].MedicineName+'<br/>药品价格：'+medicineDetail[0].MedicinePrice+'元'
              })  .then(action => {
                if (action == 'confirm') {
                  var info={
                    CabintId:CabintId,
                    tableId:that.tableId,
                    IMEI:this.imei,
                    MedicineName:medicineDetail[0].MedicineName,
                    MedicineId:medicineDetail[0].MedicineId,
                    MedicinePrice:medicineDetail[0].MedicinePrice,
                    Count:'0',
                    manuName:medicineDetail[0].manuName,
                    spec:medicineDetail[0].spec,
                    Image:medicineDetail[0].Image,
                  }

                  that.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/AddMedicineInfo', info).then(function (response) {
                    if(response.data.Code>=0){
                      that.$toast({message: "添加成功", className: 'btn'});
                      setTimeout(window.location.reload(),1000);
                    }
                  })
                };
              })
            } else {
              that.$toast({message: "添加失败，请重试", className: 'btn'});
            }
          })
        })
      },

      changeDevice(){
        var that=this;
        var params={
          IMEI:that.imei,
          tableName:that.tableName
        }

        that.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/GetDeviceTableId', params).then(function (response) {
          if (response.data.Code >= 0) {
            this.deviceInfo=response.data.Data;
            this.tableId=this.deviceInfo.tableId;
            localStorage.setItem("tableId",this.tableId)
            localStorage.setItem("tableName",this.tableName);
            this.getMedicineInfo();
          }
        })




      },

      backList() {
        // this.fetchData();
      },
      searchSubmit() {
        var that = this
        var info = {
          MedicineName: that.MedicineName,
          IMEI: this.imei,
          tableId:this.tableId,
        }
        that.$http.post('http://114.215.136.150:1847/api/EquipmentInfo/FindMedicineInfo', info).then(function (response) {
          if (response.data.Code >= 0) {
            console.log(response.data)
            that.searchList = response.data.Data;
            this.$router.push({path: '/search', query: {searchList: response.data.Data}});
          } else {
            that.$toast({message: "未找到此药品", className: 'btn'});
          }
        })
      },

      getSearch() {
        this.result = JSON.parse(localStorage.getItem("search"));
      },
      addSearch() {
        this.tourArr.push(this.value);
        localStorage.setItem("search", JSON.stringify(this.tourArr));
      },
      clear() {
        localStorage.removeItem("search");
        this.$toast({message: "已清除"});
      },


    },
  }
</script>

<style lang="stylus" scoped>
  .iconfont{
    font-size 40px

  }
  .find-page {
    background-color:  #ddf5fb;
    height 70%
    margin-bottom  70px

  }
  .changetable{
    background-color:  #ddf5fb;
    text-align right;
    height 1px

  }
  .floor{
    background-color:  #ddf5fb;
    width 48px;
    height 1850px
    font-size :16px;
    text-align center;
    word-wrap: break-word;
    letter-spacing: 20px;
    color white;
    position absolute;
    top:180px;
    left:3px


  }
  .floor1{
    background-image :url("./../../assets/images/floor.png");
    margin-left 10px

  }
  .card {
    background-color:  #ddf5fb;
    position absolute;
    top:180px
    left :3px
    margin-left:45px
    width 1240px
    margin-bottom 65px
    overflow hidden
    padding 10px 0px
    display flex
    flex-wrap: wrap
  }
  .listItemList {
    height: 300px;
    width 260px;
    padding-left 35px

  }
  .leftImgList {
    height: 100%;
    width: 20%;
    line-height: 100px;
  }
  .leftImgList img {
    margin-left: 10px;
    width 250px
    height: 160px;
    vertical-align: middle;
  }
  .rightContentList {
    position: relative;
    left 10px
    top 20px
    bottom 5px
    background:#87CEEB
    padding-right: 20px;
    text-align: left;
    line-height: 28px;

  }
  .name {
    font-size: 16px;
    color: #909090;
    display: block;
  }
  .desc1{
    padding-left 235px;

  }
  .desc {

    font-size: 14px;
    font-weight:bold
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    .btn {
      position: relative;
      top:50px;
    }
  }
  .container {
    width: 1000px;
    height: 50px;
    margin: 0px auto;
  }

  .parent {
    position relative;
    left -108px
  }

  .search1 {
    /*输入框高度设置为40px, border占据2px，总高度为42px*/
    width: 644px;
    height: 48px;
    border: 1px solid #ccc;
    font-size: 16px;
    outline: none;


  }

  .parent>input:first-of-type:focus {
    border: 1px solid #317ef3;
    padding-left: 10px;
  }

  .search2 {
    /*button按钮border并不占据外围大小，设置高度42px*/
    width: 110px;
    height: 48px;
    position: absolute;
    background: #317ef3;
    border: 1px solid #317ef3;
    color: #fff;
    font-size: 20px;
    outline: none;
    margin-top :1px;
    margin-left 10px
  }
  .back{
    width 10%
  }
  .footer
    display: flex
    justify-content: space-between
    position: fixed
    right: 0
    left: 0
    bottom: 0
    z-index: 99
    padding-top: .04rem
    border-top: 0.01rem solid #dddddd
    color: #666
    background: #fff

</style>
