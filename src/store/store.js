import Vue from "vue"
import Vuex from "vuex"
import persistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    persistedState()
  ],
  state: {
    stages: [
      {
        id: 1, 
        name: "1st Stage",
        text: "This is a 1st tab",
        sequence: 1
      },
      {
        id: 2, 
        name: "2nd Stage",
        text: "This is a 2nd tab",
        sequence: 2
      },
      {
        id: 3, 
        name: "3rd Stage",
        text: "This is a 3rd tab",
        sequence: 3
      },
      {
        id: 4, 
        name: "4rd Stage",
        text: "This is a 4rd tab",
        sequence: 4
      }
    ],
    tasks: [
      {
        id: 1,
        title: 'Task 1',
        stage_id: 1,
        sequence: 0
      },
      {
        id: 2,
        title: 'Task 2',
        stage_id: 1,
        sequence: 0
      },
      {
        id: 3,
        title: 'Task 3',
        stage_id: 1,
        sequence: 0
      },
      {
        id: 11,
        title: 'Task 11',
        stage_id: 2,
        sequence: 0
      },
      {
        id: 12,
        title: 'Task 12',
        stage_id: 2,
        sequence: 0
      },
      {
        id: 13,
        title: 'Task 13',
        stage_id: 2,
        sequence: 0
      },
      {
        id: 21,
        title: 'Task 21',
        stage_id: 3,
        sequence: 0
      },
      {
        id: 22,
        title: 'Task 22',
        stage_id: 3,
        sequence: 0
      },
      {
        id: 23,
        title: 'Task 23',
        stage_id: 3,
        sequence: 0
      },
      {
        id: 31,
        title: 'Task 31',
        stage_id: 4,
        sequence: 0
      },
      {
        id: 32,
        title: 'Task 32',
        stage_id: 4,
        sequence: 0
      },
      {
        id: 33,
        title: 'Task 33',
        stage_id: 4,
        sequence: 0
      }
    ]
  },
  mutations: {
    moveTaskInStage(state, [fromIndex, toIndex, stage]) {
      let tasks = state.tasks.filter(e => e.stage_id == stage.id);
      let others = state.tasks.filter(e => e.stage_id !== stage.id);
      tasks.splice(toIndex, 0, tasks.splice(fromIndex, 1)[0])
      state.tasks = tasks.concat(others);
    },
    addTaskInStage(state, [element, stage]) {
      state.tasks = state.tasks.map(e => {
        if(e.id === element.id) {
          element.stage_id = stage.id;
        }
        return e;
      })
    },
    updateList(state, stages) {
      state.stages = stages;
    }
  },
  getters: {
    stages: state => {
      return state.stages;
    },
    tasksByStage: state => stage => {
      return state.tasks.filter(e => e.stage_id == stage.id);
    }
  }
})