<script>
  import { login } from "./remote";
</script>

<form {...login}>
    login.fields.username.as("text")
    login.fields.password.as("password")

  <!-- TODO: stoppa på korrekta input-fält, ett för username och ett för password -->
  <button>login</button>
</form>