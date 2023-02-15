import async from "../components/Async";
import { IRoute } from "../interfaces/RouteType";


const Home = async(() => import("../pages/dashboard/Dashboard"));
const About = async(() => import("../pages/About"));
const Company = async(() => import("../pages/baseInfo/company"));
const Department = async(() => import("../pages/baseInfo/department"));
const Employee = async(() => import("../pages/baseInfo/employee"));
const JobPosition = async(() => import("../pages/baseInfo/jobPosition"));

const Project = async(() => import("../pages/baseInfo/project"));
const Meal = async(() => import("../pages/restaurant/admin/meal"));
const MealsSetting_Monthly = async(() => import("../pages/restaurant/admin/mealsSetting_Monthly"));
const MealsSelection_CurrentMonth = async(() => import("../pages/restaurant/users/mealsSelection_CurrentMonth"));
const MealsSelection_NextMonth = async(() => import("../pages/restaurant/users/mealsSelection_NextMonth"));

const Login = async(() => import("../pages/security/authentication/login"))
const ChangePassword = async(() => import("../pages/security/authentication/changePassword"))
const ForgetPassword = async(() => import("../pages/security/authentication/forgetPassword"))

const Group = async(() => import("../pages/security/authorization/group"));
const GroupPermission = async(() => import("../pages/security/authorization/groupPermission"));
const Permission = async(() => import("../pages/security/authorization/permission"));
const User = async(() => import("../pages/security/authorization/user"));
const UserGroup = async(() => import("../pages/security/authorization/userGroup"));


export const routes: Array<IRoute> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
        component: About
    },
    //------------------Base Info---------------------
    {
        key: 'company-route',
        title: 'Company',
        path: 'baseinfo/company',
        enabled: true,
        component: Company
    },
    {
        key: 'department-route',
        title: 'Department',
        path: 'baseinfo/department',
        enabled: true,
        component: Department
    },
    {
        key: 'project-route',
        title: 'Project',
        path: 'baseinfo/project',
        enabled: true,
        component: Project
    },
    {
        key: 'employee-route',
        title: 'Employee',
        path: 'baseinfo/employee',
        enabled: true,
        component: Employee
    },
    {
        key: 'jobPosition-route',
        title: 'JobPosition',
        path: 'baseinfo/jobPosition',
        enabled: true,
        component: JobPosition
    },
    //------------------Restaurant---------------------
    {
        key: 'meal-route',
        title: 'Meal',
        path: 'restaurant/meal',
        enabled: true,
        component: Meal
    },
    {
        key: 'mealssettingmonthly-route',
        title: 'MealsSettingMonthly',
        path: 'restaurant/mealssettingmonthly',
        enabled: true,
        component: MealsSetting_Monthly
    },
    {
        key: 'mealsselection_currentmonth-route',
        title: 'MealsSelection_CurrentMonth',
        path: 'restaurant/mealsselectioncurrentmonth',
        enabled: true,
        component: MealsSelection_CurrentMonth
    },
    {
        key: 'mealsselection_nextmonth-route',
        title: 'MealsSelection_NextMonth',
        path: 'restaurant/mealsselectionnextmonth',
        enabled: true,
        component: MealsSelection_NextMonth
    },
    //-------------Security Authentication-------------
    {
        key: 'login-route',
        title: 'Login',
        path: 'auth/login',
        enabled: true,
        component: Login
    },
    {
        key: 'changepassword-route',
        title: 'ChangePassword',
        path: 'auth/changepassword',
        enabled: true,
        component: ChangePassword
    },    
    {
        key: 'forgetpassword-route',
        title: 'ForgetPassword',
        path: 'auth/forgetpassword',
        enabled: true,
        component: ForgetPassword
    },
    //-------------Security Authorization-------------
    {
        key: 'group-route',
        title: 'Group',
        path: 'security/group',
        enabled: true,
        component: Group
    },
    {
        key: 'grouppermission-route',
        title: 'GroupPermission',
        path: 'security/grouppermission',
        enabled: true,
        component: GroupPermission
    },
    {
        key: 'permission-route',
        title: 'Permission',
        path: 'security/permission',
        enabled: true,
        component: Permission
    },
    {
        key: 'user-route',
        title: 'User',
        path: 'security/user',
        enabled: true,
        component: User
    },
    {
        key: 'usergroup-route',
        title: 'UserGroup',
        path: 'security/usergroup',
        enabled: true,
        component: UserGroup
    },
]