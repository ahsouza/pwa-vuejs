
<template>
  <div id="container">
    <button class="learn-more">
      <div class="circle">
        <span class="icon arrow"></span>
      </div>
      <p class="button-text">Learn More</p>
    </button>

    <div class="button-effect">

      <a class="effect effect-1" href="#" title="Learn More">Learn More</a>
    </div>
  </div>


</template>

<style scoped>

@import url("https://fonts.googleapis.com/css?family=Mukta:700");
* {
  box-sizing: border-box;
}
*::before, *::after {
  box-sizing: border-box;
}

.effect {
  text-align: center;
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: #fff;
  text-transform: capitalize;
  /* background-color: - add your own background-color */
  font-family: 'Roboto', sans-serif;
  /* put your font-family */
  font-size: 18px;
  padding: 20px 0px;
  width: 150px;
  border-radius: 6px;
  overflow: hidden;
}

.effect.effect-1 {
  transition: all 0.2s linear 0s;
}
.effect.effect-1:before {
  content: "\f178";
  font-family: FontAwesome;
  font-size: 15px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 0;
  opacity: 0;
  height: 100%;
  width: 40px;
  transition: all 0.2s linear 0s;
}
.effect.effect-1:hover {
  text-indent: -20px;
}
.effect.effect-1:hover:before {
  opacity: 1;
  text-indent: 0px;
}



button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  margin: 8em auto;
  font-size: inherit;
  font-family: inherit;
}
button.learn-more {
  width: 12rem;
  height: auto;
  text-transform: uppercase;
}
button.learn-more .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: #282936;
  border-radius: 1.625rem;
}
button.learn-more .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}
button.learn-more .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}
button.learn-more .circle .icon.arrow::before {
  position: absolute;
  content: '';
  top: -0.25rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
button.learn-more .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: #282936;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
}
button:hover .circle {
  width: 100%;
}
button:hover .circle .icon.arrow {
  background: #fff;
  -webkit-transform: translate(1rem, 0);
          transform: translate(1rem, 0);
}
button:hover .button-text {
  color: #fff;
}

@supports (display: grid) {
  body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.625rem;
    grid-template-areas: ". main main ." ". main main .";
  }

  #container {
    grid-area: main;
    align-self: center;
    justify-self: center;
  }
}


</style>

<script>
export default {
  name: 'ButtonsV2',
  data: () => ({


  })

}
</script>
