<template>

  <button class="btn-1">Button 1</button>


</template>

<style scoped>
template {
  background: #2ecc71;
  font-size: 62.5%;
}

.container {
  padding: 2em;
}

/* GENERAL BUTTON STYLING */
button,
button::after {
  -webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
  -o-transition: all 0.3s;
	transition: all 0.3s;
}

button {
  background: none;
  border: 3px solid #fff;
  border-radius: 5px;
  color: #fff;
  display: block;
  font-size: 1.6em;
  font-weight: bold;
  margin: 1em auto;
  padding: 2em 6em;
  position: relative;
  text-transform: uppercase;
}

button::before,
button::after {
  background: #fff;
  content: '';
  position: absolute;
  z-index: -1;
}

button:hover {
  color: #2ecc71;
}

/* BUTTON 1 */
.btn-1::after {
  height: 0;
  left: 0;
  top: 0;
  width: 100%;
}

.btn-1:hover:after {
  height: 100%;
}

/* BUTTON 2 */
.btn-2::after {
  height: 100%;
  left: 0;
  top: 0;
  width: 0;
}

.btn-2:hover:after {
  width: 100%;
}

/* BUTTON 3 */
.btn-3::after {
  height: 0;
  left: 50%;
  top: 50%;
  width: 0;
}

.btn-3:hover:after {
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}

/* BUTTON 4 */
.btn-4::before {
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}

.btn-4::after {
  background: #2ecc71;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}

.btn-4:hover:after {
  height: 0;
  left: 50%;
  top: 50%;
  width: 0;
}

/* BUTTON 5 */
.btn-5 {
  overflow: hidden;
}

.btn-5::after {
  /*background-color: #f00;*/
  height: 100%;
  left: -35%;
  top: 0;
  transform: skew(50deg);
  transition-duration: 0.6s;
  transform-origin: top left;
  width: 0;
}

.btn-5:hover:after {
  height: 100%;
  width: 135%;
}

</style>

<script>
export default {
  name: 'ButtonsV1',
  data: () => ({


  })

}
</script>
