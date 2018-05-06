<template>
  <el-row class="listo-anp">
    <el-col :span="19">
      <div class="anp-qefa-container">
        <div class="anp-supro">
          <div class="anp-avataro">
            <img v-bind:src="avataroLink" alt="">
            fdgdfgdgdgf
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="5" style="text-align: right;">
      <span>fdfsfsdfsdfsdf</span>
      <el-tooltip content="Доделать принадлежность к группе" placement="top-start" style="dislpay: inline-block;">
        <el-button class="anp-statuso-butono" size="mini" type="primary" icon="el-icon-check"></el-button>
        <el-button type="success">Success</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button type="info">Info</el-button>
      </el-tooltip>
    </el-col>
  </el-row>
</template>

<style>
  el-row {
    border-color: #47494e;
  }
  .anp-qefa-container {
    display: inline-block;
    position: relative;
    list-style-type: none;
  }
  .listo-anp {
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid rgba(0, 51, 204, 0.6);
  }
  .listo-anp:first-child {
    border-top: 0;
    padding-top: 0;
  }
  .anp-supro {
    display: block;
    position: relative;
    min-height: 50px;
    padding-left: 60px;
  }
  .anp-avataro {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 50%;
  }
  .anp-avataro > img {
    vertical-align: middle;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .anp-nomo {
    margin-bottom: 2px;
    padding-top: 5px;
    font-weight: bold;
  }
  .anp-priskribo {
    color: #555555;
  }
  .anp-statuso-butono {
    padding: 5px 10px;
    margin-left: 10px;
  }
</style>
