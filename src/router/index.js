import {createRouter, createWebHistory} from "vue-router"
import HomePage from "../pages/HomePage.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: "Home Page",
            path: "/",
            component: HomePage
        }
    ]
})

export default router