import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "../layout/home"
import { PageNotFound } from "../layout/pageNotFound"
import CustomerFormBloc from "../page/customer/bloc/customerFormBloc"
import CustomerListBloc from "../page/customer/bloc/customerListBloc"
import CustomerForm from "../page/customer/component/customerForm"
import { CustomerList } from "../page/customer/component/customerList"
import CustomerService from "../page/customer/service/customerService"
import MenuFormBloc from "../page/menus/bloc/menuFormBloc"
import MenuListBloc from "../page/menus/bloc/productListBloc"
import useProductList from "../page/menus/bloc/useProductList"
import MenuForm from "../page/menus/component/menuForm"
import { MenuList } from "../page/menus/component/menuList"
import MenuService from "../page/menus/service/menuService"
import TableFormBloc from "../page/tables/bloc/tableFormBloc"
import TableListBloc from "../page/tables/bloc/tableListBloc"
import TableForm from "../page/tables/component/tableForm"
import { TableList } from "../page/tables/component/tableList"
import TableService from "../page/tables/service/tablesService"
import { RouteNavigate } from "./RoutesNavigation"

const AppRouters = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='menus' element={<Outlet/>}>
                <Route index element={<MenuList bloc={()=>MenuListBloc(MenuService, RouteNavigate, useProductList)}/>}/>
                <Route path="form/:id" element={<MenuForm bloc={()=>MenuFormBloc(MenuService)}/>}/>
                <Route path="form" element={<MenuForm bloc={()=>MenuFormBloc(MenuService)}/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Route>
            <Route path='tables' element={<Outlet/>}>
                <Route index element={<TableList bloc={()=>TableListBloc(TableService)}/>}/>
                <Route path="form" element={<TableForm bloc={()=> TableFormBloc(TableService)}/>}/>
                <Route path="form/:id" element={<TableForm bloc={()=> TableFormBloc(TableService)}/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Route>
            <Route path='customers' element={<Outlet/>}>
                <Route index element={<CustomerList bloc={()=>CustomerListBloc(CustomerService)}/>}/>
                <Route path="form" element={<CustomerForm bloc={()=> CustomerFormBloc(CustomerService)}/>}/>
                <Route path="form/:id" element={<CustomerForm bloc={()=> CustomerFormBloc(CustomerService)}/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Route>
        </Routes>
    )
}

export default AppRouters