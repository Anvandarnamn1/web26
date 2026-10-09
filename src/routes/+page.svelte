
<script lang="ts">
  import {getForum, createForum } from "./forum.remote";
</script>

{#each await getForum() as forum}
  <a href="/forums/{forum.id}">{forum.name}</a>
  <br>
  <br>
{/each}

<form {...createForum}>
  <input {...createForum.fields.name.as("text")}/>
  <button>Publish</button>
</form>

