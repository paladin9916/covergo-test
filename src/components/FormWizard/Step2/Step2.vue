<template>
  <div>
    <h2>Tell us about yourself</h2>
    <div class="row">
      <label for="name">Name</label>
      <input v-model="formData.name" id="name" name="name"/>
    </div>
    <div class="row">
      <label for="name">Age</label>
      <input v-model="formData.age" id="age" name="age"/>
    </div>
    <div class="row">
      <label for="name">Where do you live</label>
      <select v-model="formData.location">
        <option v-for="(location, idx) in locations" :key="idx" :value="location.value">{{ location.label }}</option>
      </select>
    </div>
    <div class="row">
      <div v-for="(plan, idx) in plans" :key="idx">
        <label>
          <input v-model="formData.plan" type="radio" name="package" :value="plan.value"/>
          {{ plan.label }}
        </label>
      </div>
    </div>
    <div class="row">
      <h3>Your premium is: {{ premiumPrice }}{{ currency }}</h3>
    </div>
  </div>
</template>

<script lang="ts" src="./Step2.ts"></script>
<style src="./Step2.css" scoped></style>