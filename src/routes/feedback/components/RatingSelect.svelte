<script>
  import { createEventDispatcher } from 'svelte';
  let dispatch = createEventDispatcher();
  let selected = 10;
  let radioOptions = [
    { value: 1, id: 'num1' },
    { value: 2, id: 'num2' },
    { value: 3, id: 'num3' },
    { value: 4, id: 'num4' },
    { value: 5, id: 'num5' },
    { value: 6, id: 'num6' },
    { value: 7, id: 'num7' },
    { value: 8, id: 'num8' },
    { value: 9, id: 'num9' },
    { value: 10, id: 'num10' },
  ];
  const selectRating = (e) => {
    selected = e.target.defaultValue;
    dispatch('rating-select', selected);
  };
</script>

<ul class="rating">
  {#each radioOptions as n}
    <li>
      <input
        type="radio"
        id={n.id}
        name="rating"
        value={n.value}
        on:change={selectRating}
        checked={selected === n.value}
      />
      <label for={n.id}>{n.value}</label>
    </li>
  {/each}
</ul>

<style>
  .rating {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    align-items: center;
  }
  .rating li {
    background-color: #f4f4f4;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: 1px solid #eee;
    position: relative;
    padding: 10px;
    font-size: 19px;
    text-align: center;
    transition: 0.3s;
  }
  .rating li label {
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
  }
  .rating li:hover {
    background: #ff6a95;
    color: #fff;
  }

  [type='radio'] {
    opacity: 0;
  }
  [type='radio']:checked ~ label {
    background: #ff6a95;
    color: #fff;
  }
</style>
