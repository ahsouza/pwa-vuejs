<template>
<figure>
  <div>
    <span>Hover Me</span>
    <span>Button</span>
  </div>
</figure>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
figure {
  width: 200px;
  height: 60px;
  cursor: pointer;
  perspective: 500px;
  -webkit-perspective: 500px;
}

figure div {
  height: 100%;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transition: 0.25s;
  -webkit-transition: 0.25s;
}

figure:hover div {
  transform: rotateX(-90deg);
}
span {
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  border: 5px solid #fff;
  font-family: 'Source Sans Pro',sans-serif;
  line-height: 50px;
  font-size: 17pt;
  text-align: center;
  text-transform: uppercase;
}

span:nth-child(1) {
  color: #fff;
  transform: translate3d(0, 0, 30px);
  -webkit-transform: translate3d(0, 0, 30px);
}

span:nth-child(2) {
  color: #6a4f4f;
  background: #fff;
  transform: rotateX(90deg) translate3d(0, 0, 30px);
  -webkit-transform: rotateX(90deg) translate3d(0, 0, 30px);
}


</style>

<script>
export default {
  name: 'ButtonsV3',
  data: () => ({


  })

}
</script>
