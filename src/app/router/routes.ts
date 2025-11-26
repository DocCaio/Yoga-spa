import type { RouteRecordRaw } from "vue-router";
import AppLayout from "../shared/layout/AppLayout.vue";
import HomePage from "../modules/samples/pages/HomePage.vue";
import AuthPage from "../modules/auth/page/AuthPage.vue";

export const routes: RouteRecordRaw[] = [

    {

        path: "/auth",
        component: AuthPage,
    },
    {
        path: "/",
        component: AppLayout,
        children: [
            {
                path: "",
                component: HomePage,
            }
        ]

    }

]