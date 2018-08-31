import request from '@/utils/request'

export function findNextAgentByNow() {
  return request({
    url: '/organization/findNextAgentByNow',
    method: 'get'
  })
}
export function findNextOrganByNow() {
  return request({
    url: '/organization/findNextOrganByNow',
    method: 'get'
  })
}
export function findStatusByAgentId(agentId) {
  return request({
    url: '/contact/findStatusByAgentId',
    method: 'post',
    data: { 'agentId': agentId }
  })
}
export function getDepartIdByAgentId(agentId) {
  return request({
    url: '/employee/getStaffNameByAgentId',
    method: 'get',
    params: { 'agentId': agentId }
  })
}
export function getAllChildrenOrgan(departId) {
  return request({
    url: '/organization/getAllChildrenOrgan',
    method: 'get',
    params: { 'departId': departId }
  })
}
export function checkStaffMonitor(agentId) { // 查看是否具有班长监控电话的功能
  return request({
    url: '/auth/users/' + agentId + '/perms/-staff-phone-monitor/GET',
    method: 'get'
  })
}
export function checkTeamMonitor(agentId) { // 查看是否具有经理监控电话的功能
  return request({
    url: '/auth/users/' + agentId + '/perms/-depart-phone-monitor/GET',
    method: 'get'
  })
}