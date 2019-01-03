<template>
  <div class="dnd">
    <!-- <v-layout row wrap id="multi" ref="multi">
      <div class="flex xl3 lg3 md4 sm6 xs12 pa-2 stage" v-for="stage in stages" :key="'stage-' + stage.id" :data-stage="stage.id">
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ stage.name }}</div>
            </div>
          </v-card-title>
          <v-list dense class="tile__list">
            <v-list-tile v-for="task in tasks(stage)" :key="'task-' + task.id" :data-task="task.id">
              <v-list-tile-content>
                <v-list-tile-title>{{ task.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </div>
    </v-layout> -->
    <draggable v-model="stages" @start="stageDragStart" @end="stageDragEnd" id="multi" class="layout row wrap">
      <v-flex xl3 lg3 md4 sm6 xs12 class="mb-2" v-for="stage in stages" :key="'stage-' + stage.id">
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ stage.name }}</div>
            </div>
          </v-card-title>
          <v-list dense class="tile__list">
            <draggable :list="tasks(stage)" :options="{group:'task'}" @start="taskDragStart" @end="taskDragEnd" @change="e => handleTaskChange(e, stage)">
              <v-list-tile v-for="task in tasks(stage)" :key="'task-' + task.id" :data-task="task.id">
                <v-list-tile-content>
                  <v-list-tile-title>{{ task.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </draggable>
          </v-list>
        </v-card>
      </v-flex>
    </draggable>
  </div>
</template>

<script>
  import Sortable from "sortablejs"
  import draggable from "vuedraggable"
  import { mapState, mapGetters } from "vuex"
  export default {
    name: 'dnd',
    components: {
      draggable
    },
    data() {
      return {
        
      }
    },
    methods: {
      disableTouchMove() {
        document.ontouchmove = function(e) { e.preventDefault();  }
      },
      enableTouchMove() {
        document.ontouchmove = function() { return true; }
      },
      stageDragStart () {
        this.disableTouchMove();
      },
      stageDragEnd () {
        this.enableTouchMove();
      },
      stageSortReorder({item, oldIndex, newIndex}) {
        this.$store.commit('moveList', [oldIndex, newIndex])
      },
      taskDragStart() {
        this.disableTouchMove();
      },
      taskDragEnd() {
        this.enableTouchMove();
      },
      onDropCard(evt) {
        console.log(evt)
        console.log('onSort.foo:', [evt.item, evt.from]);
      },
      handleTaskChange({moved, added, removed}, stage) {
        if(moved) {
          this.$store.commit('moveTaskInStage', [moved.newIndex, moved.oldIndex, stage])
        }

        if(added) {
          this.$store.commit('addTaskInStage', [added.element, stage])
        }
      }
    },
    computed: {
      stages: {
        get() {
          return this.$store.getters.stages;
        },
        set(value) {
          this.$store.commit('updateList', value)
        }
      },
      tasks: function() {
        return (stage) => this.$store.getters.tasksByStage(stage);
      }
    },
    mounted() {
      // let self = this;
      // Sortable.create(this.$refs.multi, {
      //   animation: 150,
      //   draggable: '.stage',
      //   onStart: this.stageDragStart,
      //   onSort: this.stageSortReorder,
      //   onEnd: this.stageDragEnd
      // });

      // [].forEach.call(this.$refs.multi.getElementsByClassName('tile__list'), function (el){
      //   Sortable.create(el, {
      //     group: 'task',
      //     animation: 150,
      //     onStart: self.taskDragStart,
      //     onEnd: self.taskDragEnd,
      //     onSort: self.onDropCard
      //   });
      // });
    }
  }
</script>

<style scoped>
  #multi {
    touch-action: none;
  }
</style>