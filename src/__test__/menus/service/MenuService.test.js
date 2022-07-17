import MenuService from "../../../page/menus/service/menuService";
import client from "../../../shared/httpClient/client";

describe('Menu Service', () => {
    it('should return menu successfully', async () => {
    
        client.get = jest.fn();
        client.get.mockResolvedValue({
            data: {
                id : 1,
            }
        })
        const productService = await MenuService().getMenus();
        const actualResponseId = productService.data.id
        expect(client.get).toHaveBeenCalledWith('/api/menus')
        expect(actualResponseId).toEqual(1)
    })

    it('Should return menu with params successfully', async () => {
        client.get = jest.fn();
        const params = {
            id : 1
        }
        client.get.mockResolvedValue({
            data : [
                {
                    data : {
                        id : '001'
                    }
                } 
            ]
        })
        const service = await MenuService().getMenu(params);
        const actualResponseId = service.data[0].data.id
        expect(client.get).toHaveBeenLastCalledWith(`/api/menus/${params}`)
        expect(actualResponseId).toBe('001')
    })

    it('should post new menu', async () => {
        client.post = jest.fn()
        client.post.mockResolvedValue({
            data : {
                status : "SUCCESS",
                message : "Data has been saved"
            }
        })
        const service = await MenuService().postMenu();
        const actualResponse = service.data
        expect(actualResponse.status).toEqual("SUCCESS")
        expect(actualResponse.message).toEqual("Data has been saved")
        expect(client.post).toHaveBeenCalledWith('/api/menus')
    })

    it('should update menu', async () => {
        client.put = jest.fn()
        const params = {
            id : 1
        }

        client.put.mockResolvedValue({
            data : {
                status : "SUCCESS",
                message : "Data has been updated"
            }
        })
        const service = await MenuService().putMenu(params);
        const actualResponse = service.data
        expect(actualResponse.status).toEqual("SUCCESS")
        expect(actualResponse.message).toEqual("Data has been updated")
        expect(client.put).toHaveBeenCalledWith('/api/menus')
    })

    it('should delete menu', async () => {
        client.delete = jest.fn()
        const params = {
            id : 1
        }

        client.delete.mockResolvedValue({
            data : {
                status : "SUCCESS",
                message : "Data has been deleted"
            }
        })
        const service = await MenuService().deleteMenu(params);
        const actualResponse = service.data
        expect(actualResponse.status).toEqual("SUCCESS")
        expect(actualResponse.message).toEqual("Data has been deleted")
        expect(client.delete).toHaveBeenCalledWith(`/api/menus/${params}`)
    })
})




