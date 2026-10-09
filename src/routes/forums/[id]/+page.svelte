<script lang="ts">
  import { parseAsync } from "valibot";
  import { newmessage, getmessages, deleteMessage } from "./clicks.remote";
  const { forumId, content } = newmessage.fields;
  let { params } = $props();
</script>



<a href="/"> start</a>
<div>
  {#each await getmessages(params.id) as message}
    {@const remove = deleteMessage.for (message.id)}
    <form {...remove}>
      <button> destroy!!!</button>
    </form>
    
      
    <li>
      {message.text}
    </li>
  {/each}
</div>

<!-- <form {...newmessage}>
  <input style="display=none" hidden {...forumId.as("text")} value={params.id} />
  <input {...content.as("text")} />
  <button>Submit ossian</button>
</form> -->

<form {...newmessage}>
    <input {...newmessage.fields.forumId.as("hidden",params.id)}/>
    <input {...newmessage.fields.content.as("text")}/>
    <button> bygg marcusity</button>
</form>

