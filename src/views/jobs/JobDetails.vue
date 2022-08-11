<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  data() {
    return {
      job: null
    }
  },
  async mounted() {
    try {
      const res = await fetch('http://localhost:3000/jobs/' + this.id)
      this.job = await res.json()
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
</style>