import { act, renderHook } from "@testing-library/react-hooks"
import useProductList from "../../../page/menus/bloc/useProductList"

test('set product list', () => { 
    const state = {
        list : [
            {
                id : '001',
                name : 'saus'
            },
            {
                id : '002',
                name : 'Dummy'
            }
        ],
        error : ''
    }

    //ini mocking dari useProductList
    const { result } = renderHook(() => useProductList())
    
    //ini set untuk mockingan di atas
    act(()=>{
        result.current.setMenuList(state)
    })
    expect(result.current.menuList).toBe(state)
 })