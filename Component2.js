// in child component
export default {
    props: {
        parentmsg: String
    },

    template: `
  <h4>{{ parentmsg || 'No props passed yet' }}</h4>
  `
}