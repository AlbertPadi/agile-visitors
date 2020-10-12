import { axiosInstance } from 'boot/axios'

export function getAll (context) {
  return axiosInstance.get('/substations?limit=9999')
}
