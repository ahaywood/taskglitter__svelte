<script>
  import AddTask from "$components/AddTask.svelte";
  import TaskItem from "$components/TaskItem.svelte";
  import { updatePath } from "$stores/GlobalStore";
  import {onMount} from "svelte";
  import CornerTriangle from "$components/CornerTriangle.svelte";
  import LogoutButton from "$components/LogOutButton.svelte";

  onMount(() => {
    updatePath("tasks");
  });
</script>

<CornerTriangle placement="left" link="/" />
<LogoutButton />

<div class="content">
  <h1>Awesome Tasks of Awesome Tasks</h1>
  <AddTask />
  <TaskItem name="Talk about being awesome" id={1} isCompleted={true} dateCompleted="February 4, 2022" />
  <TaskItem name="Write a blog post about being awesome" id={2} isCompleted={false} />
</div>

<style>
  h1 {
    font-size: 2rem;
    line-height: 1;
    font-weight: 800;
    color: var(--stormGray)
  }
</style>