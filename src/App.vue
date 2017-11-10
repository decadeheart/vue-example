<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/home">
            <i class="glyphicon glyphicon-check"></i>
            丁丁
          </a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav" >
            <li><router-link to="/home">首页</router-link></li>
            <li><router-link to="/vedios">视频</router-link></li>
            <li><router-link to="/books">书籍</router-link></li>
          </ul>
          <form class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">搜索</button>
          </form>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-12">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="col-sm-3">
          <ul>
            <li class="li-head">产品</li>
            <li class="li-item"> <router-link to="/books">视频</router-link></li>
            <li class="li-item"><router-link to="/vedios">书籍</router-link></li>
          </ul>
        </div>
        <div class="col-sm-3">
          <ul>
            <li class="li-head">关于</li>
            <li class="li-item"> <router-link to="/about">了解我们</router-link></li>
            <li class="li-item"><router-link to="/about">加入我们</router-link></li>
          </ul>
        </div>
        <div class="col-sm-3">
          <ul>
            <li class="li-head">服务支持</li>
            <li class="li-item"> <a href="www.decadexun.cn">技术支持</a></li>
            <li class="li-item"><router-link to="/books">售后服务</router-link></li>
          </ul>
        </div>
        <div class="col-sm-3">
          <div class="head">100-800-200</div>
          <div class="box"> 联系客服</div>
          <div class="time">周一至周日 9:00 - 22:00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.footer{
  border-top:#e7e7e7 1px solid;
  background: #f8f8f8;
  padding: 30px 0;
}
li{
  list-style: none;
}
.li-head{
  font-size: 18px;
  margin-bottom: 10px;
}
.li-item{
  margin-top:10px;
}
.box{
  width: 100%;
  height: 30px;
  background: #337ab7;
  margin: 10px 0;
  text-align: center;
  line-height: 30px;
  color:#fff;
}
.head{
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.time{
  font-size: 14px;
  text-align: center;
}
</style>
