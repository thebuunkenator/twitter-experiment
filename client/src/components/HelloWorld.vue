<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >


      <v-flex mb-4>

        <v-form>
          <v-container>
            <v-row>
              <v-text-field
                id="create=post"
                label="Compliment of memorable moment:"

                v-model="text"
                >

              </v-text-field>

            </v-row>
            <v-row>

            <v-btn block
              color="blue"
              v-on:click="createPost">Post!</v-btn>
            </v-row>
          </v-container>
        </v-form>


    <p class="error" v-if="error">{{ error }}</p>

    <v-card
        class="mx-auto mt-5"
        color="#eee"

        max-width="400"


          v-for="(post, index) in sortedPosts"
            v-bind:item="post"
            v-bind:index="index"
            v-bind:key="post._id"

        >

          <v-card-actions>
                <v-list-item-title>{{ `${post.createdAt.getDate()}.${post.createdAt.getMonth()+1}.${post.createdAt.getFullYear()}` }}</v-list-item-title>
          </v-card-actions>

          <v-card-text class="headline font-weight-bold">

            {{ post.text }}
          </v-card-text>

          <v-card-actions  class="d-flex flex-row-reverse" >
            <v-btn
              color="orange"
              class="ml-5"
              @click="editPost(post._id)"
              disabled
            >
              Edit
            </v-btn>

            <v-btn
              color="red"
              @click="deletePost(post._id)"
            >
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>

import PostService from '../PostService'

export default {
  name: 'HelloWorld',
  computed: {
    sortedPosts: function () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.posts.sort(function (b,a) {return a.createdAt - b.createdAt})
    }
  },
  data () {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts()
    } catch(err) {
      this.error =  err.message
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
      this.text=''
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    },
    async editPost(id) {
      //TODO
      // eslint-disable-next-line no-console
      console.log(`editing: ${id}`);
    }
  }
}

</script>