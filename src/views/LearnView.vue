<script setup lang="ts">
import { computed, ref } from 'vue'
const message = ref('Hello')
const input = ref('')
const peopleData = ref([
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 40 },
])

const person = ref<{ name: string; age: number | null }>({
  name: '',
  age: null,
})

// That's why for complex logic that includes reactive data, it is recommended to use a computed property.
const isPeopleExists = computed(() => {
  return peopleData.value.length > 0 ? true : false
})

const changeMessage = (input: string) => {
  message.value = input
}

const addPerson = ({ name, age }: { name: string; age: number }) => {
  peopleData.value.push({ name: name, age: age })
  person.value = { name: '', age: null }
}

const deletePerson = (index: number) => {
  peopleData.value.splice(index, 1)
}

const updatePerson = (index: number, name: string, age: number) => {
  peopleData.value[index].name = name
  peopleData.value[index].age = age
}
</script>

<template>
  <div class="container mx-auto">
    <div class="text-3xl">Learn</div>

    <div class="flex flex-col gap-2">
      <div class="flex flex-row gap-2">
        <input
          v-model="person.name"
          placeholder="name"
          class="border border-black p-4 rounded-2xl"
        />
        <input v-model="person.age" placeholder="age" class="border border-black p-4 rounded-2xl" />
        <button
          v-if="person.name && person.age"
          @click="addPerson({ name: person.name, age: person.age })"
          class="border border-black p-2 rounded-2xl"
        >
          Add person
        </button>
      </div>
      <p>
        {{
          isPeopleExists
            ? `There are ${peopleData.length} names`
            : 'No names on the list, please add some'
        }}
      </p>

      <div
        v-for="(person, index) in peopleData"
        :key="person.name"
        class="p-2 rounded-md border border-black shadow-2xl flex flex-row gap-2 justify-between items-center"
      >
        <p>{{ person.name }} - {{ person.age }}</p>
        <div class="flex gap-2">
          <button class="border border-black p-2 rounded-2xl">Update</button>
          <button class="border border-black p-2 rounded-2xl" @click="deletePerson(index)">
            Delete
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-row gap-2 justify-center items-center">
      <div>{{ message }}</div>
      <input
        v-model="input"
        placeholder="change message"
        class="border border-black p-4 rounded-2xl"
      />
      <button @click="changeMessage(input)" class="border border-black p-2 rounded-2xl">
        Change message
      </button>
    </div>
    <div></div>
  </div>
</template>
