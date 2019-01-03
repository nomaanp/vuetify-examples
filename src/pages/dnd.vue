<template>
  <div class="dnd">
    <v-layout row wrap id="multi">
      <v-flex xl3 lg3 md4 sm6 xs12 class="pa-2 stage" v-for="stage in stages" :key="'stage-' + stage.id">
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ stage.name }}</div>
            </div>
          </v-card-title>
          <v-list dense class="tile__list">
            <v-list-tile v-for="task in stage.tasks" :key="'task-' + task.id">
              <v-list-tile-content>
                <v-list-tile-title>{{ task.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Sortable from "sortablejs"
  export default {
    name: 'dnd',
    data() {
      return {
        stages: [
          {
            id: 1, 
            name: "1st Stage",
            text: "This is a 1st tab",
            tasks: [
              {
                id: 1,
                title: 'Task 1'
              },
              {
                id: 2,
                title: 'Task 2'
              },
              {
                id: 3,
                title: 'Task 3'
              }
            ]
          },
          {
            id: 2, 
            name: "2nd Stage",
            text: "This is a 2nd tab",
            tasks: [
              {
                id: 11,
                title: 'Task 11'
              },
              {
                id: 12,
                title: 'Task 12'
              },
              {
                id: 13,
                title: 'Task 13'
              }
            ]
          },
          {
            id: 3, 
            name: "3rd Stage",
            text: "This is a 3rd tab",
            tasks: [
              {
                id: 21,
                title: 'Task 21'
              },
              {
                id: 22,
                title: 'Task 22'
              },
              {
                id: 23,
                title: 'Task 23'
              }
            ]
          },
          {
            id: 4, 
            name: "4rd Stage",
            text: "This is a 4rd tab",
            tasks: [
              {
                id: 31,
                title: 'Task 31'
              },
              {
                id: 32,
                title: 'Task 32'
              },
              {
                id: 33,
                title: 'Task 33'
              }
            ]
          }
        ]
      }
    },
    methods: {

    },
    mounted() {
      Sortable.create(document.getElementById('multi'), {
        animation: 150,
        draggable: '.stage',
        onStart: function() { document.ontouchmove = function(e) { e.preventDefault();  }},
        onEnd: function() { document.ontouchmove = function() { return true; }}
      });

      [].forEach.call(document.getElementById('multi').getElementsByClassName('tile__list'), function (el){
        Sortable.create(el, {
          group: 'task',
          animation: 150,
          onStart: function() { document.ontouchmove = function(e) { e.preventDefault();  }},
          onEnd: function() { document.ontouchmove = function() { return true; }}
        });
      });
    }
  }
</script>

<style scoped>
>>>.v-expansion-panel {
  box-shadow: none;
}
</style>