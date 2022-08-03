<template>
  <div class="flex items-center gap-4">
    <label class="flex items-center gap-2 text-sm capitalize font-semibold text-primary">
      start date:
      <input type="date" class="input" @change="emitStartDate" />
    </label>
    <label class="flex items-center gap-2 text-sm capitalize font-semibold text-primary">
      end date:
      <input type="date" class="input" @change="emitEndDate" />
    </label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      start_date: null,
      end_date: null,
    };
  },
  methods: {
    emitStartDate(e) {
      const date = new Date(e.target.value);
      const timeUnix = Math.floor(date.getTime());
      this.$emit("setStartDate", timeUnix);
    },
    emitEndDate(e) {
      const date = new Date(e.target.value);
      const timeUnix = Math.floor(date.getTime());
      this.$emit("setEndDate", timeUnix);
    },
  },
};
</script>
