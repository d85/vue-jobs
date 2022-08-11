<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'job-details', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading jobs...</p>
  </div>
</template>

<script>
export default {
  props: {
    id: Number
  },
  data() {
    return {
      jobs: []
    }
  },
  async mounted() {
    try {
      const res = await fetch('http://localhost:3000/jobs')
      this.jobs = await res.json()
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}

.job h2:hover {
  background: #ddd;
}

.job a {
  text-decoration: none;
}
</style>