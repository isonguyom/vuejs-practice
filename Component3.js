export default {
    emits: ['post'],
    created() {
      this.$emit('post', 'Hello, I am your child')
    },
    template: `
    <h2>Child component</h2>
    `
  }
  